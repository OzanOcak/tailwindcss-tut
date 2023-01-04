const Hero = () => {
  return (
    <div>
      <div className="flex gap-4 mb-1 sm:mb-2 lg:mb-6">
        <img className="h-12" src="/logo.png" alt="logo" />
        <h1 className="text-5xl font-bold text-red-500">Santaco</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <img
          className="h-[21.5rem] w-11/12 mt-4 rounded-lg shadow-2xl sm:w-full object-cover 
      sm:h-[30rem] object-top lg:hidden"
          src="/img.webp"
          alt="tree"
        />
        <div>
          <h2 className="mb-3 font-bold text-2xl sm:text-3xl sm:mb-4 lg:text-4xl lg:mb-6">
            Make your christmas resolution real in{" "}
            <span className="text-green-500 text-2xl sm:text-4xl">2023</span>
            and, you know that
            <br className="hidden sm:inline" />{" "}
            <span className="text-red-600">Santa</span> is watching you :)
          </h2>
          <p className="mb-2 sm:mb-3 lg:mb-6 lg:text-[1.2rem]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
            laudantium? Aut cumque sint, facere quaerat, deserunt sed, maxime
            harum alias ullam doloremque dicta. Eligendi ad eaque quod
            voluptates omnis expedita.
          </p>
          <div className="space-x-2">
            <button className="btn btn-primary shadow-lg transform transition hover:-translate-y-0.5">
              santa
            </button>
            <button className="btn btn-secondary">wishes</button>
          </div>
        </div>
        <div className="hidden relative lg:block">
          <img
            className="absolute inset-0 w-full h-full object-cover object-top"
            src="/img.webp"
            alt="tree"
          />
        </div>
      </div>
    </div>
  );
};
export default Hero;
