import React from "react";

interface Props {
  paragraph: string;
}

export const Paragraph = ({ paragraph }: Props) => {
  return (
    <div className="w-full flex">
      <div className="w-1/2">
        <p className="justify-start bg-slate-400 m-4">{paragraph}</p>
      </div>
    </div>
  );
};
