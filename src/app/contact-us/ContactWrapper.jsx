"use client";
import dynamic from "next/dynamic";

const ContactPage = dynamic(() => import("./contact"));

export default function ContactWrapper() {
  return <ContactPage />;
}
