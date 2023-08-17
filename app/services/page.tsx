'use client'

import { anton } from "../layout";
import { useWebStore } from "../state/store";
import { selectedLanguage } from "components/content/headers";
import { selectedLanguage as textcontent } from "components/content/text/services";

import { AiFillCar } from "react-icons/ai";
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
                        <div className='px-4 py-3 flex flex-col gap-2 text-white'>
                            <div className='p-2 border-white border-1 rounded-sm w-fit'>
                                <AiFillCar className='text-[50px] text-orange'/>
                            </div>
                        <h4 className='font-bold'>First Service</h4>
                        <p>Short text describing a feature of your product/service. Think about how it can benefit your potential customer. </p>
                    </div>
                    <div className='px-4 py-3 flex flex-col gap-2 text-white'>
                            <div className='p-2 border-white border-1 rounded-sm w-fit'>
                                <AiFillCar className='text-[50px] text-orange'/>
                            </div>
                        <h4 className='font-bold'>First Service</h4>
                        <p>Short text describing a feature of your product/service. Think about how it can benefit your potential customer. </p>
                    </div>
                    <div className='px-4 py-3 flex flex-col gap-2 text-white'>
                            <div className='p-2 border-white border-1 rounded-sm w-fit'>
                                <AiFillCar className='text-[50px] text-orange'/>
                            </div>
                        <h4 className='font-bold'>First Service</h4>
                        <p>Short text describing a feature of your product/service. Think about how it can benefit your potential customer. </p>
                    </div>
                    <div className='px-4 py-3 flex flex-col gap-2 text-white'>
                            <div className='p-2 border-white border-1 rounded-sm w-fit'>
                                <AiFillCar className='text-[50px] text-orange'/>
                            </div>
                        <h4 className='font-bold'>First Service</h4>
                        <p>Short text describing a feature of your product/service. Think about how it can benefit your potential customer. </p>
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
                    <p className='text-black lg:w-[70%]'>Provide some assertive title and description that would persuade the customers to take some action, e.g., contact Jaime</p>
                    <ContactButtonOrange />
                </div>
                </div>
            </section>
        </main>
    )
}