import Link from "next/link";

export function Social() {
  return (
    <section className="flex flex-col items-center w-full h-34 pb-4 mx-auto bg-white" id="social">
      <p className="text-xl text-gray-500 mb-6 text-center">
        Ou entre em contato por nossas redes sociais
      </p>

      <div className="flex items-center">
        <Link href="https://www.instagram.com/donasdoaltar/?hl=en">
          <img src="./icons/instagram.png" alt="logo do Instagram" className="mx-4 h-fit" />
        </Link>

        <Link href="https://www.facebook.com/donasdoaltar/?locale=pt_BR">
          <img src="./icons/facebook.png" alt="logo do Facebook" className="mx-4 h-fit" />
        </Link>

        <Link href="https://www.youtube.com/channel/UCUpd55P0T6E2-tAD9SHeUFw">
          <img src="./icons/youtube.png" alt="logo do Youtube" className="mx-4 h-fit" />
        </Link>
      </div>
    </section>
  )
}