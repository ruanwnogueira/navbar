import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { navigateToUrl } from "single-spa";

export default function Navbar() {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    switch (window.location.pathname) {
      case "/app":
        setValue(0);
        break;
      case "/react":
        setValue(1);
        break;
      case "/vue":
        setValue(2);
        break;
      default:
        setValue(0);
        break;
    }
  });

  const handleNavigation = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        navigateToUrl("/app");
        break;
      case 1:
        navigateToUrl("/react");
        break;
      case 2:
        navigateToUrl("/vue");
        break;
      default:
        break;
    }
  };

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation showLabels value={value} onChange={handleNavigation}>
        <BottomNavigationAction label="app" />
        <BottomNavigationAction label="react" />
        <BottomNavigationAction label="vue" />
      </BottomNavigation>
    </Box>
  );
}
