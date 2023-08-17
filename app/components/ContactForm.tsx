"use client"

import { useWebStore } from "../state/store";
import {selectedLanguage} from "components/content/form";

import { montserrar } from "../layout";

export default function ContacForm(){
    const store = useWebStore()
    const language = store.language
    const content = language === 'spanish' ? selectedLanguage.spanish : selectedLanguage.english

    return (
        <section className='w-full max-w-[600px]'>
            <form className={`flex flex-col gap-3 justify-center w-full ${montserrar.className}`} action="">
                <label htmlFor="">{content.name}</label>
                <input className='border-2 border-black rounded-md w-full p-1' type="text" />
                <label htmlFor="">{content.email}</label>
                <input className='border-2 border-black rounded-md w-full p-1' type="email" />
                <label htmlFor="">{content.message}</label>
                <textarea className='border-2 border-black rounded-md w-full p-1' name="" id="" cols={10} rows={10}></textarea>
                <button className='text-white bg-orange rounded-md py-[0.625rem] px-[2.5rem] text-[1.25rem] w-[10rem] self-center'>{content.button}</button>
            </form>
        </section>
    )
}