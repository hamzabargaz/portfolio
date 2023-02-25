import React from "react";
import { NavigationHeader, Section } from "@/components";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="bg-gray-50 dark:bg-primary h-full text-primary dark:text-tertiary">
      <div className="min-h-screen relative overflow-auto">
        <NavigationHeader />
        <Section>{children}</Section>
      </div>
    </div>
  );
}
