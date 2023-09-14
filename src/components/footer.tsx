import React from "react";
import cx from "classnames";
import { Github, Linkedin, Twitter } from "lucide-react";
import { DM_Serif_Display } from "next/font/google";
import Card from "./card";

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
});

export default function Footer() {
  return (
    <Card className='flex items-center w-full p-4 mt-6'>
      <div className='flex items-center space-x-4'>
        <span
          className={cx(
            dmSerifDisplay.className,
            "relative flex items-center text-sm font-bold whitespace-pre leading-3"
          )}
        >
          {`Hamza\nBargaz.`}
        </span>
        {/* <span className=''>All rights reserved</span> */}
      </div>
      <div className='flex items-center ml-auto gap-4'>
        <div className='p-2 rounded-xl bg-light-100 dark:bg-dark-100 hover:opacity-50 cursor-pointer'>
          <Twitter />
        </div>
        <div className='p-2 rounded-xl bg-light-100 dark:bg-dark-100 hover:opacity-50 cursor-pointer'>
          <Linkedin />
        </div>
        <div className='p-2 rounded-xl bg-light-100 dark:bg-dark-100 hover:opacity-50 cursor-pointer'>
          <Github />
        </div>
      </div>
    </Card>
  );
}
