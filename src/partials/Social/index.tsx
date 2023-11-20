export function Social() {
  return (
    <div className="flex flex-col items-center w-full h-34 py-12 bg-white mx-auto" id="social">
      <p className="text-xl text-gray-500 mb-6 text-center">
        Ou entre em contato por nossas redes sociais
      </p>

      <div className="flex items-center">
        <img src="./icons/instagram.png" alt="logo do Instagram" className="mx-4 h-fit" />
        <img src="./icons/facebook.png" alt="logo do Facebook" className="mx-4 h-fit" />
        <img src="./icons/youtube.png" alt="logo do Youtube" className="mx-4 h-fit" />
        <img src="./icons/zankyou.png" alt="logo do Zankyou" className="mx-4 h-fit" />
      </div>
    </div>
  )
}