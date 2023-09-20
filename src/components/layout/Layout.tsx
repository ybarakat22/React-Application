import React from "react";
import MainNavigation from "./MainNavigation";

export const Layout = (props:any) => {
  return (
    <div>
      <MainNavigation />
      <main>{props.children}</main>
    </div>
  );
};
