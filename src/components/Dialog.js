import React from 'react'
import { createPortal } from 'react-dom'

export default class Dialog extends React.Component {
  static defaultProps = {
    visiable: false
  }

  constructor (props) {
    super(props)
    const doc = window.document
    this.node = doc.createElement('div')
    doc.body.appendChild(this.node)
  }

  componentWillUnmount () {
    window.document.body.removeChild(this.node)
  }

  render () {
    const { visiable } = this.props

    if (visiable) return createPortal(
      <div className="dialog">
        {this.props.children}
      </div>,
      this.node
    )

    return null
  }
}