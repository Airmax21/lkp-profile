import * as React from "react";
import { Typography } from "@/components/atoms";
import { Theme, styled } from "@mui/material/styles";
import { SxProps } from "@mui/system";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Asset1 } from "@/assets";
import Image from "next/image";

const IntroLayoutRoot = styled("section")(({ theme }) => ({
  color: theme.palette.common.white,
  position: "relative",
  display: "flex",
  alignItems: "center",
  marginTop: 20,
  [theme.breakpoints.up("sm")]: {
    height: "99vh",
    minHeight: 500,
    maxHeight: 1300,
  },
}));

const Background = styled("div")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  zIndex: -2,
});

interface IntroLayoutProps {
  sxBackground: SxProps<Theme>;
}

function IntroLayout(
  props: React.HTMLAttributes<HTMLDivElement> & IntroLayoutProps
) {
  const { sxBackground, children } = props;

  return (
    <IntroLayoutRoot>
      <Container
        sx={{
          mt: 3,
          mb: 14,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {children}
        <Box
          sx={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: "common.black",
            opacity: 0.5,
            zIndex: -1,
          }}
        />
        <Background sx={sxBackground} />
      </Container>
    </IntroLayoutRoot>
  );
}

const IntroCompany: React.FC<any> = () => {
  return (
    <IntroLayout
      sxBackground={{
        backgroundImage: `url(assets-1.jpg)`,
        backgroundColor: "#7fc7d9",
        backgroundPosition: "center",
      }}
    >
      <Image style={{ display: "none" }} src={Asset1} alt="increase priority" />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Selamat Datang di LKPSDM
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
      >
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rutrum ante id tempor auctor. Donec tristique interdum elit, et iaculis lorem interdum pretium. Duis aliquet erat mauris, in rhoncus justo fermentum sit amet. In fermentum lectus sollicitudin, vehicula ligula nec, viverra lacus. Vivamus et quam sed nisl finibus accumsan eu nec ligula. Sed tristique magna ut est ullamcorper imperdiet. Proin a tellus vel quam tincidunt consectetur in non massa.
      </Typography>
    </IntroLayout>
  );
};

export default IntroCompany;
