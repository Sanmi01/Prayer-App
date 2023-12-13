import React from "react";
import WayFmAdminPrayer from "../assets/way-fm-admin-prayer-wall-screenshot.png";

const ContentSection8 = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="grid grid-cols-1 gap-4 my-8 order-last">
            <img
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src={WayFmAdminPrayer}
              alt="Way FM Admin"
            />
          </div>
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <div class="text-3xl">
              <svg
                fill="none"
                viewBox="0 0 37 35"
                width="1em"
                height="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <filter
                  id="a"
                  color-interpolation-filters="sRGB"
                  filterUnits="userSpaceOnUse"
                  height="38.125"
                  width="35.4949"
                  x=".752441"
                  y="-3.5625"
                >
                  <feFlood
                    flood-opacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feBlend
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    mode="normal"
                    result="shape"
                  ></feBlend>
                  <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  ></feColorMatrix>
                  <feOffset dy="-4"></feOffset>
                  <feGaussianBlur stdDeviation="3.5"></feGaussianBlur>
                  <feComposite
                    in2="hardAlpha"
                    k2="-1"
                    k3="1"
                    operator="arithmetic"
                  ></feComposite>
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  ></feColorMatrix>
                  <feBlend
                    in2="shape"
                    mode="normal"
                    result="effect1_innerShadow_116_17239"
                  ></feBlend>
                </filter>
                <g filter="url(#a)">
                  <path
                    d="m9.27089 31.1196-.47256-.3774c-.75897-.6064-1.43202-1.3071-2.00483-2.0618-.80194-1.0646-1.40338-2.237-1.80435-3.5037l-.1432-.4852 3.47981-2.1427c.17184-1.7384.61577-3.3555 1.30314-4.8378.5442-1.1724 1.0883-1.9136 1.5609-2.5739.5871-.8086 1.0883-1.5094 1.5609-2.8974.4296-1.2667.6301-2.50651.8592-3.93497.2578-1.56321.3294-2.47958.3867-3.15338l.0429-.41775c.0716-.75466.1289-1.46889.2005-2.47959.0573-.61989.3867-1.15893.9022-1.495831.4439-.282995.9594-.390803 1.4177-.269519.7733.202139 1.3318 1.0107 1.2745 1.90011 0 2.25049.0716 4.46056.1575 6.58976.1575 4.00237.315 7.77567-.1862 11.81847-.0859 3.2207-.9881 5.4443-2.6349 6.5089-.6873.4447-1.4606.7277-2.3199.849l-3.59433 2.9647z"
                    fill="#cb936a"
                  ></path>
                  <path
                    d="m27.5146 31.1199-3.5943-2.9647c-.8593-.1213-1.6325-.4043-2.3199-.849-1.6468-1.0646-2.5633-3.2882-2.6349-6.4146-.5012-4.1371-.3437-7.9104-.1862-11.91276.0859-2.14268.1718-4.35274.1575-6.63018-.0573-.84899.5012-1.65755 1.2745-1.85969.4583-.121283.9738-.026952 1.4177.26952.5156.3369.8449.87594.9022 1.48236.0716 1.02417.1289 1.7384.2005 2.49306l.0429.40428c.0573.67379.1432 1.57669.3867 3.15338.2291 1.44193.4296 2.66823.8592 3.93503.4726 1.388.9881 2.0887 1.5609 2.8973.4726.6603 1.0167 1.4015 1.5609 2.5739.6874 1.4824 1.117 3.113 1.3031 4.8379l3.4799 2.1427-.1432.4716c-.3867 1.2668-1.0025 2.4527-1.8044 3.5173-.5728.7546-1.2458 1.4554-2.0048 2.0618l-.4726.3773z"
                    fill="#cb936a"
                  ></path>
                  <g fill="#adbfff">
                    <path d="m7.91021 22.7906c.17184.6873.55849 1.9271 1.23154 2.9378 1.10265 1.6575 2.54895 2.5604 3.33665 2.9647-.5013.7816-1.2316 1.8732-2.1624 3.1399-1.74706 2.3718-2.11939 2.547-2.34851 2.6144-1.99051.6603-5.08368-1.6441-6.3725-4.3124-.4296-.8759-1.432017-2.9512-.37232-4.8378 1.05969-1.8732 3.50845-2.2101 6.68754-2.5335z"></path>
                    <path d="m29.0896 22.7906c-.1718.6873-.5585 1.9271-1.2315 2.9378-1.1027 1.6575-2.549 2.5604-3.3366 2.9647.5012.7816 1.2315 1.8732 2.1623 3.1399 1.7471 2.3718 2.1194 2.547 2.3486 2.6144 1.9905.6603 5.0836-1.6441 6.3724-4.3124.4297-.8759 1.4321-2.9512.3724-4.8378-1.0597-1.8732-3.5085-2.2101-6.6876-2.5335z"></path>
                  </g>
                </g>
              </svg>
            </div>
            <h2 className="mb-4 text-4xl tracking-tight font-semibold text-gray-900 dark:text-white">
              Power Up Prayer
            </h2>
            <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
              <li>Review and engage with prayer</li>
              <li>Prioritize and respond to requests</li>
              <li>Actively engage and nurture your online community</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContentSection8;
