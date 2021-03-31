import React from "react";
import SearchBar from "./SearchBar";
import {styled} from "@material-ui/core/styles";
import {Button} from "@material-ui/core";

const StyledButton = styled(Button)({
    padding: "8px 20px",
    color: "white",
    textDecoration: "none",
    transition: "0.5s",
    '&:hover':{
        backgroundColor: "white",
        color: "black",
    }
})

const SignOutButton = styled(Button)({
    color: "white",
    marginRight: "0.5%",
    marginLeft: "2%",
    fontSize: "75%",
    background: "linear-gradient(30deg, #2196F3 30%, #FF8E53 90%)",
    '&:hover':{
        background: "linear-gradient(90deg, #FE6B8B 30%, #FF8E53 90%)"
    },
    padding: "10px 20px",
})

const NavBarStyle = {
    position: "fixed",
    zIndex: "1",
    background: "linear-gradient(90deg, rgb(120, 180, 248) 0%, rgb(22, 75, 248))",
    height: "80px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1.2rem",
}

const NavMenuStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(2, auto)",
    gridGap: "1%",
    listStyle: "none",
    textAlign: "center",
    width: "75vw",
    justifyContent: "end",
    marginTop: "1%"
}

class NavBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){

        return(
            <div style = {{paddingBottom: "5%"}}>
                <nav style = {NavBarStyle}>
                    <h1 style = {{whiteSpace: "nowrap", paddingRight: "3rem"}}>Find-A-Friend</h1>
                    <SearchBar />
                    <ul style = {NavMenuStyle}>
                        <StyledButton>Home</StyledButton>
                        <StyledButton>Profile</StyledButton>
                    </ul>
                    <SignOutButton onClick = {this.props.signout}>Sign Out</SignOutButton>
                </nav>
            </div>
        )
    }
}

export default NavBar;