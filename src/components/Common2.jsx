import React from "react";

const Common2 = (props) => {
    return (
        <>
            <button
                className={`bg-[#BD7D41] before:hover:w-full before:absolute before:top-0 before:left-0 before:h-[100%] before:duration-300 before:w-0 before:bg-[#243040] before:z-[-1] border-none z-[1] relative duration-300 overflow-hidden cmn-btn px-[13px] py-[10px] text-center text-white text-xl font-medium  font-['poppins'] ${props.className}`}
            >
                {props.text}
            </button >
        </>
    );
};

export default Common2;