import React from "react";
import { Link } from "react-router-dom";

const Footer2 = () => {
  return (
    <footer className="fixed bottom-0 w-full">
      <nav>
        <ul className="flex w-full flex-row justify-center gap-4 pb-3 pt-4">
          <li>
            <Link
              className="flex h-11 w-11 flex-col items-center justify-end border-b-2 border-transparent text-[8px] font-black uppercase text-background-copy"
              to="/"
            >
              <div className="h-5 w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  fill="none"
                  viewBox="0 0 22 20"
                >
                  <path
                    fill="currentColor"
                    d="M11 .445l-.54.516-9.75 9.75 1.08 1.078.96-.96V19.5H9.5V12h3v7.5h6.75v-8.672l.96.961 1.08-1.078L11.54.96 11 .445zm0 2.133l6.75 6.75V18H14v-7.5H8V18H4.25V9.328L11 2.578z"
                  ></path>
                </svg>
              </div>
              <span className="mt-1">Home</span>
            </Link>
          </li>
          <li>
            <Link
              className="flex h-11 w-11 flex-col items-center justify-end border-b-2 border-transparent text-[8px] font-black uppercase text-background-copy/60"
              to="/"
            >
              <div className="h-5 w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  fill="none"
                  viewBox="0 0 20 19"
                >
                  <path
                    fill="currentColor"
                    d="M15.86.523a3.22 3.22 0 00-2.274.938L6.625 8.42 2.523 9.993l-.398.164-.07.422L1 17.633.86 18.64l1.007-.141 7.055-1.055.422-.07.164-.398 1.476-3.891.375-.352 6.75-6.75c1.21-1.21 1.234-3.152.094-4.406l-.094-.117a3.166 3.166 0 00-2.25-.938zm0 1.477c.421 0 .843.188 1.195.54.703.702.703 1.687 0 2.39L13.28 8.703l-2.39-2.39 3.773-3.774c.352-.352.774-.539 1.195-.539zM9.812 7.39l2.39 2.391-1.36 1.36-2.39-2.391 1.36-1.36zM7.304 9.759h.023l2.414 2.414-1.476 3.867-4.383.633 2.015-2.016c.041.003.077.024.118.024.662 0 1.218-.534 1.218-1.196 0-.662-.556-1.218-1.218-1.218-.662 0-1.196.556-1.196 1.218 0 .041.02.076.024.118l-2.016 2.015.633-4.383 3.844-1.476z"
                  ></path>
                </svg>
              </div>
              <span className="mt-1">Journal</span>
            </Link>
          </li>
          <li>
            <Link
              className="flex h-11 w-11 flex-col items-center justify-end border-b-2 text-[8px] font-black uppercase text-background-copy border-accent"
              to="/"
            >
              <div className="w-4">
                <svg
                  width="100%"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 0.25C5.1084 0.25 2.75 2.6084 2.75 5.5C2.75 7.30762 3.67285 8.91309 5.07031 9.85938C2.39551 11.0078 0.5 13.6621 0.5 16.75H2C2 13.4277 4.67773 10.75 8 10.75C11.3223 10.75 14 13.4277 14 16.75H15.5C15.5 13.6621 13.6045 11.0078 10.9297 9.85938C12.3271 8.91309 13.25 7.30762 13.25 5.5C13.25 2.6084 10.8916 0.25 8 0.25ZM8 1.75C10.0801 1.75 11.75 3.41992 11.75 5.5C11.75 7.58008 10.0801 9.25 8 9.25C5.91992 9.25 4.25 7.58008 4.25 5.5C4.25 3.41992 5.91992 1.75 8 1.75Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <span className="mt-1">Account</span>
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer2;
