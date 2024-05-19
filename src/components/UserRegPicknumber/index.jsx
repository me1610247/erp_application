import React, { useState, useEffect } from "react";
import { Text, Img } from "./..";
import { useNavigate, useLocation } from 'react-router-dom';
import './index.css'
export default function UserRegPicknumber({ options = ["واحد فقط", "اكثر من واحد", "اختر"], ...props }) {

  const navigate = useNavigate();
  const location = useLocation();

  // Ensure "اختر" is always included in the options list
  if (!options.includes("اختر")) {
    options = ["اختر", ...options];
  }

  // Set the default selected option based on the current route
  const [selectedOption, setSelectedOption] = useState(() => {
    switch (location.pathname) {
      case "/UserReg":
        return "واحد فقط";
      case "/UsersRegOne":
        return "اكثر من واحد";
      default:
        return "اختر";
    }
  });

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowOptions(false);
    let route = '';
    switch (option) {
      case "واحد فقط":
        route = '/UserReg';
        break;
      case "اكثر من واحد":
        route = '/UsersRegOne';
        break;
      default:
        route = '/UsersReg';
        break;
    }
    navigate(route);
    // Store the selected option in localStorage
    localStorage.setItem("selectedOption", option);
  };

  // State for showing/hiding options dropdown
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    // Check if there's a previously selected option in storage
    const storedOption = localStorage.getItem("selectedOption");

    // Update selected option if it's changed in storage
    if (storedOption && options.includes(storedOption) && storedOption !== selectedOption) {
      setSelectedOption(storedOption);
    }
  }, [options, selectedOption]);

  return (
    <div {...props} className={`${props.className} flex justify-center items-center relative`}>
      <div className="relative">
        <div
          className="relative rounded-[20px] border-2 border-solid border-black-900 bg-green-400 pb-[9px] pl-14 pr-[72px] pt-2.5 md:px-5 cursor-pointer"
          onClick={() => setShowOptions(!showOptions)}
        >
          <Text size="lg">{selectedOption}</Text>
          <Img
            src="images/img_chevron_down.png"
            alt="chevron icon"
            className="absolute right-0 top-0 z-[3] mr-[17px] h-[58px] w-[14%] object-cover md:mr-0"
          />
        </div>
        {showOptions && (
          <div className="absolute top-[40px] left-0 w-full max-h-60 overflow-y-auto bg-green-400 pl-14 pr-[72px] pt-2.5 md:px-5 rounded-[20px] border-2 border-solid border-black-900">
            {options.map((option, index) => (
              <div
                key={index}
                className="cursor-pointer"
                onClick={() => handleOptionSelect(option)}
              >
                 <hr className="hr-line" />
                <Text size="lg">{option}</Text>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
