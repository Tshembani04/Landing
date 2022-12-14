import React from "react";

//import images
import Headset1 from "../assets/img/headset-1.png";
import Headset2 from "../assets/img/headset-2.png";
import Headset3 from "../assets/img/headset-3.png";
import Headset4 from "../assets/img/headset-4.png";

const Headsets = () => {
  return (
    <section className=" py-12 lg:py-24  ">
      <div className="container mx-auto">
        {/* title */}
        <h2 className="text-3xl font-bold mb-6 ">Mixed Reality Headsets</h2>
        {/* grid */}
        <div className="grid gap-y-4 lg:grid-cols-2 lg:gap-9" >
          {/* item */}
          <div className="relative">
            <img src={Headset1} alt="" />
            <div className="absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6 ">
              <h4 className="font-semibold text-xl mb-2 " >Metaverse</h4>
              <p className="" >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Pariatur corrupti, optio esse 
              </p>
            </div>
          </div>
          {/* Item */}
          <div className="relative">
            <img src={Headset2} alt="" />
            <div className="absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6 ">
              <h4 className="font-semibold text-xl mb-2 " >Virtual Reality</h4>
              <p className="" >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Pariatur corrupti
              </p>
            </div>
          </div>
          {/* Item */}
          <div className="relative">
            <img src={Headset3} alt="" />
            <div className="absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6 ">
              <h4 className="font-semibold text-xl mb-2 " >Rapid Authoring</h4>
              <p className="" >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Pariatur corrupti, optio esse
              </p>
            </div>
          </div>
          {/* Item */}
          <div className="relative">
            <img src={Headset4} alt="" />
            <div className="absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6 ">
              <h4 className="font-semibold text-xl mb-2 " >Tactile VR Simulation</h4>
              <p className="" >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Pariatur corrupti
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Headsets;
