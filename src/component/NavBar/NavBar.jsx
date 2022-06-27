import React from "react";
import {
  AppBar,
  Avatar,
  Button,
  IconButton,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import {
  Menu,
  AccountCircle,
  Brightness4,
  Brightness7,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

import { useTheme } from "@mui/material/styles";
import useStyles from "./styles";

const NavBar = () => {
  const isMobile = useMediaQuery("(max-width:600px");
  const classes = useStyles();
  const theme = useTheme();
  const isAuthenticated = true;
  return (
    <>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          {isMobile && (
            <IconButton
              color="inherit"
              edge="start"
              style={{ outline: "none" }}
              className={classes.menuButton}
            >
              <Menu />
            </IconButton>
          )}

          <IconButton color="inherit" sx={{ ml: 2 }} onClick={() => {}}>
            {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
          </IconButton>

          {!isMobile && <>Search......</>}

          <div>
            {!isAuthenticated ? (
              <Button color="inherit">
                Login &nbsp; <AccountCircle />
              </Button>
            ) : (
              <Button
                color="inherit"
                component={Link}
                to={`/profile/:id`}
                onClick={() => {}}
                className={classes.linkButton}
              >
                {!isMobile && <>My Movies &nbsp;</>}
                <Avatar
                  style={{ width: "30px", height: "30px" }}
                  alt="profile"
                  src="image.img"
                />
              </Button>
            )}
          </div>
          {isMobile && <>Search......</>}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
