# RFC-001: ML-Studio 控件树与 AI 助手操控规范
# (Agentic GUI & Semantic Control Tree Specification)

- **状态**: 草案 (Draft) / 征求意见中
- **作者**: Marvin Li & ML-Studio Community
- **创建日期**: 2026-10-24
- **目标版本**: v2.0.0

---

## 1. 摘要 (Abstract)

本 RFC 提出了 ML-Studio 面向大语言模型（LLM）与智能体（Agent）的原生操控架构设计。
借鉴 VS Code 的 `settings.json`、`Command Registry`（命令总线）与 Accessibility Tree（无障碍可达性树）的核心思想，为 ML-Studio 建立一套**无需依靠图像视觉（VLM）、无需屏幕截图坐标点击、零幻觉、结构化**的 AI 操控协议。

通过提供：
1. **VS Code 风格的强类型统一配置文件 (`mlstudio.config.json`)**；
2. **全软件命令总线 (`mlstudio.commands`)**；
3. **轻量级语义控件树快照 (`Semantic Control Tree Snapshot`)**；
4. **原生兼容的本地 Model Context Protocol (MCP) 服务端**。

使内置 AI 助手（或外部主流 Agent 如 Claude、Cursor、DeepSeek）能够毫秒级感知软件运行状态，并通过结构化 Tool Call 精准驱动软件的全生命周期操作。

---

## 2. 动机与背景 (Motivation)

目前让 AI 操控客户端桌面软件主要有两条技术路线：

1. **视觉流 (Computer Use / OSWorld 流派)**：
   - **机制**：截屏 -> 多模态模型识图 -> 输出 `(x, y)` 坐标 -> 模拟鼠标点击与键盘输入。
   - **痛点**：延迟极高（单步数秒）、消耗大量 Token、受显示分辨率与系统缩放影响严重、在密集表格和复杂下拉框中极易出现“点偏”、“误触”或幻觉。
2. **结构化语义流 (Agentic GUI / VS Code 流派)**：
   - **机制**：软件内部向 AI 开放语义控件树与命令总线。
   - **优势**：纯 JSON 交互、毫秒级响应、100% 确定性执行、原生支持参数校验与回退（Rollback）。

ML-Studio 作为一款面向严谨科学实验和工程数据的机器学习工作台，必须保证操作的绝对精准与确定性。因此，采用结构化语义流是最佳选择。

---

## 3. 总体架构设计 (Architecture)

```
┌────────────────────────────────────────────────────────────────────────┐
│             AI 客户端 / Agent (Claude Desktop, Cursor, DeepSeek)       │
└───────────────────▲───────────────────────────────┬────────────────────┘
                    │                               │
        2. 获取状态 (Snapshot)               1. 下发指令 (Tool Calls)
                    │                               │
┌───────────────────┴───────────────────────────────▼────────────────────┐
│                    ML-Studio Agentic Bridge Layer                      │
│                                                                        │
│   ┌────────────────────────────────────────────────────────────────┐   │
│   │  Model Context Protocol (MCP) Server / JSON-RPC WebSocket API  │   │
│   └───────────────────────────────┬────────────────────────────────┘   │
│                                   │                                    │
│   ┌───────────────────────────────┼────────────────────────────────┐   │
│   │                               ▼                                │   │
│   │    ┌────────────────────┐          ┌──────────────────────┐    │   │
│   │    │  Command Registry  │          │  Control Tree Engine │    │   │
│   │    │  (全局命令派发总线)  │          │  (语义控件树状态提取)  │    │   │
│   │    └─────────┬──────────┘          └──────────▲───────────┘    │   │
│   │              │                                │                │   │
│   └──────────────┼────────────────────────────────┼────────────────┘   │
└──────────────────┼────────────────────────────────┼────────────────────┘
                   │                                │
                   ▼                                │
┌───────────────────────────────────────────────────┴────────────────────┐
│              ML-Studio Native Runtime (Electron + FastAPI)             │
│                                                                        │
│   • UI Render Views (数据导入 / 特征清洗 / 模型配置 / 训练看板 / 实验报告) │
│   • AutoML Execution Engine (Optuna / Scikit-learn / LightGBM)         │
│   • Config Store (mlstudio.config.json & Schema Validator)             │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 4. 详细规范 (Detailed Specification)

### 4.1 统一配置文件 (`mlstudio.config.json`)

类似于 VS Code 的 `settings.json`，存储所有全局配置、默认超参、存储路径与 AI 服务端点：

```json
{
  "$schema": "https://marvin-lijunzan.github.io/ML-Studio/schemas/config.v1.json",
  "mlstudio.workspace": {
    "defaultOutputDir": "C:/ML-Studio/outputs",
    "recentProjectsMaxCount": 10,
    "autoSaveIntervalMinutes": 5
  },
  "mlstudio.engine": {
    "defaultAlgorithms": ["lightgbm", "xgboost", "random_forest"],
    "maxConcurrency": 4,
    "memoryLimitMb": 8192,
    "gpuAcceleration": "auto"
  },
  "mlstudio.copilot": {
    "enabled": true,
    "protocol": "mcp",
    "mcpPort": 8031,
    "autoApproveReadOnlyCommands": true,
    "modelProvider": "openai-compatible",
    "apiBase": "http://localhost:11434/v1",
    "model": "deepseek-r1:8b"
  }
}
```

### 4.2 语义控件树结构 (Semantic Control Tree)

AI 在执行操作前，可通过 `mlstudio.ui.getControlTree()` 获取轻量状态快照：

```typescript
interface ControlTreeSnapshot {
  timestamp: number;
  activeView: "import" | "preprocess" | "training" | "diagnostics" | "report";
  projectId: string;
  dataset?: {
    rowsCount: number;
    columnsCount: number;
    targetColumn: string | null;
    columns: Array<{
      name: string;
      dtype: "numerical" | "categorical" | "datetime";
      missingCount: number;
      missingRate: number;
      isSelected: boolean;
    }>;
  };
  interactableControls: Array<{
    id: string;               // 控件唯一 ID
    type: "button" | "select" | "input" | "toggle";
    label: string;
    value?: any;
    isEnabled: boolean;
    linkedCommand?: string;   // 关联触发的命令
  }>;
}
```

### 4.3 全局命令总线 (Command Registry)

所有业务能力收拢为具有确定输入 Schema 的 Command：

| 命令 ID | 参数 (Parameters) | 作用描述 |
| :--- | :--- | :--- |
| `mlstudio.data.load` | `{ filePath: string, encoding?: string }` | 导入本地表格文件 |
| `mlstudio.data.dropColumns` | `{ columnNames: string[] }` | 剔除指定特征列 |
| `mlstudio.data.fillMissing` | `{ columnNames: string[], strategy: "mean" \| "median" \| "mode" \| "drop" }` | 批量缺失值填充 |
| `mlstudio.automl.configure` | `{ targetColumn: string, taskType: "regression" \| "classification", timeLimitSeconds?: number }` | 配置建模任务目标 |
| `mlstudio.automl.start` | `{}` | 启动自动化训练流水线 |
| `mlstudio.report.export` | `{ format: "html" \| "word" \| "pdf" \| "markdown", outputPath?: string }` | 导出实验报告 |

---

## 5. 对外协议实现：Model Context Protocol (MCP)

ML-Studio 客户端启动后，在本地暴露一个标准的 MCP 服务端（默认通过 stdio 或 SSE 本地端口 `8031` 运行）：

* **Resources（资源）**：
  * `mlstudio://workspace/status`：获取当前项目状态与数据集统计信息；
  * `mlstudio://workspace/control_tree`：获取当前活动的 UI 控件树；
* **Tools（工具函数）**：
  * 自动将上文的 `mlstudio.commands` 导出为标准 JSON Schema Tools，供 LLM 进行 Function Calling。

---

## 6. 征求社区意见 (Feedback & Discussion)

欢迎各大开源开发者与 Agent 架构爱好者在此提案下参与讨论：
- 你认为目前控件树的颗粒度是否足够？
- 针对耗时较长的 AutoML 训练，命令下发后采用何种异步事件订阅机制（SSE vs WebSocket）体验最优？
- 欢迎在 [GitHub Discussions](https://github.com/Marvin-LiJunZan/ML-Studio/discussions) 中提出你的见解！
