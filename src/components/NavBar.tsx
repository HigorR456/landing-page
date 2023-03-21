import React from 'react';
import Link from 'next/link';
import {AiOutlineWhatsApp, AiOutlinePhone, AiOutlineCar, 
    AiOutlineHome, AiOutlineFileSearch, AiOutlineInfoCircle} from 'react-icons/ai'

const NavBar = ({ homeStart }: any) => {
    return (
        <>
            <header className='sticky top-0 z-50 bg-primarybg/75 backdrop-blur text-white'>
                <div className='flex justify-around bg-primary text-black'>
                    <div className='flex leading-none m-2'><AiOutlineWhatsApp/> (11) 9999-9999</div>
                    <div className='flex leading-none m-2'><AiOutlinePhone/> (11) 9999-9999</div>
                </div>

                <div> 
                    <nav className='flex items-center justify-around leading-[120px] font-semibold'>

                        <Link href='/'
                        onClick={homeStart}
                        className='flex text-xl leading-[120px] sm:text-3xl sm:leading-[120px] md:text-5xl md:leading-[120px]'>
                            <AiOutlineCar className='h-[120px]'/>
                            <span>Landing Page</span>
                        </Link>

                        <Link href='/'
                        onClick={homeStart}
                        className='flex items-center justify-center w-16 sm:w-32 h-16 hover:text-primary hover:bg-tertiarybg rounded-full  active:text-white transition duration-300 ease-in-out'>
                            <AiOutlineHome 
                            className='h-12 w-12 p-2 sm:hidden text-2xl'/>
                            <span className='p-3 hidden sm:inline'>Home</span>
                        </Link>

                        <Link href='/stock'
                        className='flex items-center justify-center w-16 sm:w-32 h-16 hover:text-primary hover:bg-tertiarybg rounded-full active:text-white transition duration-300 ease-in-out'>
                            <AiOutlineFileSearch 
                            className='h-12 w-12 p-2 sm:hidden text-2xl'/>
                            <span className='p-3 hidden sm:inline'>Estoque</span>
                        </Link>

                        <Link href='/contact' 
                        className='flex items-center justify-center w-16 sm:w-32 h-16 hover:text-primary hover:bg-tertiarybg rounded-full active:text-white transition duration-300 ease-in-out'>
                            <AiOutlineInfoCircle 
                            className='h-12 w-12 p-2 sm:hidden text-2xl'/>
                            <span className='p-3 hidden sm:inline'>Fale Conosco</span>
                        </Link>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default NavBar;