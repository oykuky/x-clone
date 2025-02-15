import React from "react";
import Search from "./Search";
import RecommendsSection from "./RecommendsSection";
import Tags from "./Tags";
import Link from "next/link";

export const RightBar = () => {
  return (
    <div className="sticky h-max pt-4 top-0 flex flex-col gap-3">
      <Search/>
      <Tags/>
      <RecommendsSection/>
      <div className="flex flex-wrap text-sm text-gray-500 gap-x-3">
        <Link href="/">Terms of Service</Link>
        <Link href="/">Privacy Policy</Link>
        <Link href="/">Cookie Policy</Link>
        <Link href="/">Accessibility</Link>
        <Link href="/">Ads Info</Link>
        <span>@ 2025 O Kaya.</span>
      </div>
    </div>
  );
};
