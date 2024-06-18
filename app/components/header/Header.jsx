import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <div className='flex justify-between'>
        <div className='flex'>
            <Link href="https://webmmi.iut-tlse3.fr/~mlf4350a/">
              <div className='w-16 h-16 mr-12 rounded-full hover:shadow-none transition duration-600  border-black border shadow-[2px_3px_0_0] shadow-black bg-[#2AA392]'>
                <img className='object-contain p-3' src="books.png"/>
              </div>
            </Link>
            <Link href="https://github.com/FlorestanMC/">
              <div className='w-16 h-16 mr-12 hover:shadow-none transition duration-600 border-black border rounded-full shadow-[2px_3px_0_0] shadow-black bg-[#FDC93F]'>
                <img className='object-contain p-3' src="github-logo.png"/>
              </div>
            </Link>
            <Link href="https://webmmi.iut-tlse3.fr/~gnt3695a/Sae303/s3-sae-thomas-etienne-florestan/">
              <div className='w-16 h-16 mr-12 hover:shadow-none transition duration-600 border-black border rounded-full shadow-[2px_3px_0_0] shadow-black bg-[#8396DB]'>
                <img className='object-contain p-3' src="porcorosso-nocolors.png"/>  
              </div>
            </Link>
            <Link href="https://www.linkedin.com/in/florestan-mell%C3%A9-cappellin-366b0b253/">
              <div className='w-16 h-16 hover:shadow-none transition duration-600 border-black border rounded-full shadow-[2px_3px_0_0] shadow-black bg-[#F54286]'>
                <img className='object-contain p-3' src="linkedin-logo.png"/>
              </div>
            </Link>
        </div>
        <div className='flex'>
        <Link className='flex items-center' href="https://www.linkedin.com/in/florestan-mell%C3%A9-cappellin-366b0b253/">
          <div className='rounded-full mr-5 hover:shadow-none transition duration-600 border-black border py-1 px-4 shadow-[2px_3px_0_0] font-black shadow-black bg-[#FDC93F]'>
            Home
          </div>
        </Link>
        <Link className='flex items-center' href="https://www.linkedin.com/in/florestan-mell%C3%A9-cappellin-366b0b253/">
          <div className='rounded-full mr-5 hover:shadow-none transition duration-600 border-black border py-1 px-4 shadow-[2px_3px_0_0] font-black shadow-black bg-[#FDC93F]'>
            My Work
          </div>
        </Link>
        <Link className='flex items-center' href="https://www.linkedin.com/in/florestan-mell%C3%A9-cappellin-366b0b253/">
          <div className="rounded-full hover:shadow-none transition duration-600 border-black border py-1 px-4 shadow-[2px_3px_0_0] font-black shadow-black bg-[#FDC93F]">
            Contact me !
          </div>
        </Link>
        </div>
    </div>
  )
}
