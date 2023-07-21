import Image from "next/image";
import ProfileImg from "../public/img/profileImg.jpg";

const Banner = () => {
  return (
    <div className="wrapper flex flex-col md:flex-row items-center gap-10 ">
      {/* Image */}
      <div className="w-44 h-44 rounded-full bg-black">
        <Image
          className="w-full h-full rounded-full border-[1px] border-indigo-700 p-2 object-cover"
          src={ProfileImg}
          alt="ProfileImg"
        />
      </div>
      {/* Description */}
      <div className="w-3/4 flex flex-col items-center md:items-start    gap-2">
        <h1 className="text-5xl text-center font-bold text-white">Kamrul Hasan</h1>
        <h3 className="py-4 text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-red-300 to-indigo-300 tracking-wide">
          Graphic Designer
        </h3>
        <p className="text-base tracking-wide text-right md:text-left text-gray-400">
          I am an experienced graphic designer with 8 years of work, having
          served international clients. On Fiverr, I hold Level-3 seller status,
          and on Freelancer, I boast a perfect 5-star rating. Now, I seek to
          join a single company where I can use my creativity and skills to
          create captivating designs that meet the clients' needs and contribute
          to the company's success.
        </p>
      </div>
    </div>
  );
};

export default Banner;
