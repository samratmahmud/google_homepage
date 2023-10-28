import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <section className="container py-1.5">
      <div className="flex items-center justify-end pl-8">
        <div className="flex text-xs text-black/[87] font-roboto pr-[15px]">
          <Link href="/" className="hover:underline pl-[15px]">
            Gmail
          </Link>
          <Link href="/" className="hover:underline pl-[15px]">
            Images
          </Link>
        </div>
        <div className="flex gap-1 items-center">
          <div className="m-1 hover:bg-gray-100 inline-block rounded-full w-10 h-10">
            <img
              className="p-2 opacity-70 cursor-pointer"
              src="/picture/al-icon.png"
              alt=""
            />
          </div>
          <div className="inline-block hover:bg-gray-100 rounded-full p-1">
            <div className="text-[17px] bg-amber-900/80 text-white flex justify-center items-center w-[32px] h-[32px] rounded-full cursor-pointer">
              S
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
