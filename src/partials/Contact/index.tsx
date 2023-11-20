export function Contact() {
  return (
    <div className="flex w-full h-[22rem] bg-white py-12">
      <div className="columns-2 gap-0 mx-auto">
        
        <div className="pr-16 border-r border-gray-400">
          <img src="https://placehold.co/416x248" alt="" />
        </div>

        <div className="flex flex-col justify-center my-auto h-60 pl-16">
          <p className="text-xl text-gray-500"> Entre em contato pelo Whatsapp </p>

          <div className="flex mt-2 mb-6">
            <img src="https://placehold.co/24x24" alt="" className="mr-4" />
            <p className="text-3xl text-gray-700 font-bold"> 11 972879578 </p>
          </div>

          <a 
            className="py-4 px-14 bg-white w-fit border border-gray-500 text-xl text-gray-500"
            href="https://api.whatsapp.com/send/?phone=5511972879578&text=Ol%C3%A1%2C%20vi%20o%20seu%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%21"
            target="_blank"
          >
            Enviar mensagem
          </a>
        </div>
      </div>
    </div>
  )
}