import React from "react";

interface Props {
  leftContent: any;
  rightContent: any;
}

export const Box = ({ leftContent, rightContent }: Props) => {
  return (
    <div className="w-full flex m-4 p-4">
      <div className="w-1/2 m-6">{leftContent}</div>
      <div className="w-1/2 m-6">{rightContent}</div>
    </div>
  );
};
