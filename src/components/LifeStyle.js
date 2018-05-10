import React from 'react'

export default () => {
  const address = {
    country: {
      detail: '测试属性合并'
    }
  }
  return (
    <div>
      控制台输出最终的合并之后的属性，会发现这里的属性合并，是覆盖式的合并
      <LifeStyle address={address} />
    </div>
  )
}


class LifeStyle extends React.Component {
  static defaultProps = {
    address: {
      country: {
        province: '北京市',
        city: '北京市',
        detail: '详细地址'
      }
    }
  }

  componentDidMount () {
    const { address } = this.props
    console.log(address)
    console.log('component did mount')
  }

  componentWillReceiveProps (props) {
    console.log('component will receive props')
  }
  
  componentWillUnmount () {
    console.log('will unmount')
  }

  render () {
    return <div className="test" />
  }
}