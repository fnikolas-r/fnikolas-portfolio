import React from "react";

function About() {
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
              I do code, network, design tech infrastructure and some machine learning. I love building something that makes life easier and challenge myself,  push my limits to greater pursuits.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
