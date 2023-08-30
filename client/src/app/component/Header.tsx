import { ShoppingCart } from "@mui/icons-material";
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  List,
  ListItem,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";

interface Prop {
  themeChangeHandler: () => void;
}

const midlinks = [
  { title: "Catalog", path: "/catalog" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
];

const navStyles = {
  color: "inherit",
  mr: 4,
  textDecoration: "none",
  "&:hover": {
    color: "secondary.main",
  },
  "&.active": {
    color: "secondary.main",
  },
};

const rightlinks = [
  { title: "Login", path: "/login" },
  { title: "Register", path: "/register" },
];

const Header = ({ themeChangeHandler }: Prop) => {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box display='flex' alignItems='center'>
          <Typography variant="h4" component={NavLink} to="/" sx={navStyles}>
            My Store
          </Typography>
          <Switch
            inputProps={{ "aria-label": "controlled" }}
            onChange={themeChangeHandler}
          />
        </Box>

        <List sx={{ display: "flex" }}>
          {midlinks.map(({ title, path }) => (
            <ListItem component={NavLink} to={path} key={path} sx={navStyles}>
              {title}
            </ListItem>
          ))}
        </List>
        <Box display='flex' alignItems='center'>
          <IconButton size="large" edge="start" color="inherit" sx={{ mr: 2 }}>
            <Badge badgeContent={4} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>

          <List sx={{ display: "flex" }}>
            {rightlinks.map(({ title, path }) => (
              <ListItem component={NavLink} to={path} key={path} sx={navStyles}>
                {title}
              </ListItem>
            ))}
          </List>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
