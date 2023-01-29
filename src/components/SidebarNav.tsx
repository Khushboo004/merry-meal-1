import { MenuItem, Stack, ListItemIcon, MenuList } from "@mui/material";
import SummarizeIcon from "@mui/icons-material/Summarize";
import PersonIcon from "@mui/icons-material/Person";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import { Link } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
type Props = {};

const SidebarNav = (props: Props) => {
  const theme = createTheme({
    components: {
      MuiMenuItem: {
        styleOverrides: {
          root: {
            textAlign: "center",
            padding: 20,
            fontWeight: "bold",
            "&.Mui-selected": {
              backgroundColor: "rgb(74 222 128)",
              color: "white",
              "&.Mui-focusVisible": {
                color: "white",
                backgroundColor: "rgb(74 222 128)",
              },
            },
          },
        },
      },
    },
    typography: {
      fontFamily: ['"Sofia Sans"', "sans-serif"].join(","),
      fontSize: 15,
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Stack direction="column">
        <MenuList>
          <Link to={"/dataSummary"}>
            <MenuItem value="dataSummary">
              <ListItemIcon>
                <SummarizeIcon fontSize="small" />
              </ListItemIcon>
              Info Summary
            </MenuItem>
          </Link>
          <Link to={"/profile"}>
            <MenuItem>
              <ListItemIcon>
                <PersonIcon fontSize="small" />
              </ListItemIcon>
              My Profile
            </MenuItem>
          </Link>

          <Link to={"/userinfo"}>
            <MenuItem>
              <ListItemIcon>
                <RecentActorsIcon fontSize="small" />
              </ListItemIcon>
              User Info
            </MenuItem>
          </Link>
          <Link to={"/mealinfo"}>
            <MenuItem>
              <ListItemIcon>
                <DinnerDiningIcon fontSize="small" />
              </ListItemIcon>
              Meal Status
            </MenuItem>
          </Link>
          <Link to={"/deliinfo"}>
            <MenuItem>
              <ListItemIcon>
                <DeliveryDiningIcon fontSize="small" />
              </ListItemIcon>
              Delivery Status
            </MenuItem>
          </Link>
          <Link to={"/donateinfo"}>
            <MenuItem>
              <ListItemIcon>
                <VolunteerActivismIcon fontSize="small" />
              </ListItemIcon>
              Donation
            </MenuItem>
          </Link>
        </MenuList>
      </Stack>
    </ThemeProvider>
  );
};

export default SidebarNav;
