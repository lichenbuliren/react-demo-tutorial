import React from 'react'
import DemoForm from './DemoForm'

export default class ReduxFormDemo extends React.Component {
  handleSubmit = values => {
    console.log(values)
  }

  handleChange = values => {
    // console.log(values)
  }

  render() {
    return (
      <div className="redux-form-demo">
        <h4>redux form demo</h4>
        <DemoForm onChange={this.handleChange} onSubmit={this.handleSubmit} />
      </div>
    )
  }
}