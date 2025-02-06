import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader";
import ChibiMesh from "../components/ChibiMesh";

// import Developer from '../components/Developer.jsx';
// import CanvasLoader from '../components/Loading.jsx';

const ContactMe = () => {
  const [animationName, setAnimationName] = useState("idle");

  return (
    <section className="c-space my-20" id="work">
      <div className="w-full text-white-600">
        <p className="head-text">Contact Me</p>

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 mt-12 ">
          <div className="work-container cols-span-1">
            <Canvas>
              <ambientLight intensity={1} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <directionalLight position={[10, 10, 10]} intensity={1} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

              <Suspense fallback={<CanvasLoader />}>
                {/* Ill breackdance here */}
                < ChibiMesh scale={5} />
                {/* <Developer position-y={-3} scale={3} animationName={animationName} /> */}
              </Suspense>
            </Canvas>
          </div>

          <div className="work-container col-span-2 text-base">
            <div className="sm:py-5 py-3 sm:px-5 px-2.5">
              <h3 className="head-text">Let's talk</h3>
              <p className="text-lg text-white-600 mt-3">
                Whether you’re looking to build a new website, improve your
                existing platform, or bring a unique project to life, I’m here
                to help.
              </p>
              {/* ref={formRef} onSubmit={handleSubmit}  */}
              <form className="mt-5 flex flex-col space-y-3">
                <label className="space-y-3">
                  <span className="field-label">Full Name</span>
                  <input
                    type="text"
                    name="name"
                    // value={form.name}
                    // onChange={handleChange}
                    required
                    className="field-input"
                    placeholder="ex., John Doe"
                  />
                </label>

                <label className="space-y-3">
                  <span className="field-label">Email address</span>
                  <input
                    type="email"
                    name="email"
                    // value={form.email}
                    // onChange={handleChange}
                    required
                    className="field-input"
                    placeholder="ex., johndoe@gmail.com"
                  />
                </label>

                <label className="space-y-3">
                  <span className="field-label">Your message</span>
                  <textarea
                    name="message"
                    // value={form.message}
                    // onChange={handleChange}
                    required
                    rows={5}
                    className="field-input"
                    placeholder="Share your thoughts or inquiries..."
                  />
                </label>

                <button className="field-btn" type="submit" disabled={false}>
                  {/* {loading ? 'Sending...' : 'Send Message'} */}

                  <img
                    src="/assets/arrow-up.png"
                    alt="arrow-up"
                    className="field-btn_arrow"
                  />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
