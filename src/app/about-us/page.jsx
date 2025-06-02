import AboutWrapper from "./AboutWrapper";

export const generateMetadata = () => ({
  title: "About – Bio Energy",
  description:
    "Learn more about Sindh BioEnergy and our commitment to clean energy.",
});

export default function Page() {
  return <AboutWrapper />;
}
