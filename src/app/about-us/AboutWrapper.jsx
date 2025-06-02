"use client";
import dynamic from "next/dynamic";

const AboutPage = dynamic(() => import("./about"));

export default function AboutWrapper() {
  return <AboutPage />;
}
