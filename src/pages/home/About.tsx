import MapFrame from "../../components/Maps";
import SocialComponent from "../../components/SocialComponent";
import { LOCALES_TEXT, PERSONAL_INFO } from "../../constants";

import "react-tooltip/dist/react-tooltip.css";




function About() {
  

  return (
    <section className="c-space my-20" id={"about"}>
      <div className="grid xl:grid-cols-3 xl:grid-rows-2 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        {/* Profile Photo */}
        <div className="col-span-1 xl:row-span-2">
          <div className="grid-container flex items-center">
            <img
              src="/image/profileNoBg.png"
              alt="grid-1"
              className="object-fill h-24"
            />
            <div>
              <p className="text-2xl text-center text-white">About Me</p>
            </div>
          </div>
        </div>

        {/* About */}
        <div className="col-span-1 xl:col-span-2 xl:row-span-2">
          <div className="grid-container">
            <div>
              <p className="text-3xl">Hi, My Name is Fernando Nikolas</p>
              <div className="text-justify grid-subtext text-white mt-3">
                {LOCALES_TEXT.aboutText}
              </div>
            </div>
          </div>
        </div>

        {/* Location */}

        <div className="col-span-1 xl:col-span-2 xl:row-span-2">
          <div className="grid-container">
            <div>
              <div className="grid-subtext mb-2">
                Connecting from {PERSONAL_INFO.LOCATION.name} to clients worldwide
              </div>
              <MapFrame name={PERSONAL_INFO.LOCATION.name} location={PERSONAL_INFO.LOCATION["geo-code"]}/>
            </div>
          </div>
        </div>

        {/* Contact Me */}
        <div className="col-span-1 xl:row-span-2">
          <SocialComponent classContainer="grid-container" />
        </div>
      </div>
    </section>
  );

}

export default About;
