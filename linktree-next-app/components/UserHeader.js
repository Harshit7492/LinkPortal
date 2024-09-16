import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import UserContext from '@/context/UserContext';
import { toast } from 'react-toastify';

function UserHeader() {
    const router = useRouter();
    const { userData, setUserData } = useContext(UserContext);

    // Destructure userData from context
    const { avatar, handle, role } = userData;

    const handleLogout = () => {
        localStorage.removeItem('LinkTreeToken');
        setUserData({}); // Clear user data on logout
        router.push('/login');
    };

    useEffect(() => {
        if (!localStorage.getItem("LinkTreeToken")) {
            router.push("/login");
            return;
        }

        fetch('http://localhost:8080/data/dashboard', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                tokenMail: localStorage.getItem('LinkTreeToken'),
            }),
        })
        .then(res => res.json())
        .then(data => {
            if (data.status === 'error') {
                toast.error('Error occurred');
                return;
            }
            setUserData(data.userData);
            localStorage.setItem('userHandle', data.userData.handle);
            toast.success(data.message);
        })
        .catch(err => {
            console.error(err);
            toast.error('Failed to fetch user data');
        });
    }, [router, setUserData]);

    return (
        <header className='flex flex-row justify-between items-center'>
            <div className="flex flex-col md:flex-row p-5">

                <Link href='/edit/links'>
                <button className="px-5 py-3 text-purple-500 border-2 border-purple-500 font-bold hover:text-purple-700 hover:bg-purple-100 rounded-md mb-3 inline-flex w-full md:w-auto">
                    <img src="/svg/url.svg" className='w-6 mr-3' alt="Edit Links" />
                    Edit Links
                </button>
                </Link>
                <Link href='/edit/profile'>
                <button className="px-5 py-3 text-red-500 border-2 border-red-500 md:ml-4 font-bold hover:text-red-700 hover:bg-red-100 rounded-md mb-3 inline-flex w-full md:w-auto">
                    <img src="/svg/profile.svg" className='w-6' alt="Edit Profile" />
                    Edit Profile
                </button>
                </Link>
            </div>
            <div className="flex">
                <Link href={`/${handle}`} passHref>
                    <div className="inline-flex mr-5 text-right items-center bg-gray-200 px-5 py-2 rounded-lg cursor-pointer">
                        <div className="text-xs md:text-md flex flex-col flex-wrap">
                            <span className='font-bold'>{handle}</span>
                            <span>{role} Pack</span>
                        </div>
                        <div className="user-img">
                            <img className='w-10 ml-5' src={avatar} alt="User Avatar" />
                        </div>
                    </div>
                </Link>
                <img src="/svg/bell.svg" className='w-6 cursor-pointer mr-5' alt="Notifications" />
                <img src="/svg/logout.svg" className='w-6 mr-5 cursor-pointer' alt="Logout" onClick={handleLogout} />
            </div>
        </header>
    );
}

export default UserHeader;
