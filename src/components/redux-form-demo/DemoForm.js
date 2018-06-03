import React from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'

const sleep = delay => new Promise(resolve => setTimeout(resolve, delay))

const renderField = ({
  input,
  label,
  type,
  meta: { asyncValidating, touched, error }
}) => (
  <div>
    <label>{label}</label>
    <div className={asyncValidating ? 'async-validating' : ''}>
      <input {...input} type={type} placeholder={label} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

const asyncValidate = (values /*, dispatch */) => {
  return sleep(1000).then(() => {
    // simulate server latency
    if (['john', 'paul', 'george', 'ringo'].includes(values.firstName)) {
      throw { firstName: 'That username is taken' }
    }
  })
}

export default reduxForm({
  form: 'demoForm',
  // 表单默认初始值，这里可以从 store 获取，或者直接设置
  initialValues: {
    firstName: 'lichen',
    lastName: 'heavenru',
    email: 'lichenbuliren@gmail.com',
    sex: 'male',
    favoriteColor: 'ff0000'
  },
  shouldValidate: ({values}) => {
    // 这里精细控制是否需要校验
    if (!values.lastName) return true // 如果没有填写 lastName,那么需要对字段进行校验
    return false
  },
  validate: values => {
    const errors = {}
    if (!values.firstName) errors.firstName = 'required'
    console.log(errors)
    return errors
  },
  asyncValidate,
  asyncBlurFields: ['firstName']
})(props => {
  const { handleSubmit, pristine, reset, submit, submitting, array } = props
  const onSubmit = values => {
    console.log('submitting', submitting)
    return sleep(1000).then(() => {
      console.log('submitting', submitting)
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name</label>
        <div>
          <Field name="firstName" component={renderField} type="text" placeholder="First Name" />
        </div>
      </div>
      <div>
        <label>Last Name</label>
        <div>
          <Field name="lastName" component="input" type="text" placeholder="Last Name" />
        </div>
      </div>
      <div>
        <label>Email</label>
        <div>
          <Field name="email" component="input" type="email" placeholder="Email" />
        </div>
      </div>
      <div>
        <label>Sex</label>
        <div>
          <label>
            <Field name="sex" component="input" type="radio" value="male" /> Male
          </label>
          <label>
            <Field name="sex" component="input" type="radio" value="female" /> Female
          </label>
        </div>
      </div>
      <div>
        <label>Favorite Color</label>
        <div>
          <Field name="favoriteColor" component="select">
            <option />
            <option value="ff0000">Red</option>
            <option value="00ff00">Green</option>
            <option value="0000ff">Blue</option>
          </Field>
        </div>
      </div>
      <div>
        <label htmlFor="employed">Employed</label>
        <div>
          <Field name="employed" id="employed" component="input" type="checkbox" />
        </div>
      </div>
      <div>
        <label>Notes</label>
        <div>
          <Field name="notes" component="textarea" />
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
})
