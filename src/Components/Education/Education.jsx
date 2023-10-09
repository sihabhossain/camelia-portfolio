// CSS
import CoursesEducation from "./CoursesEducation";
import "./Education.css";

const Education = () => {
  return (
    <div className="education" id="Education">
      <div className="md:max-w-[1100px] md:mx-auto mb-10 pb-5">
        {/* Heading */}
        <div>
          <h2 className="text-center md:text-2xl pt-14 font-semibold">
            EDUCATIONAL QUALIFICATION
          </h2>
          <h1 className=" text-center text-[#E4B40D] md:text-6xl text-3xl font-semibold">
            My Educational Qualification
          </h1>
        </div>

        {/* Courses and academic education */}
        <div className="md:flex md:gap-32 pt-5 items-center w-full">
          {/* Courses */}
          <div className="md:w-2/4">
            <h4 className="text-[#E4B40D] font-semibold">COURSES</h4>

            {/* Courses as components */}

            <CoursesEducation
              title={"GOOGLE UX DESIGN COURSE"}
              institution={"Google Coursera"}
              duration={"6 Months"}
            ></CoursesEducation>
            <CoursesEducation
              title={"GOOGLE UX DESIGN COURSE"}
              institution={"Google Coursera"}
              duration={"6 Months"}
            ></CoursesEducation>
            <CoursesEducation
              title={"GOOGLE UX DESIGN COURSE"}
              institution={"Google Coursera"}
              duration={"6 Months"}
            ></CoursesEducation>
          </div>
          {/* Academic education */}
          <div className="w-[2/4]">
            <h4 className="text-[#E4B40D] font-semibold">ACADEMIC EDUCATION</h4>

            {/* Academic education as components */}
            <CoursesEducation
              title={"GOOGLE UX DESIGN COURSE"}
              institution={"Google Coursera"}
              duration={"6 Months"}
            ></CoursesEducation>
            <CoursesEducation
              title={"GOOGLE UX DESIGN COURSE"}
              institution={"Google Coursera"}
              duration={"6 Months"}
            ></CoursesEducation>
            <CoursesEducation
              title={"GOOGLE UX DESIGN COURSE"}
              institution={"Google Coursera"}
              duration={"6 Months"}
            ></CoursesEducation>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
