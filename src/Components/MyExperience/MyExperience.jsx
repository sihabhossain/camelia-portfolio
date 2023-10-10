// CSS
import "./MyExperience.css";

const MyExperience = () => {
  return (
    <div className="experience">
      <div className="md:max-w-[1200px] md:mx-auto mx-5 pb-20 mb-20">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-[#E4B40D] font-semibold text-6xl pt-16">
            MY EXPERIENCE
          </h1>
          <h2 className="text-2xl pt-5">
            All the Experience that I have in that field of work are mentioned
          </h2>
        </div>

        {/* experiences */}
        <div className="md:flex gap-20">
          {/* Left side */}

          <div className="2/4 mt-14 space-y-5">
            <div className="space-y-3">
              <h2 className="text-[#E4B40D] font-semibold text-3xl">
                SENIOR UX/UI DESIGNER
              </h2>
              <h3>Jan 2023 - Present</h3>
              <h4 className="text-[#E4B40D] font-semibold">
                Medius IT Solution,
              </h4>
              <h5 className="text-[18px]">New York. USA.</h5>
              <p className="border-b-4 border-[#E4B40D] pb-5">
                Lorem ipsum dolor sit amet, consectetur adip iscing elit. Nunc
                ligula nulla, tincidunt id faucibus sed, suscipit feugiat
                turpis.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-[#E4B40D] font-semibold text-3xl">
                SENIOR UX/UI DESIGNER
              </h2>
              <h3>Jan 2023 - Present</h3>
              <h4 className="text-[#E4B40D] font-semibold">
                Medius IT Solution,
              </h4>
              <h5 className="text-[18px]">New York. USA.</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adip iscing elit. Nunc
                ligula nulla, tincidunt id faucibus sed, suscipit feugiat
                turpis.
              </p>
            </div>
          </div>
          {/* Right side */}
          <div className="2/4 mt-14 space-y-5">
            <div className="space-y-3">
              <h2 className="text-[#E4B40D] font-semibold text-3xl">
                SENIOR UX/UI DESIGNER
              </h2>
              <h3>Jan 2023 - Present</h3>
              <h4 className="text-[#E4B40D] font-semibold">
                Medius IT Solution,
              </h4>
              <h5 className="text-[18px]">New York. USA.</h5>
              <p className="border-b-4 border-[#E4B40D] pb-5">
                Lorem ipsum dolor sit amet, consectetur adip iscing elit. Nunc
                ligula nulla, tincidunt id faucibus sed, suscipit feugiat
                turpis.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-[#E4B40D] font-semibold text-3xl">
                SENIOR UX/UI DESIGNER
              </h2>
              <h3>Jan 2023 - Present</h3>
              <h4 className="text-[#E4B40D] font-semibold">
                Medius IT Solution,
              </h4>
              <h5 className="text-[18px]">New York. USA.</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adip iscing elit. Nunc
                ligula nulla, tincidunt id faucibus sed, suscipit feugiat
                turpis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyExperience;
