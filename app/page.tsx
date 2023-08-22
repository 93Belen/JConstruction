"use client"

import ContactButton from "./components/ContactButton";
import { anton } from "./layout";
import { MdOutlineKitchen } from 'react-icons/md'
import { FaShower } from 'react-icons/fa'
import { BsHouseDoor } from 'react-icons/bs'
import { selectedLanguage as headers } from "components/content/headers";
import { useWebStore } from "./state/store";
import { selectedLanguage } from "components/content/text/home";


export default function Home() {
  const store = useWebStore()
  const language = store.language
  const contentHeader = language === 'spanish' ? headers.spanish : headers.english
  const content = language === 'spanish' ? selectedLanguage.spanish : selectedLanguage.english



  return (
    <main className='min-h-[90vh]'>
      {/* DESKTOP HERO */}
      <section
      className='hidden md:block h-[42.5rem] bg-[url("/home-hero.png")] bg-cover bg-no-repeat bg-bottom py-28 pl-20'>
          <div className='flex flex-col gap-4'>
            <h1 className={`text-orange text-[4rem] font-bold max-w-[600px] ${anton.className}`}>{contentHeader.home.h1}
            </h1>
            <h2 className='text-white font-mono w-[50%] max-w-[800px] text-[1.8rem]'>{content.slogan}</h2>
              <ContactButton/>
          </div>

      </section>

      {/* MOBILE HERO */}
      <section className='flex flex-col md:hidden'>
        <div className='h-[16rem] bg-[url("/home-hero.png")] bg-cover bg-center'>
        </div>
        <div className='flex flex-col gap-4 px-4 pb-20 pt-10'>
            <h1 className={`text-orange text-[3rem] font-bold ${anton.className}`}>{contentHeader.home.h1}
            </h1>
            <h2 className='text-white font-mono w-[90%] text-[1.4rem]'>{content.slogan}</h2>
              <ContactButton/>
        </div>
      </section>
      {/* OUR SERVICES */}
      <section className='bg-white pt-10 md:pt-20'>
          <h2 className={`${anton.className} text-blue text-center md:text-[4rem] text-[3.5rem]`}>{contentHeader.home.h2}</h2>
          <div className='flex flex-col md:flex-row justify-center lg:w-[80%] xl:gap-9 max-w-[1200px] m-auto md:py-14'>
          <div className='flex flex-col gap-10 p-3'>
              <div className='border-blue border-2 rounded-md px-4 py-3 flex flex-col gap-2 text-blue h-full xl:w-[370px]'>
                  <MdOutlineKitchen className='text-[70px] text-orange'/>
                  <h4 className='font-bold text-[1.4rem]'>{content.services.a.name}</h4>
                  <p>{content.services.a.p}</p>
              </div>
          </div>
          <div className='flex flex-col gap-10 p-3'>
              <div className='border-blue border-2 rounded-md px-4 py-3 flex flex-col gap-2 text-blue h-full xl:w-[370px]'>
                  <FaShower className='text-[70px] text-orange'/>
                  <h4 className='font-bold text-[1.4rem]'>{content.services.b.name}</h4>
                  <p>{content.services.b.p}</p>
              </div>
          </div>
          <div className='flex flex-col gap-10 p-3'>
              <div className='border-blue border-2 rounded-md px-4 py-3 flex flex-col gap-2 text-blue h-full xl:w-[370px]'>
                  <BsHouseDoor className='text-[70px] text-orange'/>
                  <h4 className='font-bold text-[1.4rem]'>{content.services.c.name}</h4>
                  <p>{content.services.c.p}</p>
              </div>
          </div>
          </div>
      </section>
      {/* BY THE NUMBERS */}
      <section className='bg-[url("/smoke.png")] bg-bottom bg-no-repeat bg-cover h-fit pt-10 md:pt-20 px-5'>
        <h2 className={`${anton.className} text-orange md:text-[4rem] text-[3rem] lg:pl-40 pb-2`}>{contentHeader.home.h3}</h2>
        <div className='flex flex-col md:flex-row justify-center xl:w-[80%] xl:gap-20 gap-6 max-w-[1500px] m-auto md:py-14'>
          <div className='text-white font-bold font-mono  h-full md:w-[370px] flex flex-col gap-1'>
            <h3 className='text-[4.5rem]'>
              <span className='text-orange font-bold'>+</span>
              15
            </h3>
            <h4 className='font-bold text-[1.25rem]'>{content.numbers.a.name}</h4>
            <p className='text-[1rem]'>{content.numbers.a.p}</p>
          </div>
          <div className='text-white font-bold font-mono  h-full md:w-[370px] flex flex-col gap-1'>
            <h3 className='text-[4.5rem]'>
              <span className='text-orange font-bold'>+</span>
              400
            </h3>
            <h4 className='font-bold text-[1.25rem]'>{content.numbers.b.name}</h4>
            <p className='text-[1rem]'>{content.numbers.b.p}</p>
          </div>
          <div className='text-white font-bold font-mono  h-full md:w-[370px] flex flex-col gap-1'>
            <h3 className='text-[4.5rem]'>
              100
              <span className='text-orange font-bold'>%</span>
            
            </h3>
            <h4 className='font-bold text-[1.25rem]'>{content.numbers.c.name}</h4>
            <p className='text-[1rem]'>{content.numbers.c.p}</p>
          </div>
        </div>
      </section>
    </main>
  )
}
