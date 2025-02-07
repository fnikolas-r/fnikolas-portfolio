import { Suspense, useState } from 'react';

import { workExperiences } from '../constants/faker.js';

const EducationAndExperience = () => {
  const [animationName, setAnimationName] = useState('idle');

  return (
    <section className="c-space my-20" id="experience">
      <div className="w-full text-white-600 text-base">
        <p className="head-text">Education & Experience</p>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mt-12">
          <div className="work-container">
            <div className="sm:py-10 py-3 sm:px-5 px-2.5">
                <div className="px-5 text-white text-2xl italic py-3">Education</div>
              {workExperiences.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOver={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOut={() => setAnimationName('idle')}
                  className="work-content_container group">
                  <div className="flex flex-col h-full justify-start items-center py-2">
                    <div className="work-content_logo">
                      <img className="w-full h-full" src="" alt="" />
                    </div>

                    <div className="work-content_bar" />
                  </div>

                  <div className="sm:p-3 px-2.5 py-3">
                    <p className="font-bold text-white-800">{item.name}</p>
                    <p className="text-sm mb-5">
                      {item.pos} -- <span>{item.duration}</span>
                    </p>
                    <p className="group-hover:text-white transition-all ease-in-out duration-500">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="work-container">
            <div className="sm:py-10 py-3 sm:px-5 px-2.5">
            <div className="px-5 text-white text-2xl italic py-3">Experience</div>

              {workExperiences.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOver={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOut={() => setAnimationName('idle')}
                  className="work-content_container group">
                  <div className="flex flex-col h-full justify-start items-center py-2">
                    <div className="work-content_logo">
                      <img className="w-full h-full" src="" alt="" />
                    </div>

                    <div className="work-content_bar" />
                  </div>

                  <div className="sm:p-3 px-2.5 py-3">
                    <p className="font-bold text-white-800">{item.name}</p>
                    <p className="text-sm mb-5">
                      {item.pos} -- <span>{item.duration}</span>
                    </p>
                    <p className="group-hover:text-white transition-all ease-in-out duration-500">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationAndExperience;