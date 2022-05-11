import { List } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Drawer from "components/MaterialComponents/Drawer";
import DrawerHeader from "components/MaterialComponents/DrawerHeader";
import DividerComponents from "components/MaterialComponents/DividerComponents";
import baseUrl from "constants/baseUrl";
import Link from "next/link";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import StorageIcon from '@mui/icons-material/Storage';
import HomeIcon from "@mui/icons-material/Home";
import AssignmentIcon from '@mui/icons-material/Assignment';
interface MenuI {
  open: boolean;
  handleDrawerClose: () => void;
}

const Menu = (props: MenuI) => {
  const { open = false, handleDrawerClose = () => {} } = props;
  //! State
  const theme = useTheme();

  const listMenu = [
    {
      icon: <HomeIcon />,
      text: "Home Page",
      href: baseUrl.HOME_PAGE,
    },
    {
      icon: <IntegrationInstructionsIcon />,
      text: "Regex",
      href: baseUrl.REGEX_PAGE,
    },
    {
      icon: <StorageIcon />,
      text: "Custom Hook",
      href: baseUrl.CUSTOM_HOOK_PAGE,
    },
    {
      icon: <AssignmentIcon/>,
      text: "Lesson",
      href: baseUrl.LESSON_PAGE,
    }
  ];

  //! Render
  return (
    <Drawer className="menu" variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon className="color-white" />
          ) : (
            <ChevronLeftIcon className="color-white" />
          )}
        </IconButton>
      </DrawerHeader>
      {/*  */}
      <DividerComponents className="" />
      <List>
        {listMenu.map((el, index) => (
          <Link key={index} href={el.href} passHref>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
                className="color-white"
              >
                {el.icon}
              </ListItemIcon>
              <ListItemText primary={el.text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </Link>
        ))}
      </List>
    </Drawer>
  );
};

export default Menu;
