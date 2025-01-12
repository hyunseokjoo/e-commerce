import React from 'react'
import { Menu } from 'lucide-react'
import { AvatarMenu } from '@/components/admin/AvatarMenu'

export const NavBar = () => {
  return (
    <nav className='fixed top-0 z-50 w-full bg-white border-b border-gray-200'>
        <div className='px-3 py-3 lg:px-5 lg:pl-3'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center justify-start'>
                    <button className='inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200'>
                        <Menu />
                    </button>
                    <a href="https://flowbite.com" className="flex ms-2 md:me-24">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 me-3" alt="FlowBite Logo" />
                        <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Flowbite</span>
                    </a>
                </div>
                
                <div className='flex items-center'>
                    <AvatarMenu />
                </div>
            </div>
        </div>
        
    </nav>
  )
}
