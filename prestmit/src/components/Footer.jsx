

const Footer = () => {
    return <footer className="flex flex-col-reverse lg:flex-row  gap-12 lg:gap-36 mb-10 justify-evenly mx-10 lg:mx-20 lg:mr-48 py-20 ">
        <div className=" flex gap-9 lg:gap-16 font-openSans flex-col text-[#777777]">
            <div className="flex gap-10 flex-col">
                <img className="w-40" src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1692996001/boldo/Logo_4_xym5el.png" />
                <p className="">Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter.</p>
            </div>
            <p>All rights reserved.</p>
        </div>
        <div className="flex flex-col gap-5 lg:gap-10 text-xl font-openSans">
            <p className="font-bold ">Landings</p>
            <ul className="text-[#777777] flex flex-col gap-4 lg:gap-9">
                <li>Home</li>
                <li>Products </li>
                <li>Services</li>
            </ul>
        </div>
        <div className="flex flex-col gap-5 lg:gap-10 items-start text-xl font-openSans">
            <p className="font-bold ">Company</p>
            <ul className="text-[#777777] flex flex-col gap-4 lg:gap-9">
                <li>Home</li>
                <li className="flex items-center justify-center gap-3">Careers <span className="bg-[#69E6A6] rounded-full text-[#0A2640]  px-3 text-[13px] font-bold">Hiring!</span></li>
                <li>Services</li>
            </ul>
        </div>
        <div className="flex flex-col gap-5 lg:gap-10 text-xl font-openSans">
            <p className="font-bold ">Resources</p>
            <ul className="text-[#777777] flex flex-col gap-4 lg:gap-9">
                <li>Blog</li>
                <li>Products</li>
                <li>Services</li>
            </ul>
        </div>
    </footer>;
};

export default Footer;
