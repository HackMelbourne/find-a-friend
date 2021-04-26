import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {feedFunctions} from '../../../firebase'

const searchContainer = {
    position: "fixed",
    width: "100vw",
    left: "20%",
    top: "3%",
}

const searchBarStyle = {
    position: "fixed",
    border: "none",
    outline: "none",
    top: "3%",
    padding: "5px",
    marginLeft: "20px",
    width: "30%",
}

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            search_results: []
        }
    }

    render(){
        return(
            <div style = {searchContainer}>
                <input 
                type = "text"
                className = "search-bar-dropdown"
                placeholder = "Search Other Hackees Here..."
                style = {searchBarStyle}
                onChange ={(e) => feedFunctions.searchUser(e.target.value, this)}/>

                <ul style = {{position: "fixed", width: "30%", top: "8%", right: "51.3%"}}>        
                    {this.state.search_results.map((item) => <a style = {{textDecoration: "none"}}>
                        <button style = {{outline: "none"}} className = "list-group-item list-group-item-action">{item.name}</button>
                    </a>)}
                </ul>
            </div>

        )
    }
}

export default SearchBar;