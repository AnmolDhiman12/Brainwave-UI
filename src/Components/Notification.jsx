import React from 'react'
import { notificationImages } from './constants'
import { notification1 } from '../assets'

const Notification = ({className,title}) => {
  return (
    <div className={`${className || " "} flex w-[18rem] h-[5rem] item-center p-2 pr-6 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5  text-semid `}>
        <div className="">
            <img src ={notification1}
            className='rounded-2xl mt-2 ml-2'
            width={60}
            height={60}/>
        </div>
        <div className='flex-1 '>
            <h6 className='font-semibold py-2'>{title}</h6>
            <div className='flex items-center'>
                <ul className='flex'>
                    {notificationImages.map((item) =>(
                        <li key = {item.id}
                            className='w-7 px-1'>
                            <img src = {item}
                            className='rounded-full'
                            />
                        </li>
                    ))}
                <h6 className='text-base opacity-20 pl-4'>1min ago</h6>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Notification
