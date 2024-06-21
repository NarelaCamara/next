import { Metadata } from "next";
import Image from "next/image";
import { Box, ButtonPrimary, Paragraph } from "@/app/components";
import desk from "../../assets/altumcode-dMUt0X3f59Q-unsplash.jpg";

export const metadata: Metadata = {
  title: "About",
  description: "About",
};

export default function AboutPage() {
  return (
    <div>
      <div className="flex flex-col m-4">
        <span className="text-5xl m-4">Roxana Narela Camara</span>
        <span className="text-2xl font-bold m-4">
          Semi senior frontend developer
        </span>
      </div>

      <Box
        leftContent={
          <>
            <span className="text-2xl font-bold m-4">Sed ut perspiciatis</span>
            <Paragraph paragraph="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est." />
            <Paragraph paragraph="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est." />
            <Paragraph paragraph="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est." />

            <button
              className="middle none center mr-3 rounded-lg border border-blue-500 py-3 px-6 font-sans text-xs font-bold text-blue-500 transition-all hover:opacity-75 focus:ring focus:bg-blue-950 active:opacity-[0.45] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              data-ripple-dark="true"
            >
              Download CV
            </button>
          </>
        }
        rightContent={
          <Image
            width={650}
            height={650}
            alt="User_photo"
            className=""
            src={desk}
          />
        }
      />
    </div>
  );
}
