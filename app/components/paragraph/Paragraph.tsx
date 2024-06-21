import React from "react";

interface Props {
  paragraph: string;
}

export const Paragraph = ({ paragraph }: Props) => {
  return <p className="justify-start my-4 text-base">{paragraph}</p>;
};
