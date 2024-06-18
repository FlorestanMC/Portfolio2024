import React from 'react'
import Link from 'next/link'

export default function Landingblock() {
  return (
    <div className='flex-col mt-20'>
        <div className='flex'>
            <div className='flex-col'>
                <div>
                    <h1 className='font-bold text-[#FDC93F] text-[146px] mr-6 relative bottom-12 drop-shadow-[2px_3px_0_0] shadow-black'>
                        Florestan
                    </h1>
                </div>
                <div>
                    <div>
                        <h3>Student in Computer Sciences & Web Developpement</h3>
                        <h3>at</h3>
                        <h3>ISIS ENGINEER SCHOOL</h3>
                    </div>
                    <div>
                        <img src="" alt="" />
                    </div>
                </div>
                <div>
                    <h4>I am experienced with software such as</h4>
                    <div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
            <div>
                <img src="Mon_Parcours.png" alt="Illustration des différentes étapes de mon parcours scolaire" />
            </div>
        </div>
        <div className='flex'>
            <div>

            </div>
            <div className='flex-col'>
                <h3>SAE301 tilde MMI Storage</h3>
                <div className='border border-[#FDC93F]'></div>
                <div>
                    <div>
                        <p>Une application permettant à un utilisateur de se créer un compte puis de pouvoir poster et présenter des projets. </p>
                        <Link href="/">
                            <div className='rounded-full w-4 h-4 border border-black'>
                                <img src="" alt="" />
                            </div>
                        </Link>
                    </div>
                    <div>
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
