import './Home.css'
function Home(){
    return(
        <>
        <div className='flex flex-col-reverse md:flex-row items-center justify-center  md:space-x-30 space-y-0 pt-20 md:gap-10 md:pt-50' >

        <h1 className="text-4xl leading-normal md:text-5xl font-bold text-center mt-10 md:text-left ">
            Hi, <br />I'am <a href="#" className='text-red-400'>UserName</a> <br />Web developer
        </h1>

        <img className="rounded-full w-40 h-40 md:w-60 md:h-60 mx-auto md:mx-0" src="https://placehold.co/500x500/png" alt="img" />
        
        </div>
        <div className="flex flex-col items-center justify-center md:mr-120  md:p-0 mt-10">
            <button className="font-bold bg-red-500 p-3 w-32 md:mb-55 md:w-40 hover:bg-red-600 hover:text-white transition delay-150 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 size-12 rounded-sm">Contact</button>
        </div>
        </>
    )
}
export default Home;