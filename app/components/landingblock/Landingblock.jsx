import React from 'react'
import Link from 'next/link'

export default function Landingblock() {
  return (
    <div>
        <div>
            <div className='flex-col'>
                <div>
                    <h1 className='font-bold text-[156px]'>
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
                <img src="" alt="" />
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
