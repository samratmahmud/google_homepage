import Link from "next/link";
import React from "react";

const searchProps = [
  {
    name: "Google Search",
    url: "/",
  },
  {
    name: "I'm Feeling Lucky",
    url: "https://www.google.com/doodles",
  },
];

function Header() {
  return (
    <div>
      <div className="flex justify-center">
        <img
          className="max-w-[272px]"
          src="/picture/googlelogo_color_272x92dp.png"
          alt=""
        />
      </div>
      <div className="p-5">
        <div
          className="flex items-center border border-slate-300 focus:border-gray-600/0 rounded-3xl pr-2 pl-3.5 hover:shadow-md max-w-[584px] m-auto mt-1.5"
          tabIndex={-1}
        >
          <div>
            <img
              className="w-5 opacity-40 mr-3.5"
              src="/picture/searchIcon.svg"
              alt=""
            />
          </div>
          <input
            className="w-full mt-1.5 mb-2 outline-none"
            type="text"
            placeholder=""
            autoComplete=""
          />
          <div role="button" className="relative group">
            <img
              className="w-6 mx-2 cursor-pointer"
              src="/picture/voiceIcon.svg"
              alt=""
            />
            <div className="translate-y-2 absolute right-3 translate-x-1/2 whitespace-nowrap hidden group-hover:block">
              <img
                className="w-3 h-1.5 m-auto"
                src="/picture/icons8-triangle-48.png"
                alt=""
              />
              <span className="text-xs leading-4 bg-slate-700 text-white px-2 py-1.5">
                search by voice
              </span>
            </div>
          </div>
          <div role="button" className="mx-2 relative group">
            <img className="w-6 mx-2 h-11" src="/picture/scaner.svg" alt="" />
            <div className="-translate-y-0.5 absolute right-3 translate-x-1/2 whitespace-nowrap hidden group-hover:block">
              <img
                className="w-3 h-1.5 m-auto"
                src="/picture/icons8-triangle-48.png"
                alt=""
              />
              <span className="text-xs leading-4 bg-slate-700  text-white px-2 py-1.5">
                search by image
              </span>
            </div>
          </div>
        </div>
        <div className="pt-[18px] flex justify-center gap-1">
          {searchProps.map((item) => (
            <Link
              href={item.url}
              className="text-sm
             text-gray-200 bg-slate-400 border hover:border-gray-400 border-gray-100 rounded mt-3 mx-1 px-4 py-1 hover:shadow-sm cursor-pointer"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="text-xs leading-7 text-gray-200 text-center mb-6">
        <span>Google offered in: </span>
        <span className="text-blue-500 hover:underline cursor-pointer ml-[3px]">
          বাংলা
        </span>
      </div>
    </div>
  );
}

export default Header;
