import React from 'react';
import Link from 'next/link';
import {AiOutlineWhatsApp, AiOutlinePhone, AiOutlineCar, 
    AiOutlineHome, AiOutlineFileSearch, AiOutlineInfoCircle} from 'react-icons/ai'

const NavBar = () => {
    return (
        <>
            <header className='sticky top-0 z-50 bg-primarybg/75 backdrop-blur text-white'>
                <div className='flex justify-around bg-primary text-black'>
                    <div className='flex leading-none m-2'><AiOutlineWhatsApp/> (11) 9999-9999</div>
                    <div className='flex leading-none m-2'><AiOutlinePhone/> (11) 9999-9999</div>
                </div>

                <div> 
                    <nav className='flex justify-around leading-[120px] font-semibold'>

                        <Link href='/'
                        className='flex text-5xl leading-[120px]'>
                            <AiOutlineCar className='h-[120px]'/>
                            <span>Landing Page</span>
                        </Link>

                        <Link href='/'
                        className='hover:text-primary active:text-white transition duration-300 ease-in-out'>
                            <AiOutlineHome 
                            className='sm:hidden text-2xl h-[120px]'/>
                            <span className='hidden sm:inline'>Home</span>
                        </Link>

                        <Link href='/stock'
                        className='hover:text-primary active:text-white transition duration-300 ease-in-out'>
                            <AiOutlineFileSearch 
                            className='sm:hidden text-2xl h-[120px]'/>
                            <span className='hidden sm:inline'>Estoque</span>
                        </Link>

                        <Link href='/contact' className='hover:primary active:text-white transition duration-300 ease-in-out'>
                            <AiOutlineInfoCircle 
                            className='sm:hidden text-2xl h-[120px]'/>
                            <span className='hidden sm:inline'>Fale Conosco</span>
                        </Link>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default NavBar;