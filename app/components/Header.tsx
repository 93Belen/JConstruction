'use client'


import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';

export default function Header(){
    const [isOpen, setIsOpen] = useState<boolean>(false)
    
    const toggleMwenu = () => {
        setIsOpen((state) => !state)
    }




    return (
        <header className='bg-blue flex justify-between text-white font-mono py-[18px] md:px-[2rem] px-[1rem] items-center'>
            <Link className='text-white no-underline' href='/'><h1 className='font-bold text-[1rem] md:text-[1.5rem]'>JAY'S CONSTRUCTION</h1></Link>
            <div className='hidden md:flex justify-around font-medium gap-[20px] text-[1rem]'>
                <Link className='text-white no-underline border-b-2 border-b-orange border-opacity-0 hover:border-opacity-100 duration-[1s]' href=''>About</Link>
                <Link className='text-white no-underline border-b-2 border-b-orange border-opacity-0 hover:border-opacity-100 duration-[1s]' href='/contact'>Contact</Link>
                <Link className='text-white no-underline border-b-2 border-b-orange border-opacity-0 hover:border-opacity-100 duration-[1s]' href='/services'>Services</Link>
                <select className='bg-blue text-white appearance-none' name="" id="">
                    <option value="">English</option>
                    <option value="">Español</option>
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
                 className={`flex bg-blue top-[59px] left-0 absolute w-full flex-col h-[80vh] justify-around text-center items-center p-2 pb-10 text-[2rem]`}>
                <Link className='text-white no-underline' href=''>About</Link>
                <Link className='text-white no-underline' href='/contact'>Contact</Link>
                <Link className='text-white no-underline' href='/services'>Services</Link>
                <select className='bg-blue text-white appearance-none' name="" id="">
                    <option value="">English</option>
                    <option value="">Español</option>
                </select>
                </motion.div>
            </AnimatePresence>
            </div>
        </header>
    )
}