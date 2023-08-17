"use client"

import ContactButton from "./components/ContactButton";
import { anton } from "./layout";
import { AiFillCar } from 'react-icons/ai'
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
            <h2 className='text-white font-mono w-[50%] max-w-[800px]'>Our experienced and reliable contractors will help
              you with your concrete service needs.</h2>
              <ContactButton/>
          </div>

      </section>

      {/* MOBILE HERO */}
      <section className='flex flex-col md:hidden'>
        <div className='h-[16rem] bg-[url("/home-hero.png")] bg-cover bg-center'>
        </div>
        <div className='flex flex-col gap-4 px-4 pb-20 pt-10'>
            <h1 className={`text-orange text-[3.5rem] font-bold ${anton.className}`}>{contentHeader.home.h1}
            </h1>
            <h2 className='text-white font-mono w-[70%]'>Our experienced and reliable contractors will help
              you with your concrete service needs.</h2>
              <ContactButton/>
        </div>
      </section>
      {/* OUR SERVICES */}
      <section className='bg-white pt-10 md:pt-20'>
          <h2 className={`${anton.className} text-blue text-center md:text-[4rem] text-[3.5rem]`}>{contentHeader.home.h2}</h2>
          <div className='flex flex-col md:flex-row justify-center lg:w-[80%] xl:gap-9 max-w-[1200px] m-auto md:py-14'>
          <div className='flex flex-col gap-10 p-3'>
              <div className='border-blue border-2 rounded-md px-4 py-3 flex flex-col gap-2 text-blue'>
                  <AiFillCar className='text-[70px] text-orange'/>
                  <h4 className='font-bold'>First Service</h4>
                  <p>Short text describing a feature of your product/service. Think about how it can benefit your potential customer. </p>
              </div>
          </div>
          <div className='flex flex-col gap-10 p-3'>
              <div className='border-blue border-2 rounded-md px-4 py-3 flex flex-col gap-2 text-blue'>
                  <AiFillCar className='text-[70px] text-orange'/>
                  <h4 className='font-bold'>First Service</h4>
                  <p>Short text describing a feature of your product/service. Think about how it can benefit your potential customer. </p>
              </div>
          </div>
          <div className='flex flex-col gap-10 p-3'>
              <div className='border-blue border-2 rounded-md px-4 py-3 flex flex-col gap-2 text-blue'>
                  <AiFillCar className='text-[70px] text-orange'/>
                  <h4 className='font-bold'>First Service</h4>
                  <p>Short text describing a feature of your product/service. Think about how it can benefit your potential customer. </p>
              </div>
          </div>
          </div>
      </section>
      {/* BY THE NUMBERS */}
      <section className='bg-[url("/smoke.png")] bg-bottom bg-no-repeat bg-cover h-fit pt-10 md:pt-20 px-5'>
        <h2 className={`${anton.className} text-orange md:text-[4rem] text-[3.5rem] lg:pl-40`}>{contentHeader.home.h3}</h2>
        <div className='flex flex-col md:flex-row justify-center xl:w-[80%] xl:gap-20 gap-6 max-w-[1500px] m-auto md:py-14'>
          <div className='text-white font-bold font-mono'>
            <h3 className='text-[4.5rem]'>
              <span className='text-orange font-bold'>+</span>
              200
            </h3>
            <h4 className='font-bold text-[1.25rem]'>Satisfied customers</h4>
            <p className='text-[1rem]'>Over the last 3 years, we have worked with over 
              two hundred clients across the metro. </p>
          </div>
          <div className='text-white font-bold font-mono'>
            <h3 className='text-[4.5rem]'>
              <span className='text-orange font-bold'>+</span>
              500
            </h3>
            <h4 className='font-bold text-[1.25rem]'>Satisfied customers</h4>
            <p className='text-[1rem]'>Over the last 3 years, we have worked with over 
              two hundred clients across the metro. </p>
          </div>
          <div className='text-white font-bold font-mono'>
            <h3 className='text-[4.5rem]'>
              100
              <span className='text-orange font-bold'>%</span>
            
            </h3>
            <h4 className='font-bold text-[1.25rem]'>Satisfied customers</h4>
            <p className='text-[1rem]'>Over the last 3 years, we have worked with over 
              two hundred clients across the metro. </p>
          </div>
        </div>
      </section>
    </main>
  )
}
