import { FC } from "react";
import { AboutCompany, FooterComponent, IntroCompany, NavbarComponent, NewsCompany, PurposeComponent, TrainingCompany } from "@/components";

const HomeLayout: FC<any> = ({ children }) => {
  return (
    <>
      <NavbarComponent />
      <IntroCompany/>
      <AboutCompany/>
      <PurposeComponent/>
      <TrainingCompany/>
      <NewsCompany/>
      <FooterComponent/>
    </>
  );
};

export default HomeLayout;
