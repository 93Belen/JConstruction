import { montserrar } from "../layout";

export default function ContacForm(){
    return (
        <section className='w-full max-w-[600px]'>
            <form className={`flex flex-col gap-3 justify-center w-full ${montserrar.className}`} action="">
                <label htmlFor="">Name</label>
                <input className='border-2 border-black rounded-md w-full p-1' type="text" />
                <label htmlFor="">Email</label>
                <input className='border-2 border-black rounded-md w-full p-1' type="email" />
                <label htmlFor="">Message</label>
                <textarea className='border-2 border-black rounded-md w-full p-1' name="" id="" cols={10} rows={10}></textarea>
                <button className='text-white bg-orange rounded-md py-[0.625rem] px-[2.5rem] text-[1.25rem] w-[10rem] self-center'>Submit</button>
            </form>
        </section>
    )
}