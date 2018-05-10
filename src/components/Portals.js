import React from 'react'
import Dialog from './Dialog'
import Button from './Button'

export default class Portals extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      visiable: false
    }
  }

  toggleDialog = () => {
    this.setState(prevState => ({
      visiable: !prevState.visiable
    }))
  }
  
  render () {
    const { visiable } = this.state
    return (
      <div className="portals">
        <Button onClick={this.toggleDialog}>{visiable ? '隐藏' : '显示'}</Button>
        <Dialog visiable={visiable}>这是 Dialog 内容</Dialog>
      </div>
    )
  }
}