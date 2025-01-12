import React from 'react'
import Link from "next/link";

// 메뉴 아이템의 타입 정의
type MenuItem = {
  id: number;
  label: string;
  href: string;
};


const sideBarList: MenuItem[] = [
  { id: 1, label: "대시보드", href: "admin/dashboard"},
  { id: 2, label: "상품", href: "admin/products"}
]

export const SideBar = () => {
  return (
    <aside className='fixed top-0 z-40 w-64 pt-20 h-screen hidden sm:block border'>
      <div className='h-full px-3 pb-4 overflow-y-auto bg-white '>
        <ul>
          {sideBarList.map((item) => (
            <li>
              <Link 
                href={item.href}
                className='block cursor-pointer hover:bg-gray-200 p-2 rounded-sm text-gray-700'
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
