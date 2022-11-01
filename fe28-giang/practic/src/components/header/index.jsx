import React from "react";
import './style.css'
function Headerbar() {
    function creat() {
        var a = document.querySelector('.create-task');
        a.style.backgroundColor = "red";
    }
    return (
        <div className="header">
            <div className="create-task"  onClick={creat}>Create new task</div>
            <div className="search">
                <input type="text" />
                <div>Search</div>
            </div>
        </div>
    )
};
export default Headerbar;