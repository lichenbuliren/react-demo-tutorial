import { LifeStyle, ContextSystem, RefsForward, Portals, ErrorBoundary } from './components'
const routers = [{
  path: 'lifestyle',
  component: LifeStyle,
  name: '生命周期'
}, {
  path: 'context-system',
  component: ContextSystem,
  name: '上下文系统'
}, {
  path: 'refs-forward',
  component: RefsForward,
  name: '转嫁 Refs'
}, {
  path: 'portals',
  component: Portals,
  name: '传送门'
}, {
  path: 'error-boundaries',
  component: ErrorBoundary,
  name: '错误边界'
}]

export default routers