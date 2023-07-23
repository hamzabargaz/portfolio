import React from "react";

type Props = {
  className?: string;
};

export default function ArrowRight({ className }: Props) {
  return (
    <svg className={className} viewBox="0 0 48 48">
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="37" y1="14" x2="47" y2="24"></line>
        <line x1="47" y1="24" x2="37" y2="34"></line>
        <line x1="47" y1="24" x2="1.5" y2="24"></line>
      </g>
    </svg>
  );
}
