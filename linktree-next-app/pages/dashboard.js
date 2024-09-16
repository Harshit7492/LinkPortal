import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import Linkbox from '@/components/Linkbox'
import UserHeader from '@/components/UserHeader'
import { toast } from 'react-toastify'
import UserContext from '@/context/UserContext'

function dashboard() {

    const [data ,setData]=useState({})
    // const {setUserData}=useContext(UserContext)
    // useEffect(()=>{
    //     if(localStorage.getItem("LinktreeToken")) {
    //         return window.location.href="/login";
    //     }
    //     fetch('http://localhost:8080/data/dashboard',{
    //         method:'POST',
    //         headers:{
    //             'content-type':'application/json',
    //         },
    //         body: JSON.stringify({
    //             tokenMail:localStorage.getItem('LinkTreeToken')
    //         })

    //     }).then(res=>res.json())
    //     .then((data=>{
    //         if(data.status==='error'){
    //             return toast.error('Error occered')
    //         }
    //         setData(data.userData)
    //         setUserData(data.userData)
    //         localStorage.setItem('userHandle',data.userData.handle)
    //         toast.success(data.message)
    //     })).catch(err=>{
    //         console.log(err)
    //     })
    // },[])

  return (
    <>
    <div className="">
        <UserHeader/>
    <main>

        <section className='grid md:grid-cols-4 gap-5'>
           <Linkbox lbTitle="Links" lbNumber={data.links} lbSvg="url" lbTheme="red"/>
           <Linkbox lbTitle="Links" lbNumber="100" lbSvg="ig" lbTheme="blue" />
           <Linkbox lbTitle="Links" lbNumber="100" lbSvg="email" lbTheme="red"/>
           <Linkbox lbTitle="Links" lbNumber="100" lbSvg="growth" lbTheme="blue" />
        </section>

    </main>
    </div>
    </>
  )
}

export default dashboard