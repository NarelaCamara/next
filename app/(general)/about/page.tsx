import { Metadata } from "next";
import Image from "next/image";
import { Box, Paragraph } from "@/app/components";
import desk from "../../assets/altumcode-dMUt0X3f59Q-unsplash.jpg";

export const metadata: Metadata = {
  title: "About",
  description: "About",
};

export default function AboutPage() {
  return (
    <>
      <div className="border-4 m-8 bg-white">
        <Box
          leftContent={
            <div className="m-8">
              <div className="flex flex-col my-10 mx-4">
                <span className="text-5xl">Roxana Narela Camara</span>
                <span className="text-xl font-bold">
                  Semi senior frontend developer
                </span>
              </div>
              <span className="text-2xl font-bold m-4">
                Sed ut perspiciatis
              </span>
              <Paragraph paragraph="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est." />
              <Paragraph paragraph="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est." />

              <button
                className=" m-4 middle none center mr-3 rounded-lg border border-blue-500 py-3 px-6 font-sans text-xs font-bold text-blue-500 transition-all hover:opacity-75 focus:ring focus:bg-blue-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                data-ripple-dark="true"
              >
                <span className="text-base">Download CV</span>
              </button>
            </div>
          }
          rightContent={
            <div className="m-8 w-1/2 h-1/2 rounded-full">
              <Image
                width={350}
                height={550}
                alt="User_photo"
                className=" rounded"
                src={desk}
              />
            </div>
          }
        />
      </div>

      <div className="border-4 m-8 bg-white">
        <Box
          leftContent={
            <div className="m-8 w-1/2 h-1/2 rounded-full">
              <Image
                width={350}
                height={550}
                alt="User_photo"
                className=" rounded"
                src={desk}
              />
            </div>
          }
          rightContent={
            <div>
              <span className="text-2xl font-bold m-4">Nuestros valores</span>
              <Paragraph paragraph="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisqua." />
            </div>
          }
        />
      </div>

      <div className="border-4 m-8 bg-white">
        <Box
          leftContent={
            <div className="m-8">
              <span className="text-2xl font-bold m-4">Nuestros valores</span>
              <Paragraph paragraph="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem." />
            </div>
          }
          rightContent={
            <div className="m-8 w-1/2 h-1/2 rounded-full">
              <Image
                width={350}
                height={550}
                alt="User_photo"
                className=" rounded"
                src={desk}
              />
            </div>
          }
        />
      </div>

      <div className="border-4 m-8 bg-white">
        <Box
          leftContent={
            <Image
              alt="User_photo"
              className=" w-1/1 h-1/1 object-cover"
              src={desk}
            />
          }
          fullContent="izq"
          rightContent={
            <div className="m-8">
              <span className="text-2xl font-bold m-4">Nuestros valores</span>
              <Paragraph paragraph="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem." />
            </div>
          }
        />
      </div>
    </>
  );
}
