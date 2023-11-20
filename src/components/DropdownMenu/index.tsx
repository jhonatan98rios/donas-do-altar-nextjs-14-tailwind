'use client'

import { useState } from "react"

export function DropdownMenu() {

  const [isOpen, setOpen] = useState(false)

  function handleClick() {
    setOpen(!isOpen)
  }

  return (
    <div className="block sm:hidden h-24 fixed top-0 left-4 w-[calc(100%-32px)] z-10 border border-gray-200">

      <div className="menu-icon flex flex-col justify-center h-full" onClick={handleClick}>
        <div className={`h-1 w-8 bg-slate-700 my-1 ml-4 transition-all ${ isOpen && 'rotate-45 translate-y-1.5'}`} />
        <div className={`h-1 w-8 bg-slate-700 my-1 ml-4 transition-all ${ isOpen && 'hidden'}`} />
        <div className={`h-1 w-8 bg-slate-700 my-1 ml-4 transition-all ${ isOpen && '-rotate-45 -translate-y-1.5'}`} />
      </div>

      <div className={`w-full h-screen bg-gray-500 bg-opacity-50 transition-all ${ isOpen ? 'block' : 'hidden' }`} onClick={handleClick}>
        <div className="border-gray-700 w-full">
          <ul className="flex flex-col items-center justify-center text-sm bg-white">
            <li className="py-4">
              <a href="#"> INICIO </a>
            </li>
            <li className="py-4">
              <a href="#"> SOBRE NÓS </a>
            </li>
            <li className="py-4">
              <a href="#"> NOSSOS SERVIÇOS </a>
            </li>
            <li className="py-4">
              <a href="#"> DEPOIMENTOS </a>
            </li>
            <li className="py-4">
              <a href="#"> CONTATO </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}