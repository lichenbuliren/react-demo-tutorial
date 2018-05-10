import React from 'react'

const { Provider, Consumer } = React.createContext('primary')

const Toolbar = props => {
  return (
    <div>
      <ThemeButton>上下文系统</ThemeButton>
    </div>
  )
}

const ThemeButton = props => {
  return (
    <Consumer>
      {theme => <Button {...props} theme={theme} />}
    </Consumer>
  )
}

const Button = props => {
  const { theme, children, ...rest } = props
  return (
    <button className={`btn btn-${theme}`} {...rest}>{children}</button>
  )
}

export default class ContextSystem extends React.Component {
  render () {
    return (
      <React.Fragment>
        <p>获取默认的上下文系统中的值，可以不通过 Provider</p>
        <Toolbar />
        <br/>
        <p>通过 Provider 设置上下文系统中的值</p>
        <Provider value="secondary">
          <Toolbar />
        </Provider>
        <br/>
        <p>通过 Provider 如果没有设置上下文系统中的值，默认也不会取初始设置的值，所以 Consumer 取到的将会是 undefined </p>
        <Provider>
          <Toolbar />
        </Provider>
      </React.Fragment>
    )
  }
}