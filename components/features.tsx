export default function Features() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Descubre el Mundo de Blockchain</h2>
            <p className="text-xl text-gray-400">Explora las características clave y los beneficios que blockchain aporta a diversas industrias y procesos.</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                {/* SVG Path para el 1er ítem relacionado con blockchain */}
              </svg>
              <h4 className="h4 mb-2">Descentralización</h4>
              <p className="text-lg text-gray-400 text-center">Blockchain elimina la necesidad de intermediarios al permitir la ejecución directa de transacciones entre pares, lo que resulta en un sistema más descentralizado y resistente a la censura.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                {/* SVG Path para el 2do ítem relacionado con blockchain */}
              </svg>
              <h4 className="h4 mb-2">Seguridad y Criptografía</h4>
              <p className="text-lg text-gray-400 text-center">La tecnología blockchain utiliza métodos avanzados de criptografía para garantizar la seguridad y la integridad de los datos almacenados, proporcionando un entorno altamente seguro.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                {/* SVG Path para el 3er ítem relacionado con blockchain */}
              </svg>
              <h4 className="h4 mb-2">Transparencia</h4>
              <p className="text-lg text-gray-400 text-center">La información almacenada en blockchain es accesible y transparente para todos los participantes autorizados, promoviendo la confianza y la visibilidad en los procesos.</p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                {/* SVG Path para el 4to ítem relacionado con blockchain */}
              </svg>
              <h4 className="h4 mb-2">Contratos Inteligentes</h4>
              <p className="text-lg text-gray-400 text-center">Automatiza y ejecuta contratos sin intermediarios mediante contratos inteligentes, facilitando acuerdos autónomos y eficientes en la cadena de bloques.</p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                {/* SVG Path para el 5to ítem relacionado con blockchain */}
              </svg>
              <h4 className="h4 mb-2">Tokenización de Activos</h4>
              <p className="text-lg text-gray-400 text-center">Transforma activos físicos o virtuales en tokens digitales, permitiendo una representación más eficiente y fraccionada de la propiedad en la cadena de bloques.</p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="500" data-aos-anchor="[data-aos-id-blocks]">
            <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                {/* <rect className="fill-current text-purple-600" width="64" height="64" rx="32" /> */}
                {/* <g transform="translate(21 22)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <path className="stroke-current text-purple-300" d="M17 2V0M19.121 2.879l1.415-1.415M20 5h2M19.121 7.121l1.415 1.415M17 8v2M14.879 7.121l-1.415 1.415M14 5h-2M14.879 2.879l-1.415-1.415" />
                  <circle className="stroke-current text-purple-300" cx="17" cy="5" r="3" />
                  <path className="stroke-current text-purple-100" d="M8.86 1.18C3.8 1.988 0 5.6 0 10c0 5 4.9 9 11 9a10.55 10.55 0 003.1-.4L20 21l-.6-5.2a9.125 9.125 0 001.991-2.948" />
                </g> */}
              </svg>
              <h4 className="h4 mb-2">Apps Descentralizadas</h4>
              <p className="text-lg text-gray-400 text-center">Descubre y utiliza aplicaciones descentralizadas que operan en blockchain, ofreciendo mayor resistencia a la censura y transparencia en comparación con las aplicaciones tradicionales.</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
