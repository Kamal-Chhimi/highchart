import {
  Box,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  InputAdornment,
  Paper,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MiniDrawer from "../Home/SideBar";
import { FacebookOutlined, Google, Lock, Person } from "@mui/icons-material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Grids() {
  const theme = useTheme();
  const isSmallerThanSmall = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      sx={{
        display: "flex",
        position: "relative",
        backgroundImage:
          "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAdH70KlGrgGhXeOldHyZLUKlJec3AgjQd9A&s)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* <MiniDrawer /> */}
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{ height: "93vh" }}
      >
        {!isSmallerThanSmall && (
          <Grid
            item
            xs={2}
            md={3}
            lg={4}
            style={{ padding: "0px" }}
            sx={{ backgroundColor: "#125394" }}
          >
            <Typography
              textAlign="center"
              justifyContent="center"
              alignItems="center"
              sx={{ color: "white", margin: "1vh" }}
            >
              MONTY MOBILE
            </Typography>
          </Grid>
        )}

        <Grid
          item
          xs={8}
          md={6}
          lg={4}
          spacing={1}
          style={{ padding: 0 }}
          sx={{ backgroundColor: "white", border: "2px solid #125394" }}
        >
          <Grid
            item
            xs={12}
            container
            style={{ padding: "2vh" }}
            sx={{ height: "70vh" }}
            spacing={0}
          >
            <Grid xs={12} textAlign="center">
              <Typography variant="h4">Login</Typography>
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                placeholder="Username"
                InputLabelProps={{
                  style: {
                    fontSize: "2.3vh",
                  },
                }}
                InputProps={{
                  style: {
                    fontSize: "2.5vh",
                    height: "8vh",
                  },
                  onWheel: (e) => e.preventDefault(),
                  startAdornment: (
                    <InputAdornment position="start">
                      <Person
                        sx={{ color: "action.active", fontSize: "3.5vh" }}
                      />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                type="password"
                placeholder="Enter Password"
                InputLabelProps={{
                  style: {
                    fontSize: "2.3vh",
                  },
                }}
                InputProps={{
                  style: {
                    fontSize: "2.5vh",
                    height: "8vh",
                  },
                  onWheel: (e) => e.preventDefault(),
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock
                        sx={{ color: "action.active", fontSize: "3.5vh" }}
                      />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item sx={3} style={{ padding: "0px", margin: "-20px 0" }}>
              <FormControlLabel
                sx={{ height: "6vh" }}
                control={
                  <Checkbox
                    sx={{
                      "& .MuiSvgIcon-root": {
                        fontSize: "3vh",
                      },
                    }}
                    name="checkedB"
                    color="primary"
                  />
                }
                label={
                  <Typography
                    sx={{ fontSize: "2.3vh", padding: "0px", margin: "0px" }}
                  >
                    Remember me
                  </Typography>
                }
              />
            </Grid>

            <Grid
              item
              xs={12}
              container
              alignItems="center"
              justifyContent="center"
            >
              <Grid item xs={12}>
                <Button variant="contained" fullWidth>
                  Login
                </Button>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Typography
                sx={{ fontSize: "2vh", padding: "0px", margin: "0px" }}
              >
                Forget Password?{" "}
              </Typography>
              <Typography sx={{ fontSize: "2.3vh" }}>
                {" "}
                Don't have an account? Register now
              </Typography>
              <Divider>
                <Typography sx={{ fontSize: "2.3vh" }} textAlign="center">
                  Or
                </Typography>
              </Divider>
            </Grid>

            <Grid
              item
              xs={12}
              container
              spacing={2}
              alignItems="center"
              justifyContent="center"
            >
              <Grid item xs={12} sm={5}>
                <Button variant="contained" fullWidth color="primary">
                  <FacebookOutlined
                    sx={{ fontSize: "3.5vh", mr: 1, my: 0.5 }}
                  />
                  LogIn with Facebook
                </Button>
              </Grid>
              <Grid item xs={12} sm={5}>
                <Button variant="outlined" fullWidth color="primary">
                  <Google sx={{ fontSize: "3.5vh", mr: 1, my: 0.5 }} />
                  Login with Google
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {!isSmallerThanSmall && (
          <Grid
            item
            xs={2}
            md={3}
            lg={4}
            style={{ padding: "0px" }}
            sx={{ backgroundColor: "#125394" }}
          >
            <Typography
              textAlign="center"
              sx={{ color: "white", margin: "1vh" }}
            >
              THE ART OF TELECOM
            </Typography>
          </Grid>
        )}
      </Grid>
    </Box>
  );
}

export default Grids;
