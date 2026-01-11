import React from 'react'
import Link from 'next/link'
import { CERTIFICATIONS } from '@/config/experianceConfigData';
import { HiOutlineExternalLink } from 'react-icons/hi';

function Certificates() {
  return (
    <div className='w-full h-auto overflow-hidden pt-10 relative'>
        
        <div className='border w-full py-2 px-5'>
            <h1 className='text-3xl font-bold font-mono text-left'>Certificates</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between w-full h-full'>
          {
            CERTIFICATIONS.map((certificate , index ) => (
              <Link key={index} href={certificate.certicate_link} target='_blank'>
                <div className='relative cursor-pointer h-auto  pb-2 w-full border hover:bg-neutral-200 dark:hover:bg-neutral-800 transition duration-300 pt-2 px-2 relative'>
                  <div className='relative w-full h-full pr-2 lg:pr-8'>
                    <h1 className='font-sans font-bold text-[16px] hover:underline transition duration-300'>{certificate.certificate_name}</h1>
                    <p className=' pl-1 font-mono font-normal text-[12px] text-neutral-500'>{certificate.certicate_discription}</p>
                    <div className='flex-col justify-between flex-wrap items-center w-full'>
                      <div className='flex justify-between gap-1 pt-0 pb-2'>
                        <p className='text-sm font-mono text-neutral-400'>|{certificate.certificate_issuers}</p>
                        <p className='text-[10px] font-mono text-neutral-400'>|{certificate.certicate_date_of_Issue}</p>
                      </div>
                    </div>
                  </div>
                  <span className='absolute right-2 top-2 text-neutral-400'><HiOutlineExternalLink /></span>
                </div>
              </Link>
            ))
          }
        </div>
    </div>
  )
}

export default Certificates

