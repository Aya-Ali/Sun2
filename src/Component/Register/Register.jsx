import { useFormik } from 'formik'
import React from 'react'

export default function Register() {

  function validate(){
    let errors = {}
    if (value.name == "") {
      errors.name = "name Required"
    } else if (value.name.length < 3) {
      errors.name = "min char 3"
    }

    if (value.email == "") {
      errors.email = "email required"
    }

    return errors
  }
  function RegisterApi(val) {
    console.log(val);
  }
  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: ""
    },
    onSubmit: RegisterApi,
    validate
  })

  return (
    <div className='w-75 mx-auto my-2'>
      <h2>Register Now .....</h2>
      <form onSubmit={formik.handleSubmit}>


        <div className='mb-3'>
          <label htmlFor="name">Name</label>
          <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" className='form-control' name="name" id="name" />
          <p className='text-danger'>{ formik.errors.name}</p>

        </div>

        <div className='mb-3'>
          <label htmlFor="email">Email</label>
          <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="email" className='form-control' name="email" id="email" />
        
          <p className='text-danger'>{ formik.errors.email}</p></div>

        <div className='mb-3'>
          <label htmlFor="phone">Phone</label>
          <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="tel" className='form-control' name="phone" id="phone" />
        </div>
        <div className='mb-3'>
          <label htmlFor="password">password</label>
          <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="password" className='form-control' name="password" id="password" />
        </div>
        <div className='mb-3'>
          <label htmlFor="rePassword">rePassword</label>
          <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="password" className='form-control' name="rePassword" id="rePassword" />
        </div>
        <button type='submit' className='btn bg-main text-white'>Register</button>
      </form>

    </div>
  )
}
