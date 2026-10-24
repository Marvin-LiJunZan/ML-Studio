<div align="center">

# ⚡ ML Studio

**从表格到实验报告，全学科一条链路跑完**

全学科通用 · 桌面端机器学习工作台 · 本地优先 · 数据不出机器 · 面向 AI 原生控制设计

[![Release](https://img.shields.io/github/v/release/Marvin-LiJunZan/ML-Studio?color=blue&logo=github)](https://github.com/Marvin-LiJunZan/ML-Studio/releases)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Python](https://img.shields.io/badge/Python-3.10%2B-blue.svg?logo=python)](https://www.python.org/)
[![Desktop](https://img.shields.io/badge/Desktop-Electron-47848F.svg?logo=electron)](https://www.electronjs.org/)
[![AI-Native](https://img.shields.io/badge/Architecture-VS_Code_Style_Config-8A2BE2.svg)](docs/rfcs/RFC-001-AGENTIC-GUI-SPECIFICATION.md)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

[官网首页](https://marvin-lijunzan.github.io/ML-Studio/) · [立即下载](https://github.com/Marvin-LiJunZan/ML-Studio/releases) · [技术白皮书 (RFC)](docs/rfcs/RFC-001-AGENTIC-GUI-SPECIFICATION.md) · [参与共建](CONTRIBUTING.md) · [问题反馈](https://github.com/Marvin-LiJunZan/ML-Studio/issues)

<br/>

![ML Studio 工作区](assets/img/app-workspace.png)

</div>

---

## 💡 为什么做 ML Studio？

无论是在**理工农医**（物理、化学、生物医药、土木机械、环境材料），还是在**人文社科与经管**（金融量化、计量经济、心理学实验、实证社会学）的跨学科研究与实际应用中，**表格数据（Tabular Data）都是最通用的知识载体**。

然而，几乎所有学科的研究者与分析师在面对机器学习时，都面临着巨大的鸿沟：
- **跨学科技术鸿沟**：非 CS 专业的研究人员懂专业理论与实验数据，却常常被配 Python/Conda 环境、排查依赖版本冲突、手写训练脚本与调参代码阻挡在门外；
- **商业 SaaS 的合规与安全红线**：未公开发表的实验成果、临床患者数据、涉密工程参数、企业财务报表如果上传到外部云端，存在严重的学术泄露与合规风险；
- **学术与工程交付链路割裂**：模型跑完不是终点，把交叉验证指标、残差图、学习曲线、混淆矩阵、ROC 曲线排版成符合学术与汇报规范的报告往往要耗费大半天。

**ML Studio 应运而生**：
它是一款**全学科通用、零门槛上手、本地优先**的桌面端机器学习工作台。
把 **智能数据清洗、自动模型筛选、超参寻优、学术级动态诊断、完整实验报告导出** 收敛进同一个极简桌面窗口。
**拖进一张表格，选一个任务，剩下的交给它跑。纯本地运算，数据绝不出你的电脑。**

---

## ✨ 核心特性

| 模块 | 能力亮点 | 说明 |
| :--- | :--- | :--- |
| 📊 **四类核心建模** | 回归、分类、聚类、时间序列 | 预置主流算法（LightGBM, XGBoost, CatBoost, RF, Ridge, SVR 等），全自动预处理与编码 |
| ⚡ **自适应超参寻优** | 基于 Optuna 的多算法搜索 | 支持 TPE、CMA-ES、Random、NSGA-II，配合 Hyperband 剪枝快速提前终止无效试验 |
| 📈 **学术级训练诊断** | 动态实时监控图表 | 残差图、学习曲线、混淆矩阵、ROC/PR 曲线、过拟合预警、特征相关性热力图 |
| 📑 **一键科研实验报告** | 多格式工业级导出 | HTML / Markdown / Word / PDF 完整排版，图表与分析结论随报告一次性生成 |
| 🤖 **AI 原生助手与操控** | 智能解读 + 结构化控制 | 侧栏内置 AI 咨询诊断；更规划了 **VS Code 风格的 `config.json` 架构与命令总线**，支持 AI 直接操控软件全流程！ |
| 🔒 **纯本地优先** | 隐私零外泄 | 所有数据与模型权重均保存在本机，无外部云端依赖，离线可用 |

---

## 🧠 创新架构：面向 AI Agent 操控设计 (AI-Native)

不同于依赖“屏幕截图+坐标点击”的传统方案，ML Studio 正在推行一套**类 VS Code 的现代化语义控制体系**：

```
                 ┌────────────────────────────────────────────────────────┐
                 │       AI 助手 / 外部 Agent (Claude, Cursor, DeepSeek)   │
                 └───────────────┬────────────────────────▲───────────────┘
          1. 执行高阶指令 (Tool Call) │                        │ 2. 感知 UI 状态快照
                                 ▼                        │    (getControlTree)
                 ┌────────────────────────────────────────┴───────────────┐
                 │              ML Studio 语义控制核心                     │
                 │                                                        │
                 │  • mlstudio.config.json (统一配置与 JSON Schema 校验)   │
                 │  • Command Registry     (全局唯一的命令总线)            │
                 │  • Semantic UI Tree     (结构化控件树快照)              │
                 │  • Local MCP Protocol   (标准模型上下文协议服务)        │
                 └────────────────────────────────────────────────────────┘
```

* **VS Code 风格配置 (`mlstudio.config.json`)**：全软件配置透明化，严格遵循 JSON Schema 校验，AI 可自主阅读和调优配置；
* **命令总线 (Command Registry)**：每个功能（如 `mlstudio.data.import`、`mlstudio.automl.start`）抽象为独立 Command，界面操作与 AI 指令共用同一入口；
* **控件树快照 (Semantic Control Tree)**：前端暴露结构化 UI 状态，AI 助手毫秒级获取当前视图、可用控件与数据属性，实现 100% 精准操控。

> 📄 详细架构定义与规范请参阅：[《RFC-001: 控件树与 AI 助手操控规范》](docs/rfcs/RFC-001-AGENTIC-GUI-SPECIFICATION.md)。

---

## 🚀 极速上手

1. **拖入数据** —— 拖入 CSV / Excel 文件，系统自动完成缺失值扫描、数据类型推断与异常探测；
2. **选择任务与目标** —— 选择目标预测列，系统自动推荐适用的指标（$R^2$ / RMSE / F1 / AUC 等）；
3. **一键开始训练** —— 超参搜索进度与诊断指标实时动态渲染，跑完直接一键导出完整实验报告。

---

## 📦 桌面端下载

前往 [GitHub Releases](https://github.com/Marvin-LiJunZan/ML-Studio/releases) 获取全平台开箱即用安装包：

| 操作系统 | 推荐安装格式 | 说明 |
| :--- | :--- | :--- |
| **Windows 10 / 11 (x64)** | `ML-Studio-Setup-1.0.0.exe` | 推荐，带自动安装向导 |
| **macOS (Apple Silicon)** | `ML-Studio-1.0.0-mac-arm64.dmg` | 针对 M1/M2/M3/M4 系列芯片深度优化 |
| **Linux (x64)** | `ML-Studio-1.0.0-linux-x86_64.AppImage` | 适用于 Ubuntu / Debian / Fedora 等 |

---

## 🗺️ 路线图 (Roadmap 2026)

- [x] **v1.0.0 核心基石**
  - [x] 四类基础建模任务（回归 / 分类 / 聚类 / 时序）
  - [x] 基于 Optuna 的自动化超参搜索
  - [x] ECharts 动态诊断图表与多格式报告导出
- [ ] **v1.1.0 算法与分析增强 (进行中)**
  - [ ] 深度集成 AutoGluon & FLAML 高性能表格引擎
  - [ ] 集成 SHAP 模型全局与局部特征可解释性归因图谱
  - [ ] 支持 `.parquet` 极速加载与千万级行数据采样降采样
- [ ] **v2.0.0 AI-Native 革命 (共建重点)**
  - [ ] 落地 RFC-001：实现完整的命令总线与控件树快照
  - [ ] 内置 Local MCP (Model Context Protocol) 服务端，支持外部 Agent 任意接入操控
  - [ ] 支持自定义插件机制（自由添加自定义算法与预处理算子）

---

## 🤝 诚邀各路大佬与极客共建！

**ML Studio 秉持开源开放、技术向善的理念。我们非常渴望有志同道合的开发者、算法工程师和设计大佬加入！**

如果你对以下任一方向感兴趣，非常欢迎提交 PR 或在 Issue 中认领：
- 🌟 **核心算法大师**：优化 AutoML 搜索策略、引入先进可解释性算法 (SHAP, ALE, PDP)、时序模型增强；
- 🎨 **前端与可视化极客**：基于现代 Web 技术优化数据大屏、交互式特征探索、动效与暗黑主题；
- ⚙️ **工程与跨平台专家**：优化 Electron 启动体积、PyInstaller 打包调优、跨平台 CI/CD 自动化流水线；
- 🤖 **Agentic AI 探索者**：协助实现 RFC-001 控件树与 MCP 协议集成，打造最酷的 AI 操控体验。

👉 **请阅读 [贡献指南 (CONTRIBUTING.md)](CONTRIBUTING.md) 开启你的第一次提交！**

---

## 💬 交流与反馈

- **GitHub Issues**：报告 Bug 或提交 Feature Request
- **GitHub Discussions**：讨论设计方案与使用心得
- **开发者微信群 / QQ 交流群**：欢迎关注项目并在 Issue 中留下交流意向，我们第一时间拉你入核心共建群！

---

## 📄 开源许可证

本项目基于 [MIT License](LICENSE) 开源，允许自由商业使用、二次开发与衍生分发。
