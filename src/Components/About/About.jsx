// IMAGES
import aboutmeIMG from "../../assets/images/aboutmeIMG.png";
import faceBook from "../../assets/images/fb.png";
import insta from "../../assets/images/insta.png";
import twitter from "../../assets/images/twitter.png";
import linkedin from "../../assets/images/linkedin.png";

const About = () => {
  return (
    <div className="md:max-w-[1100px] md:mx-auto mx-5 my-20" id="About">
      <div className="md:flex gap-20">
        {/* About me image */}
        <div className="relative">
          <div className="md:w-[400px]">
            <img src={aboutmeIMG} alt="" />
          </div>

          {/* Social icons */}
          <div className="flex gap-10 absolute md:top-96 right-14">
            <img src={faceBook} alt="" />
            <img src={insta} alt="" />
            <img src={twitter} alt="" />
            <img src={linkedin} alt="" />
          </div>
        </div>
        {/* About me description */}
        <div className="mt-10 md:mt-0 text-center md:text-left">
          <div>
            {/* HEading */}
            <h1 className="text-[#E4B40D] text-5xl font-semibold">About Me</h1>
            {/* sub heading */}
            <h2 className="font-semibold mt-2">I AM AN UX/UI DESIGNER. </h2>
          </div>

          {/* Description */}
          <div>
            <p className="mt-5 text-gray-600 text-[14px]">
              Lorem Ipsum High level Skilled experience in Web Design and UX/UI
              Design knowledge and produce best quality work. Customers
              satisfaction is first.Sed ut perspiciatis unde accusantium
              doloremque laudantium,totam rem aperiam.
            </p>

            <p className="mt-5 text-gray-600 text-[14px]">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque isaworld laudantium,totam rem aperiam,
              eaque ipsa quae ab illo inventore veritatis et quas world.
            </p>
          </div>

          {/* Details */}
          <div className="mt-10">
            {/* Name and bday */}
            <div className="md:flex justify-start md:gap-28 border-b pb-2">
              <div>
                <p>
                  <span className="mr-3 font-semibold">NAME:</span> Camelia Rose
                </p>
              </div>
              <div>
                <p>
                  <span className="mr-3 font-semibold">BIRTHDAY:</span> 25th
                  March 1988
                </p>
              </div>
            </div>

            {/* Age & Address */}
            <div className="md:flex justify-start md:gap-[165px] border-b pb-2">
              <div>
                <p>
                  <span className="mr-3 font-semibold">AGE:</span> 35 Years
                </p>
              </div>
              <div>
                <p>
                  <span className="mr-3 font-semibold">ADDRESS:</span>113/7/a,
                  Astoria, NY, USA
                </p>
              </div>
            </div>

            {/* Email & Language */}
            <div className="md:flex justify-start md:gap-[37px] items-start border-b pb-2">
              <div>
                <p>
                  <span className="mr-3 font-semibold">EMAIL:</span>
                  cameliarose@gmail.com
                </p>
              </div>
              <div>
                <p>
                  <span className="mr-3 font-semibold">LANGUAGE:</span>
                  English,Frence
                </p>
              </div>
            </div>

            {/* Phone & Freelance */}
            <div className="md:flex justify-start md:gap-[90px] pr-5 border-b pb-2">
              <div>
                <p>
                  <span className="mr-3 font-semibold">PHONE:</span> 01768-677
                  779
                </p>
              </div>
              <div>
                <p>
                  <span className="mr-3 font-semibold">FREELANCE:</span>
                  Available
                </p>
              </div>
            </div>
          </div>

          {/* DOWNLOAD CV BUTTON */}
          <button className="text-white bg-[#E4B40D] hover:bg-yellow-400 px-5 py-3 rounded-full mt-8">
            DOWNLOAD CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
