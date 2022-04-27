import Header from "components/Header";
import Menu from "components/Menu";
import DrawerHeader from "components/MaterialComponents/DrawerHeader";
import React, { Fragment } from "react";

import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

const DefaultLayout: React.FC = ({ children }) => {
  //! State
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  //! Function

  //! Render
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header open={open} handleDrawerOpen={handleDrawerOpen} />
      <Menu open={open} handleDrawerClose={handleDrawerClose} />
      <Box className="container" component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
};

export default DefaultLayout;
