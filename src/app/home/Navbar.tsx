import Link from "next/link";
import React from "react";

const navLink = [
  {
    name: "Gmail",
    url: "/",
  },
  {
    name: "Images",
    url: "/",
  },
];

function Navbar() {
  return (
    <nav className="p-1.5 pr-[15px]">
      <div className="flex items-center justify-end pl-8">
        <div className="flex text-xs text-black/[87] font-roboto pr-[15px]">
          {navLink.map(({name, url}, index) => (
            <div key={index}>
              <Link href={url} className="hover:underline pl-[15px]">
                {name}
              </Link>
            </div>
          ))}
        </div>
        <div className="flex gap-1 items-center">
          <div
            className="m-1 hover:bg-gray-100 inline-block rounded-full w-10 h-10 relative group"
            role="button"
          >
            <img className="p-2 opacity-70" src="/picture/al-icon.png" alt="" />
            <span className="text-xs leading-4 bg-slate-600 translate-y-1 absolute right-5 text-white px-2 py-1 translate-x-1/2 whitespace-nowrap hidden group-hover:block rounded">
              Google apps
            </span>
          </div>
          <div className="inline-block hover:bg-gray-100 rounded-full p-1 relative group">
            <div className="text-[17px] bg-amber-900/60 text-white flex justify-center items-center w-[32px] h-[32px] rounded-full cursor-pointer">
              S
            </div>
            <div className="bg-slate-600 py-1 px-2 rounded mt-2 hidden absolute group-hover:block right-0 tracking-[0.8px] text-[12px] leading-4 text-center">
              <div className="text-white font-medium mb-1">Google Account</div>
              <div className="mb-3">
                <img
                  className="w-12 h-12 rounded-full m-auto"
                  src="/picture/istockphoto-825383494-612x612.jpg"
                  alt=""
                />
              </div>
              <div className="font-medium text-slate-500">SM Samrat Mahmud</div>
              <div className="font-medium text-slate-500">
                samratmahmud1999@gmail.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
