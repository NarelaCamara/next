import { Montserrat } from "next/font/google";
import Link from "next/link";
import { ButtonPrimary, Paragraph } from "./components";

const monserrat = Montserrat({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

export default function Home() {
  return (
    <main className={` ${monserrat.className} `}>
      <span className="text-5xl">Roxana Narela Camara</span>

      <span className="text-3xl">Developer frontend React | Next | Node</span>

      <span className="text-2xl">Sed ut perspiciatis</span>

      <ButtonPrimary text={"Contactame!"} />

      <Paragraph
        paragraph="Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
Neque porro quisquam est, qui dolorem."
      />
    </main>
  );
}
