"use client";
import dynamic from "next/dynamic";

const RenewablePage = dynamic(() => import("./renewable"));

export default function RenewableWrapper() {
  return <RenewablePage />;
}
