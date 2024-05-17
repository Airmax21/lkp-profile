import React from "react";
import { FC } from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { AppBar, Toolbar } from "@/components/atoms";

const pages = ["Home", "Pelatihan", "News"];

const rightLink = {
  fontSize: 16,
  color: "common.white",
  ml: 3,
};

const NavbarComponent: FC<any> = () => {
  return (
    <>
      <AppBar position="fixed" className="rounded-b">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ flex: 1 }} />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            href="/"
            sx={{ fontSize: 24 }}
          >
            {"LKPSDM"}
          </Link>
          <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
            {pages.map((page) => (
              <Link
                color="inherit"
                variant="h6"
                underline="none"
                href="/"
                sx={rightLink}
              >
                {page}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default NavbarComponent;
