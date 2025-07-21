function About() {
  return (
    <>
      <section className="max-w-[1200px] mx-auto min-h-screen my-20">
        <h1 className="text-3xl font-bold underline font- text-red-400 text-bold text-center justify-center">
          About
        </h1>
        <div className="flex-row-reverse md:flex"> 
                 
        <p className="p-5 text-2xl md:pl-40 pt-20">
        <h1 className="text-3xl font-bold pb-5" >I'am userName</h1> 
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <img className="mt-10 rounded-2xl ml-10 w-80 md:w-90 md:h-100" src="https://placehold.co/500x500/png" alt="img" />
        </div>
      </section>
    </>
  );
}

export default About;
