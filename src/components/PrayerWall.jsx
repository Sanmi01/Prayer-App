import React, { useState } from "react";
import Prayer from "./Prayer";
import PrayerModal from "./PrayerModal";

const PrayerWall = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal((value) => !value)
  }
  const [prayers, setPrayers] = useState([
    {
      id: 1,
      message: "Thank you, Lord",
      prayerReactions: 3,
      messageReactions: 2,
      prayed: false,
      name: "Mary",
      time: "20 minutes ago",
    },
    {
      id: 2,
      message: "Praying for healing from sinus infections in our home. ",
      prayerReactions: 2,
      messageReactions: 4,
      prayed: false,
      time: "10 hours ago",
    },
    {
      id: 3,
      message:
        "Pray for the Lord's help, healing (pain & anxiety relief), peace, favor, salvation, revival for all the USA, Canada, Mexico, Israel & Jerusalem, also for me & my Mom & Sister & all who are with us, for all of God’s people, for all I’ve prayed for, & for all nations & all mankind.",
      prayerReactions: 5,
      messageReactions: 7,
      prayed: true,
      name: "Luke",
      time: "5 days ago",
    },
    {
      id: 4,
      message:
        "Husband salvation and cure his prostate cancer. And praying disability goes thru quickly. Thank you",
      prayerReactions: 4,
      messageReactions: 2,
      prayed: false,
      name: "Martha",
      time: "17 days ago",
    },
    {
      id: 5,
      message: "Praying peace over you and your family.",
      prayerReactions: 3,
      messageReactions: 2,
      prayed: true,
      name: "John",
      time: "2 months ago",
    },
  ]);

  const AddPrayer = (prayer) => {
    const newPrayer = {
      id: prayer,
      message: prayer,
      prayerReactions: 0,
      messageReactions: 0,
      prayed: false,
      time: "Now"
    };

    setPrayers(prevPrayers => [newPrayer, ...prevPrayers]);
  };
  

  return (
    <>
      <div className="sticky top-0 z-10 bg-brand-gray-dark">
        <div className="flex w-full justify-center bg-brand-gray-dark py-5">
          <div className="mx-auto w-full max-w-2xl px-8">
            <button
              className="active:scale-95 uppercase inline-flex items-center justify-center rounded font-bold focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2  bg-light-blue h-8 py-2 text-xs w-full px-4"
              type="button"
              onClick={toggleModal}
            >
              <svg
                className="mr-2 w-5"
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                fill="none"
                viewBox="0 0 13 12"
              >
                <g filter="url(#filter0_i_1586_4276)">
                  <path
                    fill="#FFAD00"
                    d="M3.46 10.79l-.164-.133A4.085 4.085 0 011.972 8.7l-.05-.171 1.21-.754c.06-.61.214-1.18.453-1.7.189-.413.378-.674.542-.906.204-.284.378-.53.542-1.019.15-.445.22-.881.299-1.383.09-.55.114-.872.134-1.11l.015-.146c.025-.266.045-.517.07-.872A.701.701 0 015.5.113a.623.623 0 01.493-.095c.269.071.463.355.443.668 0 .792.025 1.569.055 2.317.054 1.408.11 2.735-.065 4.156-.03 1.133-.343 1.915-.916 2.29a1.957 1.957 0 01-.806.298l-1.249 1.042h.005z"
                  ></path>
                </g>
                <g filter="url(#filter1_i_1586_4276)">
                  <path
                    fill="#FFAD00"
                    d="M9.197 10.79L7.948 9.746a1.957 1.957 0 01-.806-.299c-.572-.374-.89-1.156-.915-2.255-.174-1.455-.12-2.782-.065-4.19.03-.753.06-1.53.055-2.33-.02-.3.174-.584.443-.655a.604.604 0 01.492.095.7.7 0 01.314.521c.025.36.045.611.07.877l.014.142c.02.237.05.554.135 1.109.08.507.149.938.298 1.384.165.488.344.734.543 1.018.164.233.353.493.542.906.239.52.388 1.094.453 1.7l1.21.754-.05.166a4.015 4.015 0 01-.628 1.237 4.089 4.089 0 01-.696.725l-.165.133.005.004z"
                  ></path>
                </g>
                <g filter="url(#filter2_i_1586_4276)">
                  <g filter="url(#filter3_i_1586_4276)">
                    <path
                      fill="#ADBFFF"
                      d="M2.987 7.86c.06.242.194.678.428 1.034.383.583.886.9 1.16 1.042a21.32 21.32 0 01-.752 1.104c-.607.835-.736.896-.816.92-.692.232-1.766-.578-2.214-1.517-.15-.308-.498-1.037-.13-1.7.369-.66 1.22-.778 2.324-.892v.01z"
                    ></path>
                  </g>
                  <g filter="url(#filter4_i_1586_4276)">
                    <path
                      fill="#ADBFFF"
                      d="M9.744 7.86c-.06.242-.194.678-.428 1.034a3.13 3.13 0 01-1.159 1.042c.174.275.428.66.751 1.104.608.835.737.896.817.92.691.232 1.766-.578 2.214-1.517.15-.308.497-1.037.13-1.7-.369-.66-1.22-.778-2.325-.892v.01z"
                    ></path>
                  </g>
                </g>
                <defs>
                  <filter
                    id="filter0_i_1586_4276"
                    width="4.621"
                    height="11.789"
                    x="1.923"
                    y="-0.999"
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
                    <feColorMatrix values="0 0 0 0 0.425 0 0 0 0 0.287626 0 0 0 0 0 0 0 0 1 0"></feColorMatrix>
                    <feBlend
                      in2="shape"
                      result="effect1_innerShadow_1586_4276"
                    ></feBlend>
                  </filter>
                  <filter
                    id="filter1_i_1586_4276"
                    width="4.621"
                    height="11.789"
                    x="6.109"
                    y="-1"
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
                    <feColorMatrix values="0 0 0 0 0.425 0 0 0 0 0.287626 0 0 0 0 0 0 0 0 1 0"></feColorMatrix>
                    <feBlend
                      in2="shape"
                      result="effect1_innerShadow_1586_4276"
                    ></feBlend>
                  </filter>
                  <filter
                    id="filter2_i_1586_4276"
                    width="11.732"
                    height="5.149"
                    x="0.5"
                    y="6.851"
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
                      result="effect1_innerShadow_1586_4276"
                    ></feBlend>
                  </filter>
                  <filter
                    id="filter3_i_1586_4276"
                    width="4.075"
                    height="5.149"
                    x="0.5"
                    y="6.851"
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
                      result="effect1_innerShadow_1586_4276"
                    ></feBlend>
                  </filter>
                  <filter
                    id="filter4_i_1586_4276"
                    width="4.075"
                    height="5.149"
                    x="8.157"
                    y="6.851"
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
                      result="effect1_innerShadow_1586_4276"
                    ></feBlend>
                  </filter>
                </defs>
              </svg>
              Request Prayer
            </button>
          </div>
        </div>
      </div>
      <div className="relative mx-auto w-full max-w-2xl px-8 pb-4 pt-8">
        <div className="uppercase">Prayer Wall</div>
        <div className="text-xs">Viewing All Requests</div>
        <button className="absolute right-8 top-8 rounded-lg bg-white p-2 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-light-blue focus:ring-offset-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="none"
            viewBox="0 0 25 25"
          >
            <g
              clipPath="url(#clip0_603_4410)"
              filter="url(#filter0_i_603_4410)"
            >
              <path
                fill="#FAB431"
                d="M2.5 2.5v1.667h9.167V2.5H2.5zm0 3.333V7.5h7.627V5.833H2.5zm0 3.334v1.666h6.102V9.167H2.5zm0 3.333v1.667h4.576V12.5H2.5zm0 3.333V17.5h3.05v-1.667H2.5zm0 3.334v1.666h1.525v-1.666H2.5z"
              ></path>
              <g filter="url(#filter1_i_603_4410)">
                <circle
                  cx="15.833"
                  cy="12.5"
                  r="5.833"
                  fill="#ADBFFF"
                  fillOpacity="0.49"
                ></circle>
              </g>
              <path
                fill="#FAB431"
                d="M16.007 5.833a6.482 6.482 0 00-6.479 6.48 6.38 6.38 0 001.465 4.09l-5.16 5.16.937.937 5.16-5.16a6.454 6.454 0 004.09 1.465 6.482 6.482 0 006.48-6.48c0-3.575-2.93-6.492-6.493-6.492zm0 1.294a5.17 5.17 0 015.186 5.186 5.17 5.17 0 01-5.186 5.186 5.17 5.17 0 01-5.186-5.186 5.17 5.17 0 015.186-5.186z"
              ></path>
            </g>
            <defs>
              <filter
                id="filter0_i_603_4410"
                width="20"
                height="21"
                x="2.5"
                y="2.5"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
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
                <feOffset dy="1"></feOffset>
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
                  result="effect1_innerShadow_603_4410"
                ></feBlend>
              </filter>
              <filter
                id="filter1_i_603_4410"
                width="11.667"
                height="12.667"
                x="10"
                y="6.667"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
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
                <feOffset dy="3"></feOffset>
                <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
                <feComposite
                  in2="hardAlpha"
                  k2="-1"
                  k3="1"
                  operator="arithmetic"
                ></feComposite>
                <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"></feColorMatrix>
                <feBlend
                  in2="shape"
                  result="effect1_innerShadow_603_4410"
                ></feBlend>
              </filter>
              <clipPath id="clip0_603_4410">
                <path
                  fill="#fff"
                  d="M0 0H20V20H0z"
                  transform="translate(2.5 2.5)"
                ></path>
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
      <div className="relative mx-auto w-full max-w-2xl px-8 pb-4 pt-4 mb-10">
        {prayers.map((prayer, index) => (
          <Prayer key={prayer.id} prayer={prayer} />
        ))}
      </div>
      {showModal && (<PrayerModal toggleModal={toggleModal} AddPrayer={AddPrayer} />)}
    </>
  );
};

export default PrayerWall;
