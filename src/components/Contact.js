const Contact = () => {
  return (
    <div>
      <h1 className="pageHeading text-2xl font-semibold  mt-6 text-center text-pink-600">
        Contact Us
      </h1>
      <form className="mt-9 flex flex-col justify-center items-center">
        <input
          type="text"
          className="border-2 border-solid border-pink-400 rounded-md text-base h-8 w-96 pl-2
             text-pink-900 focus:border-pink-800 mb-4"
          placeholder="Enter your Name"
        />
        <input
          type="text"
          className="border-2 border-solid border-pink-400 rounded-md text-base h-8 w-96 pl-2
             text-pink-900 focus:border-pink-800 mb-4"
          placeholder="Enter your Phone no."
        />
        <input
          type="email"
          className="border-2 border-solid border-pink-400 rounded-md text-base h-8 w-96 pl-2
             text-pink-900 focus:border-pink-800 mb-4"
          placeholder="Enter your Email Id"
        />
        <textarea
          className="border-2 border-solid border-pink-400 rounded-md text-base h-24 w-96 pl-2
             text-pink-900 focus:border-pink-800 mb-4"
          cols={"50"}
        />
        <button
          className="searchBtn ml-1 px-5 py-1 text-base bg-pink-500 text-white border-2 
            border-solid rounded-lg shadow-sm hover:bg-pink-800"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
