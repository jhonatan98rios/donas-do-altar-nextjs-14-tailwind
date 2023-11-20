// @ts-nocheck

import { DropdownMenu } from "@/components/DropdownMenu"

export const Navbar = () => {
  return (
    <navbar className={`flex flex-col items-center fixed top-0 w-[calc(100%-32px)] z-10 pt-6 sm:h-52 sm:w-full bg-slate-300 sm:relative`}>
      <div className="flex items-center justify-center mb-8">
        <div className="w-24 sm:w-48 bg-slate-500 h-10 sm:h-20">

        </div>
      </div>

      {/* Desktop and tablet menu */}
      <div className="border-gray-700 border-solid border-b w-11/12 lg:w-8/12 hidden sm:block">
        <ul className="flex items-center justify-center text-sm pb-4">
          <li className="mx-2">
            <a href="#"> INICIO </a>
          </li>
          <li className="mx-2">
            <a href="#"> SOBRE NÓS </a>
          </li>
          <li className="mx-2">
            <a href="#"> NOSSOS SERVIÇOS </a>
          </li>
          <li className="mx-2">
            <a href="#"> DEPOIMENTOS </a>
          </li>
          <li className="mx-2">
            <a href="#"> CONTATO </a>
          </li>
        </ul>
      </div>

      {/* Mobile menu */}
      <DropdownMenu />

    </navbar>
  )
}