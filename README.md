# remote-route-only

演示 Host **只注入路由、不挂侧栏**；内部功能逻辑对齐 `remote-react-shadcn`（NavigationProvider 多页 + shadcn 悬浮层验收）。

| registry 字段 | 值 | 效果 |
|---|---|---|
| `injectRoute` | `true`（或缺省） | Host 把 `routePath` 挂进路由表 |
| `menu` | **不写** | 侧栏无入口 |

## 内部路由（与 remote-react-shadcn 一致）

| path | 页面 |
|---|---|
| `/home` | 独立预览入口 |
| `/info` | 说明页 + 悬浮层验收（Host 嵌入默认页） |
| `/detail` | 详情页 |
| `/plugin` / `/plugin/detail` | 插件示例页 |

## 开发

```bash
pnpm install
pnpm dev   # http://127.0.0.1:9011
```

- MF name：`routeOnlyDemo`，expose：`./App`
- manifest：`http://127.0.0.1:9011/mf-manifest.json`

## Registry 示例

```json
{
  "id": "routeOnlyDemo",
  "remoteName": "routeOnlyDemo",
  "expose": "./App",
  "injectRoute": true,
  "routePath": "/route-only",
  "entry": "http://127.0.0.1:9011/mf-manifest.json",
  "hostApiRange": ">=1.0.0"
}
```

不要写 `menu`。
