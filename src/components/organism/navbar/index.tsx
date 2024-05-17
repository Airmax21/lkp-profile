import React from "react";
import { FC } from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { AppBar, Toolbar } from "@/components/atoms";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Image from "next/image";
import { LKP } from "@/assets";

const pages = ["Home", "Pelatihan", "News"];

const rightLink = {
  fontSize: 16,
  color: "common.black",
  ml: 3,
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
        <AppBar>
          <Toolbar className="mx-10" sx={{ justifyContent: "space-between" }}>
            <Link
              variant="h6"
              underline="none"
              color="inherit"
              href="/"
              sx={{ fontSize: 24 }}
            >
              <Image src={LKP} alt="Logo" className="w-28" />
            </Link>
            <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
              {pages.map((page) => (
                <Link
                  color="inherit"
                  variant="h6"
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
