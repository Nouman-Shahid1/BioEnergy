import ProductPage from "./products";

export const generateMetadata = () => ({
  title: "Products – Bio Energy",
  description:
    "Learn more about Sindh BioEnergy and our commitment to clean energy.",
});

export default function Page() {
  return <ProductPage />;
}
