<div align="center">

# ML Studio

**无需写代码的机器学习训练软件**

导入数据 → 配置任务 → 开始训练

回归 · 分类 · 聚类 · 时间序列 ｜ 可视化操作 ｜ 本地训练

[![Release](https://img.shields.io/github/v/release/Marvin-LiJunZan/ML-Studio?color=534ab7)](https://github.com/Marvin-LiJunZan/ML-Studio/releases)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Desktop](https://img.shields.io/badge/Desktop-Electron-47848F.svg?logo=electron)](https://www.electronjs.org/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

**简体中文** | [English](README_EN.md)

[下载桌面版](https://github.com/Marvin-LiJunZan/ML-Studio/releases) · [访问官网](https://marvin-lijunzan.github.io/ML-Studio/) · [问题反馈](https://github.com/Marvin-LiJunZan/ML-Studio/issues) · [参与共建](CONTRIBUTING.md)

![ML Studio 真实主界面：回归、分类、聚类、时间序列四类任务](assets/img/app-workspace.png)

</div>

## 不写训练脚本，也能把模型跑起来

ML Studio 是一款面向表格数据的桌面端机器学习训练软件。把 CSV / Excel 导入软件，在界面中选择任务、目标列、模型与参数，即可开始训练，无需自己编写 Python 训练脚本。

从配置模型、自动调参，到查看指标、诊断图和导出实验报告，都在同一个工作台中完成。适合希望把机器学习用于研究、实验或业务分析，又不想从搭建代码工程开始的用户。

## 怎样开始一次训练？

1. **导入数据**：选择 CSV / Excel 文件，查看列类型、缺失情况与数据内容。
2. **配置任务**：选择回归、分类、聚类或时间序列；回归和分类任务需指定目标列。
3. **选择模型**：在界面中设置模型、评估方式与参数，可按需启用 Optuna 超参数搜索。
4. **开始训练**：点击运行，查看训练日志、进度和评估结果。
5. **查看结果**：比较模型表现，检查任务对应的诊断图，再按需导出报告。

无需写代码，仍需根据问题正确选择目标、特征和验证方式。自动调参用于搜索配置，模型是否适用需要结合独立评估与领域知识判断。

## 可以训练什么任务？

| 你想解决的问题 | 任务类型 | 常用评估指标 |
| --- | --- | --- |
| 根据已有特征预测一个数值 | 回归 | R²、RMSE、MAE |
| 判断样本属于哪一类 | 分类 | Accuracy、F1、AUC |
| 在没有标签的数据中发现分组 | 聚类 | Silhouette、Davies–Bouldin |
| 根据时间顺序预测后续数值 | 时间序列 | MAE、RMSE、MAPE |

模型池与指标会随任务类型切换，具体可用模型以当前安装版本和已安装的依赖为准。

## 训练之外，还能做什么？

| 能力 | 作用 |
| --- | --- |
| **可视化配置** | 在界面中选择模型、参数与评估方式，减少重复编写训练代码 |
| **自动调参** | 按设定的搜索空间与试验预算，使用 Optuna 搜索参数 |
| **训练诊断** | 通过学习曲线、残差图、混淆矩阵、ROC/PR 等适用图表检查模型表现 |
| **图表解释** | 开发中的增强导出支持相关性热图、SHAP、PDP/ICE，按任务与模型能力生成 |
| **报告导出** | 整理任务配置、模型指标、参数、图表与训练记录，支持 HTML / Markdown / Word / PDF |
| **项目管理** | 保存实验配置与记录，方便回看、调整和重新运行 |

图表以实际计算结果为依据；没有计算或不适用于当前任务的分析，不补造结果。增强导出正在开发验证，是否可用以安装版本为准。

## 训练在本机完成

数据预处理、模型训练与图表计算在本机执行。安装好所需模型与依赖后，本地训练不依赖云端训练平台。

AI 解读是可选扩展，需要配置可用的模型服务。启用云端 AI 时，所选分析内容会发送至配置的服务；无需使用 AI 也能运行本地训练。AI 解读不能代替对数据质量、验证方法和模型结果的检查。

## 下载与安装

在 [GitHub Releases](https://github.com/Marvin-LiJunZan/ML-Studio/releases) 中选择适合系统的安装包，具体平台、版本与文件名以发布页为准。

| 平台 | 安装包形式 |
| --- | --- |
| Windows | `.exe` |
| macOS | `.dmg` / `.zip` |
| Linux | `.AppImage` / `.deb` |

安装并打开软件后，先用一份小规模数据完成“导入 → 配置 → 训练 → 查看结果”，再用于正式实验。

## 进阶扩展与开发计划

日常使用内置模型无需编写代码。需要接入自定义算法的开发者，可参考 [模型插件规范](docs/MODEL_PLUGIN_SPEC.md)。

目前的改进重点包括：

- 完善真实任务图表随报告导出，以及三线表和中英文字体排版。
- 完善 SHAP、PDP/ICE 等解释结果与方法说明。
- 验证可选 AI 服务对指标和图表的辅助解读。
- 推进 [RFC-001：控件树与 AI 助手操控规范](docs/rfcs/RFC-001-AGENTIC-GUI-SPECIFICATION.md) 中的命令总线、语义控件树与 MCP 接入设计。

RFC 中的 Agent 操控能力属于开发规划，不是使用软件训练模型的前置条件。

## 参与共建

欢迎围绕训练流程、模型评估、可解释性、报告导出、桌面交互与跨平台打包提交建议。请先阅读 [贡献指南](CONTRIBUTING.md)，通过 [Issues](https://github.com/Marvin-LiJunZan/ML-Studio/issues) 报告问题或讨论方案。

## 许可证

本仓库中适用范围内的内容采用 [MIT License](LICENSE)。第三方模型、依赖与插件遵循各自许可证。
