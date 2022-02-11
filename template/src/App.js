import "./App.css";
import { useState } from "react";

function App() {
  let [fullname, setFullName] = useState("");
  let [email, setEmail] = useState("");
  let [subject, setSubject] = useState("");
  let [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("form submitted");
    let data = {
      "Full Name": fullname,
      email: email,
      subject: subject,
      message: message,
    };
    console.log(data);
    setFullName("");
    setEmail("");
    setSubject("");
    setMessage("");
  }

  return (
    <div className="font-sans capitalize flex justify-center items-center p-8 mt-6">
      <form
        method="GET"
        onSubmit={handleSubmit}
        className="w-1/3 flex flex-col items-center"
      >
        <div className="flex flex-col mb-6 w-5/6">
          <label
            htmlFor="fullname"
            className="capitalize text-3xl text-stone-400 font-semibold mb-3"
          >
            full name
          </label>
          <input
            type="text"
            id="fullname"
            className="placeholder:capitalize placeholder:text-xl text-xl placeholder:text-stone-300 text-gray-800 p-2 flex justify-center items-center"
            placeholder="full name"
            value={fullname}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="flex flex-col mb-6 w-5/6">
          <label
            htmlFor="email"
            className="capitalize text-3xl text-stone-400 font-semibold mb-3"
          >
            email
          </label>
          <input
            type="email"
            id="email"
            className="placeholder:capitalize placeholder:text-xl text-xl placeholder:text-stone-300 text-gray-800 p-2 flex justify-center items-center"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col mb-6 w-5/6">
          <label
            htmlFor="subject"
            className="capitalize text-3xl text-stone-400 font-semibold mb-3"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className="placeholder:capitalize placeholder:text-xl text-xl placeholder:text-stone-300 text-gray-800 p-2 flex justify-center items-center"
            placeholder="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className="flex flex-col mb-6 w-5/6">
          <label
            htmlFor="message"
            className="capitalize text-3xl text-stone-400 font-semibold mb-3"
          >
            Message
          </label>
          <textarea
            id="message"
            placeholder="message"
            value={message}
            className="placeholder:capitalize placeholder:text-xl text-xl placeholder:text-stone-300 text-gray-800 p-2 flex justify-center items-center"
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 w-5/6 hover:bg-blue-600 rounded-md shadow-md hover:shadow-lg text-white text-2xl font-bold capitalize p-3"
        >
          send
        </button>
      </form>
    </div>
  );
}

export default App;
