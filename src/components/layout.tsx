import React from "react";
import { NavigationHeader } from "@/components";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 relative min-h-screen">
      <NavigationHeader />
      {children}
    </div>
  );
}
