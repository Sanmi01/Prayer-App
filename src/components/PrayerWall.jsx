import React from 'react'
import Prayer from './Prayer'

const PrayerWall = () => {
    const prayers = [
        {
            id: 1,
            message: "Thank you, Lord",
            prayerReactions: 3,
            messageReactions: 2,
            prayed: false,
            name: "Mary",
            time: "20 minutes ago"
        },
        {
            id: 2,
            message: "Praying for healing from sinus infections in our home. ",
            prayerReactions: 2,
            messageReactions: 4,
            prayed: false,
            time: "10 hours ago"
        },
        {
            id: 3,
            message: "Pray for the Lord's help, healing (pain & anxiety relief), peace, favor, salvation, revival for all the USA, Canada, Mexico, Israel & Jerusalem, also for me & my Mom & Sister & all who are with us, for all of God’s people, for all I’ve prayed for, & for all nations & all mankind.",
            prayerReactions: 5,
            messageReactions: 7,
            prayed: true,
            name: "Luke",
            time: "5 days ago"
        },
        {
            id: 4,
            message: "Husband salvation and cure his prostate cancer. And praying disability goes thru quickly. Thank you",
            prayerReactions: 4,
            messageReactions: 2,
            prayed: false,
            name: "Martha",
            time: "17 days ago"
        },
        {
            id: 5,
            message: "Praying peace over you and your family.",
            prayerReactions: 3,
            messageReactions: 2,
            prayed: true,
            name: "John",
            time: "2 months ago"
        },
    ]


  return (
    <>
 <div className="relative mx-auto w-full max-w-2xl px-8 pb-4 pt-8">
          <div className="uppercase">Prayer Wall</div>
          <div className="text-xs">Viewing All Requests</div>
          <button
            className="absolute right-8 top-8 rounded-lg bg-white p-2 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-light-blue focus:ring-offset-2"
          >
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
        <div className='relative mx-auto w-full max-w-2xl px-8 pb-4 pt-4 mb-10'>
            {
                prayers.map((prayer, index) => (
                    <Prayer key={prayer.id} prayer={prayer} />
                ))
            }
        </div>
    </>
  )
}

export default PrayerWall