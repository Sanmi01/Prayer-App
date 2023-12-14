import React, { useState } from "react";
import Person1 from "../assets/person-1.png";

const Prayer = ({prayer}) => {
    const [prayed, setPrayed] = useState(prayer?.prayed)
    const [prayerReactions, setPrayerReactions] = useState(prayer?.prayerReactions)

    const prayerReact = () => {
        setPrayed((value) => !value)
        setPrayerReactions((value) => value + 1)
    }

  return (
    <div className="mb-6">
      <div className="flex items-start gap-2.5">
        <div className="flex flex-col gap-1 w-full">
          <div className="relative flex flex-col p-4 border-gray-200 bg-white rounded-3xl max-sm-custom:pb-10">
            <p className="mb-4 text-sm font-normal text-gray-900">
              {" "}
              {prayer?.message}
            </p>
            <div className="flex items-center gap-2">
              {!prayed && <button onClick={prayerReact} className="active:scale-95 uppercase inline-flex items-center justify-center font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-light-blue mr-2 h-fit rounded-md p-1 text-xs">
                + Pray
              </button>}
              {prayed && <button className="active:scale-95 uppercase inline-flex items-center justify-center font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none  bg-light-blue mr-2 h-fit rounded-md p-1 text-xs" disabled>+ 
              Prayed
              </button>}

              <div className="inline-flex items-center gap-1 rounded-full bg-zinc-100 px-2 py-0.5 text-xs">
                <svg
                  className="w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  fill="none"
                  viewBox="0 0 12 12"
                >
                  <g clipPath="url(#clip0_1586_4129)">
                    <g filter="url(#filter0_i_1586_4129)">
                      <path
                        fill="#FFAD00"
                        d="M3.058 10.368c.118.014.299.036.517.068 2.296.334 3.145 1.133 4.013 1.014 1.299-.178 4.655-3.15 4.398-3.796-.371-.933-2.092.777-4.794 1.876 1.132-.428 1.455-.655 1.313-1.146-.078-.27-1.427-.163-3.237-1.027-.538-.256-1.907.335-2.059.271-.01.787-.142 1.952-.151 2.74z"
                      ></path>
                    </g>
                    <g filter="url(#filter1_i_1586_4129)">
                      <path
                        fill="#ADBFFF"
                        d="M3.494 7.635c-.105.243-.273.698-.31 1.153-.059.747.147 1.35.279 1.654-.316.113-.767.264-1.312.42-1.023.291-1.168.256-1.247.222-.709-.27-1.066-1.672-.833-2.76.075-.358.256-1.205.977-1.513.718-.305 1.476.109 2.445.756l.001.068z"
                      ></path>
                    </g>
                    <g
                      clipPath="url(#clip1_1586_4129)"
                      filter="url(#filter2_i_1586_4129)"
                    >
                      <path
                        fill="#E82347"
                        d="M7.034 1.103C6.29-.1 5.004.189 4.419.75c-.885.852-.598 2.354-.077 3.036.624.82 1.15 1.4 2.686 2.548h.003c1.535-1.148 2.061-1.729 2.685-2.548.52-.682.81-2.184-.077-3.033-.585-.564-1.866-.853-2.611.35"
                      ></path>
                    </g>
                  </g>
                  <defs>
                    <filter
                      id="filter0_i_1586_4129"
                      width="8.942"
                      height="5.17"
                      x="3.058"
                      y="6.293"
                      colorInterpolationFilters="sRGB"
                      filterUnits="userSpaceOnUse"
                    >
                      <feFlood
                        floodOpacity="0"
                        result="BackgroundImageFix"
                      ></feFlood>
                      <feBlend
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      ></feBlend>
                      <feColorMatrix
                        in="SourceAlpha"
                        result="hardAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      ></feColorMatrix>
                      <feOffset dy="-1"></feOffset>
                      <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
                      <feComposite
                        in2="hardAlpha"
                        k2="-1"
                        k3="1"
                        operator="arithmetic"
                      ></feComposite>
                      <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                      <feBlend
                        in2="shape"
                        result="effect1_innerShadow_1586_4129"
                      ></feBlend>
                    </filter>
                    <filter
                      id="filter1_i_1586_4129"
                      width="3.494"
                      height="5.397"
                      x="0"
                      y="5.709"
                      colorInterpolationFilters="sRGB"
                      filterUnits="userSpaceOnUse"
                    >
                      <feFlood
                        floodOpacity="0"
                        result="BackgroundImageFix"
                      ></feFlood>
                      <feBlend
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      ></feBlend>
                      <feColorMatrix
                        in="SourceAlpha"
                        result="hardAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      ></feColorMatrix>
                      <feOffset dy="-1"></feOffset>
                      <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
                      <feComposite
                        in2="hardAlpha"
                        k2="-1"
                        k3="1"
                        operator="arithmetic"
                      ></feComposite>
                      <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                      <feBlend
                        in2="shape"
                        result="effect1_innerShadow_1586_4129"
                      ></feBlend>
                    </filter>
                    <filter
                      id="filter2_i_1586_4129"
                      width="6.358"
                      height="7.069"
                      x="3.851"
                      y="-0.735"
                      colorInterpolationFilters="sRGB"
                      filterUnits="userSpaceOnUse"
                    >
                      <feFlood
                        floodOpacity="0"
                        result="BackgroundImageFix"
                      ></feFlood>
                      <feBlend
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      ></feBlend>
                      <feColorMatrix
                        in="SourceAlpha"
                        result="hardAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      ></feColorMatrix>
                      <feOffset dy="-1"></feOffset>
                      <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
                      <feComposite
                        in2="hardAlpha"
                        k2="-1"
                        k3="1"
                        operator="arithmetic"
                      ></feComposite>
                      <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                      <feBlend
                        in2="shape"
                        result="effect1_innerShadow_1586_4129"
                      ></feBlend>
                    </filter>
                    <clipPath id="clip0_1586_4129">
                      <path fill="#fff" d="M0 0H12V12H0z"></path>
                    </clipPath>
                    <clipPath id="clip1_1586_4129">
                      <path
                        fill="#fff"
                        d="M0 0H6.358V6.358H0z"
                        transform="translate(3.85)"
                      ></path>
                    </clipPath>
                  </defs>
                </svg>{" "}
                {prayerReactions}
              </div>
              <div className="inline-flex items-center gap-1 rounded-full bg-zinc-100 px-2 py-0.5 text-xs">
                <svg
                  className="w-4"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_ii_1586_4139)">
                    <path
                      d="M0 7C0 9.76142 2.23858 12 5 12H12V5C12 2.23858 9.76142 0 7 0H5C2.23858 0 0 2.23858 0 5V7Z"
                      fill="#E19800"
                    ></path>
                  </g>
                  <circle
                    cx="3.25353"
                    cy="5.87329"
                    r="0.887324"
                    fill="white"
                  ></circle>
                  <circle
                    cx="5.87365"
                    cy="5.87329"
                    r="0.887324"
                    fill="white"
                  ></circle>
                  <ellipse
                    cx="8.5355"
                    cy="5.87329"
                    rx="0.84507"
                    ry="0.887324"
                    fill="white"
                  ></ellipse>
                  <defs>
                    <filter
                      id="filter0_ii_1586_4139"
                      x="0"
                      y="-1"
                      width="13"
                      height="17"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood
                        floodOpacity="0"
                        result="BackgroundImageFix"
                      ></feFlood>
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      ></feBlend>
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      ></feColorMatrix>
                      <feOffset dy="7"></feOffset>
                      <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                      <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2="-1"
                        k3="1"
                      ></feComposite>
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
                      ></feColorMatrix>
                      <feBlend
                        mode="normal"
                        in2="shape"
                        result="effect1_innerShadow_1586_4139"
                      ></feBlend>
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      ></feColorMatrix>
                      <feOffset dx="1" dy="-1"></feOffset>
                      <feGaussianBlur stdDeviation="1"></feGaussianBlur>
                      <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2="-1"
                        k3="1"
                      ></feComposite>
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      ></feColorMatrix>
                      <feBlend
                        mode="normal"
                        in2="effect1_innerShadow_1586_4139"
                        result="effect2_innerShadow_1586_4139"
                      ></feBlend>
                    </filter>
                  </defs>
                </svg>{" "}
                {prayer?.messageReactions}
              </div>
            </div>
            <button
              className="active:scale-95 uppercase inline-flex items-center justify-center font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50  disabled:pointer-events-none bg-light-blue h-8 py-2 text-xs absolute bottom-0 right-0 rounded-none rounded-tl-3xl px-6"
              type="button"
            >
              View
            </button>
          </div>
          <div className="flex flex-row items-end justify-end gap-4 mt-1">
            <div className="flex flex-col items-end">
              <span className="text-sm font-semibold text-gray-900 self-start">
                {prayer?.name ?? "Anonymous"}
              </span>
              <span className="text-sm font-normal text-gray-500">
                {prayer?.time}
              </span>
            </div>
            <img className="w-8 h-8 rounded-full" src={Person1} alt="Jesse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prayer;
