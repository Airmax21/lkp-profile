import * as React from "react";
import { Button, Typography } from "@/components/atoms";
import { Theme, styled } from "@mui/material/styles";
import { SxProps } from "@mui/system";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const backgroundImage =
  "https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400";

const IntroLayoutRoot = styled("section")(({ theme }) => ({
  color: theme.palette.common.white,
  position: "relative",
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    height: "80vh",
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
        <Box
          height="16"
          width="12"
          alt="arrow down"
          sx={{ position: "absolute", bottom: 32 }}
        >
            <ArrowDownwardIcon/>
        </Box>
      </Container>
    </IntroLayoutRoot>
  );
}

const IntroCompany: React.FC<any> = () => {
  return (
    <IntroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: "#7fc7d9", // Average color of the background image.
        backgroundPosition: "center",
      }}
    >
      <img
        style={{ display: "none" }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Selamat Datang di LKPSDM
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
      >
        Lembaga yang bertujuan untuk meningkatkan kemampuan dan keterampilan
        individu dalam suatu organisasi atau masyarakat.
      </Typography>
      <Typography variant="body1" color="inherit" sx={{ mt: 2 }}>
        Pelajari Lebih Lanjut
      </Typography>
    </IntroLayout>
  );
};

export default IntroCompany;
