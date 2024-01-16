import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import deal2 from "../assets/images/webp/sofa_7.webp";
import deal3 from "../assets/images/webp/sofa_8.webp";
import deal4 from "../assets/images/webp/sofa_9.webp";
import { Arrow_1, Arrow_2, Star } from "../components/Svg";
import Common2 from "./Common2";
const CustomPrevArrow = ({ onClick }) => (
    <button
        onClick={onClick}
        className="w-[70px] h-[70px] lg:w-[90px] lg:h-[90px] rounded-full duration-300 shadow-2xl flex items-center justify-center  bg-[#fff] absolute bottom-[-15%] left-[10%] sm:left-[30%]  lg:left-7  2xl:bottom-[38%] 2xl:left-[-7.5%]"
    >
        <Arrow_1 />
    </button>
);

const CustomNextArrow = ({ onClick }) => (
    <button
        onClick={onClick}
        className="w-[70px] h-[70px] lg:w-[90px] lg:h-[90px] rounded-full bg-[#fff]  shadow-2xl flex items-center justify-center duration-300 absolute bottom-[-15%]  right-[10%] sm:right-[30%]  lg:right-6  2xl:bottom-[38%] 2xl:right-[-7.5%]"
    >
        <Arrow_2 />
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
            <div className="pb-[138px] overflow-hidden" >
                <div className="max-w-[1340px]  px-3 mx-auto pt-[30px] ">
                    <div className="flex flex-col text-center md:flex-row items-center justify-center 910:justify-start  gap-2">
                        <span className="w-[95px] h-[1px] bg-black"></span>
                        <p className="text-xl  font-ff-pop font-normal not-italic leading-normal text-[#BD7D41]">
                            Shopping Store
                        </p>
                    </div>
                    <p className="910:max-w-[426px] text-center 910:text-start font-bold font-ff-pop leading-normal text-[30px] md:text-[35px] text-[#243040] not-italic md:pt-[19px] md:pb-[33px]">
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
                                        <p className="font-ff-pop text-nowrap font-medium text-[#000] leading-normal not-italic text-xl ">
                                            Best Guide
                                        </p>
                                        <div>
                                            <Star />
                                        </div>
                                    </div>

                                    <div className="py-[16px] text-base font-normal font-ff-pop leading-[24px] not-italic text-[#5b5d6f]  self-stretch pb-[15px]  sm:pb-[32px] ">
                                        Lorem ipsum dolor{" "}
                                    </div>
                                    <div className="flex justify-between items-center md:pb-4">
                                        <p className=" font-ff-pop text-nowrap font-semibold text-[#000] leading-normal text-[24px] xl:text-[28.6px] not-italic ">
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
                                        <p className="font-ff-pop text-nowrap font-medium text-[#000] leading-normal not-italic text-xl ">
                                            Best Guide
                                        </p>
                                        <div>
                                            <Star />
                                        </div>
                                    </div>

                                    <div className="py-[16px] text-base font-normal font-ff-pop leading-[24px] not-italic text-[#5b5d6f]  self-stretch pb-[15px]  sm:pb-[32px] ">
                                        Lorem ipsum dolor{" "}
                                    </div>
                                    <div className="flex justify-between items-center md:pb-4">
                                        <p className=" font-ff-pop text-nowrap font-semibold text-[#000] leading-normal text-[24px] xl:text-[28.6px] not-italic ">
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
                                        <p className="font-ff-pop text-nowrap font-medium text-[#000] leading-normal not-italic text-xl ">
                                            Best Guide
                                        </p>
                                        <div>
                                            <Star />
                                        </div>
                                    </div>

                                    <div className="py-[16px] text-base font-normal font-ff-pop leading-[24px] not-italic text-[#5b5d6f]  self-stretch pb-[15px]  sm:pb-[32px] ">
                                        Lorem ipsum dolor{" "}
                                    </div>
                                    <div className="flex justify-between items-center md:pb-4">
                                        <p className=" font-ff-pop text-nowrap font-semibold text-[#000] leading-normal text-[24px] xl:text-[28.6px] not-italic ">
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
                                        <p className="font-ff-pop text-nowrap font-medium text-[#000] leading-normal not-italic text-xl ">
                                            Best Guide
                                        </p>
                                        <div>
                                            <Star />
                                        </div>
                                    </div>

                                    <div className="py-[16px] text-base font-normal font-ff-pop leading-[24px] not-italic text-[#5b5d6f]  self-stretch pb-[15px]  sm:pb-[32px] ">
                                        Lorem ipsum dolor{" "}
                                    </div>
                                    <div className="flex justify-between items-center md:pb-4">
                                        <p className=" font-ff-pop text-nowrap font-semibold text-[#000] leading-normal text-[24px] xl:text-[28.6px] not-italic ">
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
                                        <p className="font-ff-pop text-nowrap font-medium text-[#000] leading-normal not-italic text-xl ">
                                            Best Guide
                                        </p>
                                        <div>
                                            <Star />
                                        </div>
                                    </div>

                                    <div className="py-[16px] text-base font-normal font-ff-pop leading-[24px] not-italic text-[#5b5d6f]  self-stretch pb-[15px]  sm:pb-[32px] ">
                                        Lorem ipsum dolor{" "}
                                    </div>
                                    <div className="flex justify-between items-center md:pb-4">
                                        <p className=" font-ff-pop text-nowrap font-semibold text-[#000] leading-normal text-[24px] xl:text-[28.6px] not-italic ">
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
                                        <p className="font-ff-pop text-nowrap font-medium text-[#000] leading-normal not-italic text-xl ">
                                            Best Guide
                                        </p>
                                        <div>
                                            <Star />
                                        </div>
                                    </div>

                                    <div className="py-[16px] text-base font-normal font-ff-pop leading-[24px] not-italic text-[#5b5d6f]  self-stretch pb-[15px]  sm:pb-[32px] ">
                                        Lorem ipsum dolor{" "}
                                    </div>
                                    <div className="flex justify-between items-center md:pb-4">
                                        <p className=" font-ff-pop text-nowrap font-semibold text-[#000] leading-normal text-[24px] xl:text-[28.6px] not-italic ">
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
                                        <p className="font-ff-pop text-nowrap font-medium text-[#000] leading-normal not-italic text-xl ">
                                            Best Guide
                                        </p>
                                        <div>
                                            <Star />
                                        </div>
                                    </div>

                                    <div className="py-[16px] text-base font-normal font-ff-pop leading-[24px] not-italic text-[#5b5d6f]  self-stretch pb-[15px]  sm:pb-[32px] ">
                                        Lorem ipsum dolor{" "}
                                    </div>
                                    <div className="flex justify-between items-center md:pb-4">
                                        <p className=" font-ff-pop text-nowrap font-semibold text-[#000] leading-normal text-[24px] xl:text-[28.6px] not-italic ">
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