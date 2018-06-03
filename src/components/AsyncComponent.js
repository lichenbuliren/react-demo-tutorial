import React from 'react'

export default (importCoponent) => {
  class AsyncComponent extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        component: null
      }
    }

    async componentDidMount () {
      const { default: component } = await importCoponent()
      this.setState({
        component
      })
    }

    render () {
      const Comp = this.state.component
      return Comp ? <Comp {...this.props} /> : null
    }
  }

  return AsyncComponent
}