// @ts-nocheck

import { DropdownMenu } from "@/components/DropdownMenu"
import Link from "next/link"

export const Navbar = () => {
  return (
    <navbar className={`flex flex-col items-center fixed top-0 w-[calc(100%-32px)] z-10 pt-6 sm:h-52 sm:w-full bg-white sm:relative`}>
      <div className="flex items-center justify-center mb-8">
        <div className="w-24 sm:w-48 h-10 sm:h-20">
          <img src="./logo-192.png" alt="logo da Donas do Altar" />
        </div>
      </div>

      {/* Desktop and tablet menu */}
      <div className="border-gray-500 border-solid border-b w-11/12 lg:w-8/12 hidden sm:block">
        <ul className="flex items-center justify-center text-sm pb-4 text-gray-500">
          <li className="mx-2">
            <Link href="/#"> INICIO </Link>
          </li>
          <li className="mx-2">
            <Link href="/#sobre"> SOBRE NÓS </Link>
          </li>
          <li className="mx-2">
            <Link href="/#servicos"> NOSSOS SERVIÇOS </Link>
          </li>
          <li className="mx-2">
            <Link href="/#depoimentos"> DEPOIMENTOS </Link>
          </li>
          <li className="mx-2">
            <Link href="/#contato"> CONTATO </Link>
          </li>
        </ul>
      </div>

      {/* Mobile menu */}
      <DropdownMenu />

    </navbar>
  )
}