// Image
import listIcon from "../../assets/images/listIcon.png";
import figmaImg from "../../assets/images/figma.png";
import xdImg from "../../assets/images/xd.png";
import aiImg from "../../assets/images/adobe.png";
import photoShopImg from "../../assets/images/photoshop.png";
import miroImg from "../../assets/images/miro.png";

const MySkills = () => {
  return (
    <div className="md:max-w-[1100px] md:mx-auto mx-10 mb-10">
      <div>
        {/* Heading */}
        <h1 className="text-[#E4B40D] font-semibold text-5xl text-center mb-3">
          MY SKILLS
        </h1>
        <h2 className="text-center font-semibold text-2xl">
          All the skills that I have in that field of work are mentioned
        </h2>
      </div>

      {/* details */}
      <div className="md:flex md:gap-20 mt-10">
        {/* Left side */}
        <div className="md:w-3/5">
          {/* description */}
          <div>
            <p className="text-[14px]">
              Lorem Ipsum High level Skilled experience in Web Design and UX/UI
              Design knowledge and produce best quality work. Customers
              satisfaction is first.Sed ut perspiciatis unde accusantium
              doloremque laudantium,totam rem aperiam. Customers satisfaction is
              first.
            </p>
          </div>

          {/* skill lists */}
          <div className="md:flex md:gap-10 mt-10">
            {/* LEFT SIDE */}
            <div className="w-2/4 space-y-8">
              <div className="flex items-center font-bold gap-2">
                <img src={listIcon} alt="" />
                <p> Ux/Ui Design</p>
              </div>
              <div className="flex items-center font-bold gap-2">
                <img src={listIcon} alt="" />
                <p> Landing Page UI Design</p>
              </div>
              <div className="flex items-center font-bold gap-2">
                <img src={listIcon} alt="" />
                <p> Mobile App Design</p>
              </div>
              <div className="flex items-center font-bold gap-2">
                <img src={listIcon} alt="" />
                <p> Prototyping</p>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="w-2/4 space-y-8 mt-5 md:mt-0">
              <div className="flex items-center font-bold gap-2">
                <img src={listIcon} alt="" />
                <p> Wireframing (Mid/High)</p>
              </div>
              <div className="flex items-center font-bold gap-2">
                <img src={listIcon} alt="" />
                <p> Usability Study</p>
              </div>
              <div className="flex items-center font-bold gap-2">
                <img src={listIcon} alt="" />
                <p> Ux Research</p>
              </div>
              <div className="flex items-center font-bold gap-2">
                <img src={listIcon} alt="" />
                <p> Website Design</p>
              </div>
            </div>
          </div>
        </div>
        {/* Right side */}
        <div className="md:w2-5 mt-10 md:mt-2">
          {/* field of works */}
          <div className="space-y-10">
            {/* FIgma */}
            <div className="flex gap-2">
              <div>
                <img src={figmaImg} alt="" />
              </div>
              <div className="flex md:gap-64 gap-52 border-b-4 border-[#504594]">
                <p className="text-[#E4B40D] font-semibold">Figma</p>
                <p className="text-[#083260] font-semibold">95%</p>
              </div>
            </div>
            {/*  XD */}
            <div className="flex gap-2">
              <div>
                <img src={xdImg} alt="" />
              </div>
              <div className="flex md:gap-64 gap-52 border-b-4 border-[#504594]">
                <p className="text-[#E4B40D] font-semibold">Adobe </p>
                <p className="text-[#083260] font-semibold">90%</p>
              </div>
            </div>
            {/* adobe AI */}
            <div className="flex gap-2">
              <div>
                <img src={aiImg} alt="" />
              </div>
              <div className="flex md:gap-64 gap-52 border-b-4 border-[#504594]">
                <p className="text-[#E4B40D] font-semibold">Adobe</p>
                <p className="text-[#083260] font-semibold">95%</p>
              </div>
            </div>
            {/* photoshop */}
            <div className="flex gap-2">
              <div>
                <img src={photoShopImg} alt="" />
              </div>
              <div className="flex md:gap-64 gap-52 border-b-4 border-[#504594]">
                <p className="text-[#E4B40D] font-semibold">Adobe</p>
                <p className="text-[#083260] font-semibold">85%</p>
              </div>
            </div>
            {/* Miro */}
            <div className="flex gap-2">
              <div>
                <img src={miroImg} alt="" />
              </div>
              <div className="flex md:gap-64 gap-52 border-b-4 border-[#504594]">
                <p className="text-[#E4B40D] font-semibold">Miro</p>
                <p className="text-[#083260] font-semibold">80%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
