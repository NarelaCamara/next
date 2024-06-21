import { Metadata } from "next";
import Image from "next/image";
import { Box, Paragraph } from "@/app/components";
import desk from "../../assets/altumcode-dMUt0X3f59Q-unsplash.jpg";
import { HomeIcon } from "@primer/octicons-react";

export const metadata: Metadata = {
  title: "About",
  description: "About",
};

export default function AboutPage() {
  return (
    <>
      <div className="border-1 m-8 bg-white">
        <Box
          leftContent={
            <div className="m-8">
              <div className="flex flex-col my-10">
                <span className="text-5xl">Roxana Narela Camara</span>
                <span className="text-xl font-bold">
                  Semi senior frontend developer
                </span>
              </div>
              <span className="text-2xl font-bold my-4">
                Sed ut perspiciatis
              </span>
              <Paragraph paragraph="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est." />
              <Paragraph paragraph="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est." />

              <button
                className=" my-4 middle none center mr-3 rounded-lg border border-blue-500 py-3 px-6 font-sans text-xs font-bold text-blue-500 transition-all hover:opacity-75 focus:ring focus:bg-blue-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                data-ripple-dark="true"
              >
                <span className="text-base">Download CV</span>
              </button>
            </div>
          }
          rightContent={
            <Image alt="User_photo" className=" h-1/1 " src={desk} />
          }
        />
      </div>

      <div className="border-1 m-8 bg-white">
        <Box
          leftContent={<Image alt="User_photo" className=" w-2/3" src={desk} />}
          rightContent={
            <div>
              <span className="text-2xl font-bold my-4">Nuestros valores</span>
              <Paragraph paragraph="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisqua." />
            </div>
          }
        />
      </div>

      <div className="border-1 m-8 bg-white">
        <Box
          leftContent={
            <div className="m-8">
              <span className="text-2xl font-bold my-4">Nuestros valores</span>
              <Paragraph paragraph="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem." />
            </div>
          }
          rightContent={
            <Image alt="User_photo" className=" w-2/3 " src={desk} />
          }
        />
      </div>

      <div className="border-1 m-8 bg-white">
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
              <span className="text-2xl font-bold">
                Experiencia y conomicientos
              </span>
              <Paragraph paragraph="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem." />
              <div className="m-7">
                <p className="text-base text-body-color leading-loose m-6">
                  <HomeIcon size={24} className="mr-8" /> 1 User
                </p>
                <p className="text-base text-body-color leading-loose m-6">
                  <HomeIcon size={24} className="mr-8" /> All UI components
                </p>
                <p className="text-base text-body-color leading-loose m-6">
                  <HomeIcon size={24} className="mr-8" /> Lifetime access
                </p>
                <p className="text-base text-body-color leading-loose m-6">
                  <HomeIcon size={24} className="mr-8" /> Free updates
                </p>
                <p className="text-base text-body-color leading-loose m-6">
                  <HomeIcon size={24} className="mr-8" /> Use on 1 (one) project
                </p>
                <p className="text-base text-body-color leading-loose m-6">
                  <HomeIcon size={24} className="mr-8" /> 3 Months support
                </p>
              </div>
            </div>
          }
        />
      </div>
    </>
  );
}
