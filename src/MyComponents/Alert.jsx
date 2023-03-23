import React from 'react'

const Alert = (props) => {
  return (
  <div className="text-center" style={{height:"7vh"}}>
      {props.alert && <div
        className={`alert bg-${props.alert.type} text-white`}
        role="alert"
      >
        <strong>{props.alert.msg}!</strong>
      </div>}
  </div>
  )
}

export default Alert