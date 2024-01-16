import React, { useEffect, useState } from "react";
const Preloader = () => {

    return (
        <div>
            <section
                style={{ zIndex: "100" }}
                className="bg-[#010223] top-0 start-0 fixed h-full w-full flex flex-col justify-center items-center"
            >
                <div class="loader">
                    <label>Loading...</label>
                    <div class="loading"></div>
                </div>
            </section>
        </div>
    );
};

export default Preloader;