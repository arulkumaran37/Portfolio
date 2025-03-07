function Skills() {
    return (
      <>
        <section className="max-w-[1200px] mx-auto min-h-screen my-20">
          <h1 className="text-3xl mb-13 font-bold underline font- text-red-400 text-bold text-center justify-center">
            Skills
          </h1>
          <div className="flex-row md:flex">  
            <div className=" m-5">
            <h1 className="font-bold m-2.5 text-3xl">Professional Skills:</h1>
            <p className="md:mt-5 mb-10 md:mr-50">
            Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries.
          </p>

          <div className="w-full max-w-lg mx-auto md:mx-0">

    
      <div className="mb-10">
        <div className="flex justify-between text-xl font-bold mb-1">
          <span>React.js</span>
          <span>70%</span>
        </div>
        <div className="relative w-full h-2 bg-blue-200 rounded-full overflow-hidden">
        <div className="absolute top-0 left-0 h-full bg-sky-600" style={{ width: '70%' }}></div>
        </div>
      </div>

    
      <div className="mb-10">
        <div className="flex justify-between  text-xl font-bold mb-1">
          <span>JavaScript</span>
          <span>80%</span>
        </div>
        <div className="relative w-full h-2 bg-yellow-200 rounded-full overflow-hidden">
          <div className="absolute top-0 left-0 h-full bg-yellow-400" style={{ width: '80%' }}></div>
        </div>
      </div>

      <div className="mb-10">
        <div className="flex justify-between text-xl font-bold mb-1">
          <span>Tailwind</span>
          <span>80%</span>
        </div>
        <div className="relative w-full h-2 bg-blue-200 rounded-full overflow-hidden">
          <div className="absolute top-0 left-0 h-full bg-sky-400" style={{ width: '80%' }}></div>
        </div>
      </div>

      <div className="mb-10">
        <div className="flex justify-between text-xl font-bold mb-1">
          <span>UX/UI</span>
          <span>75%</span>
        </div>
        <div className="relative w-full h-2 bg-pink-200 rounded-full overflow-hidden">
          <div className="absolute top-0 left-0 h-full bg-pink-500" style={{ width: '75%' }}></div>
        </div>
      </div>
    </div>

              </div>       
         
          <img className="rounded-2xl w-80 h-90 md:w-90 md:h-90 mx-auto md:mx-0" src="https://placehold.co/500x500/png" alt="img" />
          </div>
        </section>
      </>
    );
  }
  
  export default Skills;
  