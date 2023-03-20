import {useState, useEffect} from 'react';
import Link from 'next/link';
import Head from 'next/head';
import NavBar from '../components/NavBar';
import {AiOutlineWhatsApp, AiOutlinePhone, AiOutlineCar, 
  AiOutlineHome, AiOutlineFileSearch, AiOutlineInfoCircle} from 'react-icons/ai'

export default function Home() {

  const [scrollCount, setScrollCount] = useState<number>(0);
  const [animationClass, setAnimationClass] = useState<Array<string>>(['h-60 ml-auto mr-[-100%] sm:animate-gif-transition animate-sm-gif-transition rounded-full blur-[0.5px] opacity-[0.9]', 'h-60 ml-auto mr-[-100%] sm:animate-gif-transition2 animate-sm-gif-transition2 rounded-full blur-[0.5px] opacity-[0.9]', 'h-60 ml-auto mr-[-100%] sm:animate-gif-transition3 animate-sm-gif-transition3 rounded-full blur-[0.5px] opacity-[0.9]','absolute flex flex-wrap justify-center items-center h-[38rem] w-[60%] ml-[-55%] animate-slide-box-transition -translate-y-[110%] bg-primarybox/10 shadow-2xl backdrop-blur']);

  useEffect(() => {
    console.log('useeffect')
    const handleCounter = () => {
        setScrollCount(Math.round(window.scrollY));
    };

    const handleScroll = () => {
      if (scrollCount > 650) {
        setAnimationClass(['h-60 ml-auto mr-[-100%] rounded-full blur-[0.5px] opacity-[0.9]', 
        'h-60 ml-auto mr-[-100%] rounded-full blur-[0.5px] opacity-[0.9]', 
        'h-60 ml-auto mr-[-100%] rounded-full blur-[0.5px] opacity-[0.9]', 'absolute flex flex-wrap justify-center items-center h-[38rem] w-[60%] ml-[-55%] -translate-y-[110%] bg-primarybox/10 shadow-2xl backdrop-blur']);
      } else if (scrollCount > -1 && scrollCount < 650) {
        setAnimationClass([
          'h-60 ml-auto mr-[-100%] sm:animate-gif-transition animate-sm-gif-transition rounded-full blur-[0.5px] opacity-[0.9]', 'h-60 ml-auto mr-[-100%] sm:animate-gif-transition2 animate-sm-gif-transition2 rounded-full blur-[0.5px] opacity-[0.9]', 'h-60 ml-auto mr-[-100%] sm:animate-gif-transition3 animate-sm-gif-transition3 rounded-full blur-[0.5px] opacity-[0.9]', 'absolute flex flex-wrap justify-center items-center h-[38rem] w-[60%] ml-[-55%] animate-slide-box-transition -translate-y-[110%] bg-primarybox/10 shadow-2xl backdrop-blur'])
      }
    }
    window.addEventListener('scroll', handleCounter);
    window.addEventListener('scroll', handleScroll);
  }, [scrollCount]);

  return (
    <>
      
      <Head>
        <title>Landing Page Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main className='h-full bg-tertiarybg'>
        
        <section className='h-[45rem]'>
          
          <div className='overflow-hidden h-[45rem]'>
           <img src='./cargif1.gif' alt='car gif'
            className={animationClass[0]}></img>

            <img src='./cargif2.gif' alt='car gif' 
            className={animationClass[1]}></img>

            <img src='./cargif3.gif' alt='car gif'
            className={animationClass[2]}></img>
          </div>

          <div className={animationClass[3]}>

            <div className='relative flex w-5/6 h-[60%] sm:h-[5%] text-white'>
              <span className='self-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras faucibus ullamcorper accumsan. Nulla facilisis nulla sit amet mauris pharetra posuere. Nulla aliquam imperdiet lorem.</span>
            </div>
            
            <div className='relative flex justify-center w-full h-[20%] sm:h-[30%] text-white'>
              <button className='relative self-center p-[20px] transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/20 hover:bg-white/10'>
                <Link href='/stock'>
                Compre seu carro agora!
                </Link>
              </button>
            </div>
            
          </div>

        </section>

        <section className='flex flex-wrap items-center justify-center h-[70rem] bg-secondarybg text-white'>
          <h1 className='text-center w-full h-[1rem] mt-auto font-bold text-2xl mb-2'>Compre agora</h1>

          <div className='flex flex-wrap items-center justify-evenly  m-2 xl:m-48 2xl:m-80'>
            <div className='h-[8rem] md:h-[14rem] lg:h-[16rem] m-1 bg-white/10 shadow-2xl blur-[1px] hover:blur-0 overflow-hidden'>
              <img src='/carimg1.jpg' alt='car image'
              className='h-full hover:scale-125 transition duration-500 ease-in-out'></img>
            </div>

            <div className='h-[8rem] md:h-[14rem] lg:h-[16rem] m-1 bg-white/10 shadow-2xl blur-[1px] hover:blur-0 overflow-hidden'>
              <img src='/carimg2.jpg' alt='car image'
              className='h-full hover:scale-125 transition duration-500 ease-in-out'></img>
            </div>

            <div className='h-[8rem] md:h-[14rem] lg:h-[16rem] m-1 bg-white/10 shadow-2xl blur-[1px] hover:blur-0 overflow-hidden'>
              <img src='/carimg3.jpg' alt='car image'
              className='h-full hover:scale-125 transition duration-500 ease-in-out'></img>
            </div>

            <div className='h-[8rem] md:h-[14rem] lg:h-[16rem] m-1 bg-white/10 shadow-2xl blur-[1px] hover:blur-0 overflow-hidden'>
              <img src='/carimg4.jpg' alt='car image'
              className='h-full hover:scale-125 transition duration-500 ease-in-out'></img>
            </div>

            <div className='h-[8rem] md:h-[14rem] lg:h-[16rem] m-1 bg-white/10 shadow-2xl blur-[1px] hover:blur-0 overflow-hidden'>
              <img src='/carimg5.jpg' alt='car image'
              className='h-full hover:scale-125 transition duration-500 ease-in-out'></img>
            </div>

            <div className='h-[8rem] md:h-[14rem] lg:h-[16rem] m-1 bg-white/10 shadow-2xl blur-[1px] hover:blur-0 overflow-hidden'>
              <img src='/carimg6.jpg' alt='car image'
              className='h-full hover:scale-125 transition duration-500 ease-in-out'></img>
            </div>

            <div className='h-[8rem] md:h-[14rem] lg:h-[16rem] m-1 bg-white/10 shadow-2xl blur-[1px] hover:blur-0 overflow-hidden'>
              <img src='/carimg7.jpg' alt='car image'
              className='h-full hover:scale-125 transition duration-500 ease-in-out'></img>
            </div>

          </div>

        </section>

        <section className='flex flex-wrap items-center justify-center h-[60rem] bg-tertiarybg text-white'>

          <div className='flex flex-wrap items-center justify-center w-3/4 mt-auto mb-1'>
            <img src='/handshaking.jpg' alt='hands shaking'></img>
          </div>

          <div className='flex flex-wrap items-center justify-left w-3/4 mt-1 mb-auto'>
            <h1 className='font-bold text-2xl my-2'>Serviço de qualidade!</h1>
            <p className='text-2xl my-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras faucibus ullamcorper accumsan. Nulla facilisis nulla sit amet mauris pharetra posuere.</p>
            <button className='flex p-5 bg-green-600 text-3xl rounded-full leading-none my-2'>
              <AiOutlineWhatsApp/>&nbsp;Chamar no WhatsApp</button>
          </div>

        </section>
      </main>
    </>
  )
}
