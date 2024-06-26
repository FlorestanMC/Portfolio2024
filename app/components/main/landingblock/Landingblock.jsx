import React from 'react'
import Link from 'next/link'

export default function Landingblock() {
  return (
    <div className='flex-col mt-20'>
        <div className='flex justify-between'>
            <div className='flex-col mr-6'>
                <div className=''>
                    <h1 className='hover:scale-105 hover:duration-[400ms] leading-[135px] mb-2 lg:text-[125px] xl:text-[165px] font-bold text-[#FDC93F]'>
                        Florestan
                    </h1>
                </div>
                <div className='flex'>
                    <div className=' lg:p-[30px_20px] lg:pr-24 mr-3 border  border-black rounded-[38px] shadow-[0_15px_0_0] justify-center flex-col flex shadow-black'>
                        <h3 className='xl:text-4xl lg:text-2xl xl:mb-4 lg:mb-2 font-bold xl:max-w-[440px] lg:max-w-[280px] hover:scale-105 hover:duration-[400ms]'>Student in Computer Sciences & Web Developpement</h3>
                        <h3 className='xl:text-4xl lg:text-2xl xl:mb-4 lg:mb-2 font-normal hover:scale-105 hover:duration-[400ms]'>at</h3>
                        <h3 id='h3-isis' className='xl:text-4xl  lg:text-2xl italic  text-[#F54286] hover:scale-105 hover:duration-[400ms]'>ISIS ENGINEER SCHOOL</h3>
                    </div>
                    <div>
                        <img className='border xl:w-[250px] lg:w-[200px] border-black rounded-[38px] shadow-[0_15px_0_0] shadow-black' src="my_photo.png" alt="Photo de Florestan Mellé-Cappellin" />
                    </div>
                </div>
                <div>
                    <h4 className=' mt-5 mb-3'>I am experienced with software such as</h4>
                    <div className='flex justify-between'>

                    

                        {/* // LOGO JAVASCRIPT */}
                        <div className='mr-3 rounded-lg p-[20px_24px] border border-black shadow-[0_8px_0_0]'>
                           <img className="w-14 pt-1 hover:scale-110 hover:duration-300" src="javascript-icon.png" alt="" />
                        </div>
                        {/* // LOGO FIGMA */}
                        <div className='mr-3 rounded-lg p-[20px_24px] border border-black shadow-[0_8px_0_0]'>
                           <img className="w-14 pt-1 hover:scale-110 hover:duration-300" src="figma-icon.png" alt="" />
                        </div>
                        {/* // LOGO NODEJS */}
                        <div className='mr-3 rounded-lg p-[20px_24px] border border-black shadow-[0_8px_0_0]'>
                           <img className="w-14 pt-1 hover:scale-110 hover:duration-300" src="nodejs-icon.png" alt="" />
                        </div>
                        {/* // LOGO REACT */}
                        <div className='mr-3 rounded-lg p-[20px_24px] border border-black shadow-[0_8px_0_0]'>
                           <img className="w-14 pt-1 hover:scale-110 hover:duration-300" src="react-icon.png" alt="" />
                        </div>
                        {/* // LOGO NEXTJS */}
                        <div className='mr-3 rounded-lg p-[20px_24px] border border-black shadow-[0_8px_0_0]'>
                           <img className="w-14 pt-1 hover:scale-110 hover:duration-300" src="nextjs-icon.png" alt="" />
                        </div>
                        {/* // LOGO LARAVEL */}
                        <div className='mr-3 rounded-lg p-[20px_24px] border border-black shadow-[0_8px_0_0]'>
                           <img className="w-14 pt-1 hover:scale-110 hover:duration-300" src="laravel-icon.png" alt="" />
                        </div>
                        {/* // LOGO TAILWIND */}
                        <div className=' rounded-lg p-[20px_24px] border border-black shadow-[0_8px_0_0]'>
                           <img className="w-14 pt-3 hover:scale-110 hover:duration-300" src="tailwind-icon.png" alt="" />
                        </div>
                    </div>
                </div>
            </div> 
            <div>
                <img className='lg:max-w-[415px] xl:max-w-full  border  border-black rounded-[38px] shadow-[0_10px_0_0]' src="Mon_Parcours.png" alt="Illustration des différentes étapes de mon parcours scolaire" />
            </div>
            
        </div>
        <div className='flex mt-5'>
            <div className=' lg:p-[30px_20px] w-[40%] lg:pr-24 mr-3 border bg-[#8396DB] border-black rounded-[38px] shadow-[0_15px_0_0] justify-center flex-col flex shadow-black'>

            </div>
            <div className=' lg:p-[30px_20px] w-[60%] lg:pr-24 border  border-black rounded-[38px] shadow-[0_15px_0_0] justify-center flex-col flex shadow-black'>
                <h3 id='last-proj' className='text-[35px] font-bold text-[#FDC93F] drop-shadow-[2px_3px_0_0] shadow-black'>SAE301 ~ MMI Storage</h3>
                <div className='border border-[#FDC93F]'></div>
                <div className='flex mt-2 justify-between'>
                    <div className='w-1/2'>
                        <p>Une application permettant à un utilisateur de se créer un compte puis de pouvoir poster et présenter des projets. </p>
                        <Link target="_blank" href="https://webmmi.iut-tlse3.fr/~mlf4350a/2A/SAE301-Application%20MMI/">
                            <div className='p-2 mt-2 rounded-full w-8 h-8 border border-black hover:scale-105 hover:duration-[400ms]'>
                                <img src="arrow.png" alt="image de flèche" />
                            </div>
                        </Link>
                    </div>
                    
                        <div className='w-1/3'>
                            <Link target="_blank" href="https://webmmi.iut-tlse3.fr/~mlf4350a/2A/SAE301-Application%20MMI/">
                                <img className='rounded-lg drop-shadow-md shadow-black hover:scale-105 hover:duration-[400ms]' src="mmistorage.png" alt="" />
                            </Link>
                        </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}
