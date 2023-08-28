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
    const content = language === 'spanish' ? selectedLanguage.spanish : selectedLanguage.english

    return (
        <main>
            <section className='bg-[url("/about.png")] h-[20rem] md:h-[30rem] w-full bg-cover bg-no-repeat bg-bottom flex justify-center items-center'>
                <h1 className={`text-white ${anton.className} text-[4rem]`}>{contentHeader.about.h1}</h1>
            </section>
            <section className='flex flex-col md:flex-row'>
                <div className='bg-blue md:bg-white p-6 2xl:px-20 md:py-20 2xl:py-28 md:w-1/3 flex flex-col gap-2'>
                    <h2 className={`${anton.className} lg:text-[3rem] text-[2.5rem] md:text-blue min-[0px]:text-white text-center`}>{contentHeader.about.h2.a}</h2>
                    <p className=' md:text-black min-[0px]:text-white text-[1.4rem]'>{content.woweare}</p>
                </div>
                <div className='bg-white p-6 md:order-last 2xl:px-20 md:py-20 2xl:py-28 md:w-1/3 flex flex-col gap-2'>
                    <h2 className={`${anton.className} text-blue lg:text-[3rem] text-[2.5rem] text-center`}>{contentHeader.about.h2.c}</h2>
                    <p className='text-black text-[1.4rem]'>{content.whatwedo}</p>
                </div>
                <div className='bg-blue p-6 md:order-2 2xl:px-20 md:py-20 2xl:py-28 md:w-1/3 flex flex-col gap-2'>
                    <h2 className={`${anton.className} text-white lg:text-[2.9rem] text-[2.5rem] text-center`}>{contentHeader.about.h2.b}</h2>
                    <p className='text-white text-[1.4rem]'>{content.ourprocess}</p>
                </div>
            </section>
            <section className={`hidden md:block ${language === 'spanish' ? 'bg-[url("/process-map-spanish.png")]' : 'bg-[url("/process-map-english.png")]'} bg-contain bg-no-repeat h-[600px] lg:h-[700px] xl:h-[800px] 2xl:h-[900px] bg-center 2xl:mt-10`}>

            </section>
            <section className='flex flex-col md:hidden text-white p-4 h-fit gap-3'>
                <div className='grid grid-cols-[30%_70%] grid-rows-[30%_70%] h-fit'>
                    <p className='text-orange row-span-2 col-start-1 justify-self-center text-[5rem]'>1</p>
                    <h3 className={`${anton.className} row-start-1 col-start-2`}>{contentHeader.about.process.contact}</h3>
                    <p className='self-start row-start-2 col-start-2'>{content.process.a}</p>
                </div>
                <div className='grid grid-cols-[30%_70%] grid-rows-[30%_70%] h-fit'>
                    <p className='text-orange row-span-2 col-start-1 justify-self-center text-[5rem]'>2</p>
                    <h3 className={`${anton.className} row-start-1 col-start-2`}>{contentHeader.about.process.consult}</h3>
                    <p className='self-start row-start-2 col-start-2'>{content.process.b}</p>
                </div>
                <div className='grid grid-cols-[30%_70%] grid-rows-[30%_70%] h-fit'>
                    <p className='text-orange row-span-2 col-start-1 justify-self-center text-[5rem]'>3</p>
                    <h3 className={`${anton.className} row-start-1 col-start-2`}>{contentHeader.about.process.connect}</h3>
                    <p className='self-start row-start-2 col-start-2'>{content.process.c}</p>
                </div>
                <div className='grid grid-cols-[30%_70%] grid-rows-[20%_80%] h-fit'>
                    <p className='text-orange row-span-2 col-start-1 justify-self-center text-[5rem]'>4</p>
                    <h3 className={`${anton.className} row-start-1 col-start-2`}>{contentHeader.about.process.service}</h3>
                    <p className='self-start row-start-2 col-start-2 h-fit'>{content.process.d}</p>
                </div>
                <div className='grid grid-cols-[30%_70%] grid-rows-[30%_70%] h-fit'>
                    <p className='text-orange row-span-2 col-start-1 justify-self-center text-[5rem]'>5</p>
                    <h3 className={`${anton.className} row-start-1 col-start-2`}>{contentHeader.about.process.complete}</h3>
                    <p className='self-start row-start-2 col-start-2'>{content.process.e}</p>
                </div>
            </section>
            <section className='bg-white text-blue p-10 flex justify-center md:py-24 lg:py-32 h-fit'>
                <div className='flex flex-col md:flex-row gap-6 lg:gap-12 lg:w-[80%]'>
                <div>
                    <h2 className={`${anton.className} text-[2.5rem]`}>{contentHeader.about.h3}
                    </h2>
                </div>
                <div>
                    <p className='text-black lg:w-[70%] text-[1.5rem] pb-4'>{content.contacttext}</p>
                    <ContactButtonOrange />
                </div>
                </div>
            </section>
        </main>
    )
}