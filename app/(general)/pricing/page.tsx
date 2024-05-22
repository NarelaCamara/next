import { SimpleWidget } from "@/app/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Pricing",
};

export default function PricingPage() {
  return (
    <>
      <span className="text-7xl">Pricing - Global State</span>
      <div className="text-black p-2">
        <h1 className="mt-2 text-3xl">Dashboard</h1>
        <span className="text-xl">Informacion general</span>

        <div className="flex flex-wrap p-2">
          <SimpleWidget />
        </div>
      </div>
    </>
  );
}
