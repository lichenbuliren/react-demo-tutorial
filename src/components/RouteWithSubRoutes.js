import React from 'react'

export default route => {
  const TempComponent = route.component
  const routeName = route.name
  return (
    <React.Fragment>
      <h4>{routeName}</h4>
      <TempComponent />
    </React.Fragment>
  )
}