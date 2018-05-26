import { LifeStyle, ContextSystem, RefsForward, Portals, ErrorBoundary, RouterDemo, ChildRoute1, ChildRoute2 } from './components'
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
}, {
  path: 'router-demo',
  component: RouterDemo,
  name: '路由测试',
  routes: [{
    path: 'child1',
    name: '子路由1',
    component: ChildRoute1
  }, {
    path: 'child2',
    name: '子路由2',
    component: ChildRoute2
  }]
}]

export default routers