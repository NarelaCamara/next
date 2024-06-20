import { Montserrat } from "next/font/google";
import style from "./selfPage.module.css";
import { ButtonPrimary, Navigation, Paragraph } from "./components";

const monserrat = Montserrat({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

export default function Home() {
  return (
    <main className={`${monserrat.className}`}>
      <Navigation />
      <div className={` flex flex-col items-center justify-center`}>
        <span className="text-5xl">Roxana Narela Camara</span>

        <span className="text-3xl">Developer frontend React | Next | Node</span>

        <span className="text-2xl font-bold">Sed ut perspiciatis</span>

        <ButtonPrimary text={"Ver más!"} />

        <Paragraph
          paragraph="Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
Neque porro quisquam est, qui dolorem. Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
Neque porro quisquam est, qui dolorem. Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
Neque porro quisquam est, qui dolorem. Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
Neque porro quisquam est, qui dolorem"
        />
        <Paragraph
          paragraph="Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
Neque porro quisquam est, qui dolorem. Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
Neque porro quisquam est, qui dolorem. Consequuntur magni dolores eos qui"
        />
      </div>
    </main>
  );
}
