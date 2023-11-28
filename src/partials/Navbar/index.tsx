// @ts-nocheck

import { DropdownMenu } from "@/components/DropdownMenu"
import Image from "next/image"
import Link from "next/link"

export const Navbar = () => {
  return (
    <navbar className={`flex flex-col items-center fixed top-0 left-0 z-10 pt-6 sm:h-52 w-full bg-white sm:relative`}>
      <div className="flex items-center justify-center mb-8">
        <div className="w-24 sm:w-48 h-10 sm:h-20">
          <Image width={280} height={96} src="/logo.png" alt="logo da Donas do Altar" />
          <h1 className="hidden"> Donas do Altar </h1>
        </div>
      </div>

      {/* Desktop and tablet menu */}
      <div className="border-gray-500 border-solid border-b w-11/12 lg:w-8/12 hidden sm:block">
        <ul className="flex items-center justify-center text-sm pb-4 text-gray-500">
          <li className="mx-4">
            <Link href="/#"> INICIO </Link>
          </li>
          <li className="mx-4">
            <Link href="/#sobre"> SOBRE NÓS </Link>
          </li>
          <li className="mx-4">
            <Link href="/#servicos"> NOSSOS SERVIÇOS </Link>
          </li>
          <li className="mx-4">
            <Link href="/#depoimentos"> O QUE FALAM SOBRE NÓS </Link>
          </li>
          <li className="mx-4">
            <Link href="/#contato"> CONTATO </Link>
          </li>
        </ul>
      </div>

      {/* Mobile menu */}
      <DropdownMenu />

    </navbar>
  )
}