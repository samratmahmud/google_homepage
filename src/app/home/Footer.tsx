import Link from "next/link";
import React from "react";

const footerLinks = [
  {
    Left: [
      {
        name: "About",
        url: "https://about.google/?utm_source=google-BD&utm_medium=referral&utm_campaign=hp-footer&fg=1",
      },
      {
        name: "Advertising",
        url: "https://ads.google.com/intl/en_bd/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1",
      },
      {
        name: "Business",
        url: "https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1#?modal_active=none",
      },
      {
        name: "How Search works",
        url: "https://www.google.com/search/howsearchworks/?fg=1",
      },
    ],
    Right: [
      {
        name: "Privacy",
        url: "https://policies.google.com/privacy?hl=en-BD&fg=1",
      },
      {
        name: "Terms",
        url: "https://policies.google.com/terms?hl=en-BD&fg=1",
      },
      {
        name: "Settings",
        url: "",
      },
    ],
  },
];

// const linksLeft = [
//   {
//     name: "About",
//     url: "https://about.google/?utm_source=google-BD&utm_medium=referral&utm_campaign=hp-footer&fg=1",
//   },
//   {
//     name: "Advertising",
//     url: "https://ads.google.com/intl/en_bd/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1",
//   },
//   {
//     name: "Business",
//     url: "https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1#?modal_active=none",
//   },
//   {
//     name: "How Search works",
//     url: "https://www.google.com/search/howsearchworks/?fg=1",
//   },
// ];
// const linksRight = [
//   {
//     name: "Privacy",
//     url: "https://policies.google.com/privacy?hl=en-BD&fg=1",
//   },
//   {
//     name: "Terms",
//     url: "https://policies.google.com/terms?hl=en-BD&fg=1",
//   },
//   {
//     name: "Settings",
//     url: "",
//   },
// ];

function Footer() {
  return (
    <section className="bg-gray-300 h-24">
      <div className="text-md text-gray-500 py-[15px] px-[30px] border-b border-gray-400 flex leading-[normal]">
        Bangladesh
      </div>
      <div className="px-[20px] bg-gray-300">
        {footerLinks.map((item, index) => (
          <div
            key={index}
            className="flex md:flex-row flex-col justify-between w-full"
          >
            <div className="flex flex-wrap sm:flex-row justify-center whitespace-nowrap">
              {item.Left.map((item, index) => (
                <div key={index} className="p-[15px]">
                  <Link
                    href={item.url}
                    className="text-sm text-gray-500 hover:underline flex leading-[normal]"
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              {item.Right.map((item, index) => (
                <div key={index} className="p-[15px]">
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
        ))}
        {/* <div className="flex gap-[30px] justify-center">
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
        </div> */}
      </div>
    </section>
  );
}

export default Footer;
