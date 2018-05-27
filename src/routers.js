import { LifeStyle, ContextSystem, RefsForward, Portals, ErrorBoundary, RouterDemo } from './components'
const routers = [{
  path: '/demo/lifestyle',
  component: LifeStyle,
  name: '生命周期'
}, {
  path: '/demo/context-system',
  component: ContextSystem,
  name: '上下文系统'
}, {
  path: '/demo/refs-forward',
  component: RefsForward,
  name: '转嫁 Refs'
}, {
  path: '/demo/portals',
  component: Portals,
  name: '传送门'
}, {
  path: '/demo/error-boundaries',
  component: ErrorBoundary,
  name: '错误边界'
}, {
  path: '/demo/router-demo',
  component: RouterDemo,
  name: '路由测试'
}]

export default routers