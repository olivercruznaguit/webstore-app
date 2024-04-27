import React, { ReactNode } from "react";
interface props {
  title: string;
  children: ReactNode;
}
const Title: React.FC<props> = ({ title, children }) => {
  return (
    <div className="text-center pt-10">
      <h1 className="font-extrabold text-5xl mb-5 uppercase text-app-blue">{title}</h1>
      {children}
    </div>
  );
};

export default Title;
