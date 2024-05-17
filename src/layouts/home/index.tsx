import { FC } from "react";
import { AboutCompany, IntroCompany, NavbarComponent, NewsCompany, TrainingCompany } from "@/components";

const HomeLayout: FC<any> = ({ children }) => {
  return (
    <>
      <NavbarComponent />
      <IntroCompany/>
      <AboutCompany/>
      <TrainingCompany/>
      <NewsCompany/>
    </>
  );
};

export default HomeLayout;
