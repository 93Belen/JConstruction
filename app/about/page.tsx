"use client"

import { anton } from "../layout"
import ContactButtonOrange from '../components/ContactButtonOrange'
import { selectedLanguage as selectedLanguageHeader } from "components/content/headers"
import { useWebStore } from "../state/store"
import { selectedLanguage } from "components/content/text/about"

export default function About(){
    const store = useWebStore();
    const language = store.language
    const contentHeader = language === "spanish" ? selectedLanguageHeader.spanish: selectedLanguageHeader.english
    const content = language === 'spanish' ? selectedLanguageHeader.spanish : selectedLanguageHeader.english

    return (
        <main>
            <section className='bg-[url("/about.png")] h-[20rem] md:h-[30rem] w-full bg-cover bg-no-repeat bg-bottom flex justify-center items-center'>
                <h1 className={`text-white ${anton.className} text-[4rem]`}>{contentHeader.about.h1}</h1>
            </section>
            <section className='flex flex-col md:flex-row'>
            <div className='bg-blue md:bg-white p-6 2xl:px-20 md:py-20 2xl:py-28'>
                    <h2 className={`${anton.className} lg:text-[4rem] text-[3rem] md:text-blue min-[0px]:text-white`}>{contentHeader.about.h2.a}</h2>
                    <p className=' md:text-black min-[0px]:text-white'>We are a local-owned business that stared to connect you to the best fit. During covid, we noticed that people needed a service to help connect people to trustworthy and reliable contractors who also are an expert in their field.</p>
                </div>
                <div className='bg-white p-6 md:order-last 2xl:px-20 md:py-20 2xl:py-28'>
                    <h2 className={`${anton.className} text-blue lg:text-[4rem] text-[3rem]`}>{contentHeader.about.h2.c}</h2>
                    <p className='text-black'>We are a local-owned business that stared to connect you to the best fit. During covid, we noticed that people needed a service to help connect people to trustworthy and reliable contractors who also are an expert in their field.</p>
                </div>
                <div className='bg-blue p-6 md:order-2 2xl:px-20 md:py-20 2xl:py-28'>
                    <h2 className={`${anton.className} text-white lg:text-[4rem] text-[3rem]`}>{contentHeader.about.h2.b}</h2>
                    <p className='text-white'>We are a local-owned business that stared to connect you to the best fit. During covid, we noticed that people needed a service to help connect people to trustworthy and reliable contractors who also are an expert in their field.</p>
                </div>
            </section>
            <section className='hidden md:block bg-[url("/Process-map.png")] bg-contain bg-no-repeat h-[600px] lg:h-[700px] xl:h-[800px] 2xl:h-[900px] bg-center 2xl:mt-10'>

            </section>
            <section className='flex flex-col md:hidden text-white p-4'>
                <div className='grid grid-cols-[30%_70%] grid-rows-[30%_70%]'>
                    <p className='text-orange row-span-2 col-start-1 justify-self-center text-[5rem]'>1</p>
                    <h3 className={`${anton.className} row-start-1 col-start-2`}>{contentHeader.about.process.contact}</h3>
                    <p className='self-start row-start-2 col-start-2'>Contact Jay via phone, email, or contact form from the website.</p>
                </div>
                <div className='grid grid-cols-[30%_70%] grid-rows-[30%_70%]'>
                    <p className='text-orange row-span-2 col-start-1 justify-self-center text-[5rem]'>2</p>
                    <h3 className={`${anton.className} row-start-1 col-start-2`}>{contentHeader.about.process.consult}</h3>
                    <p className='self-start row-start-2 col-start-2'>Contact Jay via phone, email, or contact form from the website.</p>
                </div>
                <div className='grid grid-cols-[30%_70%] grid-rows-[30%_70%]'>
                    <p className='text-orange row-span-2 col-start-1 justify-self-center text-[5rem]'>3</p>
                    <h3 className={`${anton.className} row-start-1 col-start-2`}>{contentHeader.about.process.connect}</h3>
                    <p className='self-start row-start-2 col-start-2'>Contact Jay via phone, email, or contact form from the website.</p>
                </div>
                <div className='grid grid-cols-[30%_70%] grid-rows-[30%_70%]'>
                    <p className='text-orange row-span-2 col-start-1 justify-self-center text-[5rem]'>4</p>
                    <h3 className={`${anton.className} row-start-1 col-start-2`}>{contentHeader.about.process.service}</h3>
                    <p className='self-start row-start-2 col-start-2'>Contact Jay via phone, email, or contact form from the website.</p>
                </div>
                <div className='grid grid-cols-[30%_70%] grid-rows-[30%_70%]'>
                    <p className='text-orange row-span-2 col-start-1 justify-self-center text-[5rem]'>5</p>
                    <h3 className={`${anton.className} row-start-1 col-start-2`}>{contentHeader.about.process.complete}</h3>
                    <p className='self-start row-start-2 col-start-2'>Contact Jay via phone, email, or contact form from the website.</p>
                </div>
            </section>
            <section className='bg-white text-blue p-10 flex justify-center md:py-24 lg:py-32 h-fit'>
                <div className='flex flex-col md:flex-row gap-6 lg:gap-12 lg:w-[80%]'>
                <div>
                    <h2 className={`${anton.className} text-[2.5rem]`}>{contentHeader.about.h3}
                    </h2>
                </div>
                <div>
                    <p className='text-black lg:w-[70%]'>Provide some assertive title and description that would persuade the customers to take some action, e.g., contact Jaime</p>
                    <ContactButtonOrange />
                </div>
                </div>
            </section>
        </main>
    )
}