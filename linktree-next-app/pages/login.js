import React, { useState } from 'react'
import styles from '../styles/apply.module.css'
import { toast } from 'react-toastify'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { useRouter } from 'next/router'

const BACKEND_URL = process.env.PORT || 'http://localhost:8080/'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()
    const handleLogin = (e) => {
        e.preventDefault();

        fetch(`${BACKEND_URL}api/login`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        }).then(res => res.json()) // Corrected this line
            .then(data => {
                if (data.status === 'success') {
                    toast('You are logged in');
                    localStorage.setItem('LinkTreeToken', data.token);
                    router.push('/dashboard')
                } else if (data.status === 'not found') {
                    toast('User not found');
                }
            })
            .catch(err => {
                console.error(err);
                toast('An error occurred');
            });

    };


    return (
        <>
            <section className={styles.background + " main min-h-screen flex justify-center items-center"}>
                <div className="main">
                    <div className="content bg-white rounded-2xl shadow-lg form border-2px px-4 py-8">
                        <h1 className="text-2xl font-bold text-black text-center pb-5">You're now among top creators </h1>
                        <p className='text-center'>Access your Dashboard</p>
                        <p className='text-center py-5 font-bold text-gray-800'>Start building your Hub</p>
                        <form className="flex flex-col gap-4 text-lg mt-5" onSubmit={handleLogin}>
                            <span className='flex flex-row border-2 px-3 py-2 border-gray-100 bg-white text-black shadow-md p-2 rounded-lg focus:outline-none autofocus'>
                                {/* Add the new Instagram SVG */}
                                <img className='w-6 mr-2' src="/svg/email.svg" />

                                <input value={email} onChange={e => setEmail(e.target.value)} className=" focus:outline-none autofocus" type="email" placeholder='Enter your email' required />
                            </span>
                            <input value={password} onChange={e => setPassword(e.target.value)} className="border-2 border-gray-100 bg-white text-black shadow-md p-2 rounded-lg focus:outline-none autofocus" type="password" placeholder='Enter password' required />

                            <input type="submit" value="Login" className='bg-indigo-600 rounded-lg text-white py-2' />
                        </form>
                    </div>
                    <h4 className='text-center text-white p-3'>New Here? <Link className='font-bold text-red-500' href="/apply">Apply</Link> </h4>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Login
