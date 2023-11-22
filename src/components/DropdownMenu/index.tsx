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
        <div className={`h-1 w-8 bg-slate-700 my-0.5 ml-4 transition-all ${ isOpen && 'rotate-45 translate-y-1'}`} />
        <div className={`h-1 w-8 bg-slate-700 my-0.5 ml-4 transition-all ${ isOpen && 'hidden'}`} />
        <div className={`h-1 w-8 bg-slate-700 my-0.5 ml-4 transition-all ${ isOpen && '-rotate-45 -translate-y-1'}`} />
      </div>

      <div className={`w-full h-screen bg-gray-500 bg-opacity-50 transition-all ${ isOpen ? 'block' : 'hidden' }`} onClick={handleClick}>
        <div className="w-full">
          <ul className="flex flex-col items-center justify-center text-sm bg-white text-gray-500">
            <li className="w-full text-center">
              <a className="py-4 w-full block" href="#"> INICIO </a>
            </li>
            <li className="w-full text-center">
              <a className="py-4 w-full block" href="#sobre"> SOBRE NÓS </a>
            </li>
            <li className="w-full text-center">
              <a className="py-4 w-full block" href="#servicos"> NOSSOS SERVIÇOS </a>
            </li>
            <li className="w-full text-center">
              <a className="py-4 w-full block" href="#depoimentos"> DEPOIMENTOS </a>
            </li>
            <li className="w-full text-center">
              <a className="py-4 w-full block" href="#contato"> CONTATO </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}