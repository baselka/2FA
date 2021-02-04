import React, {useState} from 'react'
import Link from 'next/link'
import {useForm} from 'react-hook-form'
import axios from 'axios'

let socialMediaColors = {
  facebook: '#365397',
  linkedin: '#006db3',
  google: '#e0452c',
  github: '#2f2f2f',
}


const Subscribe = () => {
  const {register, handleSubmit, watch, errors} = useForm()
  const [qrcode, setQrcode] = useState(null)
  const onSubmit = data => {
    //console.log(data)
    axios.post(`http://localhost:5000/api/v1/signup`,  data )
    .then(res => {
      setQrcode(res.data.data.qr)
      
    }).catch((error => {
      console.log(error)
    }))
  }
  const [checked, setChecked] = useState(true)

  return (
    <>
    {qrcode? <img className="h-64 w-64" src={qrcode}/>: ''}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col text-sm mb-4">
        <div className="w-full mb-4">
          <label className="block">
            <span className="text-default">Email address</span>
            <input
              name="email"
              type="email"
              ref={register({required: true})}
              className="form-input mt-1 text-xs block w-full bg-white"
              placeholder="Enter your email"
            />
          </label>
          {errors.email && (
            <p className="mt-1 text-xs text-red-500">Email is required</p>
          )}
        </div>
        <div className="w-full mb-4">
          <label className="block">
            <span className="text-default">Name</span>
            <input
              name="name"
              type="text"
              ref={register({required: true})}
              className="form-input mt-1 text-xs block w-full bg-white"
              placeholder="Name"
            />
          </label>
          {errors.email && (
            <p className="mt-1 text-xs text-red-500">Name is required</p>
          )}
        </div>
        <div className="w-full mb-4">
          <label className="block">
            <span className="text-default">Password</span>
            <input
              name="password"
              type="password"
              ref={register({required: true})}
              className="form-input mt-1 text-xs block w-full bg-white"
              placeholder="Enter your password"
            />
          </label>
          {errors.email && (
            <p className="mt-1 text-xs text-red-500">Password is required</p>
          )}
        </div>

        <div className="w-full">
          <input
            type="submit"
            className="w-full block px-4 py-2 uppercase font-bold text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:outline-none active:outline-none"
            value="Signup"
          />
        </div>
      </form>

      <div className="w-full">
        <span>
          <Link href="/login">
            <a className="text-blue-500 hover:text-blue-800">
              Go back to login
            </a>
          </Link>
        </span>
      </div>
    </>
  )
}

export default Subscribe
