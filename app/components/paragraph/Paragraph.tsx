import React from "react";

interface Props {
  paragraph: string;
}

export const Paragraph = ({ paragraph }: Props) => {
  return <p className="justify-start bg-slate-400 m-4">{paragraph}</p>;
};
