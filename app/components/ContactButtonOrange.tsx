"use client"

import { useWebStore } from "../state/store";
import {selectedLanguage} from "components/content/contanbutton";

export default function ContactButtonOrange(){

    const store = useWebStore()
    const language = store.language
    const content = language === 'spanish' ? selectedLanguage.spanish : selectedLanguage.english


    return (
        <button className='text-white min-w-fit bg-orange rounded-md py-[0.625rem] px-[2.5rem] text-[1.25rem] w-[10rem]'>
            {content}
        </button>
    )
}