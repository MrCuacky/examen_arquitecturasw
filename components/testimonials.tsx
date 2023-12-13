'use client'
import Image from 'next/image'

import TestimonialImage01 from '@/public/images/testimonial-01.jpg'
import TestimonialImage02 from '@/public/images/testimonial-02.jpg'
import TestimonialImage03 from '@/public/images/testimonial-03.jpg'
import axios from 'axios'
import { useEffect, useState } from 'react'

const initState = {
  nombre: "",
  testimonio: "",
  puesto: ""
}

export default function Testimonials() {

  useEffect(() => {
    getInfo()
  }, [])

  const [testimonials, setTestimonials] = useState([initState])

  async function getInfo() {
    const response = await axios.get('http://127.0.0.1:3001/user')
    setTestimonials(response.data)
  }

  const testimonialImgs = [TestimonialImage01, TestimonialImage02, TestimonialImage03]

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Casos de uso</h2>
            <p className="text-xl text-gray-400">Algunos testimonios de personas que han utilizado blockchain en sus proyectos</p>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

            {
              testimonials.map((t, index) => {
                return (
                  <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up">
                    <div>
                      <div className="relative inline-flex flex-col mb-4">
                        <Image className="rounded-full" src={testimonialImgs[index]} width={48} height={48} alt="Testimonial 01" />
                        <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                        </svg>
                      </div>
                    </div>
                    <blockquote className="text-lg text-gray-400 grow">{t?.testimonio}</blockquote>
                    <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                      <cite className="text-gray-200 not-italic">{t.nombre}</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">{t?.puesto}</a>
                    </div>
                  </div>
                )
              })
            }

          </div>

          {/* Users on board section */}
          <div className="mt-16 text-center">
            <h2 className="h2 mb-4">Usuarios a bordo</h2>
            <div className="flex justify-center items-center space-x-8">
              {
                testimonials.map((t, index) =>{
                  return (
                    <div>
                      <Image className="rounded-full" src={testimonialImgs[index]} width={64} height={64} alt={t?.nombre} />
                      <p className="text-gray-400 mt-2">{t?.nombre}</p>
                    </div>
                  )
                })
              }
              {/*<div>
                <Image className="rounded-full" src={TestimonialImage02} width={64} height={64} alt="User 02" />
                <p className="text-gray-400 mt-2">Usuario 02</p>
              </div>
              <div>
                <Image className="rounded-full" src={TestimonialImage03} width={64} height={64} alt="User 03" />
                <p className="text-gray-400 mt-2">Usuario 03</p>
              </div>*/}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
