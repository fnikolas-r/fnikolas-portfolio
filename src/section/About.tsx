import React from "react";
import MapFrame from "../components/Maps";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub, faInstagram, faWordpress, faLinkedin, faTelegram} from '@fortawesome/free-brands-svg-icons'
import { IconProp } from "@fortawesome/fontawesome-svg-core";


function ContactBox({icon}:{icon:IconProp}){
  return (
    <div className="text-xl">
      <div className="p-2 rounded-md shadow-md">
        <FontAwesomeIcon icon={icon}/>
      </div>
    </div>
  )
}

function About() {

  const contactTest: IconProp[] = [faLinkedin, faInstagram, faGithub, faWordpress, faTelegram];

  return (
    <section className="c-space my-20">
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
              <div className="xl:w-5/6 grid-subtext text-white mt-3">
                I do code, network, design tech infrastructure and some machine
                learning. I love building something that makes life easier and
                challenge myself, push my limits to greater pursuits.
              </div>
            </div>
          </div>
        </div>

        {/* Location */}

        <div className="col-span-1 xl:col-span-2 xl:row-span-2">
          <div className="grid-container">
            <div>
            <div className="grid-subtext mb-2">I'm based in Rjieka, Croatia and open to remote work worldwide.</div>
              <MapFrame/>
            </div>
          </div>
        </div>

        
        {/* Contact Me */}

        <div className="col-span-1 xl:row-span-2">
          <div className="grid-container flex items-center">
            <img src="/public/image/phone.png" alt="" className="object-fill h-24 filter grayscale " />
            <div className="grid-text"><strong>Contact Me</strong></div>
            <div className="flex gap-1">
              {contactTest.map((icon, index)=>(
                <ContactBox key={index} icon={icon}/>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
