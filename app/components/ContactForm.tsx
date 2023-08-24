"use client"

import { useWebStore } from "../state/store";
import {selectedLanguage} from "components/content/form";
import { useEffect, useState } from "react";
import { montserrar } from "../layout";
import {AiOutlineCheck} from 'react-icons/ai';
import { motion, AnimatePresence } from "framer-motion";

export default function ContacForm(){
    const [email, setEmail] = useState<String>('')
    const [message, setMessage] = useState<String>('')
    const [name, setName] = useState<String>('')
    const [sent, setSent] = useState<boolean>(false);
    const store = useWebStore()
    useEffect(() => {
        store.toggleEmailSent(false)
    },[])
    const language = store.language
    const content = language === 'spanish' ? selectedLanguage.spanish : selectedLanguage.english

    const endpoint = process.env.NEXT_PUBLIC_ENDPOINT as string
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const data = { email, message, name }
        const fetchPromise = fetch(endpoint, {
          method: 'POST',
          mode: 'cors',
          cache: 'no-cache',
          body: JSON.stringify(data)
        });
        fetchPromise
          .then(response => response.json())
          .then(data => {
            console.log(data); // handle response, catch errors
            if(data.result === 'Success'){
                setSent(true)
                store.toggleEmailSent(true)
            }
        })
      }

    return (
        <section className='w-full max-w-[600px]'>
            <form action={endpoint} onSubmit={handleSubmit} method="POST" className={`flex flex-col gap-3 justify-center w-full ${montserrar.className}`}>
                <label htmlFor="">{content.name}</label>
                <input onChange={(e) => setName(e.target.value)} className='border-2 border-black rounded-md w-full p-1' type="text" required />
                <label htmlFor="">{content.email}</label>
                <input onChange={(e) => setEmail(e.target.value)} className='border-2 border-black rounded-md w-full p-1' type="email" required />
                <label htmlFor="">{content.message}</label>
                <textarea onChange={(e) => setMessage(e.target.value)} className='border-2 border-black rounded-md w-full p-1' name="" id="" cols={10} rows={10} required></textarea>
                <button
                className='text-white h-[50px] bg-orange rounded-md py-[0.625rem] px-[2.5rem] text-[1.25rem] w-[10rem] self-center'>
                <AnimatePresence>
                {sent ? (
                    <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <AiOutlineCheck className='text-[2rem] m-auto' />
                    </motion.div>
                    ) : (
                    <motion.span
                    layout
                    key="button"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.5 }}
                    >
                        {content.button}
                    </motion.span>
                )}
                </AnimatePresence>
                </button>
                </form>
        </section>
    )
}