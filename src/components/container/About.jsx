import React from "react";
import about from "../../assets/About.jpg";

const About = () => {
  return (
    <div className="section" id="about">
      <div className="grid md:grid-cols-2 gap-8 place-items-center">
        <div className="border-[3px] border-solid border-Teal rounded-lg">
          <img src={about} alt="" className="p-4" />
        </div>
        <div>
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
            We provide the <br /> best{" "}
            <span className="text-Teal">online courses</span>
          </div>
          <p className="text-sm text-gray leading-7 mb-4">
          As a Software Developer, I'm here to help provide an amazing learning experience for students on Skillex, the leading global marketplace for teaching and learning online.

My role is to assist learners in any way I can. I can provide recommendations on courses, answer questions about our platform and courses, help with technical issues, and guide you to useful resources. My knowledge comes from the Skillex team's training based on real customer conversations and the latest AI techniques.
          </p>
          <button className="py-3 px-6 text-sm border border-solid border-gray rounded-lg font-bold">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
