import styles from './styles.module.scss'

export function PhraseBanner() {
  return (
    <section className={`flex py-32 ${styles.bg_image}`}>
      <h2 className="
        text-center w-11/12 sm:w-[34rem] text-xl sm:text-3xl font-bold text-white mx-auto sm:ml-[40%]
        [text-shadow:_0_0px_5px_rgb(0_0_0_/_50%)]
      "> 
        Aqui, seus sonhos se tornam realidade
      </h2>
    </section>
  )
}