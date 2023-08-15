import ContactButton from "./components/ContactButton";
import { anton } from "./layout";


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

      </section>
    </main>
  )
}
