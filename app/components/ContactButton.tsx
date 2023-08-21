"use client"

import { useWebStore } from "../state/store";
import {selectedLanguage} from "components/content/contanbutton";
import Link from "next/link";


export default function ContactButton(){
    const store = useWebStore()
    const language = store.language
    const content = language === 'spanish' ? selectedLanguage.spanish : selectedLanguage.english

    return (
        <Link href='/contact' className='text-white no-underline border-white border-2 rounded-md py-[0.625rem] px-[2.5rem] text-[1.25rem] w-[10rem] min-w-fit'>
            {content}
        </Link>
    )
}