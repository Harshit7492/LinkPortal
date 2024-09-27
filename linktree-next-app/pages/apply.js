import React, { useState } from 'react'
import styles from '../styles/apply.module.css'
import { toast } from 'react-toastify'
import Login from './login'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Apply = () => {
  const router = useRouter()
  const [handle, setHandle] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [category, setCategory] = useState('')
  const [submited, setSubmited] = useState(false)
  const handleCategoryChande = (e) => {
    setCategory(e.target.value)
  }

  const handleRegister = (e) => {
    e.preventDefault();
    if (!category) return toast("Select a Category")

    fetch('http://127.0.0.1:8080/api/register', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        handle,
        password,
        email,
        category,
      })
    }).then(res => res.json())
      .then(data => {
        if (data.status == 'success') {
          toast('you are registerd ')
          localStorage.setItem('LinkTreeToken', data.token);
          setSubmited(true)
          router.push('/login')
        }
      }).catch(err => { toast(err.message) })

    toast("You are registered successfully")
  }



  return (
    <>
      <section className={styles.background + " main min-h-screen flex justify-center items-center"}>
        <div className="main">
          <div className="content bg-white rounded-2xl shadow-lg form border-2px px-4 py-8">
            <h1 className="text-2xl font-bold text-black text-center pb-5">Join the top 1% creators</h1>
            <p className='text-center'>Create Linktree for your brand</p>
            <p className='text-center py-5 font-bold text-gray-800'>Start building your Hub</p>
            <form className="flex flex-col gap-4 text-lg mt-5" onSubmit={handleRegister}>
              <span className='flex flex-row border-2 px-3 py-2 border-gray-100 bg-white text-black shadow-md p-2 rounded-lg focus:outline-none autofocus'>
                {/* Add the new Instagram SVG */}
                {/* <img src="/svg/ig.svg" /> */}

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 551.034 551.034" xmlSpace="preserve" className="w-6 h-6 mx-auto">
                  <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="275.517" y1="4.571" x2="275.517" y2="549.72" gradientTransform="matrix(1 0 0 -1 0 554)">
                    <stop offset="0" style={{ stopColor: "#e09b3d" }} />
                    <stop offset=".3" style={{ stopColor: "#c74c4d" }} />
                    <stop offset=".6" style={{ stopColor: "#c21975" }} />
                    <stop offset="1" style={{ stopColor: "#7024c4" }} />
                  </linearGradient>
                  <path style={{ fill: "url(#a)" }} d="M386.878 0H164.156C73.64 0 0 73.64 0 164.156v222.722c0 90.516 73.64 164.156 164.156 164.156h222.722c90.516 0 164.156-73.64 164.156-164.156V164.156C551.033 73.64 477.393 0 386.878 0M495.6 386.878c0 60.045-48.677 108.722-108.722 108.722H164.156c-60.045 0-108.722-48.677-108.722-108.722V164.156c0-60.046 48.677-108.722 108.722-108.722h222.722c60.045 0 108.722 48.676 108.722 108.722z" />
                  <linearGradient id="b" gradientUnits="userSpaceOnUse" x1="275.517" y1="4.571" x2="275.517" y2="549.72" gradientTransform="matrix(1 0 0 -1 0 554)">
                    <stop offset="0" style={{ stopColor: "#e09b3d" }} />
                    <stop offset=".3" style={{ stopColor: "#c74c4d" }} />
                    <stop offset=".6" style={{ stopColor: "#c21975" }} />
                    <stop offset="1" style={{ stopColor: "#7024c4" }} />
                  </linearGradient>
                  <path style={{ fill: "url(#b)" }} d="M275.517 133C196.933 133 133 196.933 133 275.516s63.933 142.517 142.517 142.517S418.034 354.1 418.034 275.516 354.101 133 275.517 133m0 229.6c-48.095 0-87.083-38.988-87.083-87.083s38.989-87.083 87.083-87.083 87.083 38.988 87.083 87.083-38.989 87.083-87.083 87.083" />
                  <linearGradient id="c" gradientUnits="userSpaceOnUse" x1="418.306" y1="4.571" x2="418.306" y2="549.72" gradientTransform="matrix(1 0 0 -1 0 554)">
                    <stop offset="0" style={{ stopColor: "#e09b3d" }} />
                    <stop offset=".3" style={{ stopColor: "#c74c4d" }} />
                    <stop offset=".6" style={{ stopColor: "#c21975" }} />
                    <stop offset="1" style={{ stopColor: "#7024c4" }} />
                  </linearGradient>
                  <circle style={{ fill: "url(#c)" }} cx="418.306" cy="134.072" r="34.149" />
                </svg>
                <input value={handle} onChange={e => setHandle(e.target.value)} className="focus:outline-none autofocus" type="text" placeholder='Enter your name' required />
              </span>
              <input value={email} onChange={e => setEmail(e.target.value)} className="border-2 border-gray-100 bg-white text-black shadow-md p-2 rounded-lg focus:outline-none autofocus" type="email" placeholder='Enter your Email' required />
              <input value={password} onChange={e => setPassword(e.target.value)} className="border-2 border-gray-100 bg-white text-black shadow-md p-2 rounded-lg focus:outline-none autofocus" type="password" placeholder='Enter your password' required />
              {/* <input className="bg-indigo-600 text-white p-2 rounded-lg" type="submit" value="Subscribe" /> */}

              <h5 className='text-center text-sm text-indigo-500'>Account Type</h5>

              <span className="flex ">
                <label className='flex flex-row mr-3 '>
                  <input type="checkbox" value="Creator" checked={category === 'Creator'} onChange={handleCategoryChande} />
                  <p className='pl-2'>Creator</p>
                </label>

                <label className='flex flex-row'>
                  <input type="checkbox" value="Agency" checked={category === 'Agency'} onChange={handleCategoryChande} />
                  <p className='pl-2'>Agency</p>
                </label>

                <label className='flex flex-row'>
                  <input type="checkbox" value="Brand" checked={category === 'Brand'} onChange={handleCategoryChande} />
                  <p className='pl-2'>Brand</p>
                </label>
              </span>

              <input type="submit" value="Register" className='bg-indigo-600 rounded-lg text-white py-2' />

            </form>
          </div>
          <h4 className='text-center text-white p-3'>Already have an account?  <Link className='font-bold text-red-500' href="/login">Login</Link> </h4>
        </div>
      </section>

    </>
  )
}

export default Apply
