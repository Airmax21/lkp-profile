import React from "react";
import { FC } from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { AppBar, Toolbar, Typography } from "@/components/atoms";
import MenuIcon from "@mui/icons-material/Menu";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Image from "next/image";
import { LKP } from "@/assets";
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

const pages = ["Home", "Tentang Kami", "Tujuan", "Pelatihan", "News"];

const rightLink = {
  fontSize: 18,
  color: "common.black",
  mr: 4,
};

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

const drawerWidth = 140;

function ElevationScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    sx: {
      backgroundColor: 'white',
      boxShadow: trigger
        ? '0px 4px 6px -1px rgba(173, 216, 230, 0.7), 0px 2px 4px -1px rgba(173, 216, 230, 0.5)'
        : 'none',
    },
  });
}

const NavbarComponent: FC<any> = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        LKP SDM
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
      <ElevationScroll {...props}>
        <AppBar sx={{ backgroundColor: "white" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon sx={{ color: 'black' }} />
            </IconButton>
            <Link
              variant="h6"
              underline="none"
              color="inherit"
              href="/"
              sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}
            >
              <Image
                src={LKP}
                alt="Logo"
                className="max-w-32 justify-center"
              />
            </Link>
            <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" }, alignItems: "center" }}>
              {pages.map((page) => (
                <Link
                  key={page}
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
      <Box component="nav">
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
      </Box>
      <Toolbar />
    </>
  );
};

export default NavbarComponent;
