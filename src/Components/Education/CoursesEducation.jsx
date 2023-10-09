const CoursesEducation = ({ title, institution, duration }) => {
  return (
    <div>
      <div className="bg-opacity-25 border-2 mt-10 mb-10 border-white  md:w-[450px] md:h-[150px] md:px-20 py-4">
        <div>
          <h1 className="text-[#E4B40D] my-2 font-semibold">1. {title}</h1>
        </div>
        <div>
          <h2 className="text-3xl my-2">{institution}</h2>
        </div>
        <div>
          <h3 className="text-[#E4B40D] my-2">Duration: {duration}</h3>
        </div>
      </div>
    </div>
  );
};

export default CoursesEducation;
