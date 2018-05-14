import React from 'react'

export default class RefsForward extends React.Component {
  constructor (props) {
    super(props)
    this.ref = React.createRef()
  }

  componentDidMount () {
    // 通过 ref.current 获取到最终的 DOM ref
    console.log(this.ref.current)
    this.form = this.ref.current
    const formData = new FormData(this.form)
    console.log(formData)
  }

  render () {
    return (
      <div>
        <p>这里将获取到真实的 Form 对象</p>
        <FancyForm ref={this.ref} />
      </div>
    )
  }
}

// 被包裹的 Form 组件
const FancyForm = React.forwardRef((props, ref) => (
  <form ref={ref} action="#" encType="multipart/form-dat">
    <label htmlFor="fileInput">文件上传</label>
    <input id="fileInput" name="fileInput" type="file" placeholder="请选择文件" />
  </form>
))