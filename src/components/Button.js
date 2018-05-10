import React from 'react'

export default class Button extends React.Component {
  static defaultProps = {
    style: {},
    className: '',
    onClick: () => {},
    title: ''
  }

  render() {
    const { title, className, style, onClick, children, ...rest } = this.props
    return (
      <button title={title} className={`button ${className}`} style={style} onClick={onClick} {...rest}>{children}</button>
    )
  }
}