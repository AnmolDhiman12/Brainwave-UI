import React from 'react'
import { companyLogos } from './constants'
const CompanyLogos = ({className}) => {
  return (
        <div className={className}>
        <h6 className='pt-10 font-code text-center text-sm opacity-50 uppercase'>
        Helping people create beautiful content at
        </h6>
        <ul className='mt-15 flex justify-center'>
            {companyLogos.map((item)=>(
                <li className='px-5'
                key = {item.id}>
                <img src ={item}
                width={150}
                height={80}
                />
                </li>

            ))}
        </ul>
        </div>
)
}

export default CompanyLogos