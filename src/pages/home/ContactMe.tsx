import { yupResolver } from "@hookform/resolvers/yup";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMutation } from "@tanstack/react-query";
import { Suspense } from "react";
import { useForm } from 'react-hook-form';
import { useMediaQuery } from "react-responsive";
import * as yup from 'yup';
import CanvasLoader from "../../components/CanvasLoader";
import ChibiMesh from "../../components/ChibiMesh";
import SocialComponent from "../../components/SocialComponent";
import { IsendEmail, sendEmail } from "../../services/emailServices";
import { toast } from "react-toastify";

const schema = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    message: yup.string().required()
  }).required()

const ContactMe = () => {


  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(schema),
  })


  const {isPending, isError, isSuccess, mutateAsync} = useMutation({
    mutationFn: (val:IsendEmail)=>sendEmail(val),
  })

  const handleSendEmail = (data: IsendEmail) => {
    toast.promise(
      mutateAsync(data),
      {
        pending: "Sending your message... 📤",
        success: "Email sent successfully! 🚀",
        error: "Failed to send email. Please try again. ❌",
      }
    ).then(() => reset()); 
  };

  const isWindowNotSmall = useMediaQuery({ minWidth: 768 });

  const scala = isWindowNotSmall ? 1.8 : 1.6;

  return (
    <section className="c-space my-20" id="contact">
      <div className="w-full text-white-600">
        <p className="head-text">Contact Me</p>

        <div className="grid lg:grid-cols-3 grid-cols-1 md:gap-5 mt-12 ">
          <div className="cols-span-1 flex flex-col  gap-5 justify-between">
            <div className="work-container  h-1/2 ">
              <Canvas>
                <ambientLight intensity={1} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <directionalLight position={[10, 10, 10]} intensity={1} />
                <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

                <Suspense fallback={<CanvasLoader />}>
                  {/* Ill breackdance here */}
                  <ChibiMesh
                    scale={scala}
                    position={[0, -1.5, 0]}
                    rotation={[0,0,0]}
                    isLoading = {isPending}
                  />
                  {/* <Developer position-y={-3} scale={3} animationName={animationName} /> */}
                </Suspense>
              </Canvas>
            </div>
            <div className="work-container h-1/2 py-10">
              <SocialComponent classContainer="w-full h-full flex flex-col gap-3" />
            </div>
          </div>

          <div className="work-container col-span-2 text-base">
            <div className="sm:py-5 py-3 sm:px-5 px-2.5">
              <h3 className="text-3xl font-bold text-white">
                ☕ Let’s Grab a Virtual Coffee
              </h3>
              <p className="text-lg text-white-600 mt-3">
                Imagine we’re sitting at a cozy café, brainstorming ideas for
                your next big thing. Sounds good? Drop me a message!
              </p>
              {/* ref={formRef} onSubmit={handleSubmit}  */}
              <form className="mt-5 flex flex-col space-y-3" onSubmit={handleSubmit(handleSendEmail)}>
                <label className="space-y-3">
                  <span className="field-label">👋 Your Name</span>
                  <p className="text-red-500">{errors.name?.message}</p>
                  <input
                    {...register("name")}
                    // value={form.name}
                    // onChange={handleChange}
                    
                    className="field-input"
                    placeholder="Who’s joining me for coffee?"
                  />
                </label>

                <label className="space-y-3">
                  <span className="field-label">📩 Your Email</span>
                  <p className="text-red-500">{errors.email?.message}</p>
                  <input
                  {...register("email")}
                    // value={form.email}
                    // onChange={handleChange}
                    
                    className="field-input"
                    placeholder="So I can reply with my order."
                  />
                </label>

                <label className="space-y-3">
                  <span className="field-label">💬 What’s on your mind?</span>
                  <p className="text-red-500">{errors.message?.message}</p>
                  <textarea
                    {...register("message")}
                    // value={form.message}
                    // onChange={handleChange}
                    
                    rows={5}
                    className="field-input"
                    placeholder="Tell me about your project, your vision, or just say hi!"
                  />
                </label>
                <small>
                  🥐 No pressure, just good conversation. Let’s connect!
                </small>
                <button
                  className={`field-btn ${isPending? 'bg-black-500' :'bg-blue-500'}`}
                  type="submit"
                  disabled={isPending}
                >
                  {isPending ? 'Sending...' : '🤝 Let’s Build Something Great'}
                  
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