import React from "react";
import { NavigationHeader, Section } from "@/components";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="bg-gray-50 dark:bg-primary relative min-h-screen text-primary dark:text-tertiary">
      <NavigationHeader />
      <Section>{children}</Section>
    </div>
  );
}
