import React from "react";
import Button from "./components/Buttons/Button";

function App() {
  const handleButtonOneClick = () => {
    alert("Button One clicked!");
  };

  const handleButtonTwoClick = () => {
    alert("Button Two clicked!");
  };

  return (
    <div>
      <div>
        <Button
          onClick={handleButtonOneClick}
          text='Click Me'
          className=' shadow-lg'
        />
      </div>
      <div>
        <Button
          onClick={handleButtonTwoClick}
          text='Clic Me Two'
          className=' shadow-lg bg-red-800'
        />
      </div>
    </div>
  );
}

export default App;
