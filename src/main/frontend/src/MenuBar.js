import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InputBase from "@mui/material/InputBase";
import { useNavigate } from 'react-router-dom';
import Version from "./version";

const drawerWidth = 240;
const navItems = ["Home", "Browse", "Movies"];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        FABFLIX
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const navigate = useNavigate();

  const handleNavigation = (item) => {
    if (item === 'Home') {
      navigate('/');
    } else if (item === 'Browse') {
      navigate('/browse');
    } else if (item === 'Movies') {
      navigate('/movies');
    }
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

    return (
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar component="nav" sx={{ backgroundColor: "#1f2222" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>

            <img 
              src={`${process.env.PUBLIC_URL}/logo-no-background.png`}
              style={{ width: 'auto', height: '70px', maxHeight: '100%', marginRight: '30px' }}
              alt="Logo" 
            />

            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              {navItems.map((item) => (
                <Button
                  key={item}
                  sx={{ color: "#fff" }}
                  onClick={() => handleNavigation(item)}
                >
                  {item}
                </Button>
              ))}
            </Typography>
            <Typography
              variant="h6"
              component="div"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                color: "#fff",
              }}
            >
              <IconButton color="inherit">
                <SearchIcon />
              </IconButton>
              <InputBase
                placeholder="Search..."
                inputProps={{ "aria-label": "search" }}
                sx={{ color: "#fff" }}
              />
              <IconButton color="inherit">
                <ShoppingCartIcon />
              </IconButton>
            </Typography>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth
              }
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
          <Typography>
            <Version/>
          </Typography>
        </Box>
      </Box>
    );
  }

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func
};

export default DrawerAppBar;
