import React, { useState } from "react";

const PrayerModal = ({ toggleModal, prayer, AddPrayer }) => {
  const [prayerMessage, setPrayerMessage] = useState(prayer || "");

  const handleChange = (e) => {
    setPrayerMessage(e.target.value);
  };

  const submitPrayer = () => {
    AddPrayer(prayerMessage)
    toggleModal()
  }

  return (
    <>
      <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full inset-0 h-[calc(100%-1rem)] max-h-full">
        <div className="relative p-4 w-full max-w-2xl max-h-full mx-auto top-1/4 inset-0">
          {/* <!-- Modal content --> */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* <!-- Modal header --> */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Request Prayer
              </h3>
              <button
                onClick={toggleModal}
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="default-modal"
              >
                <svg
                  className="w-3 h-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <div className="p-4 md:p-5 space-y-4">
              {/* <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label> */}
              <textarea
                onChange={handleChange} 
                value={prayerMessage}
                id="message"
                rows="4"
                className="resize-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Share your request here and our community will pray for you."
                maxLength="1000"
              ></textarea>
            </div>
            {/* <!-- Modal footer --> */}
           {!prayer && <div className="mx-auto w-full max-w-2xl px-8 pb-4">
            <p className="text-center font-light text-xs mb-2">
                {" "}
                {1000 - prayerMessage.length} Characters Remaining
              </p>
              <button
                className="active:scale-95 uppercase inline-flex items-center justify-center rounded font-bold focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2  bg-[#18181B] h-8 py-2 text-xs w-full text-white px-4 disabled:opacity-50 disabled:pointer-events-none"
                type="button"
                onClick={submitPrayer}
                disabled={prayerMessage.length === 0}
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
            </div>}
          </div>
        </div>
      </div>
      <div className="block fixed inset-0 z-[10] bg-black opacity-50"></div>
    </>
  );
};

export default PrayerModal;
