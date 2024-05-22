import React from "react";
import { FC } from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { AppBar, Toolbar, Typography } from "@/components/atoms";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Image from "next/image";
import { LKP } from "@/assets";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

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

const drawerWidth = 240;

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

const NavbarComponent: FC<any> = (props: Props) => {
  const { children, window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {pages.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <ElevationScroll>
      <Box sx={{ display: 'flex' }}>
          <AppBar sx={{ backgroundColor: "white" }}>
            <Toolbar className="mx-10">
              <Link
                variant="h6"
                underline="none"
                color="inherit"
                href="/"
                sx={{ fontSize: 24 }}
              >
                <Image
                  src={LKP}
                  alt="Logo"
                  className="max-w-36 mx-auto justify-end"
                />
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
          <nav>
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
            >
              {drawer}
            </Drawer>
          </nav>
        </Box>
      </ElevationScroll>
    </>
  );
};

export default NavbarComponent;
