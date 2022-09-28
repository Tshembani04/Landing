import React from "react";
import Timeline from '../assets/img/Timeline.png'

const TimeLine = () => {
  return (
    <section className="mb-12 lg:mt-16 ">
      <div className="bg-transparent text-white mt-16">
        <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
          <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
            <h2 className="ml-2 text-rubyRed text-bold uppercase tracking-loose">
              Our TimeLine
            </h2>
            <h1 className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">
              Working Process of Fest
            </h1>
            <p className="text-sm md:text-base text-text font-secondary mb-4">
              Here’s your guide to the tech fest 2021 process. Go through all
              the steps to know the exact process of the fest.
            </p>
            {/* <a href="#"
                            className="bg-transparent mr-auto hover:bg-yellow-300 text-yellow-300 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent">
                            Explore Now</a> */}
          </div>
          <div class="ml-0 md:ml-12 lg:w-2/3 sticky">
            <div class="container mx-auto w-full h-full">
              <div class="relative wrap overflow-hidden p-10 h-full">
              <div class="md:border-2-2 md:border-white md:absolute h-full  md:border"></div>
                <div class="lg:border-2-2 lg:border-white lg:absolute h-full lg:border"></div>
                <div class="mb-2 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div class="order-1 w-5/12"></div>
                  <div class="order-1 w-5/12 px-1 py-1 text-right">
                    <p class="mb-1 text-base text-rubyRed">Feb, 1999</p>
                    <h4 class="mb-1 font-bold text-lg md:text-2xl">
                      Establishment
                    </h4>
                    <p class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      TBR is established Northcliff / Johannesburg – 1 employee
                    </p>
                  </div>
                </div>
                <div class="mb-2 flex justify-between items-center w-full right-timeline">
                  <div class="order-1 w-5/12"></div>
                  <div class="order-1  w-5/12 px-1 py-1 text-left">
                    <p class="mb-1 text-base text-rubyRed">May, 1999</p>
                    <p class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      TBR already has 3 employees.
                    </p>
                  </div>
                </div>

                <div class="mb-2 flex justify-between flex-row-reverse items-center w-full right-timeline">
                  <div class="order-1 w-5/12"></div>
                  <div class="order-1 w-5/12 px-1 py-1 text-right">
                    <p class="mb-1 text-base text-rubyRed">2001</p>
                    <h4 class="mb-1 font-bold text-lg md:text-2xl">
                      Liberty Life
                    </h4>
                    <p class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      TBR engaged by Liberty Life to create eLearning
                    </p>
                  </div>
                </div>

                <div class="mb-2 flex justify-between  items-center w-full left-timeline">
                  <div class="order-1 w-5/12"></div>
                  <div class="order-1 w-5/12 px-1 py-1 text-left">
                    <p class="mb-1 text-base text-rubyRed">2002</p>
                    <h4 class="mb-1 font-bold text-lg md:text-2xl">Mondi</h4>
                    <p class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      TBR develops Mondi Forestry’s learning by combing video
                      with 3D animation overlays.
                    </p>
                  </div>
                </div>

                <div class="mb-2 flex justify-between flex-row-reverse items-center w-full right-timeline">
                  <div class="order-1 w-5/12"></div>
                  <div class="order-1 w-5/12 px-1 py-1 text-right">
                    <p class="mb-1 text-base text-rubyRed">2003</p>
                    <h4 class="mb-1 font-bold text-lg md:text-2xl">Sasol</h4>
                    <p class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      TBR and SASOL mining develop the first 3D animation
                      training for South Africa.
                    </p>
                  </div>
                </div>

                <div class="mb-2 flex justify-between items-center w-full left-timeline">
                  <div class="order-1 w-5/12"></div>
                  <div class="order-1 w-5/12 px-1 py-1 text-left">
                    <p class="mb-1 text-base text-rubyRed">2004</p>
                    <h4 class="mb-1 font-bold text-lg md:text-2xl">
                      Logo Rebranding
                    </h4>
                    <p class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      TBR changes the logo.
                    </p>
                  </div>
                </div>
                <div class="mb-2 flex justify-between flex-row-reverse items-center w-full right-timeline">
                  <div class="order-1 w-5/12"></div>
                  <div class="order-1 w-5/12 px-1 py-1 text-right">
                    <p class="mb-1 text-base text-rubyRed">2005</p>
                    <h4 class="mb-1 font-bold text-lg md:text-2xl">Total</h4>
                    <p class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      TBR completing the first TOTAL project, 15 years later
                      still a TBR client.
                    </p>
                  </div>
                </div>
                <div class="mb-2 flex justify-between items-center w-full left-timeline">
                  <div class="order-1 w-5/12"></div>
                  <div class="order-1 w-5/12 px-1 py-1 text-left">
                    <p class="mb-1 text-base text-rubyRed">2008</p>
                    <h4 class="mb-1 font-bold text-lg md:text-2xl">
                      VR & Gaming
                    </h4>
                    <p class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      TBR takes the bold step to commercialise virtual reality
                      (VR) as a method of learning delivery.
                    </p>
                  </div>
                </div>
                <div class="mb-2 flex justify-between flex-row-reverse items-center w-full right-timeline">
                  <div class="order-1 w-5/12"></div>
                  <div class="order-1 w-5/12 px-1 py-1 text-right">
                    <p class="mb-1 text-base text-rubyRed">2010</p>
                    <h4 class="mb-1 font-bold text-lg md:text-2xl">Sandvik</h4>
                    <p class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      Sandvik Globally becomes a TBR client, ultimately leading
                      to the development of the Sandvik Maintenance system.
                    </p>
                  </div>
                </div>
                <div class="mb-2 flex justify-between items-center w-full left-timeline">
                  <div class="order-1 w-5/12"></div>
                  <div class="order-1 w-5/12 px-1 py-1 text-left">
                    <p class="mb-1 text-base text-rubyRed">2012</p>
                    <h4 class="mb-1 font-bold text-lg md:text-2xl">
                      {" "}
                      BHP Billiton
                    </h4>
                    <p class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      TBR completing the first BHP Billiton (Now South32)
                      project, 8 years later still a TBR client.
                    </p>
                  </div>
                </div>
                <div class="mb-2 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div class="order-1 w-5/12"></div>
                  <div class="order-1 w-5/12 px-1 py-1 text-right">
                    <p class="mb-1 text-base text-rubyRed">2016</p>
                    <p class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      First VR fault finding maintenance simulator created for
                      South32.
                    </p>
                  </div>
                </div>
                <div class="mb-2 flex justify-between items-center w-full left-timeline">
                  <div class="order-1 w-5/12"></div>
                  <div class="order-1 w-5/12 px-1 py-1 text-right">
                    <p class="mb-1 text-base text-rubyRed">2018</p>
                    <h4 class="mb-1 font-bold text-lg md:text-2xl">Exxaro</h4>
                    <p class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      TBR releases the first VR Digital Twin.
                    </p>
                  </div>
                </div>
                <div class="mb-2 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div class="order-1 w-5/12"></div>
                  <div class="order-1 w-5/12 px-1 py-1 text-right">
                    <p class="mb-1 text-base text-rubyRed">2019</p>
                    <h4 class="mb-1 font-bold text-lg md:text-2xl">
                      Logo Rebranding
                    </h4>
                    <p class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      TBR changes it logo.
                    </p>
                  </div>
                </div>
                <div class="mb-2 flex justify-between  items-center w-full left-timeline">
                  <div class="order-1 w-5/12"></div>
                  <div class="order-1 w-5/12 px-1 py-1 text-right">
                    <p class="mb-1 text-base text-rubyRed">2020</p>
                    <h4 class="mb-1 font-bold text-lg md:text-2xl">
                      50 Plus Staff
                    </h4>
                    <p class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      TBR surpasses 50 employees
                    </p>
                  </div>
                </div>
                <div class="mb-2 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div class="order-1 w-5/12"></div>
                  <div class="order-1 w-5/12 px-1 py-1 text-right">
                    <p class="mb-1 text-base text-rubyRed">12 May, 2021</p>
                    <h4 class="mb-1 font-bold text-lg md:text-2xl">
                      Platinum and Anglo Gold
                    </h4>
                    <p class="text-sm md:text-base leading-snug tracking-wide text-gray-50 text-opacity-100">
                      TBR creates the Anglo Platinum and Anglo Gold SOP’s in 3D
                      animation.{" "}
                    </p>
                  </div>
                </div>
                
              </div>
              {/* <div className="mt-24">
                <img
                  class="mx-auto -mt-56 md:-mt-36 "
                  src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimeLine;
