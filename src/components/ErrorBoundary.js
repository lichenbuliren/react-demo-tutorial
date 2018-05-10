import React from 'react'

class ErrorBoundary extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      hasError: false
    }
  }

  componentDidCatch (error, info) {
    this.setState({
      hasError: true
    })

    // TODO 上报错误
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>
    }

    return this.props.children
  }
}

class ErrorComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  addCount = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }))
  }

  render () {
    const { count } = this.state
    if (count > 3) throw new Error('超出边界')
    return <button onClick={this.addCount}>点我累加： {count}</button>
  }
}

export default props => {
  const hasError = true
  return (
    <ErrorBoundary>
      <ErrorComponent hasError={hasError} />
    </ErrorBoundary>
  )
}

