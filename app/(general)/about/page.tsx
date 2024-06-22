import { Metadata } from "next";
import Image from "next/image";
import { Box, Button, Card, Carousel, Paragraph } from "@/app/components";
import desk from "../../assets/altumcode-dMUt0X3f59Q-unsplash.jpg";
import { HomeIcon } from "@primer/octicons-react";

export const metadata: Metadata = {
  title: "About",
  description: "About",
};

export default function AboutPage() {
  return (
    <>
      <Box
        leftContent={
          <div>
            <div className="flex flex-col my-10">
              <span className="text-5xl">Roxana Narela Camara</span>
              <span className="text-xl font-bold">
                Semi senior frontend developer
              </span>
            </div>
            <span className="text-2xl font-bold my-4">Sed ut perspiciatis</span>
            <Paragraph paragraph="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est." />
            <Paragraph paragraph="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est." />

            <Button text={"Dowload CV"} style="second" />
          </div>
        }
        rightContent={<Image alt="User_photo" className=" h-1/1 " src={desk} />}
      />

      <Box
        leftContent={<Image alt="User_photo" className=" w-2/3" src={desk} />}
        rightContent={
          <div>
            <span className="text-2xl font-bold my-4">Nuestros valores</span>
            <Paragraph paragraph="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisqua." />
          </div>
        }
      />

      <Box
        leftContent={
          <div>
            <span className="text-2xl font-bold my-4">Nuestros valores</span>
            <Paragraph paragraph="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem." />
          </div>
        }
        rightContent={<Image alt="User_photo" className=" w-2/3 " src={desk} />}
      />

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
          <div>
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

      <Box
        centerContent={
          <>
            <span className="text-2xl font-bold my-4">Portafolio</span>
            <Paragraph
              paragraph="Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
              Neque porro quisquam est, qui dolorem. Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
              Neque porro quisquam est, qui dolorem. Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
              Neque porro quisquam est, qui dolorem. Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
              Neque porro quisquam est, qui dolorem"
            />

            <Carousel image={desk} />
          </>
        }
      />

      <Box
        centerContent={
          <>
            <span className="text-2xl font-bold my-4">
              Experiencia y conomicientos
            </span>
            <Paragraph
              paragraph="Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
              Neque porro quisquam est, qui dolorem. Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
              Neque porro quisquam est, qui dolorem."
            />

            <Carousel />
          </>
        }
      />

      <div
        className={`flex flex-col items-center justify-center bg-white m-8 p-8`}
      >
        <span className="text-5xl m-4">Hablemos de Técnologia</span>

        <span className="text-3xl m-4">
          Si esta buscando un socio confiable y comprometido en el campo de los
          servicios de IT, no dude en contactarnos.
        </span>

        <Box
          leftContent={
            <div className="m-8">
              <span className="text-2xl font-bold my-4">Contactame</span>
              <div className="">
                <p className="text-base text-body-color leading-loose my-6">
                  <HomeIcon size={24} className="mr-1" /> 1 User
                </p>
                <p className="text-base text-body-color leading-loose my-6">
                  <HomeIcon size={24} className="mr-1" /> All UI components
                </p>
                <p className="text-base text-body-color leading-loose my-6">
                  <HomeIcon size={24} className="mr-1" /> Lifetime access
                </p>
                <p className="text-base text-body-color leading-loose my-6">
                  <HomeIcon size={24} className="mr-1" /> Free updates
                </p>
                <p className="text-base text-body-color leading-loose my-6">
                  <HomeIcon size={24} className="mr-1" /> Use on 1 (one) project
                </p>
                <p className="text-base text-body-color leading-loose my-6">
                  <HomeIcon size={24} className="mr-1" /> 3 Months support
                </p>
              </div>
            </div>
          }
          rightContent={
            <Image alt="User_photo" className=" w-9/12 " src={desk} />
          }
          fullContent="der"
        />
      </div>
    </>
  );
}
