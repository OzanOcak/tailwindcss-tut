function App() {
  return (
    <div className="py-4 px-7 max-w-md mx-auto sm:max-w-xl">
      <div className="flex gap-4 ">
        <img className="h-12" src="/public/logo.png" alt="logo" />
        <h1 className="text-5xl font-bold text-red-500">Santaco</h1>
      </div>
      <img
        className="h-60 w-11/12 mt-4 rounded-lg shadow-2xl sm:w-full sm:object-cover
        sm:h-[30rem] object-top"
        src="/public/img.webp"
        alt=""
      />
      <h2 className="mt-3 font-bold text-2xl sm:text-3xl">
        Make your christmas resolution real in{" "}
        <span className="text-green-500 text-2xl sm:text-4xl">2023</span> and,
        you know that <span className="text-red-600">Santa</span> is watching
        you :)
      </h2>
      <p className="mt-2 sm:mt-3">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
        laudantium? Aut cumque sint, facere quaerat, deserunt sed, maxime harum
        alias ullam doloremque dicta. Eligendi ad eaque quod voluptates omnis
        expedita.
      </p>
      <button className="bg-red-500 text-white p-2 rounded-lg mt-3">
        Take me to polar!
      </button>
    </div>
  );
}

export default App;
