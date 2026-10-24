# 🤝 Contributing to ML Studio

Thank you for your interest in **ML Studio**! Whether it's fixing a typo in documentation, reporting a bug, improving the front-end user experience, or advancing the underlying AutoML and agentic architecture, your contributions are warmly welcomed.

---

## 🧭 Code of Conduct

All contributors and participants are expected to adhere to our [Code of Conduct](CODE_OF_CONDUCT.md). We are committed to fostering a welcoming, inclusive, and harassment-free environment for everyone.

---

## 🎯 How Can You Contribute?

If you are eager to contribute but unsure where to start, here are prime areas of focus:

1. **Tackle `good first issue` Tasks**: Look for issues tagged `good first issue` in our repository—they represent well-scoped and beginner-friendly tasks;
2. **Algorithm & Engineering Enhancements**:
   - Integrating AutoGluon, FLAML, LightGBM, and CatBoost tabular backbones;
   - Adding SHAP (SHapley Additive exPlanations) attribution plots and feature interpretability;
   - Scaling tabular ingestion for massive datasets (.parquet, multi-threading);
3. **AI-Native & Agentic GUI Architecture**:
   - Collaborating on [RFC-001](docs/rfcs/RFC-001-AGENTIC-GUI-SPECIFICATION.md) to implement the Command Registry and Semantic Control Tree snapshot;
   - Developing a native Model Context Protocol (MCP) local server;
4. **UI/UX & Scientific Visualization**:
   - Enhancing ECharts telemetry dashboards with accessible, publication-ready color palettes;
   - Refining dark/light theme switching and cross-platform window ergonomics;
5. **Documentation & Internationalization**:
   - Expanding tutorials and empirical case studies across different scientific disciplines;
   - Improving English documentation and internationalization (i18n).

---

## 🛠️ Local Development Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Marvin-LiJunZan/ML-Studio.git
cd ML-Studio
```

### 2. Backend Development Mode (FastAPI + Python)

Python 3.10 or 3.11 is recommended:

```bash
cd backend
python -m venv venv
# On Windows:
.\venv\Scripts\activate
# On macOS / Linux:
source venv/bin/activate

pip install -r requirements.txt
python main.py
```
The API backend and web UI will boot at `http://127.0.0.1:8000`.

### 3. Desktop Development Mode (Electron)

In a separate terminal, launch the Electron container:

```bash
cd electron
npm install
npm run dev
```

---

## 📝 Commit Message Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification:

- `feat`: A new feature (e.g., `feat(automl): add SHAP attribution summary plot`)
- `fix`: A bug fix (e.g., `fix(parser): handle utf-8-sig encoding in CSV`)
- `docs`: Documentation updates (e.g., `docs(readme): add English documentation`)
- `style`: Formatting changes that do not affect code logic
- `refactor`: Code restructuring without bug fixes or new features
- `perf`: Performance optimizations
- `test`: Adding or updating test suites
- `rfcs`: Architectural proposals and RFC updates

---

## 🔀 Pull Request Workflow

1. **Fork the repository** to your personal GitHub account;
2. Create a topic branch from `main`: `git checkout -b feat/your-feature-name`;
3. Commit your changes and verify that tests pass locally;
4. Push to your fork: `git push origin feat/your-feature-name`;
5. Open a **Pull Request** against `main`, detailing your motivations and test results;
6. Maintainers will review your PR within 24 hours.

---

## 💡 Becoming a Core Maintainer

Contributors who consistently submit high-quality PRs or actively mentor others in discussions will be invited to the **ML Studio Core Team** with write access and a direct voice in architectural decisions!
