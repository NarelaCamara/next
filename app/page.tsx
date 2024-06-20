import { Montserrat } from "next/font/google";
import style from "./selfPage.module.css";
import { Box, ButtonPrimary, Navigation, Paragraph } from "./components";

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
        <span className="text-5xl m-4">Roxana Narela Camara</span>

        <span className="text-3xl m-4">
          Developer frontend React | Next | Node | React Native
        </span>

        <Box
          leftContent={
            <>
              <span className="text-2xl font-bold m-4">Sed ut perspiciatis</span>
              <Paragraph
                paragraph="Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
              Neque porro quisquam est, qui dolorem. Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
              Neque porro quisquam est, qui dolorem. Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
              Neque porro quisquam est, qui dolorem. Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
              Neque porro quisquam est, qui dolorem"
              />
              <ButtonPrimary text={"Ver más!"} />
            </>
          }
          rightContent={
            <Paragraph
              paragraph="Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
Neque porro quisquam est, qui dolorem. Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
Neque porro quisquam est, qui dolorem. Consequuntur magni dolores eos qui"
            />
          }
        />
      </div>
    </main>
  );
}
