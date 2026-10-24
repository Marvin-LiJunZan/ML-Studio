# 🤝 ML Studio 贡献指南 (Contributing Guide)

<p align="center">
  <b>简体中文</b> | <a href="CONTRIBUTING_EN.md">English</a>
</p>

感谢你对 **ML Studio** 感兴趣！无论是修复文档错别字、提交一个 Bug 报告、优化前端交互，还是为底层的 AutoML 算法添砖加瓦，你的每一份贡献都至关重要。

---

## 🧭 行为准则 (Code of Conduct)

参与本项目请遵循我们的 [行为准则](CODE_OF_CONDUCT.md)。我们致力于营造一个友善、包容、尊重所有开发者的开源社区。

---

## 🎯 我们可以怎样合作？

如果你想参与贡献，但不知道从何开始，以下方向强烈推荐：

1. **认领 `good first issue`**：查看仓库中标记有 `good first issue` 的任务，通常是轻量级、范围明确的新特性或问题；
2. **算法与工程强化**：
   - 引入 AutoGluon / FLAML / LightGBM 等更丰富的集成算法；
   - 增加 SHAP 可解释性归因分析与可视化；
   - 优化大规模表格（百万行级）加载与采样性能；
3. **AI 原生体系实现**：
   - 参考 [RFC-001](docs/rfcs/RFC-001-AGENTIC-GUI-SPECIFICATION.md)，协助落地命令总线（Command Registry）与 UI 控件树快照；
   - 开发 Model Context Protocol (MCP) 本地服务适配器；
4. **体验与视觉优化**：
   - 改进 ECharts 数据可视化排版，增加高对比度与科研专用调色盘；
   - 修复在 Windows 10/11、macOS、Linux 下的界面缩放与主题适配；
5. **文档与国际化 (i18n)**：
   - 完善使用手册、撰写科研领域最佳实战案例；
   - 协助提供英文 README 与界面多语言支持。

---

## 🛠️ 本地开发环境搭建

### 1. 仓库拉取

```bash
git clone https://github.com/Marvin-LiJunZan/ML-Studio.git
cd ML-Studio
```

### 2. 后端开发模式 (FastAPI + Python)

推荐使用 Python 3.10 或 3.11 环境：

```bash
cd backend
python -m venv venv
# Windows:
.\venv\Scripts\activate
# macOS/Linux:
source venv/bin/activate

pip install -r requirements.txt
python main.py
```
默认会在 `http://127.0.0.1:8000` 启动 API 服务与本地 UI。

### 3. 桌面端开发模式 (Electron)

在另一个终端启动 Electron 桌面容器：

```bash
cd electron
npm install
npm run dev
```

---

## 📝 提交规范 (Commit Convention)

我们遵循 [Conventional Commits](https://www.conventionalcommits.org/zh-hans/v1.0.0/) 提交规范：

- `feat`: 新增功能 (e.g., `feat(automl): support SHAP feature importance plot`)
- `fix`: 修复 Bug (e.g., `fix(parser): handle utf-8-sig encoding in CSV`)
- `docs`: 文档变更 (e.g., `docs(readme): update contributing roadmap`)
- `style`: 代码格式调整（不影响逻辑）
- `refactor`: 代码重构（既不是新增功能也不是修复 bug）
- `perf`: 性能优化
- `test`: 增加或修改测试用例
- `rfcs`: 技术提案与架构设计变更

---

## 🔀 Pull Request 提交流程

1. **Fork 本仓库** 到你自己的 GitHub 账号；
2. 从 `main` 分支拉出一个特性分支：`git checkout -b feat/your-feature-name`；
3. 编写代码，并确保本地测试通过；
4. 提交你的修改并推送到你的 Fork 仓库：`git push origin feat/your-feature-name`；
5. 前往 GitHub 提交 **Pull Request**，按照 PR 模板详细说明你所作的改动与验证方式；
6. 维护者会在 24 小时内进行 Code Review，并与你保持积极沟通！

---

## 💡 成为核心维护者

对于持续贡献高质量代码或长期参与社区讨论的伙伴，我们将非常真诚地邀请你加入 **ML Studio Core Team**，拥有仓库提交权限，并共同决定项目的技术路线与未来方向！
