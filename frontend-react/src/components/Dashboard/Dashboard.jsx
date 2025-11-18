import React from 'react'
import { use } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import axiosinstance from '../../../axiosinstance'

const Dashboard =() => {
  // const accessToken = localStorage.getItem('accessToken')
  useEffect(()=>{
    const fetchProtectedData= async ()=>{
      try{
         const response = await axiosinstance.get('/protected-view'
        //  , {headers:{
        //   Authorization:`Bearer ${accessToken}`
        //  }}
        )
         console.log('Success',response.data)
      }catch(error){
         console.error('Error In Fetching Data')
      }
    }
  fetchProtectedData();
  },[])
  return (
    <div className='text-light'>Dashboard</div>
  )
}

export default Dashboard