import React from "react";

const searchProps = ["Google Search", "I'm Feeling Lucky"];

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
              className="w-5 opacity-40 mr-3.5 cursor-pointer"
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
          <div>
            <img
              className="w-6 mx-2 cursor-pointer"
              src="/picture/voiceIcon.svg"
              alt=""
            />
          </div>
          <div className="mx-2">
            <img
              className="w-6 mx-2 h-11 cursor-pointer"
              src="/picture/scaner.svg"
              alt=""
            />
          </div>
        </div>
        <div className="pt-[18px] flex justify-center gap-1">
          {searchProps.map((item) => (
            <div className="text-sm text-gray-200 bg-slate-400 border hover:border-gray-400 border-gray-100 rounded mt-3 mx-1 px-4 py-1 hover:shadow-sm cursor-pointer">
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="text-sm text-gray-200 text-center mb-6">
        <span>Google offered in: </span>
        <span className="text-blue-500 hover:underline cursor-pointer">
          বাংলা
        </span>
      </div>
    </div>
  );
}

export default Header;
