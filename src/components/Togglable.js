import React, { useState, useImperativeHandle } from 'react'

const Togglable = React.forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false)

  const hideLoginInput = { display: visible ? 'none' : '' }
  const showLoginInput = { display: visible ? '' : 'none' }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  // === assign toggleVisibility for external use ===
  // useDebugValue(visible ? 'Online' : 'Offline')
  useImperativeHandle(ref, () => {
    return {
      toggleVisibility,
    }
  })

  return (
    <div className='login_form_container'>
      <div style={hideLoginInput}>
        <button onClick={toggleVisibility}>{props.buttonLabel}</button>
      </div>
      <div style={showLoginInput}>
        {props.children}
        <button onClick={toggleVisibility}>cancel</button>
      </div>
    </div>
  )
})

export default Togglable
