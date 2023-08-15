import ContactButton from "./components/ContactButton";
import { anton } from "./layout";
import Image from "next/image";
import { AiFillCar } from 'react-icons/ai'


export default function Home() {
  return (
    <main className='min-h-[90vh]'>
      {/* DESKTOP HERO */}
      <section
      className='hidden md:block h-[42.5rem] bg-[url("/home-hero.png")] bg-cover bg-no-repeat bg-bottom py-28 pl-20'>
          <div className='flex flex-col gap-4'>
            <h1 className={`text-orange text-[4rem] font-bold ${anton.className}`}>We connect you with <br />
            the best in town
            </h1>
            <h2 className='text-white font-mono w-[50%] max-w-[800px]'>Our experienced and reliable contractors will help
              you with your concrete service needs.</h2>
              <ContactButton/>
          </div>

      </section>

      {/* MOBILE HERO */}
      <section className='flex flex-col md:hidden'>
        <div className='h-[16rem] bg-[url("/home-hero.png")] bg-cover bg-center'>
        {/* <Image
        className='h-full'
        src={"/home-hero.png"}
        width={2500}
        height={2500}
        alt=''
        /> */}
        </div>
        <div className='flex flex-col gap-4 px-4 pb-20 pt-10'>
            <h1 className={`text-orange text-[3.5rem] font-bold ${anton.className}`}>We connect you with
            the best in town
            </h1>
            <h2 className='text-white font-mono w-[70%]'>Our experienced and reliable contractors will help
              you with your concrete service needs.</h2>
              <ContactButton/>
        </div>
      </section>
      {/* OUR SERVICES */}
      <section className='bg-white pt-10 md:pt-20'>
          <h2 className={`${anton.className} text-blue text-center md:text-[4rem] text-[3.5rem]`}>OUR SERVICES</h2>
          <div className='flex flex-col md:flex-row justify-center lg:w-[80%] xl:gap-9 max-w-[1200px] m-auto md:py-14'>
          <div className='flex flex-col gap-10 p-3'>
              <div className='border-blue border-2 rounded-md px-4 py-3 flex flex-col gap-2 text-blue'>
                  <AiFillCar className='text-[70px] text-orange'/>
                  <h4 className='font-bold'>First Service</h4>
                  <p>Short text describing a feature of your product/service. Think about how it can benefit your potential customer. </p>
              </div>
          </div>
          <div className='flex flex-col gap-10 p-3'>
              <div className='border-blue border-2 rounded-md px-4 py-3 flex flex-col gap-2 text-blue'>
                  <AiFillCar className='text-[70px] text-orange'/>
                  <h4 className='font-bold'>First Service</h4>
                  <p>Short text describing a feature of your product/service. Think about how it can benefit your potential customer. </p>
              </div>
          </div>
          <div className='flex flex-col gap-10 p-3'>
              <div className='border-blue border-2 rounded-md px-4 py-3 flex flex-col gap-2 text-blue'>
                  <AiFillCar className='text-[70px] text-orange'/>
                  <h4 className='font-bold'>First Service</h4>
                  <p>Short text describing a feature of your product/service. Think about how it can benefit your potential customer. </p>
              </div>
          </div>
          </div>
      </section>
    </main>
  )
}
