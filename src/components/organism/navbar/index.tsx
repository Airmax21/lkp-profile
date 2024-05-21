import React from "react";
import { FC } from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { AppBar, Toolbar } from "@/components/atoms";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Image from "next/image";
import { LKP } from "@/assets";

const pages = ["Home", "Tentang Kami", "Pelatihan", "News"];

const rightLink = {
  fontSize: 18,
  color: "common.black",
  mr: 4,
};
interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

function ElevationScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const NavbarComponent: FC<any> = () => {
  return (
    <>
      <ElevationScroll>
        <AppBar sx={{backgroundColor: 'white'}}>
          <Toolbar className="mx-10" >
            <Link
              variant="h6"
              underline="none"
              color="inherit"
              href="/"
              sx={{ fontSize: 24 }}
            >
              <Image src={LKP} alt="Logo" className="w-28" />
            </Link>
            <Box sx={{ flex: 3, display: "flex", justifyContent: "center" }}>
              {pages.map((page) => (
                // eslint-disable-next-line react/jsx-key
                <Link
                  color="inherit"
                  variant="caption"
                  underline="none"
                  href={"#" + page}
                  sx={rightLink}
                >
                  {page}
                </Link>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </>
  );
};

export default NavbarComponent;
