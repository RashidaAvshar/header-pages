import React from 'react'

const Form = () => {
  return (
    <div className='container'>
      <div className="form-box">
        <div className="form">
          <h1>REGISTER</h1>
          <input type="text" placeholder='name' />
          <input type="text" placeholder='surname' />
          <input type="password" placeholder='password' />
          <button>register</button>
        </div>
      </div>
      
    </div>
  )
}

export default Form;
