import { ATRIBUTE_FULL_CONTENT } from "@/app/helpers/constants";
import React from "react";

interface Props {
  leftContent?: any;
  rightContent?: any;
  centerContent?: any;
  fullContent?: ATRIBUTE_FULL_CONTENT;
}

export const Box = ({
  leftContent,
  rightContent,
  fullContent = "",
  centerContent,
}: Props) => {
  const fullComponent = (
    name: ATRIBUTE_FULL_CONTENT,
    fullContent: ATRIBUTE_FULL_CONTENT
  ) => {
    return name === fullContent || name === fullContent ? "" : "m-20";
  };

  return (
    <div className={`flex border-1 m-8 bg-white`}>
      {leftContent && (
        <div className={`w-1/2 ${fullComponent("izq", fullContent)}`}>
          {leftContent}
        </div>
      )}
      {rightContent && (
        <div className={`w-1/2 ${fullComponent("der", fullContent)}`}>
          {rightContent}
        </div>
      )}
      {centerContent && (
        <div className={`w-full ${fullComponent("center", fullContent)}`}>
          {centerContent}
        </div>
      )}
    </div>
  );
};
