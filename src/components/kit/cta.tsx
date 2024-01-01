"use client";
import React from "react";
import { Button } from "..";
import { CheckCheckIcon, Copy } from "lucide-react";
import copyToClipboard from "@/lib/copy-to-clipboard";
import { getCalApi } from "@calcom/embed-react";

type Props = {};

const email = process.env.NEXT_PUBLIC_EMAIL_USER || "";
const cal_username = process.env.NEXT_PUBLIC_CAL_USERNAME;

export default function cta({}: Props) {
  const [copied, setCopied] = React.useState(false);

  React.useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  }, [copied]);

  React.useEffect(() => {
    const func = async function () {
      const cal = await getCalApi();
      cal("ui", {
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    };
    func();
  }, []);

  const handleCopy = () => {
    copyToClipboard(email);
    setCopied(true);
  };

  return (
    <>
      <Button data-cal-link={`${cal_username}/15min`}>Hire me</Button>
      <Button
        appearance='secondary'
        className='flex items-center'
        onClick={handleCopy}
      >
        {copied ? (
          <CheckCheckIcon className='w-4 h-4 mr-2' />
        ) : (
          <Copy className='w-4 h-4 mr-2' />
        )}
        <span>Copy Email</span>
      </Button>
    </>
  );
}
