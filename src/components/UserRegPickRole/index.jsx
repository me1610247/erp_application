import React, { useState } from "react";
import { Text, Img } from "./..";

export default function UserRegPickRole({ ...props }) {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState("اختر");

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowOptions(false);
  };

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
            {["موظف", "مدير مؤسسة"].map((option, index) => (
              <div
                key={index}
                className="cursor-pointer"
                onClick={() => handleOptionSelect(option)}
              >
                <Text size="lg">{option}</Text>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
