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
    <section className="bg-gray-300">
      <div>
        <div className="text-md text-gray-500 py-[15px] px-[30px] h-12">
          <Link href="">Bangladesh</Link>
        </div>
        <hr className="border border-gray-400" />
        <div className="container">
          <div className="flex md:flex-row flex-col justify-between px-1">
            <div className="flex justify-center">
              {linksLeft.map((item, index) => (
                <div
                  key={index}
                  className="p-[15px] hover:underline max-h-[46px]"
                >
                  <Link href={item.url} className="text-sm text-gray-500">
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              {linksRight.map((item, index) => (
                <div key={index} className="p-[15px] max-h-[46px]">
                  <Link
                    href={item.url}
                    className="text-sm text-gray-500 hover:underline"
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
