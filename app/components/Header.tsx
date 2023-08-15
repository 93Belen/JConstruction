'use client'


import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';

export default function Header(){
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [dotsVisible, setDotsVisible] = useState(true);
    
    const toggleMwenu = () => {
        setIsOpen((state) => !state)
    }




    return (
        <header className='bg-blue flex justify-between text-white font-mono py-[18px] px-[40px] items-center'>
            <h1 className='font-bold'>JAY'S CONSTRUCTION</h1>
            <div className='hidden md:flex justify-around font-medium gap-[20px]'>
                <Link href=''>About</Link>
                <Link href=''>Contact</Link>
                <Link href=''>Services</Link>
                <select className='bg-blue text-white appearance-none' name="" id="">
                    <option value="">English</option>
                    <option value="">Español</option>
                </select>
            </div>
            <div className='block md:hidden'>
            <AnimatePresence>
                <motion.svg layout data-isOpen={isOpen} onClick={toggleMwenu} width="30" height="30" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <motion.circle
                    data-isOpen={isOpen}
                    cx="50" cy="50" r="10" fill="white" />
                    <motion.circle
                    initial={{opacity: 1}}
                    animate={{opacity: isOpen ? 0 : 1}} 
                    data-isOpen={isOpen}
                    cx="100" cy="50" r="10" fill="white" />
                    <motion.circle
                    data-isOpen={isOpen}
                    cx="150" cy="50" r="10" fill="white" />
                    
                    <motion.circle
                    initial={{opacity: 1}}
                    animate={{opacity: isOpen ? 0 : 1}}
                    data-isOpen={isOpen} 
                    cx="50" cy="100" r="10" fill="white" />
                    <motion.circle
                    data-isOpen={isOpen}
                    cx="100" cy="100" r="10" fill="white" />
                    <motion.circle
                    initial={{opacity: 1}}
                    animate={{opacity: isOpen ? 0 : 1}}
                    data-isOpen={isOpen} 
                    cx="150" cy="100" r="10" fill="white" />
                    
                    <motion.circle 
                    data-isOpen={isOpen}
                    cx="50" cy="150" r="10" fill="white" />
                    <motion.circle
                    data-isOpen={isOpen} 
                    initial={{opacity: 1}}
                    animate={{opacity: isOpen ? 0 : 1}}
                    cx="100" cy="150" r="10" fill="white" />
                    <motion.circle
                    data-isOpen={isOpen}
                    cx="150" cy="150" r="10" fill="white" />
                </motion.svg>
            </AnimatePresence>
            <AnimatePresence>
                <motion.div layout
                initial={{ opacity: 0}}
                animate={{opacity: isOpen ? 1 : 0}}
                 className={`flex bg-blue top-[59px] left-0 absolute w-full flex-col h-[94.2vh] justify-around text-center items-center p-2 pb-10`}>
                <Link href=''>About</Link>
                <Link href=''>Contact</Link>
                <Link href=''>Services</Link>
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