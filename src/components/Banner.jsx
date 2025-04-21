import { StartIcon, PlayVidIcon } from "../assets/images/icon.jsx";
import bannerImg from "../assets/images/banner.png";

function Banner() {
  return (
    <div className="w-full h-[700px] bg-center bg-banner bg-no-repeat bg-cover relative mt-[80px]">
      <div className="absolute w-full h-full top-0 left-0 bg-black opacity-70" />
      <div className="w-full h-full flex items-center justify-center space-x-[30px] p-4 relative z-20 ">
        <div className="w-[50%]  flex flex-col space-y-5 items-baseline ">
          <p className="text-black  bg-gradient-to-r from-red-500 to-red-400 text-md py-1 px-3 rounded-[5px]">
            TV show
          </p>
          <div className=" flex flex-col space-y-4 items-baseline">
            <h2 className="text-white lg:text-[40px] font-bold sm:text-[16px]">
              Nghe nói em thích tôi
            </h2>
            <div className="flex items-center space-x-2">
              <StartIcon className="lg:w-5 lg:h-5 fill-yellow-300 sm:w-2 sm:h-2 " />
              <StartIcon className="lg:w-5 lg:h-5 fill-yellow-300 sm:w-2 sm:h-2 " />
              <StartIcon className="lg:w-5 lg:h-5 fill-yellow-300 sm:w-2 sm:h-2 " />
              <StartIcon className="lg:w-5 lg:h-5 fill-yellow-300 sm:w-2 sm:h-2 " />
              <StartIcon className="lg:w-5 lg:h-5 fill-gray-400 sm:w-2 sm:h-2 " />
            </div>
            <p className="text-white lg:text-[20px] sm:text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              doloribus asperiores quae. Alias placeat architecto sequi minus,
              voluptatum, expedita illum blanditiis in ullam magnam dicta
              voluptatibus, quam ad tenetur tempore!
            </p>
            <div className="flex items-center justify-end ">
              <button className="w-[100px] p-2 text-white font-bold  rounded-md   hover:underline">
                Chi tiết
              </button>
              <button className="w-[100px] p-2 ml-3 text-white font-bold  bg-red-600 rounded-md hover:bg-red-500">
                Xem phim
              </button>
            </div>
          </div>
        </div>
        <div className="w-[50%]">
          <div className="w-full h-[600px] relative group  cursor-pointer ">
            <img
              src={bannerImg}
              alt="banner"
              className="w-full h-full object-contain"
            />
            <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-400">
              <PlayVidIcon className="fill-white " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
