/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import {Alert} from '../alerts'
const VerifyOTP = (props) => {
 

    const { register, handleSubmit, watch, errors } = useForm()
    const [verified, setVerified] = useState(false)
    const [notVerified, setNotVerified] = useState(false)

   

    useEffect(() => {
     
    }, [])

    const onSubmit = async data => {
        console.log(data)
    }

    const checkOTP = async(token) => {
         const data = {
             token: token,
             id: props.id
         }
    axios.post(`http://localhost:5000/api/v1/verify`,  data )
    .then(res => {
     if(res.data.verify){
        setVerified(res.data.verify)
     }else{
         setNotVerified(true)
     }
        
    
    
    }).catch((error => {
      console.log(error)
    }))
    }
    
    

    return (
        <>
                {verified || notVerified ? <Alert color={verified? 'green' : 'red'} rounded>{verified ? "Code Matched proceed to login" : "Code not matched"}</Alert> : '' }
                
                
                    <span className="text-default">Please provide your verification code .</span>

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col text-sm mb-4 w-full">
                        <div className="w-full mb-4">
                            <label className="block">
                                <span className="text-default">Verification Code</span>
                                <input
                                    name="token"
                                    type="text"
                                    ref={register({ required: true })}
                                    className="form-input mt-1 text-xs block w-full bg-white"
                                    placeholder="Enter your verification code"
                                    onChange={(e) => e.target.value.length > 5 ? checkOTP(e.target.value) : ''}
                                />
                            </label>
                            {errors.token && (
                                <p className="mt-1 text-xs text-red-500"></p>
                            )}
                        </div>
                        <input type="hidden" name="id" value={props.id}/>
                    </form>
                </>
    )
}

export default VerifyOTP
