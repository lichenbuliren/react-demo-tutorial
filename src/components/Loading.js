import React from 'react'
import loading from '../assets/images/loading.svg'

export default ({ isLoading, error }) => {
  if (isLoading) {
    return (
      <div className="loading">
        <img alt="loading" src={loading} width="50" height="50" />
      </div>
    )
  } else if (error) {
    console.log(error)
    return <div>Sorry, there was a problem loading the page.</div>
  } else {
    return null
  }
}
