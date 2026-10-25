<div align="center">

# ML Studio

**Train machine learning models without writing code**

Import data → Configure a task → Start training

Regression · Classification · Clustering · Time series | Visual workflow | Local training

[![Release](https://img.shields.io/github/v/release/Marvin-LiJunZan/ML-Studio?color=534ab7)](https://github.com/Marvin-LiJunZan/ML-Studio/releases)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Desktop](https://img.shields.io/badge/Desktop-Electron-47848F.svg?logo=electron)](https://www.electronjs.org/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING_EN.md)

[简体中文](README.md) | **English**

[Download](https://github.com/Marvin-LiJunZan/ML-Studio/releases) · [Website](https://marvin-lijunzan.github.io/ML-Studio/) · [Issues](https://github.com/Marvin-LiJunZan/ML-Studio/issues) · [Contribute](CONTRIBUTING_EN.md)

![Actual ML Studio desktop interface with regression, classification, clustering and time series tasks](assets/img/app-workspace.png)

</div>

## From a spreadsheet to a trained model

ML Studio is a desktop application for training machine learning models on tabular data. Import a CSV or Excel file, select a task, target column, model and parameters in the interface, then start training. You do not need to write Python training scripts.

Configure models, search hyperparameters, inspect metrics and diagnostic plots, and export experiment reports in one workspace. It is intended for researchers and analysts who want to apply machine learning without starting a coding project.

## Start a training run

1. **Import data**: open a CSV / Excel file and inspect its columns, missing values and contents.
2. **Configure the task**: select regression, classification, clustering or time series. Regression and classification require a target column.
3. **Choose a model**: configure the model, evaluation method and parameters. Optionally enable Optuna hyperparameter search.
4. **Start training**: run the task and inspect logs, progress and evaluation results.
5. **Review results**: compare models, inspect applicable diagnostic plots and export a report when needed.

A visual workflow removes the need to write training scripts. You still choose suitable targets, features and validation methods. Hyperparameter search explores configurations; independent evaluation and domain knowledge determine whether the model is useful.

## What can you train?

| Your goal | Task | Common metrics |
| --- | --- | --- |
| Predict a numerical value from features | Regression | R², RMSE, MAE |
| Assign a category to each sample | Classification | Accuracy, F1, AUC |
| Discover groups in unlabelled data | Clustering | Silhouette, Davies–Bouldin |
| Predict future values from ordered observations | Time series | MAE, RMSE, MAPE |

The model catalogue and metrics change with the task. Availability depends on the installed version and model dependencies.

## Beyond training

| Capability | What it provides |
| --- | --- |
| **Visual configuration** | Select models, parameters and evaluation methods without repetitive training code |
| **Hyperparameter search** | Use Optuna within the search space and trial budget you configure |
| **Training diagnostics** | Inspect applicable learning curves, residuals, confusion matrices and ROC/PR curves |
| **Model interpretation** | Enhanced exports under development include correlation heatmaps, SHAP and PDP/ICE where supported |
| **Experiment reports** | Export task configuration, metrics, parameters, charts and logs as HTML / Markdown / Word / PDF |
| **Project management** | Save experiment configuration and records for review and reruns |

Charts must reflect computed results. Unavailable or inapplicable analyses are not fabricated. Enhanced exports are being validated; availability depends on the installed release.

## Training runs on your computer

Data preprocessing, model training and chart computation run locally. Once the required models and dependencies are installed, local training does not depend on a cloud training platform.

AI interpretation is optional and requires a working model service configuration. Enabling a cloud AI service sends the selected analysis content to that service. Local training works without AI interpretation. AI commentary does not replace checks of data quality, validation methods or model results.

## Download and install

Choose an installer from [GitHub Releases](https://github.com/Marvin-LiJunZan/ML-Studio/releases). The release page is the reference for available versions, platforms and filenames.

| Platform | Package formats |
| --- | --- |
| Windows | `.exe` |
| macOS | `.dmg` / `.zip` |
| Linux | `.AppImage` / `.deb` |

After installation, use a small dataset to complete the import, configuration, training and review workflow before starting a full experiment.

## Extensions and development plans

Using the built-in models does not require coding. Developers integrating custom algorithms can consult the [model plugin specification](docs/MODEL_PLUGIN_SPEC.md).

Current improvement areas include:

- Exporting actual task charts with reports, with three-line tables and consistent Chinese/Latin typography.
- Improving SHAP, PDP/ICE and accompanying method descriptions.
- Validating optional AI interpretation of metrics and charts.
- Developing the command registry, semantic control tree and MCP integration proposed in [RFC-001](docs/rfcs/RFC-001-AGENTIC-GUI-SPECIFICATION.md).

Agent control described in the RFC is a development plan, not a requirement for training models in the application.

## Contribute

Contributions to training workflows, evaluation, interpretability, reports, desktop interaction and platform packaging are welcome. Read the [contribution guide](CONTRIBUTING_EN.md), then use [Issues](https://github.com/Marvin-LiJunZan/ML-Studio/issues) to report a problem or discuss a proposal.

## License

Content covered by this repository's license uses the [MIT License](LICENSE). Third-party models, dependencies and plugins retain their own licenses.
