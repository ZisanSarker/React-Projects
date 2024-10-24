import React from "react";
import { QuestionMarkIcon } from "../icons";

const FaqCard = ({ title, desc }) => {
  return (
    <div className="mb-12 flex lg:mb-[70px]">
      <div className="mr-4 flex h-[50px] w-full max-w-[50px] items-center justify-center rounded-xl bg-primary text-white sm:mr-6 sm:h-[60px] sm:max-w-[60px]">
        <QuestionMarkIcon />
      </div>
      <div className="w-full">
        <h3 className="mb-6 text-xl font-semibold text-dark dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="text-base text-body-color dark:text-dark-6">{desc}</p>
      </div>
    </div>
  );
};

export default FaqCard;