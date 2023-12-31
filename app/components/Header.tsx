'use client'


import Link from "next/link";
import { ChangeEvent, useState, useEffect } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { useWebStore } from "../state/store";
import {selectedLanguage} from "components/content/header";


export default function Header(){
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const store = useWebStore()
    const language = store.language;

    const changeLanguage = (e: ChangeEvent<HTMLSelectElement>) => {
        const language = e.target.value;
        store.toggleLanguage(language)       
    }

    console.log(store.language)
    

    const toggleMwenu = () => {
        setIsOpen((state) => !state)
    }

    const content = language === 'spanish' ? selectedLanguage.spanish : selectedLanguage.english


    useEffect(() => {
        if (isOpen) {
          document.body.classList.add('disable-scroll');
        } else {
          document.body.classList.remove('disable-scroll');
        }
    
        return () => {
          // Clean up by removing the class when the component unmounts
          document.body.classList.remove('disable-scroll');
        };
      }, [isOpen]);


    return (
        <header className='bg-blue flex justify-between text-white font-mono py-[18px] md:px-[2rem] px-[1rem] items-center h-[9vh] md:h-auto'>
            <Link className='text-white no-underline' href='/'><h1 className='font-bold text-[1rem] md:text-[1.5rem]'>JAY'S CONSTRUCTION</h1></Link>
            <div className='hidden md:flex justify-around font-medium gap-[20px] text-[1rem]'>
                <Link className='text-white no-underline border-b-2 border-b-orange border-opacity-0 hover:border-opacity-100 duration-[1s]' href='/about'>{content.about}</Link>
                <Link className='text-white no-underline border-b-2 border-b-orange border-opacity-0 hover:border-opacity-100 duration-[1s]' href='/contact'>{content.contact}</Link>
                <Link className='text-white no-underline border-b-2 border-b-orange border-opacity-0 hover:border-opacity-100 duration-[1s]' href='/services'>{content.services}</Link>
                <select value={language} onChange={changeLanguage} className='bg-blue text-white appearance-none' name="" id="">
                    <option value="english">English</option>
                    <option value="spanish">Español</option>
                </select>
            </div>
            <div className='block md:hidden'>
            <AnimatePresence>
                <motion.svg layout  onClick={toggleMwenu} width="30" height="30" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <motion.circle
                    cx="50" cy="50" r="10" fill="white" />
                    <motion.circle
                    initial={{opacity: 1}}
                    animate={{opacity: isOpen ? 0 : 1}} 
                    cx="100" cy="50" r="10" fill="white" />
                    <motion.circle
                    cx="150" cy="50" r="10" fill="white" />
                    
                    <motion.circle
                    initial={{opacity: 1}}
                    animate={{opacity: isOpen ? 0 : 1}}
                     
                    cx="50" cy="100" r="10" fill="white" />
                    <motion.circle
                    cx="100" cy="100" r="10" fill="white" />
                    <motion.circle
                    initial={{opacity: 1}}
                    animate={{opacity: isOpen ? 0 : 1}}
                     
                    cx="150" cy="100" r="10" fill="white" />
                    
                    <motion.circle 
                    cx="50" cy="150" r="10" fill="white" />
                    <motion.circle
                     
                    initial={{opacity: 1}}
                    animate={{opacity: isOpen ? 0 : 1}}
                    cx="100" cy="150" r="10" fill="white" />
                    <motion.circle
                    cx="150" cy="150" r="10" fill="white" />
                </motion.svg>
            </AnimatePresence>
            <AnimatePresence>
                <motion.div layout
                initial={{ opacity: 0}}
                animate={{opacity: isOpen ? 1 : 0}}
                 className={`flex bg-blue top-[8.8vh] left-0 absolute w-full flex-col h-[91.2vh] justify-around text-center items-center p-2 pb-10 text-[2rem]`}>
                <Link onClick={toggleMwenu} className='text-white no-underline' href='/about'>{content.about}</Link>
                <Link onClick={toggleMwenu} className='text-white no-underline' href='/contact'>{content.contact}</Link>
                <Link onClick={toggleMwenu} className='text-white no-underline' href='/services'>{content.services}</Link>
                <select value={language} onChange={changeLanguage} className='bg-blue text-white appearance-none' name="" id="">
                    <option value="english">English</option>
                    <option value="spanish">Español</option>
                </select>
                <div></div>
                </motion.div>
            </AnimatePresence>
            </div>
        </header>
    )
}