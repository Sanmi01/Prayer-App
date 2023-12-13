import React from "react";
import Person1 from "../assets/person-1.png";
import Person2 from "../assets/person-2.png";
import Person3 from "../assets/person-3.png";
import Person4 from "../assets/person-4.png";
import Person5 from "../assets/person-5.png";
import Person6 from "../assets/person-6.png";
import Person7 from "../assets/person-7.png";
import Person8 from "../assets/person-8.png";
import Person9 from "../assets/person-9.png";
import Person10 from "../assets/person-10.png";
import Person11 from "../assets/person-11.png";
import Person12 from "../assets/person-12.png";
import Person13 from "../assets/person-13.png";
import Person14 from "../assets/person-14.png";

const ContentSection2 = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl grid-cols-[3fr_7fr_3fr] lg:grid lg:py-16 lg:px-6">
          <div className="lg:grid grid-cols-2 gap-4 mt-8 hidden">
            <div className="flex flex-col gap-6">
              <img className="" src={Person1} alt="Person" />
              <img className="" src={Person2} alt="Person" />
              <img className="" src={Person3} alt="Person" />
              <img className="" src={Person4} alt="Person" />
            </div>
            <div className="flex flex-col gap-6 justify-center">
              <img className="" src={Person5} alt="Person" />
              <img className="" src={Person6} alt="Person" />
              <img className="" src={Person7} alt="Person" />
            </div>
          </div>
          <div className=" sm:text-lg  text-center">
            <h2 className="font-serif mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              For Christian Organizations And All Individuals!
            </h2>
            <p className="mb-4 text-2xl">
              Boost your digital engagement, reach out to those exploring faith,
              and create a vibrant online community.
            </p>
            <p className="text-xl">
              Read our{" "}
              <span className="font-semibold">statement of faith.</span>
            </p>
            <div className="flex max-sm-custom:flex-col flex-row items-center col-span-12 lg:col-span-5 justify-center gap-4 lg:justify-self-start">
              <a
                href="/"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 my-3 uppercase"
              >
                Register for free
              </a>
              <a
                href="/"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 bg-white  uppercase"
              >
                Schedule a tour
              </a>
            </div>
            <div className="flex flex-col gap-2 mt-8 lg:hidden">
              <div className="flex flex-row gap-2 justify-center">
                <img className="w-20 h-20" src={Person5} alt="Person" />
                <img className="w-20 h-20" src={Person6} alt="Person" />
                <img className="w-20 h-20" src={Person7} alt="Person" />
              </div>
              <div className="flex flex-row gap-2 justify-center">
                <img className="w-20 h-20" src={Person1} alt="Person" />
                <img className="w-20 h-20" src={Person2} alt="Person" />
                <img className="w-20 h-20" src={Person3} alt="Person" />
                <img className="w-20 h-20" src={Person4} alt="Person" />
              </div>
            </div>
          </div>
          <div className="lg:grid grid-cols-2 gap-4 mt-8 hidden">
            <div className="flex flex-col gap-6 justify-center">
              <img className="" src={Person8} alt="Person" />
              <img className="" src={Person9} alt="Person" />
              <img className="" src={Person10} alt="Person" />
            </div>
            <div className="flex flex-col gap-6">
              <img className="" src={Person11} alt="Person" />
              <img className="" src={Person12} alt="Person" />
              <img className="" src={Person13} alt="Person" />
              <img className="" src={Person14} alt="Person" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContentSection2;
