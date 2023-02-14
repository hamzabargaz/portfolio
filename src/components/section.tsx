import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function section({ children }: Props) {
  return (
    <div className="w-full max-w-screen-lg mx-auto my-0 py-0 px-10">
      {children}
    </div>
  );
}
