import { useRouter } from 'next/router';
import React from 'react';
import { toast } from 'react-toastify';

const FRONTEND_URL = process.env.PORT || 'http://localhost:3000/'

const ShareButton = () => {
    const router = useRouter();

    const copyLink = () => {
        // Check if handle is available
        const handle = router.query.handle;
        if (!handle) {
            toast.error('Handle not available');
            return;
        }
        const url = `${FRONTEND_URL}${handle}`;
        navigator.clipboard.writeText(url)
            .then(() => {
                toast.success('Copied to clipboard');
            })
            .catch((err) => {
                console.error('Failed to copy text: ', err);
                toast.error('Failed to copy to clipboard');
            });
    };

    return (
        <div
            className="absolute cursor-pointer top-28 left-10 bg-indigo-200 p-2 rounded-md z-10 shadow-md border-2 border-indigo-400"
            onClick={copyLink}
        >
            <img src="/svg/share.svg" alt="Share" className='w-6' />
        </div>
    );
};

export default ShareButton;
