'use client'

import { anton } from "../layout";
import { useWebStore } from "../state/store";
import { selectedLanguage } from "components/content/headers";
import { selectedLanguage as textcontent } from "components/content/text/services";
import { MdOutlineKitchen } from 'react-icons/md'
import { FaShower } from 'react-icons/fa'
import { BsHouseDoor } from 'react-icons/bs'
import { GiConcreteBag } from 'react-icons/gi'
import ContactButtonOrange from "../components/ContactButtonOrange";

export default function Services(){
    const store = useWebStore()
    const language = store.language
    const contentHeader = language === 'spanish' ? selectedLanguage.spanish : selectedLanguage.english;
    const content = language === 'spanish' ? textcontent.spanish : textcontent.english

    return (
        <main>
            <section className='bg-[url("/services.png")] h-[20rem] md:h-[30rem] w-full bg-cover bg-no-repeat bg-bottom flex justify-center items-center'>
                <h1 className={`text-white ${anton.className} text-[4rem]`}>{contentHeader.services.h1}</h1>
            </section>
            <section className='h-fit pt-10 md:pt-20 px-2 md:px-5'>
                <h2 className={`${anton.className} text-white md:text-[4rem] text-[3.5rem] lg:pl-40`}>{contentHeader.services.h2}</h2>
                <div className='flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row justify-center xl:w-[80%] xl:gap-10 gap-6 max-w-[1500px] m-auto md:py-14'>
                        <div className='px-4 py-3 flex flex-col gap-2 text-white lg:w-[300px]'>
                            <div className='p-2 border-white border-1 rounded-sm w-fit'>
                                <MdOutlineKitchen className='text-[50px] text-orange'/>
                            </div>
                        <h4 className='font-bold text-[1.5rem]'>{content.services.a.name}</h4>
                        <p>{content.services.a.p}</p>
                    </div>
                    <div className='px-4 py-3 flex flex-col gap-2 text-white lg:w-[300px]'>
                            <div className='p-2 border-white border-1 rounded-sm w-fit'>
                                <FaShower className='text-[50px] text-orange'/>
                            </div>
                        <h4 className='font-bold text-[1.5rem]'>{content.services.b.name}</h4>
                        <p className='text-[1rem]'>{content.services.b.p}</p>
                    </div>
                    <div className='px-4 py-3 flex flex-col gap-2 text-white lg:w-[300px]'>
                            <div className='p-2 border-white border-1 rounded-sm w-fit'>
                                <BsHouseDoor className='text-[50px] text-orange'/>
                            </div>
                        <h4 className='font-bold text-[1.5rem]'>{content.services.c.name}</h4>
                        <p className='text-[1rem]'>{content.services.c.p}</p>
                    </div>
                    <div className='px-4 py-3 flex flex-col gap-2 text-white lg:w-[300px]'>
                            <div className='p-2 border-white border-1 rounded-sm w-fit'>
                                <GiConcreteBag className='text-[50px] text-orange'/>
                            </div>
                        <h4 className='font-bold text-[1.5rem]'>{content.services.d.name}</h4>
                        <p className='text-[1rem]'>{content.services.d.p}</p>
                    </div>
                </div>
            </section>
            <section className='bg-white text-blue p-10 flex justify-center md:py-24 lg:py-32 h-fit'>
                <div className='flex flex-col md:flex-row gap-6 lg:gap-12 lg:w-[80%]'>
                <div>
                    <h2 className={`${anton.className} text-[2.5rem]`}>{contentHeader.services.p}
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