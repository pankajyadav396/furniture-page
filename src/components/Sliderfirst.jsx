import React from "react";
import first from "../assets/images/webp/trending-sofa1.webp";
import secimg from "../assets/images/webp/trending-sofa2.webp";
import thirdimg from "../assets/images/webp/trending-sofa3.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const carddata = [
    { img: first },
    { img: secimg },
    { img: thirdimg },
    { img: thirdimg },
];

const Sliderfirst = () => {
    const first = React.useRef(null)
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
    };
    const myArray = carddata.map((carddata , index) => (
        <div className="pr-[21px]" key={index} data-aos="zoom-out">
            <div className="card max-w-[295px] p-4 duration-500 hover:shadow-[2px_7px_28px_0px_#0000000D]
       bg-white">
                <img src={carddata.img} alt="first" />
                <div className="pt-3 flex items-center justify-between gap-[47px]">
                    <p className="font-['poppins'] text-nowrap text-black text-xl font-medium">
                        Single Sofa
                    </p>
                    <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="107"
                            height="18"
                            viewBox="0 0 107 18"
                            fill="none"
                        >
                            <path
                                d="M18.3859 6.33831L12.6901 5.51709L10.1439 0.396152C10.0743 0.255944 9.95993 0.142442 9.8186 0.0734507C9.46415 -0.100141 9.03343 0.0445188 8.85621 0.396152L6.31002 5.51709L0.614191 6.33831C0.457157 6.36057 0.313583 6.43401 0.20366 6.54529C0.0707685 6.68079 -0.00246073 6.86309 6.31408e-05 7.05213C0.00258702 7.24117 0.0806575 7.42149 0.21712 7.55345L4.33813 11.5394L3.36452 17.1677C3.34169 17.2987 3.35629 17.4333 3.40668 17.5564C3.45706 17.6795 3.54121 17.7862 3.64958 17.8643C3.75795 17.9424 3.8862 17.9887 4.0198 17.9982C4.1534 18.0077 4.28699 17.9798 4.40543 17.9177L9.50004 15.2605L14.5947 17.9177C14.7337 17.9912 14.8953 18.0157 15.0501 17.989C15.4404 17.9222 15.7029 17.555 15.6356 17.1677L14.662 11.5394L18.783 7.55345C18.8951 7.4444 18.9692 7.30197 18.9916 7.14618C19.0522 6.75671 18.7785 6.39618 18.3859 6.33831Z"
                                fill="#FFD135"
                            />
                            <path
                                d="M40.3859 6.33831L34.6901 5.51709L32.1439 0.396152C32.0743 0.255944 31.9599 0.142442 31.8186 0.0734507C31.4642 -0.100141 31.0334 0.0445188 30.8562 0.396152L28.31 5.51709L22.6142 6.33831C22.4572 6.36057 22.3136 6.43401 22.2037 6.54529C22.0708 6.68079 21.9975 6.86309 22.0001 7.05213C22.0026 7.24117 22.0807 7.42149 22.2171 7.55345L26.3381 11.5394L25.3645 17.1677C25.3417 17.2987 25.3563 17.4333 25.4067 17.5564C25.4571 17.6795 25.5412 17.7862 25.6496 17.8643C25.7579 17.9424 25.8862 17.9887 26.0198 17.9982C26.1534 18.0077 26.287 17.9798 26.4054 17.9177L31.5 15.2605L36.5947 17.9177C36.7337 17.9912 36.8953 18.0157 37.0501 17.989C37.4404 17.9222 37.7029 17.555 37.6356 17.1677L36.662 11.5394L40.783 7.55345C40.8951 7.4444 40.9692 7.30197 40.9916 7.14618C41.0522 6.75671 40.7785 6.39618 40.3859 6.33831Z"
                                fill="#FFD135"
                            />
                            <path
                                d="M62.3859 6.33831L56.6901 5.51709L54.1439 0.396152C54.0743 0.255944 53.9599 0.142442 53.8186 0.0734507C53.4642 -0.100141 53.0334 0.0445188 52.8562 0.396152L50.31 5.51709L44.6142 6.33831C44.4572 6.36057 44.3136 6.43401 44.2037 6.54529C44.0708 6.68079 43.9975 6.86309 44.0001 7.05213C44.0026 7.24117 44.0807 7.42149 44.2171 7.55345L48.3381 11.5394L47.3645 17.1677C47.3417 17.2987 47.3563 17.4333 47.4067 17.5564C47.4571 17.6795 47.5412 17.7862 47.6496 17.8643C47.7579 17.9424 47.8862 17.9887 48.0198 17.9982C48.1534 18.0077 48.287 17.9798 48.4054 17.9177L53.5 15.2605L58.5947 17.9177C58.7337 17.9912 58.8953 18.0157 59.0501 17.989C59.4404 17.9222 59.7029 17.555 59.6356 17.1677L58.662 11.5394L62.783 7.55345C62.8951 7.4444 62.9692 7.30197 62.9916 7.14618C63.0522 6.75671 62.7785 6.39618 62.3859 6.33831Z"
                                fill="#FFD135"
                            />
                            <path
                                d="M84.3859 6.33831L78.6901 5.51709L76.1439 0.396152C76.0743 0.255944 75.9599 0.142442 75.8186 0.0734507C75.4642 -0.100141 75.0334 0.0445188 74.8562 0.396152L72.31 5.51709L66.6142 6.33831C66.4572 6.36057 66.3136 6.43401 66.2037 6.54529C66.0708 6.68079 65.9975 6.86309 66.0001 7.05213C66.0026 7.24117 66.0807 7.42149 66.2171 7.55345L70.3381 11.5394L69.3645 17.1677C69.3417 17.2987 69.3563 17.4333 69.4067 17.5564C69.4571 17.6795 69.5412 17.7862 69.6496 17.8643C69.7579 17.9424 69.8862 17.9887 70.0198 17.9982C70.1534 18.0077 70.287 17.9798 70.4054 17.9177L75.5 15.2605L80.5947 17.9177C80.7337 17.9912 80.8953 18.0157 81.0501 17.989C81.4404 17.9222 81.7029 17.555 81.6356 17.1677L80.662 11.5394L84.783 7.55345C84.8951 7.4444 84.9692 7.30197 84.9916 7.14618C85.0522 6.75671 84.7785 6.39618 84.3859 6.33831Z"
                                fill="#FFD135"
                            />
                            <path
                                d="M106.386 6.33831L100.69 5.51709L98.1439 0.396152C98.0743 0.255944 97.9599 0.142442 97.8186 0.0734507C97.4642 -0.100141 97.0334 0.0445188 96.8562 0.396152L94.31 5.51709L88.6142 6.33831C88.4572 6.36057 88.3136 6.43401 88.2037 6.54529C88.0708 6.68079 87.9975 6.86309 88.0001 7.05213C88.0026 7.24117 88.0807 7.42149 88.2171 7.55345L92.3381 11.5394L91.3645 17.1677C91.3417 17.2987 91.3563 17.4333 91.4067 17.5564C91.4571 17.6795 91.5412 17.7862 91.6496 17.8643C91.7579 17.9424 91.8862 17.9887 92.0198 17.9982C92.1534 18.0077 92.287 17.9798 92.4054 17.9177L97.5 15.2605L102.595 17.9177C102.734 17.9912 102.895 18.0157 103.05 17.989C103.44 17.9222 103.703 17.555 103.636 17.1677L102.662 11.5394L106.783 7.55345C106.895 7.4444 106.969 7.30197 106.992 7.14618C107.052 6.75671 106.778 6.39618 106.386 6.33831Z"
                                fill="#FFD135"
                            />
                        </svg>
                    </span>
                </div>
                <div className="flex items-center pb-4">
                    <p className="text-black text-nowrap font-['poppins'] text-[28px] font-semibold pt-2">
                        ₹ 1200.00{" "}
                    </p>
                    <span className="text-[#C4C4C4] text-nowrap pl-2 pt-[6px] font-['poppins'] text-[11px] font-normal">
                        ₹ 1200.00
                    </span>
                </div>
            </div>
        </div>
    ));
    return (
        <div className=" lg:pt-28 md:pt-20 sm:pt-16 pt-10 bg-[#F7F7F8] slider-first overflow-x-clip pb-24 relative z-[1]">
            <div className="container max-w-[1320px] px-3 mx-auto">
                <div className="flex flex-wrap flex-row -mx-3">
                    <div className="md:w-5/12 w-full px-3 z-[2]">
                        <div className="flex items-center gap-[11px] md:justify-start justify-center md:mb-[19px]">
                            <div className="w-[13%] border border-solid border-black"></div>
                            <h3 className=" font-['poppins'] sm:text-xl text-lg  text-center leading-normal font-normal text-[#BD7D41]" data-aos="zoom-out">
                                Shopping Store
                            </h3>
                        </div>
                        <h2 className="text-[#243040] md:text-start text-center md:pb-5 sm:pb-3 pb-1 font-['poppins'] lg:text-[35px] md:text-2xl text-xl font-bold " data-aos="zoom-out">
                            Buy trending furniture Products.
                        </h2>
                        <div className="flex md:justify-start justify-center">
                            <p
                                className="text-[#000000B2] md:text-start text-center max-w-[422px] md:mb-10 sm:mb-7 mb-4 font-['poppins'] md:text-lg text-base font-normal
              "data-aos="zoom-out"
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                faucibus, urna at pulvinar porta
                            </p>
                        </div>
                        <div className="flex gap-3 max-md:hidden" data-aos="zoom-out">
                            <button onClick={() => first?.current?.slickPrev()} className="w-[41px] group hover:bg-black duration-500 group flex justify-center items-center h-[41px] rounded-[10px] bg-white">
                                <span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="21"
                                        height="8"
                                        viewBox="0 0 21 8"
                                        fill="none"
                                    >
                                        <path
                                            d="M0.646446 4.35355C0.451185 4.15829 0.451185 3.84171 0.646446 3.64645L3.82843 0.464466C4.02369 0.269204 4.34027 0.269204 4.53553 0.464466C4.7308 0.659728 4.7308 0.976311 4.53553 1.17157L1.70711 4L4.53553 6.82843C4.7308 7.02369 4.7308 7.34027 4.53553 7.53553C4.34027 7.7308 4.02369 7.7308 3.82843 7.53553L0.646446 4.35355ZM21 4.5H1V3.5H21V4.5Z"
                                            fill="black" className="group-hover:fill-white"
                                        />
                                    </svg>
                                </span>
                            </button>
                            <button onClick={() => first?.current?.slickNext()} className="w-[41px] hover:bg-black duration-500 group flex justify-center items-center h-[41px] rounded-[10px] bg-white">
                                <span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="21"
                                        height="8"
                                        viewBox="0 0 21 8"
                                        fill="none"
                                    >
                                        <path
                                            d="M20.3536 4.35355C20.5488 4.15829 20.5488 3.84171 20.3536 3.64645L17.1716 0.464466C16.9763 0.269204 16.6597 0.269204 16.4645 0.464466C16.2692 0.659728 16.2692 0.976311 16.4645 1.17157L19.2929 4L16.4645 6.82843C16.2692 7.02369 16.2692 7.34027 16.4645 7.53553C16.6597 7.7308 16.9763 7.7308 17.1716 7.53553L20.3536 4.35355ZM0 4.5H20V3.5H0V4.5Z"
                                            fill="black" className="group-hover:fill-white"
                                        />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="md:w-7/12 w-full px-3 max-md:mt-4 relative z-[1]">
                        <Slider ref={first} {...settings}>{myArray}</Slider>
                    </div>
                    <div className="max-md:flex hidden gap-3  justify-center items-center w-full mt-8 mb-[-30px]" data-aos="zoom-out">
                        <button onClick={() => first?.current?.slickPrev()} className="w-[41px] group hover:bg-black duration-500 group flex justify-center items-center h-[41px] rounded-[10px] bg-white">
                            <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="21"
                                    height="8"
                                    viewBox="0 0 21 8"
                                    fill="none"
                                >
                                    <path
                                        d="M0.646446 4.35355C0.451185 4.15829 0.451185 3.84171 0.646446 3.64645L3.82843 0.464466C4.02369 0.269204 4.34027 0.269204 4.53553 0.464466C4.7308 0.659728 4.7308 0.976311 4.53553 1.17157L1.70711 4L4.53553 6.82843C4.7308 7.02369 4.7308 7.34027 4.53553 7.53553C4.34027 7.7308 4.02369 7.7308 3.82843 7.53553L0.646446 4.35355ZM21 4.5H1V3.5H21V4.5Z"
                                        fill="black" className="group-hover:fill-white"
                                    />
                                </svg>
                            </span>
                        </button>
                        <button onClick={() => first?.current?.slickNext()} className="w-[41px] hover:bg-black duration-500 group flex justify-center items-center h-[41px] rounded-[10px] bg-white">
                            <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="21"
                                    height="8"
                                    viewBox="0 0 21 8"
                                    fill="none"
                                >
                                    <path
                                        d="M20.3536 4.35355C20.5488 4.15829 20.5488 3.84171 20.3536 3.64645L17.1716 0.464466C16.9763 0.269204 16.6597 0.269204 16.4645 0.464466C16.2692 0.659728 16.2692 0.976311 16.4645 1.17157L19.2929 4L16.4645 6.82843C16.2692 7.02369 16.2692 7.34027 16.4645 7.53553C16.6597 7.7308 16.9763 7.7308 17.1716 7.53553L20.3536 4.35355ZM0 4.5H20V3.5H0V4.5Z"
                                        fill="black" className="group-hover:fill-white"
                                    />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="2xl:max-w-[741px] max-md:hidden max-w-[300px] lg:max-w-[500px] xl:max-w-[600px] max-h-[300px] md:max-h-[417px] bg-[linear-gradient(180deg,#243040_0%,#8B929B_100%)] w-full z-[0] h-full absolute right-0 bottom-0 md:top-[-153px]" data-aos="fade-down"></div>
        </div>
    );
};

export default Sliderfirst;