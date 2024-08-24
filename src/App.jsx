import React, { useState } from "react";
import Button from "./components/Buttons/Button";

function App() {
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");



  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedName(name);
  };

  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 mb-5">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="p-2 border border-gray-300 rounded"
        />
        <Button
          onClick={handleSubmit}
          text="Submit"
          className="shadow-lg bg-red-500 text-white"
        />
      </form>

      {submittedName && <p className="text-lg">Hello, {submittedName}!</p>}

    </div>
  );
}

export default App;
