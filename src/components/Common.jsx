import React from "react";

const Common = (props) => {
    return (
        <>
            <button
                className={`bg-[#BD7D41] before:hover:w-full before:absolute before:top-0 before:left-0 before:duration-300 before:h-[100%] before:w-0 before:bg-[#243040] before:z-[-1] border-none z-[1] relative duration-300 overflow-hidden cmn-btn py-[15px] px-[9px] sm:py-[19px] sm:px-12 text-white sm:text-xl text-[18px] font-semibold font-poppins ${props.className}`}
            >
                {props.text}
            </button >
        </>
    );
};

export default Common