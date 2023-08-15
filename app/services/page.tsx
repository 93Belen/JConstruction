import { anton } from "../layout";

export default function Services(){
    return (
        <main>
            <section className='bg-[url("/services.png")] h-[20rem] md:h-[30rem] w-full bg-cover bg-no-repeat bg-bottom flex justify-center items-center'>
                <h1 className={`text-white ${anton.className} text-[4rem]`}>SERVICES</h1>
            </section>
        </main>
    )
}