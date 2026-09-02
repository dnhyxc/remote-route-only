# remote-route-only

React MF 子应用：Host **仅路由挂载**；页面与导航逻辑参照 `remote-react-shadcn`。

| 项 | 值 |
| -- | -- |
| federation `name` | `routeOnlyDemo` |
| 开发端口 | **9011** |
| expose | `./App` |
| registry | `injectRoute: true`，**不写 menu** |
| entry | `http://127.0.0.1:9011/mf-manifest.json` |

## 结构（对齐 remote-react-shadcn）

```
src/
  App.tsx                 # NavigationProvider + activate
  router/
    NavigationContext.tsx # 内存路由
    AppRouter.tsx         # /home /info /detail /plugin…
  views/                  # 同 react-shadcn 多页
  components/ui/          # shadcn
```

嵌入 Host 时默认进 `/info`；独立预览进 `/home`。

## 启动

```bash
pnpm install && pnpm dev
```
