// @ts-nocheck

export const Navbar = () => {
  return (
    <navbar className={`flex flex-col items-center pt-6 h-52 w-full bg-slate-300`}>
      <div className="flex items-center justify-center mb-8">
        <div className="w-48 bg-slate-500 h-20">

        </div>
      </div>

      <div className="border-gray-700 border-solid border-b w-8/12">
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
    </navbar>
  )
}