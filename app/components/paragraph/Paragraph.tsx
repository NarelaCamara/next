import React from "react";

interface Props {
  paragraph: string;
}

export const Paragraph = ({ paragraph }: Props) => {
  return <p>{paragraph}</p>;
};
