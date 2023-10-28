import Link from "next/link";
import React from "react";

const linksLeft = [
  {
    name: "About",
    url: "",
  },
  {
    name: "Advertising",
    url: "",
  },
  {
    name: "Business",
    url: "",
  },
  {
    name: "How Search works",
    url: "",
  },
];
const linksRight = [
  {
    name: "Privacy",
    url: "",
  },
  {
    name: "Terms",
    url: "",
  },
  {
    name: "Settings",
    url: "",
  },
];

function Footer() {
  return (
    <section className="bg-gray-300 h-24">
      <div className="">
        <Link
          href="/"
          className="text-md text-gray-500 py-[15px] px-[30px] border-b border-gray-400 flex leading-[normal]"
        >
          Bangladesh
        </Link>
      </div>
      <div>
        <div className="flex md:flex-row flex-col justify-between px-[35px]">
          <div className="flex gap-[30px] justify-center">
            {linksLeft.map((item, index) => (
              <div key={index} className="py-[15px]">
                <Link
                  href={item.url}
                  className="text-sm text-gray-500 hover:underline flex leading-[normal]"
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
          <div className="flex gap-[30px] justify-center">
            {linksRight.map((item, index) => (
              <div key={index} className="py-[15px]">
                <Link
                  href={item.url}
                  className="text-sm text-gray-500 hover:underline flex leading-[normal]"
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
