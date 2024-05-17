import { FC } from "react";
import { IntroCompany, NavbarComponent } from "@/components";

const HomeLayout: FC<any> = ({ children }) => {
  return (
    <>
      <NavbarComponent />
      <IntroCompany/>
    </>
  );
};

export default HomeLayout;
