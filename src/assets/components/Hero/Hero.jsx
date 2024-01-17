import React from "react";
import Navbar from "../Navbar/Navbar";
import HeroImg from "../../jeruk.png";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const Hero = () => {
  const [sidebar, setSidebar] = React.useState(false);

  const handleIconClick = () => {
    console.log;
  };

  return (
    <main className=" bg-PrimaryDark md:py-6 md:px-12">
      <section
        className="relative min-h-[650px] bg-gradient-to-r from-Primary 
        to-Secondary w-full md:rounded-xl shadow-md"
      >
        <div className="container">
          <Navbar sidebar={sidebar} setSidebar={setSidebar} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-h-[650px] place-items-center">
            {/*Text Samping*/}
            <div className=" text-white space-y-4 p-4 mt-[100px] md:mt-0">
              <h1
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-3xl pl-6 md:pl-14"
              >
                01______
              </h1>
              <h1
                data-aos="fade-up"
                data-aos-delay="300"
                className=" text-5xl font-bold uppercase text-shadow"
              >
                Buah Jeruk Yaitu
              </h1>
              <p data-aos="fade-up" data-aos-delay="600" className="text-sm">
                Buah jeruk merupakan sumber Vitamin C, yang memiliki rasa segar
                dan manis. Kandungan seratnya juga mendukung kesehatan dan
                pencernaan.
              </p>
              <button
                data-aos="fade-up"
                data-aos-delay="900"
                className="border border-white px-4 py-2 rounded-lg"
              >
                Show More
              </button>
            </div>
            {/*Gambar*/}
            <div>
              <img
                data-aos="zoom-in"
                src={HeroImg}
                alt="Image"
                className=" w-[400px] img-shadow relative z-[1]"
              />
            </div>
            {/*Text Bawah*/}
            <div className=" md:hidden"></div>
          </div>
        </div>
        <h1
          data-aos="zoom-out"
          className=" text-center text-[80px] text-white uppercase font-bold sm:text-[120px] md:text-[150px] xl:text-[180px] absolute bottom-0 w-full z-0 text-shadow"
        >
          ORANGE
        </h1>
        {sidebar && (
          <div className=" absolute top-0 right-0 w-[120px] h-full bg-gradient-to-b from-Primary to-Secondary z-10">
            <div className=" w-full h-full flex flex-col justify-center items-center gap-6">
              {/* Garis Line */}
              <div className=" w-[1px] h-[70px] bg-white"></div>
              {/* Sosmed Link */}
              <div className=" inline-block p-2 rounded-full cursor-pointer border border-white text-white">
                <a
                  href="https://github.com/alwan2398"
                  onClick={handleIconClick}
                >
                  <FaGithub className="text-2xl" />
                </a>
              </div>
              <div className=" inline-block p-2 rounded-full cursor-pointer border border-white text-white">
                <a
                  href="https://www.instagram.com/alwan.uiux/"
                  onClick={handleIconClick}
                >
                  <FaInstagram className="text-2xl" />
                </a>
              </div>
              <div className=" inline-block p-2 rounded-full cursor-pointer border border-white text-white">
                <a
                  href="https://www.tiktok.com/@alwan.balweel"
                  onClick={handleIconClick}
                >
                  <FaTiktok className="text-2xl" />
                </a>
              </div>
              {/* Garis Line */}
              <div className=" w-[1px] h-[70px] bg-white"></div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default Hero;
