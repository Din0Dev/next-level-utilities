import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import MuiAppBar from "@mui/material/AppBar";
import { styled, useTheme } from "@mui/material/styles";
import AppBar from "components/MaterialComponents/Appbar";
import { Fragment } from "react";

interface HeaderI {
  open: boolean;
  handleDrawerOpen: Function;
  heading: String;
}

const Header = (props: HeaderI) => {
  const {
    open = false,
    handleDrawerOpen = () => {},
    heading = "Utility",
  } = props;
  //! State
  const theme = useTheme();
  //! Function

  //! Render
  return (
    <AppBar className="header" position="fixed" open={open} theme={theme}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: 5,
            ...(open && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          {heading}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
