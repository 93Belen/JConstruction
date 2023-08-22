'use client'

import Logo from "./Logo";
import { BsInstagram } from 'react-icons/bs'
import Accordion from 'react-bootstrap/Accordion';
import { FiMail, FiPhone } from 'react-icons/fi'
import { AiOutlineForm } from 'react-icons/ai'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { ChangeEvent } from "react";
import { useWebStore } from "../state/store";
import { selectedLanguage } from "components/content/footer";
import { selectedLanguage as headerSelectedLanguage } from "components/content/header";
import Link from "next/link";

export default function Footer(){
    const store = useWebStore()
    const language = store.language;

    const changeLanguage = (e: ChangeEvent<HTMLSelectElement>) => {
        const language = e.target.value;
        store.toggleLanguage(language)
        
    }
    const content = language === 'spanish' ? selectedLanguage.spanish : selectedLanguage.english
    const contentNav = language === 'spanish' ? headerSelectedLanguage.spanish : headerSelectedLanguage.english


    return (
        <section className='bg-blue h-fit text-white font-mono lg:px-[9rem] md:px-[3rem] px-[1rem] pt-[5rem] box-border w-full'>
            {/* DESKTOP */}
            <div className='border-b-2 pb-[4rem] justify-between 2xl:pr-[30%] hidden md:flex text-[1rem] font-medium'>
                <div className='max-w-[300px]'>
                    <h3 className='font-bold text-[1.25rem]'>Jays Construction</h3>
                    <p>{content.intro}</p>

                </div>
                <div>
                    <h3 className='font-bold text-[1.25rem]'>{content.contact.name}</h3>
                    <p className='flex items-center gap-2'><FiMail/> jaysconstructionkc@gmail.com</p>
                    <p className='flex items-center gap-2'> <AiOutlineForm/> <Link className='text-white no-underline' href='/contact'>{content.contact.contactForm} </Link> </p>
                    <p className='flex items-center gap-2'><HiOutlineLocationMarker/> Kansas City Metro</p>
                    <p className='flex items-center gap-2'><FiPhone/>  (913) 221-4088</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <h3 className='font-bold text-[1.25rem]'>{content.navigation.name}</h3>
                    <Link className='text-white no-underline' href=''>{contentNav.about}</Link>
                    <Link className='text-white no-underline' href=''>{contentNav.contact}</Link>
                    <Link className='text-white no-underline' href=''>{contentNav.services}</Link>
                </div>
                <div>
                    <h3 className='font-bold text-[1.25rem]'>{content.language.name}</h3>
                    <select value={language} onChange={changeLanguage} className='bg-blue text-white appearance-none border-white border-1 pb-[4rem] px-4 py-1 rounded-md' name="" id="">
                    <option defaultChecked={language === "english"} value="english">English</option>
                    <option defaultChecked={language === "spanish"} value="spanish">Español</option>
                </select>
                </div>
            </div>
            {/* MOBILE */}
            <section className='flex flex-col justify-center w-full text-center md:hidden border-b-2 pb-[4rem]'>
            <Accordion id='accordion'>
            <Accordion.Item eventKey="0">
                <Accordion.Header className='text-[1rem] font-bold'>JAY'S CONSTRUCTION</Accordion.Header>
                <Accordion.Body>
                <p >{content.intro}</p>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header className='text-[1rem] font-bold'>CONTACT US</Accordion.Header>
                <Accordion.Body>
                    <p className='flex items-center gap-2'><FiMail/> jaime@gmail.com</p>
                    <p className='flex items-center gap-2'>  <AiOutlineForm/>{content.contact.contactForm}</p>
                    <p className='flex items-center gap-2'><HiOutlineLocationMarker/> Kansas City Metro</p>
                    <p className='flex items-center gap-2'><FiPhone/> 913.555.5555</p>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header className='text-[1rem] font-bold'>NAVIGATION</Accordion.Header>
                <Accordion.Body className='flex flex-col gap-4'>
                    <Link className='text-white no-underline' href=''>{contentNav.about}</Link>
                    <Link className='text-white no-underline' href=''>{contentNav.contact}</Link>
                    <Link className='text-white no-underline' href=''>{contentNav.services}</Link>
                </Accordion.Body>
            </Accordion.Item>
      <div className='pl-5 pt-4'>
        <p className='font-bold'>LANGUAGE</p>
        <select value={language} onChange={changeLanguage} className='bg-blue text-white appearance-none border-white border-1 pb-[4rem] px-4 py-1 rounded-md' name="" id="">
            <option value="english">English</option>
            <option value="spanish">Español</option>
        </select>
                </div>
    </Accordion>
            </section>
            {/* SECOND SECTION MOBILE AND DESKTOP  */}
            <div className='flex md:justify-between py-14 items-center justify-center'>
                <div className='flex justify-around gap-4 items-center'>
                        <Logo />
                        <div className='w-[35px] h-[35px] bg-white text-black rounded-[100%] box-border flex justify-center items-center'>
                        <BsInstagram className='text-[25px]' />
                        </div>
                </div>
                <div>
                    <p className='hidden md:block'>Jaime Fernandez 62 S 23 rd st Street Kansas City Ks 66102</p>
                </div>

            </div>
        </section>
    )
}