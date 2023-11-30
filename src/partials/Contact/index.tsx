import Image from "next/image";
import Link from "next/link";

export function Contact() {
  return (
    <section className="flex w-full py-8 lg:py-16 bg-white" id="contato">
      <div className="lg:columns-2 gap-0 mx-auto">

        <div className="flex flex-col justify-center items-center lg:items-end my-auto lg:h-full lg:pr-16 lg:border-r border-gray-400 mx-auto lg:mx-0 ">
          <p className="text-base lg:text-xl text-gray-500"> Entre em contato pelo Whatsapp </p>

          <div className="flex justify-end mt-2 mb-4 lg:mb-6 lg:w-full ">
            <Image width={36} height={36} src="/icons/whatsapp-small.png" alt="icone do Whatsapp" className="mr-4 h-9 w-9" />
            <p className="text-2xl lg:text-3xl text-gray-700 font-bold"> 11 972879578 </p>
          </div>

          <Link
            className="py-4 px-14 bg-white w-fit border border-gray-500 text-base sm:text-xl text-gray-500"
            href="https://api.whatsapp.com/send/?phone=5511972879578&text=Ol%C3%A1%2C%20vi%20o%20seu%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%21"
            target="_blank"
          >
            Enviar mensagem
          </Link>
        </div>

        <div className="flex flex-col my-auto pt-8 lg:pt-0 lg:h-full lg:pl-16 mx-auto lg:mx-0 items-center lg:items-start">
          <p className="text-base lg:text-xl text-gray-500 mb-4 lg:mb-6 text-center">
            Ou entre em contato por nossas redes sociais
          </p>

          <div className="flex items-center">
            <Image width={48} height={48} src="./icons/instagram.png" alt="logo do Instagram" className="mx-4 h-fit" />
            <Image width={48} height={48} src="./icons/facebook.png" alt="logo do Facebook" className="mx-4 h-fit" />
            <Image width={48} height={48} src="./icons/youtube.png" alt="logo do Youtube" className="mx-4 h-fit" />
          </div>
        </div>
      </div>
    </section>
  )
}