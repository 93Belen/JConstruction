'use client'

import Link from "next/link";
import Logo from "./Logo";
import { BsInstagram } from 'react-icons/bs'
import Accordion from 'react-bootstrap/Accordion';
import { FiMail, FiPhone } from 'react-icons/fi'
import { AiOutlineForm } from 'react-icons/ai'
import { HiOutlineLocationMarker } from 'react-icons/hi'


export default function Footer(){


    return (
        <section className='bg-blue h-fit text-white font-mono lg:px-[9rem] md:px-[3rem] px-[1rem] pt-[5rem] box-border w-full'>
            {/* DESKTOP */}
            <div className='border-b-2 pb-[4rem] justify-between 2xl:pr-[30%] hidden md:flex text-[1rem] font-medium'>
                <div>
                    <h3 className='font-bold text-[1.25rem]'>Jays Construction</h3>
                    <p >Jays Construction is a<br />
                        construction company <br />
                        that matches customers<br />
                        to the right contractor.</p>

                </div>
                <div>
                    <h3 className='font-bold text-[1.25rem]'>CONTACT US</h3>
                    <p className='flex items-center gap-2'><FiMail/> jaime@gmail.com</p>
                    <p className='flex items-center gap-2'><AiOutlineForm/> contact form</p>
                    <p className='flex items-center gap-2'><HiOutlineLocationMarker/> Kansas City Metro</p>
                    <p className='flex items-center gap-2'><FiPhone/> 913.555.5555</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <h3 className='font-bold text-[1.25rem]'>NAVIGATION</h3>
                    <Link className='text-white no-underline' href=''>About</Link>
                    <Link className='text-white no-underline' href=''>Contact</Link>
                    <Link className='text-white no-underline' href=''>Services</Link>
                </div>
                <div>
                    <h3 className='font-bold text-[1.25rem]'>LANGUAGE</h3>
                    <select className='bg-blue text-white appearance-none border-white border-1 pb-[4rem] px-4 py-1 rounded-md' name="" id="">
                    <option value="">English</option>
                    <option value="">Español</option>
                </select>
                </div>
            </div>
            {/* MOBILE */}
            <section className='flex flex-col justify-center w-full text-center md:hidden border-b-2 pb-[4rem]'>
            <Accordion id='accordion'>
            <Accordion.Item eventKey="0">
                <Accordion.Header className='text-[1rem] font-bold'>JAY'S CONSTRUCTION</Accordion.Header>
                <Accordion.Body>
                <p >Jays Construction is a<br />
                    construction company <br />
                    that matches customers<br />
                    to the right contractor.</p>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header className='text-[1rem] font-bold'>CONTACT US</Accordion.Header>
                <Accordion.Body>
                    <p className='flex items-center gap-2'><FiMail/> jaime@gmail.com</p>
                    <p className='flex items-center gap-2'><AiOutlineForm/> contact form</p>
                    <p className='flex items-center gap-2'><HiOutlineLocationMarker/> Kansas City Metro</p>
                    <p className='flex items-center gap-2'><FiPhone/> 913.555.5555</p>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header className='text-[1rem] font-bold'>NAVIGATION</Accordion.Header>
                <Accordion.Body className='flex flex-col gap-4'>
                    <Link className='text-white no-underline' href=''>About</Link>
                    <Link className='text-white no-underline' href=''>Contact</Link>
                    <Link className='text-white no-underline' href=''>Services</Link>
                </Accordion.Body>
            </Accordion.Item>
      <div className='pl-5 pt-4'>
        <p className='font-bold'>LANGUAGE</p>
        <select className='bg-blue text-white appearance-none border-white border-1 pb-[4rem] px-4 py-1 rounded-md' name="" id="">
            <option value="">English</option>
            <option value="">Español</option>
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
                    <p className='hidden md:block'>Copyright 2023 © Jays company. All right reserved</p>
                </div>

            </div>
        </section>
    )
}