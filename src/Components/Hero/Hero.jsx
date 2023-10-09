// CSS
import "./Hero.css";

// IMAGES
import cameliaRose from "../../assets/images/Camelia Rose.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="content flex justify-center items-center ">
        {/* heading */}
        <div className="font-bold pt-20">
          <h1 className=" md:flex gap-2 items-center justify-center">
            <p className="text-5xl">HELLO, I AM</p>
            <img src={cameliaRose} className="h-[45px]" alt="" />
          </h1>
        </div>

        {/* sub heading */}
        <div className="font-bold">
          <p className="md:text-5xl text-3xl mt-5">An Ux/Ui Designer</p>
        </div>

        {/* description */}
        <div>
          <p className="md:w-[800px] flex text-center pt-10">
            High level Skilled experience in Web Design and UX/UI Design
            knowledge and produce best quality work. Customers satisfaction is
            first. I Design and produce best quality work. Customers
            satisfaction is first. Customers satisfaction is first. I Design and
            produce best quality wo
          </p>
        </div>

        {/* BUTTONS */}
        <div className="flex justify-center items-center gap-5 pt-10 font-semibold">
          <button className="text-white bg-[#E4B40D] px-5 py-3 w-[150px] rounded-full">
            contact me
          </button>
          <button className="text-black bg-white w-[150px] px-5 py-3  rounded-full">
            Portfolio
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
