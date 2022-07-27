import React from "react";
import "./AppText.scss";

export interface AppTextProps {
  children: JSX.Element;
}

const AppText: React.FC<AppTextProps> = (props: AppTextProps) => {
  return <div className="AppText">{props.children}</div>;
};

export default AppText;
