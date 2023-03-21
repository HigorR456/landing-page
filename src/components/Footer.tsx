import React from 'react';
import {AiOutlineCopyrightCircle} from 'react-icons/ai'

const Footer = () => {
    return (
        <>
            <div className='h-full text-white flex justify-center'>
                <h1 className='flex my-24 flex-wrap justify-center items-center'>
                    <AiOutlineCopyrightCircle />
                    <span>&nbsp;2023 Landing Page.</span>
                    <span>&nbsp;All rights reserved. Developed by Higor</span>
                </h1>
            </div>
        </>
    );
};

export default Footer;