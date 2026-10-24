<div align="center">

# ⚡ ML Studio

**From Tabular Data to Research Reports in One Seamless Pipeline**

Universal Pan-Disciplinary Desktop Machine Learning Studio · Local-First · Zero Data Leakage · Designed for AI-Native Control

[![Release](https://img.shields.io/github/v/release/Marvin-LiJunZan/ML-Studio?color=blue&logo=github)](https://github.com/Marvin-LiJunZan/ML-Studio/releases)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Python](https://img.shields.io/badge/Python-3.10%2B-blue.svg?logo=python)](https://www.python.org/)
[![Desktop](https://img.shields.io/badge/Desktop-Electron-47848F.svg?logo=electron)](https://www.electronjs.org/)
[![AI-Native](https://img.shields.io/badge/Architecture-VS_Code_Style_Config-8A2BE2.svg)](docs/rfcs/RFC-001-AGENTIC-GUI-SPECIFICATION.md)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

<p align="center">
  <a href="README.md">简体中文</a> | <b>English</b>
</p>

[Website](https://marvin-lijunzan.github.io/ML-Studio/) · [Download](https://github.com/Marvin-LiJunZan/ML-Studio/releases) · [Technical RFC](docs/rfcs/RFC-001-AGENTIC-GUI-SPECIFICATION.md) · [Contributing](CONTRIBUTING.md) · [Issues](https://github.com/Marvin-LiJunZan/ML-Studio/issues)

<br/>

![ML Studio Workspace](assets/img/app-workspace.png)

</div>

---

## 💡 Why ML Studio?

Across **natural sciences, engineering, medicine, economics, finance, and social sciences**, **Tabular Data** (CSV, Excel) remains the most universal format for empirical research and production data.

However, non-computer-science researchers and domain experts face formidable barriers when applying machine learning:
- **Steep Programming Curve**: Researchers with deep domain expertise are often held back by configuring Python/Conda environments, resolving dependency conflicts, writing repetitive training boilerplate, and debugging plotting scripts;
- **Strict Privacy & Compliance**: Unpublished academic research, medical records, proprietary engineering parameters, and enterprise financial data cannot be uploaded to third-party cloud SaaS platforms without severe compliance risks;
- **Fragmented Delivery Pipeline**: Training a model is only halfway. Manually aggregating cross-validation metrics, residual plots, learning curves, confusion matrices, and ROC curves into publication-ready reports consumes days of tedious formatting.

**ML Studio solves this end-to-end**:
A **universal, zero-code, local-first** desktop machine learning workstation.
It unifies **data cleaning, model benchmarking, hyperparameter optimization, dynamic diagnostic visualization, and automated report generation** into a single, intuitive interface.
**Drag in a spreadsheet, pick an objective, and let it train. 100% of compute and data stay on your machine.**

---

## ✨ Key Features

| Capability | Highlights | Description |
| :--- | :--- | :--- |
| 📊 **4 Core Tasks** | Regression, Classification, Clustering, Time-Series | Built-in top algorithms (LightGBM, XGBoost, CatBoost, RF, Ridge, SVR, etc.) with automatic encoding & scaling |
| ⚡ **Automated HPO** | Bayesian Hyperparameter Tuning via Optuna | Multi-objective search with TPE, CMA-ES, Random, NSGA-II, plus Hyperband pruning for fast early-stopping |
| 📈 **Publication Diagnostics** | Real-time interactive visual telemetry | Residual analysis, learning curves, confusion matrices, ROC/PR curves, overfitting alerts, and feature correlation heatmaps |
| 📑 **One-Click Reports** | Multi-format academic & executive exports | Instant export to HTML, Markdown, Word, and PDF with high-res figures and structured analytical takeaways |
| 🤖 **AI-Native Control** | Diagnostic Copilot + Structured GUI API | Integrated AI assistant in the sidebar, architected around **VS Code-style `config.json` & Command Bus** for direct agentic control! |
| 🔒 **Local-First Privacy** | 100% Offline, Zero Cloud Dependencies | Operates entirely on your local machine with zero external network requirements and complete data isolation |

---

## 🧠 Breakthrough: Designed for AI Agent Control (AI-Native)

Unlike fragile "screen capture + pixel coordinate click" approaches (Computer Use / VLM), ML Studio adopts a **VS Code-inspired structural semantic control layer**:

```
                 ┌────────────────────────────────────────────────────────┐
                 │       AI Agents / Assistants (Claude, Cursor, DeepSeek) │
                 └───────────────┬────────────────────────▲───────────────┘
          1. Execute Commands (Tool Calls) │              │ 2. Observe UI State Tree
                                 ▼                        │    (getControlTree)
                 ┌────────────────────────────────────────┴───────────────┐
                 │              ML Studio Semantic Control Core           │
                 │                                                        │
                 │  • mlstudio.config.json (Schema-validated settings)    │
                 │  • Command Registry     (Global unified action bus)    │
                 │  • Semantic UI Tree     (Lightweight structural state) │
                 │  • Local MCP Protocol   (Standard Model Context spec)  │
                 └────────────────────────────────────────────────────────┘
```

* **VS Code-Style Configuration (`mlstudio.config.json`)**: Transparent, strongly typed configuration with JSON Schema validation, allowing AI to inspect and safely tweak runtime preferences;
* **Command Registry**: Every capability (e.g., `mlstudio.data.import`, `mlstudio.automl.start`) is decoupled into an explicit command, shared equally by human GUI clicks and AI tool invocations;
* **Semantic Control Tree**: Exposes a real-time JSON snapshot of UI widgets and dataset properties, giving AI agents 100% deterministic, millisecond-fast control with zero visual hallucinations.

> 📄 Read the complete technical specification: [RFC-001: Agentic GUI & Semantic Control Tree Specification](docs/rfcs/RFC-001-AGENTIC-GUI-SPECIFICATION.md).

---

## 🚀 Quick Start in 3 Steps

1. **Import Data** —— Drag and drop any CSV or Excel file. Automatic column type detection, missing value profiling, and anomaly scanning run instantly;
2. **Select Task & Target** —— Pick Regression, Classification, Clustering, or Time-Series, and select your prediction target;
3. **Train & Export** —— Watch automated hyperparameter optimization and dynamic diagnostics in real-time. Export complete publication-grade reports upon completion.

---

## 📦 Desktop Downloads

Visit [GitHub Releases](https://github.com/Marvin-LiJunZan/ML-Studio/releases) for zero-setup, pre-packaged desktop installers:

| Platform | Package Format | Notes |
| :--- | :--- | :--- |
| **Windows 10 / 11 (x64)** | `ML-Studio-Setup-1.0.0.exe` | Recommended installer with auto-setup |
| **macOS (Apple Silicon)** | `ML-Studio-1.0.0-mac-arm64.dmg` | Optimized natively for Apple M-series chips |
| **Linux (x64)** | `ML-Studio-1.0.0-linux-x86_64.AppImage` | Compatible with Ubuntu, Debian, Fedora, Arch, etc. |

---

## 🗺️ Roadmap (2026)

- [x] **v1.0.0 Foundation**
  - [x] 4 Core modeling paradigms (Regression, Classification, Clustering, Time-Series)
  - [x] Automated Bayesian HPO powered by Optuna
  - [x] ECharts interactive diagnostics & multi-format report exports
- [ ] **v1.1.0 Algorithm & Diagnostic Enhancements (In Progress)**
  - [ ] Deep integration with AutoGluon & FLAML tabular backbones
  - [ ] SHAP (SHapley Additive exPlanations) global & local feature attributions
  - [ ] Fast `.parquet` ingestion and large-scale dataset subsampling
- [ ] **v2.0.0 AI-Native Revolution (Co-Development Focus)**
  - [ ] Full implementation of RFC-001 (Command Bus & Semantic UI Tree)
  - [ ] Embedded local MCP (Model Context Protocol) server for seamless Cursor & Claude integration
  - [ ] Extensible plugin ecosystem for user-defined algorithms and transforms

---

## 🤝 Calling All Contributors & Hackers!

**ML Studio is fully open-source under the MIT license. We warmly welcome developers, researchers, and designers worldwide to build with us!**

We are actively seeking contributors in the following areas:
- 🌟 **ML & Algorithm Engineers**: Enhancing AutoML strategies, integrating SHAP/ALE/PDP interpretability, and expanding time-series models;
- 🎨 **Frontend & Visualization Enthusiasts**: Crafting dynamic ECharts dashboards, accessible scientific palettes, and responsive interactions;
- ⚙️ **Systems & Cross-Platform Specialists**: Packaging optimizations (Electron + PyInstaller), cross-platform CI/CD with GitHub Actions;
- 🤖 **Agentic AI Pioneers**: Collaborating on RFC-001 implementation, MCP server integration, and automated Agent GUI workflows.

👉 **Check out our [Contributing Guide (CONTRIBUTING.md)](CONTRIBUTING.md) to get started!**

---

## 💬 Community & Feedback

- **GitHub Issues**: For bug reports, feature requests, and technical queries
- **GitHub Discussions**: For architectural brainstorming and user showcases
- **Discord / Community Groups**: Coming soon — open an issue or leave a message to connect with the core team!

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) — free for academic, commercial, and personal use.
