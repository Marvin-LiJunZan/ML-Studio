# ML Studio 模型与超参数插件接入规范

本文档定义第三方如何把新的模型算法、超参数搜索算法接入 ML Studio。插件必须是一个独立目录，不能修改 ML Studio 核心代码。

## 1. 目录结构

```text
my_plugin/
  plugin.json              # 必需，插件清单
  model.py                 # 模型适配器（可选）
  tuner.py                 # 搜索算法适配器（可选）
  requirements.txt         # 依赖（可选）
  tests/test_plugin.py     # 最小自测（推荐）
```

## 2. plugin.json

```json
{
  "schema_version": "1.0",
  "id": "acme.random-forest",
  "name": "ACME Random Forest",
  "version": "1.0.0",
  "author": "ACME",
  "type": "model",
  "task_types": ["regression", "classification"],
  "entrypoint": "model:ModelPlugin",
  "parameters": {
    "n_estimators": {"type": "int", "low": 100, "high": 1000},
    "max_depth": {"type": "int", "low": 2, "high": 32}
  }
}
```

`type` 可为 `model` 或 `tuner`。参数必须声明类型和合法范围；插件不得通过 `eval` 执行用户输入。

## 3. 模型适配器接口

```python
class ModelPlugin:
    plugin_id = "acme.random-forest"

    def create(self, params: dict, runtime: dict):
        """返回具有 fit(X, y) 和 predict(X) 方法的模型对象。"""

    def validate(self, params: dict) -> list[str]:
        """返回参数错误列表；空列表表示合法。"""

    def capabilities(self) -> dict:
        return {"tasks": ["regression"], "gpu": False}
```

## 4. 搜索算法适配器接口

```python
class TunerPlugin:
    plugin_id = "acme.bayes-search"

    def optimize(self, objective, space: dict, config: dict, reporter):
        """调用 objective(params)，通过 reporter.report(...) 报告进度，返回 best_params。"""
```

`reporter` 应报告 `trial`, `value`, `state` 和可选的 `resource`，这样 Hyperband、断点续跑和 UI 时间线才能统一工作。

## 5. 安全与兼容要求

- 插件安装前必须通过清单校验、版本校验和最小导入测试。
- 依赖应固定版本；禁止覆盖核心包版本。
- 默认在隔离子进程中运行；超时、内存和文件访问范围由宿主控制。
- 插件只通过上述接口访问数据和模型，不直接依赖 `backend/app` 私有模块。
- 发布插件时提供许可证、变更日志、测试数据说明和 CPU/GPU 要求。

## 6. AI 导入流程

AI 助手可以读取用户上传的 `.py` 文件，生成符合本规范的 `plugin.json`、适配器和测试草稿。生成结果必须经过人工审核、静态检查和沙箱试运行后才能安装；AI 不能自动执行或覆盖原始代码。
