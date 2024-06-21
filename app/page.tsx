import { Montserrat } from "next/font/google";
import { Box, ButtonPrimary, Navigation, Paragraph } from "./components";
import Image from "next/image";
import desk from "./assets/altumcode-dMUt0X3f59Q-unsplash.jpg";

export default function Home() {
  return (
    <>
      <div className={`flex flex-col items-center justify-center bg-white`}>
        <span className="text-5xl m-4">Roxana Narela Camara</span>

        <span className="text-3xl m-4">
          Developer frontend React | Next | Node | React Native
        </span>

        <Box
          leftContent={
            <>
              <span className="text-2xl font-bold m-4">
                Sed ut perspiciatis
              </span>
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
            <Image alt="User_photo" className=" w-9/12 " src={desk} />
          }
        />
      </div>
    </>
  );
}
