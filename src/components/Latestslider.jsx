import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import deal2 from "../assets/images/webp/sofa_7.webp";
import deal3 from "../assets/images/webp/sofa_8.webp";
import deal4 from "../assets/images/webp/sofa_9.webp";
import { Star } from "../components/Svg";
import Common2 from "./Common2";
const CustomPrevArrow = ({ onClick }) => (
    <button
        onClick={onClick}
        className="w-[70px] h-[70px] lg:w-[90px] lg:h-[90px] hover:bg-black group rounded-full duration-300 shadow-2xl flex items-center justify-center  bg-[#fff] absolute bottom-[-15%] left-[10%] sm:left-[30%]  lg:left-7  2xl:bottom-[38%] 2xl:left-[-7.5%]"
    >
        <svg className="stroke-black group-hover:stroke-white duration-300"  xmlns="http://www.w3.org/2000/svg" width="42" height="16" viewBox="0 0 42 16" fill="none">
            <path strokeWidth="2" d="M0.292892 8.70711C-0.0976295 8.31658 -0.0976295 7.68342 0.292892 7.29289L6.65685 0.928932C7.04738 0.538408 7.68054 0.538408 8.07107 0.928932C8.46159 1.31946 8.46159 1.95262 8.07107 2.34315L2.41422 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292892 8.70711ZM42 9H1V7H42V9Z" fill="none" />
        </svg>
    </button>
);

const CustomNextArrow = ({ onClick }) => (
    <button
        onClick={onClick}
        className="w-[70px] h-[70px] lg:w-[90px] lg:h-[90px] hover:bg-black group rounded-full bg-[#fff]  shadow-2xl flex items-center justify-center duration-300 absolute bottom-[-15%]  right-[10%] sm:right-[30%]  lg:right-6  2xl:bottom-[38%] 2xl:right-[-7.5%]"
    >
        <svg className="stroke-black group-hover:stroke-white duration-300"  xmlns="http://www.w3.org/2000/svg" width="42" height="16" viewBox="0 0 42 16" fill="none">
            <path strokeWidth="2" d="M41.7071 8.70711C42.0976 8.31658 42.0976 7.68342 41.7071 7.29289L35.3431 0.928932C34.9526 0.538408 34.3195 0.538408 33.9289 0.928932C33.5384 1.31946 33.5384 1.95262 33.9289 2.34315L39.5858 8L33.9289 13.6569C33.5384 14.0474 33.5384 14.6805 33.9289 15.0711C34.3195 15.4616 34.9526 15.4616 35.3431 15.0711L41.7071 8.70711ZM0 9H41V7H0V9Z" fill="none" />
        </svg>
    </button>
);

const Latestslider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 652,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
        ],
    };

    return (
        <>
            <div className="pb-[138px] " >
                <div className="max-w-[1340px]  px-3 mx-auto pt-[30px] ">
                    <div className="flex flex-col text-center md:flex-row items-center justify-center 910:justify-start  gap-2">
                        <span className="w-[95px] h-[1px] bg-black"></span>
                        <p className="text-xl  font-['poppins'] font-normal not-italic leading-normal text-[#BD7D41]">
                            Shopping Store
                        </p>
                    </div>
                    <p className="910:max-w-[426px] text-center 910:text-start font-bold font-['poppins'] leading-normal text-[30px] md:text-[35px] text-[#243040] not-italic md:pt-[19px] md:pb-[33px]">
                        Latest Deal
                    </p>
                    <div>
                        <Slider {...settings}>
                            <div>
                                <div className="px-1 sm:px-[23px] py-[18px]  bg-[#fff] hover:shadow-[6px_13px_38px_0_rgba(0,0,0,0.12)] duration-500 mt-4 mx-1 mb-10">
                                    <div className=" w-full">
                                        <img
                                            className="w-full duration-600 overflow-hidden"
                                            src={deal2}
                                            alt="deal"
                                        />
                                    </div>
                                    <div className="flex justify-between pt-[19px] items-center">
                                        <p className="font-['poppins'] text-nowrap font-medium text-[#000] leading-normal not-italic text-xl ">
                                            Best Guide
                                        </p>
                                        <div>
                                            <Star />
                                        </div>
                                    </div>

                                    <div className="py-[16px] text-base font-normal font-['poppins'] leading-[24px] not-italic text-[#5b5d6f]  self-stretch pb-[15px]  sm:pb-[32px] ">
                                        Lorem ipsum dolor{" "}
                                    </div>
                                    <div className="flex justify-between items-center md:pb-4">
                                        <p className=" font-['poppins'] text-nowrap font-semibold text-[#000] leading-normal text-[24px] xl:text-[28.6px] not-italic ">
                                            ₹1200.00{" "}
                                        </p>
                                        <Common2 text="ADD TO CART" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="px-1 sm:px-[23px] py-[18px]  bg-[#fff] hover:shadow-[6px_13px_38px_0_rgba(0,0,0,0.12)] duration-500 mt-4 mx-1 mb-10">
                                    <div className=" w-full">
                                        <img className="w-full" src={deal2} alt="" />
                                    </div>
                                    <div className="flex justify-between pt-[19px] items-center">
                                        <p className="font-['poppins'] text-nowrap font-medium text-[#000] leading-normal not-italic text-xl ">
                                            Best Guide
                                        </p>
                                        <div>
                                            <Star />
                                        </div>
                                    </div>

                                    <div className="py-[16px] text-base font-normal font-['poppins'] leading-[24px] not-italic text-[#5b5d6f]  self-stretch pb-[15px]  sm:pb-[32px] ">
                                        Lorem ipsum dolor{" "}
                                    </div>
                                    <div className="flex justify-between items-center md:pb-4">
                                        <p className=" font-['poppins'] text-nowrap font-semibold text-[#000] leading-normal text-[24px] xl:text-[28.6px] not-italic ">
                                            ₹1200.00{" "}
                                        </p>
                                        <Common2 text="ADD TO CART" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="px-1 sm:px-[23px] py-[18px]  bg-[#fff] hover:shadow-[6px_13px_38px_0_rgba(0,0,0,0.12)] duration-500 mt-4 mx-1 mb-10">
                                    <div className=" w-full">
                                        <img className="w-full" src={deal3} alt="" />
                                    </div>
                                    <div className="flex justify-between pt-[19px] items-center">
                                        <p className="font-['poppins'] text-nowrap font-medium text-[#000] leading-normal not-italic text-xl ">
                                            Best Guide
                                        </p>
                                        <div>
                                            <Star />
                                        </div>
                                    </div>

                                    <div className="py-[16px] text-base font-normal font-['poppins'] leading-[24px] not-italic text-[#5b5d6f]  self-stretch pb-[15px]  sm:pb-[32px] ">
                                        Lorem ipsum dolor{" "}
                                    </div>
                                    <div className="flex justify-between items-center md:pb-4">
                                        <p className=" font-['poppins'] text-nowrap font-semibold text-[#000] leading-normal text-[24px] xl:text-[28.6px] not-italic ">
                                            ₹1200.00{" "}
                                        </p>
                                        <Common2 text="ADD TO CART" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="px-1 sm:px-[23px] py-[18px]  bg-[#fff] hover:shadow-[6px_13px_38px_0_rgba(0,0,0,0.12)] duration-500 mt-4 mx-1 mb-10">
                                    <div className=" w-full">
                                        <img className="w-full" src={deal4} alt="" />
                                    </div>
                                    <div className="flex justify-between pt-[19px] items-center">
                                        <p className="font-['poppins'] text-nowrap font-medium text-[#000] leading-normal not-italic text-xl ">
                                            Best Guide
                                        </p>
                                        <div>
                                            <Star />
                                        </div>
                                    </div>

                                    <div className="py-[16px] text-base font-normal font-['poppins'] leading-[24px] not-italic text-[#5b5d6f]  self-stretch pb-[15px]  sm:pb-[32px] ">
                                        Lorem ipsum dolor{" "}
                                    </div>
                                    <div className="flex justify-between items-center md:pb-4">
                                        <p className=" font-['poppins'] text-nowrap font-semibold text-[#000] leading-normal text-[24px] xl:text-[28.6px] not-italic ">
                                            ₹1200.00{" "}
                                        </p>
                                        <Common2 text="ADD TO CART" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="px-1 sm:px-[23px] py-[18px]  bg-[#fff] hover:shadow-[6px_13px_38px_0_rgba(0,0,0,0.12)] duration-500 mt-4 mx-1 mb-10">
                                    <div className=" w-full">
                                        <img className="w-full" src={deal2} alt="" />
                                    </div>
                                    <div className="flex justify-between pt-[19px] items-center">
                                        <p className="font-['poppins'] text-nowrap font-medium text-[#000] leading-normal not-italic text-xl ">
                                            Best Guide
                                        </p>
                                        <div>
                                            <Star />
                                        </div>
                                    </div>

                                    <div className="py-[16px] text-base font-normal font-['poppins'] leading-[24px] not-italic text-[#5b5d6f]  self-stretch pb-[15px]  sm:pb-[32px] ">
                                        Lorem ipsum dolor{" "}
                                    </div>
                                    <div className="flex justify-between items-center md:pb-4">
                                        <p className=" font-['poppins'] text-nowrap font-semibold text-[#000] leading-normal text-[24px] xl:text-[28.6px] not-italic ">
                                            ₹1200.00{" "}
                                        </p>
                                        <Common2 text="ADD TO CART" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="px-1 sm:px-[23px] py-[18px]  bg-[#fff] hover:shadow-[6px_13px_38px_0_rgba(0,0,0,0.12)] duration-500 mt-4 mx-1 mb-10">
                                    <div className=" w-full ">
                                        <img className="w-full" src={deal3} alt="" />
                                    </div>
                                    <div className="flex justify-between pt-[19px] items-center">
                                        <p className="font-['poppins'] text-nowrap font-medium text-[#000] leading-normal not-italic text-xl ">
                                            Best Guide
                                        </p>
                                        <div>
                                            <Star />
                                        </div>
                                    </div>

                                    <div className="py-[16px] text-base font-normal font-['poppins'] leading-[24px] not-italic text-[#5b5d6f]  self-stretch pb-[15px]  sm:pb-[32px] ">
                                        Lorem ipsum dolor{" "}
                                    </div>
                                    <div className="flex justify-between items-center md:pb-4">
                                        <p className=" font-['poppins'] text-nowrap font-semibold text-[#000] leading-normal text-[24px] xl:text-[28.6px] not-italic ">
                                            ₹1200.00{" "}
                                        </p>
                                        <Common2 text="ADD TO CART" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="px-1 sm:px-[23px] py-[18px]  bg-[#fff] hover:shadow-[6px_13px_38px_0_rgba(0,0,0,0.12)] duration-500 mt-4 mx-1 mb-10">
                                    <div className=" w-full">
                                        <img className="w-full" src={deal4} alt="" />
                                    </div>
                                    <div className="flex justify-between pt-[19px] items-center">
                                        <p className="font-['poppins'] text-nowrap font-medium text-[#000] leading-normal not-italic text-xl ">
                                            Best Guide
                                        </p>
                                        <div>
                                            <Star />
                                        </div>
                                    </div>

                                    <div className="py-[16px] text-base font-normal font-['poppins'] leading-[24px] not-italic text-[#5b5d6f]  self-stretch pb-[15px]  sm:pb-[32px] ">
                                        Lorem ipsum dolor{" "}
                                    </div>
                                    <div className="flex justify-between items-center md:pb-4">
                                        <p className=" font-['poppins'] text-nowrap font-semibold text-[#000] leading-normal text-[24px] xl:text-[28.6px] not-italic ">
                                            ₹1200.00{" "}
                                        </p>
                                        <Common2 text="ADD TO CART" />
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                    {/* ))} */}
                </div>
            </div>
        </>
    );
};

export default Latestslider;