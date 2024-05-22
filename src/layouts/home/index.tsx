import { FC } from "react";
import { AboutCompany, FooterComponent, IntroCompany, NavbarComponent, NewsCompany, TrainingCompany } from "@/components";

const HomeLayout: FC<any> = ({ children }) => {
  return (
    <>
      <NavbarComponent />
      <IntroCompany/>
      <AboutCompany/>
      <TrainingCompany/>
      <NewsCompany/>
      <FooterComponent/>
    </>
  );
};

export default HomeLayout;
