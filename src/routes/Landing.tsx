export default function Landing() {
  return (
    <div className="bg-brand-light text-brand">
    <section className="h-screen flex items-center justify-center bg-white px-12 gap-12">
      {/* Hero Image */}
      <div className="flex justify-center">
        <img
          src="/images/ella.svg" 
          alt="Ella Sanchez"
          className="w-96 h-[500px] object-cover  rotate-1"
        />
      </div>

      {/* Text Block */}
      <div className="pl-12">
        <h1 className="text-[160px] font-bold text-[#4a4a2a] leading-none">
          ELLA <br /> SANCHEZ
        </h1>
        <p className="mt-6 text-2xl text-[#4a4a2a] max-w-2xl">
          I am a Computer Science student pursuing a minor in Communication at
          Cornell University, with an interest in UI/UX and Full-Stack WebDev.
        </p>
      </div>
    </section>

    
     {/* Projects Section */}
      <section className="h-screen flex items-center justify-center bg-white">
        <h2 className="text-4xl font-semibold">Projects</h2>
      </section>
    </div>
  );
}


