import { ATRIBUTE_FULL_CONTENT } from "@/app/helpers/constants";
import React from "react";

interface Props {
  leftContent: any;
  rightContent: any;
  fullContent?: ATRIBUTE_FULL_CONTENT;
}

export const Box = ({ leftContent, rightContent, fullContent = "" }: Props) => {
  const fullComponent = (
    name: ATRIBUTE_FULL_CONTENT,
    fullContent: ATRIBUTE_FULL_CONTENT
  ) => {
    return name === fullContent || name === fullContent ? "" : "m-8";
  };

  return (
    <div className={`w-full flex`}>
      <div className={`w-1/2 ${fullComponent("izq", fullContent)}`}>
        {leftContent}
      </div>
      <div className={`w-1/2 ${fullComponent("der", fullContent)}`}>
        {rightContent}
      </div>
    </div>
  );
};
