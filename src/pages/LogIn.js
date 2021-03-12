import React from "react";
import {
  AppBar,
  Avatar,
  Button,
  Grid,
  Link,
  Paper,
  TextField,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Redirect } from "react-router-dom";

const gridStyle = {
  width: "100%",
  margin: "0px",
};

const leftPaperStyle = {
  width: "100%",
  backgroundColor: "#4051B5",
};

const rightPaperStyle = {
  padding: 20,
  height: "60vh",
  width: 280,
  margin: "20px auto",
};

const h3Style = {
  color: "#FFFFFF",
  padding: "20px",
};

const buttonStyle = { margin: "10px 0" };

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      success: false,
      signup: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.redirectToSignUp = this.redirectToSignUp.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  redirectToSignUp() {
    this.setState({ signup: true });
  }
  render() {
    if (this.state.signup) {
      return <Redirect to="./signup" />;
    }
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <h1>Find-A-Friend</h1>
          </Toolbar>
        </AppBar>
        <Grid container style={gridStyle} spacing={2}>
          <Grid item xs={9}>
            <Paper style={leftPaperStyle}>
              <div>
                <h3 style={h3Style}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </h3>
                <img
                  src="https://fairviewgardencenter.com/wp-content/uploads/2017/07/cherry-blossom.jpg"
                  alt="pink flowers"
                  width="70%"
                />
              </div>
            </Paper>
          </Grid>
          <Grid item>
            <Paper elevation={10} style={rightPaperStyle}>
              <Grid align="center">
                <Avatar></Avatar>
                <h2>Log in</h2>
              </Grid>
              <form>
                <TextField
                  label="Email"
                  placeholder="Enter email"
                  name="email"
                  id="email"
                  fullWidth
                  required
                  autoFocus
                  onChange={this.handleChange}
                  value={this.state.email}
                />
                <TextField
                  label="Password"
                  placeholder="Enter password"
                  name="password"
                  id="password"
                  type="password"
                  fullWidth
                  required
                  onChange={this.handleChange}
                  value={this.state.password}
                />
                <Button
                  type="submit"
                  color="primary"
                  variant="contained"
                  style={buttonStyle}
                  fullWidth
                >
                  Sign in
                </Button>
              </form>
              <Typography>
                Don't have an account?{" "}
                <Link href="" onClick={this.redirectToSignUp}>
                  Sign up
                </Link>
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default LogIn;
