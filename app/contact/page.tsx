'use client'
import { anton } from "../layout"
import { FiMail, FiPhone } from 'react-icons/fi'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import ContacForm from "../components/ContactForm"
import { useWebStore } from "../state/store"
import { selectedLanguage } from "components/content/headers"

export default function Contac(){
    const store = useWebStore()
    const language = store.language
    const content = language === 'spanish' ? selectedLanguage.spanish: selectedLanguage.english

    return (
        <main>
            <section className='bg-[url("/contact.png")] h-[20rem] md:h-[30rem] w-full bg-cover bg-no-repeat bg-bottom flex justify-center items-center'>
                <h1 className={`text-white ${anton.className} text-[4rem] hidden md:block`}>{store.emailsent ? content.contact.emailSent : content.contact.h1}</h1>
                <h1 className={`text-white ${anton.className} text-[4rem] md:hidden`}>{store.emailsent ? content.contact.emailSentMobile : content.contact.h1}</h1>
            </section>
            <section className='bg-white flex flex-col md:flex-row gap-1 xl:gap-2 p-2 min-h-[50vh] justify-around items-center md:p-28'>
                <div className='md:self-start md:w-[40%] xl:p-28 md:p-10 flex flex-col gap-1'>
                    <h2 className={`text-orange ${anton.className} text-[4rem]`}>{content.contact.h2}</h2>
                    <p className='text-[1.5rem]'>{content.contact.h3}</p>
                    <p className='flex items-center gap-2'><FiMail/>  jaysconstructionkc@gmail.com</p>
                    <p className='flex items-center gap-2'><HiOutlineLocationMarker/> Kansas City</p>
                    <p className='flex items-center gap-2'><FiPhone/> (913) 221-4088</p>
                </div>
                <div className='md:w-[60%] w-full md:p-10 xl:p-28 flex justify-center'>
                    <ContacForm/>
                </div>
            </section>
        </main>
    )
}