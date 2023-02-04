import React from "react";
import compImg from "../Image/1.png";

const Index = () => {
  return (
    <>
      {/* Hero-Section Start */}
      <div className="flex flex-col md:flex-row bg-hero w-full h-screen">
        <img
          src={compImg}
          alt=""
          className="w-6/6 md:w-6/12 z-1 hover:translate-y-4 transition ease-in-out duration-500"
        />

        <div className="text-white w-6/6 md:w-6/12 flex items-center justify-center">
          <div className="flex items-start flex-col mt-10 md:-mt-60">
            <p className="text-[30px] md:text-[46px] text-center font-bold">
              Learn all IT Courses
            </p>
            <p className="text-[30px] md:text-[46px] text-center font-bold -mt-2">
              from IT Experts
            </p>
          </div>
        </div>
      </div>

      <section className="bg-[#094FA5] p-5 md:p-12">
        <div className="border-dashed border-2 border-white p-3 md:py-10 md:px-10">
          <div className="flex flex-col-reverse items-center md:flex-row md:justify-between">
            <div className="w-5/6 md:w-8/12 mt-5 md:mt-0">
              <p className="text-3xl text-white font-bold">Meet our Founder</p>
              <div className="text-lg text-white mt-5">
                <p>
                  Our Founder Mr. Kunal Sharma has designed and delivered the
                  Quencil Java Full stack Developer (JFSD) course,Which is a
                  1000+ hour comphrensive ,intensive ,immersive ,Edutainment
                  based 360degree skills program and is a full one-stop solution
                  to pursue your IT professional goals.
                  <br />
                  <br />
                  The Quencil JFSD Program is structured aas a hands-on case
                  study and real-time project-based learning approach that will
                  enable every trained aspirant to improve their analytical and
                  problem-solving skills by structuring , designing , coding
                  ,testing and deploying end-to-end Full Stack software
                  solutions to real-time scenarios using Modeling and DevOps
                  concepts.
                </p>
              </div>

              <button className="text-black mt-5 bg-white text-sm px-10 py-2 item-center md:items-start">
                LEARN MORE
              </button>
            </div>
            <img
              src={compImg}
              alt=""
              className="bg-white p-10 rounded-xl w-4/6 md:w-3/12"
            />
          </div>
        </div>
      </section>

      {/* Case Studies & Projects start */}
      <section className="bg-[#030D42] p-10 text-white">
        <h1 className="text-[30px] font-bold mb-3">Case Studies & Projects </h1>
        <h3 className="text-sm font-medium text-gray-300">
          SOLUTIONS TO REAL-TIME SCENARIO ON BOTH CLIENT SIDE & SERVER SIDE.
        </h3>

        <div className="flex flex-col space-y-5 md:flex-row items-center justify-between md:space-x-4 mt-10">
          <div className="w-5/6 md:4/12 md:mt-5 p-10 flex flex-col items-center">
            <img
              className="w-52 h-52 rounded-3xl mb-5"
              src={require("../Image/2.jpg")}
              alt="PLANNING"
            ></img>
            <h2 className="font-bold text-lg mb-2">PLANNING</h2>
            <p>
              Understanding The Problem Statement. Ask WHO, WHAT, WHEN, WHERE,
              WHY? Create Clear Business Objective Statement.
            </p>
          </div>

          <div className="w-5/6 md:4/12 p-10 flex flex-col items-center">
            <img
              className="w-52 h-52 rounded-3xl mb-5"
              src={require("../Image/3.jpg")}
              alt="REQUIREMENT"
            ></img>
            <h2 className="font-bold text-lg mb-2">REQUIREMENT ANALYSIS</h2>
            <p>
              Identify User-Story Eloborations Identify Scope & Scope-Creep
              Identify Functional & Non-Functional Requirements
            </p>
          </div>

          <div className="w-5/6 md:4/12 p-10 flex flex-col items-center">
            <img
              className="w-52 h-52 rounded-3xl mb-5"
              src={require("../Image/4.jpg")}
              alt="DESIGN"
            ></img>
            <h2 className="font-bold text-lg mb-2">DESIGN & MODELING</h2>
            <p>
              Use-Case Diagrams Activity Diagrams Class Diagrams Sequence
              Diagrams
            </p>
          </div>
        </div>

        <div className="flex flex-col space-y-5 md:flex-row items-center justify-evenly md:space-x-4 mt-0 md:mt-5">
          <div className="w-5/6 md:6/12 p-10 flex flex-col items-center">
            <img
              className="w-52 h-52 rounded-3xl mb-5"
              src={require("../Image/5.jpg")}
              alt="CODING"
            ></img>
            <h2 className="font-bold text-lg mb-2">CODING & UNIT TESTING</h2>
            <p>
              Develop UI/UX Using Frontend Technologies Code Business Logic
              Using Backend Technologies Store & Retire Data Using Database
              Technologies
            </p>
          </div>

          <div className="w-5/6 md:6/12 p-10 flex flex-col items-center">
            <img
              className="w-52 h-52 rounded-3xl mb-5"
              src={require("../Image/6.jpg")}
              alt="INTEGRATION"
            ></img>
            <h2 className="font-bold text-lg mb-2">INTEGRATION & DEPLOYMENT</h2>
            <p>Build Test Package Deploy Release Java Full-Stack Product</p>
          </div>
        </div>
      </section>

      <section className="bg-[#094FA5] p-5 md:p-12 text-white">
        <div className="border-dashed border-2 border-white p-3 md:py-10 md:px-10 flex flex-col items-center justify-between md:flex-row">
          <div className="w-5/6 md:w-8/12">
            <h1 className="text-[36px] font-bold mb-5">
              Why should you join Quencil?
            </h1>
            <p className="text-lg">
              No Matter What It Takes! We Will Empower You If You Have The
              Confidence And Willingness To Study Coding.
            </p>
            <br></br>
            <p className="text-lg">
              IIT And Stanford Alumuni Created The Content.<br></br>
              Insted 1:1 Resolution Of Doubts
            </p>
            <br></br>
            <p className="text-lg">
              Each Course Includes 100+ Problem And 10+ Projects For<br></br>
              Hands-On Learning.
            </p>
          </div>

          <img
            src={require("../Image/7.png")}
            alt="7.png"
            className="w-5/6 md:w-4/12"
          ></img>
        </div>
      </section>

      <section className="bg-[#030D42] p-5 md:p-12 text-white">
        <div className="pb-5">
          <h2 className="font-bold text-[36px]">
            Our Alumini Works In Top Companies
          </h2>

          <div className="flex flex-col space-y-5 md:flex-row items-center justify-between md:space-x-4 mt-10">
            <div className="bg-white w-36 h-20 rounded-md">0</div>
            <div className="bg-white w-36 h-20 rounded-md">1</div>
            <div className="bg-white w-36 h-20 rounded-md">2</div>
            <div className="bg-white w-36 h-20 rounded-md">3</div>
            <div className="bg-white w-36 h-20 rounded-md">4</div>
            <div className="bg-white w-36 h-20 rounded-md">5</div>
          </div>

          <div className="flex flex-col space-y-5 md:flex-row items-center justify-evenly md:space-x-4 mt-10">
            <div className="bg-white w-36 h-20 rounded-md">6</div>
            <div className="bg-white w-36 h-20 rounded-md">7</div>
            <div className="bg-white w-36 h-20 rounded-md">8</div>
            <div className="bg-white w-36 h-20 rounded-md">9</div>
            <div className="bg-white w-36 h-20 rounded-md">10</div>
          </div>
        </div>
      </section>

      <section className="text-white bg-[#094FA5] p-5 md:p-12">
        <div className="border-dashed border-2 border-white p-3 md:py-10 md:px-10 flex flex-col items-center justify-between md:flex-row">
          <div className="w-6/6 md:w-8/12">
            <h1 className="text-[36px] font-bold">
              Detailed Placements Drive Analysis
            </h1>
            <div className="mt-5">
              <p className="text-lg">
                Quencilhas created a strong network of prestigious Corporate
                Clients. A commitment to filling colours into our Trainees
                ambitions and aspirations by persistently preparing them for
                fast- changing future skill and future workplaces is at the
                heart of our Placement team's DNA. our corportae clientele
                includes top MNCs, mid-sized organization, and It start-up
                initiatives, and spans both service and product-base business.
                Our prestigious clients hire throughout the year to meet their
                project-specific skilled fresher Requirements. We esclusively
                work with technical job roles and do not work with
                Tech-Supporet/KPO/BPO sprts pf jobs
                <br />
              </p>
            </div>

            <button>Learn more</button>
          </div>

          <img
            src={require("../Image/7.png")}
            alt="7.png"
            className="w-6/6 md:w-4/12"
          ></img>
        </div>
      </section>

      <section className="text-white bg-[#030D42] p-5 md:p-12">
        <h1 className="text-[36px] mb-5">About Company</h1>

        <p className="text-lg">
          Mr. Kunal Sharma, our Founder, designed and delivered the Quencil Java
          FullStack Developer (JFSD) course, which is a 1000+ hour
          comprehensive, intensive, immersive, Edutainment based 360° Skilling
          programme and is a full one stop solution to pursue your IT
          professional goals
        </p>
      </section>
    </>
  );
};

export default Index;
