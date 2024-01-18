
const Preloader = () => {

    return (
        <div>
            <section
                style={{ zIndex: "100" }}
                className="bg-[#010223] top-0 start-0 fixed h-full w-full flex flex-col justify-center items-center"
            >
                <div className="loader">
                    <label>Loading...</label>
                    <div className="loading"></div>
                </div>
            </section>
        </div>
    );
};

export default Preloader;