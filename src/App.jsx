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
 
      <div className="flex gap-5 justify-center">
        <Button
          onClick={handleButtonOneClick}
          text='Click Me'
          className=' shadow-lg'
        />
   
      
        <Button
          onClick={handleButtonTwoClick}
          text='Clic Me Two'
          className=' shadow-lg bg-red-800'
        />
      </div>
   
  );
}

export default App;
