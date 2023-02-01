import { MenuItem, Stack, ListItemIcon, MenuList } from "@mui/material";
import SummarizeIcon from "@mui/icons-material/Summarize";
import PersonIcon from "@mui/icons-material/Person";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import { Link, useSearchParams } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CaregiverSidebar from "./Dashboard/CareGiver/CaregiverSidebar";
import PartnerSidebar from "./Dashboard/Partner/PartnerSidebar";
type Props = {
  role: String;
};

const SidebarNav = (props: Props) => {
  const { role } = props;
  const [searchParams, setSearchParams] = useSearchParams();
  const uri = role?.toLowerCase();
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
          {role === "ADMIN" && window.location.toString().includes("admin") ? (
            <>
              <Link to={`/${uri}/dataSummary`}>
                <MenuItem value="dataSummary">
                  <ListItemIcon>
                    <SummarizeIcon fontSize="small" />
                  </ListItemIcon>
                  Info Summary
                </MenuItem>
              </Link>
              <Link to={`/${uri}/profile`}>
                <MenuItem>
                  <ListItemIcon>
                    <PersonIcon fontSize="small" />
                  </ListItemIcon>
                  My Profile
                </MenuItem>
              </Link>

              <Link to={`/${uri}/userinfo`}>
                <MenuItem>
                  <ListItemIcon>
                    <RecentActorsIcon fontSize="small" />
                  </ListItemIcon>
                  User Info
                </MenuItem>
              </Link>
              <Link to={`/${uri}/mealinfo`}>
                <MenuItem>
                  <ListItemIcon>
                    <DinnerDiningIcon fontSize="small" />
                  </ListItemIcon>
                  Meal Status
                </MenuItem>
              </Link>
              <Link to={`/${uri}/deliinfo`}>
                <MenuItem>
                  <ListItemIcon>
                    <DeliveryDiningIcon fontSize="small" />
                  </ListItemIcon>
                  Delivery Status
                </MenuItem>
              </Link>
              <Link to={`/${uri}/donateinfo`}>
                <MenuItem>
                  <ListItemIcon>
                    <VolunteerActivismIcon fontSize="small" />
                  </ListItemIcon>
                  Donation
                </MenuItem>
              </Link>
            </>
          ) : (
            <></>
          )}
          {role === "RIDER" ? (
            <>
              <Link to={`/${uri}/profile`}>
                <MenuItem>
                  <ListItemIcon>
                    <PersonIcon fontSize="small" />
                  </ListItemIcon>
                  My Profile
                </MenuItem>
              </Link>
              <Link to={`/${uri}/deliveries`}>
                <MenuItem>
                  <ListItemIcon>
                    <RecentActorsIcon fontSize="small" />
                  </ListItemIcon>
                  Delivery Info
                </MenuItem>
              </Link>
            </>
          ) : (
            <></>
          )}
          {role === "VOLUNTEER" ? (
            <>
              <Link to={`/${uri}/profile`}>
                <MenuItem>
                  <ListItemIcon>
                    <PersonIcon fontSize="small" />
                  </ListItemIcon>
                  My Profile
                </MenuItem>
              </Link>
              <Link to={`/${uri}/assessfood`}>
                <MenuItem>
                  <ListItemIcon>
                    <RecentActorsIcon fontSize="small" />
                  </ListItemIcon>
                  Assess Food
                </MenuItem>
              </Link>
            </>
          ) : (
            <></>
          )}
          {role === "CAREGIVER" ? (
            <>
              <CaregiverSidebar />
            </>
          ) : (
            <></>
          )}
          {role === "PARTNER" ? (
            <>
              <PartnerSidebar />
            </>
          ) : (
            <></>
          )}
        </MenuList>
      </Stack>
    </ThemeProvider>
  );
};

export default SidebarNav;
