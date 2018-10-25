import React from "react"
import {Link}from "react-router-dom"
const DashBoard = () => {
    return (
        <div>
            <div className="fixed-action-btn">
                <Link className="btn-floating btn-large red " to="/survey/new">
                <i className="material-icons">add</i>
                </Link></div>
            DashBoard</div>
    )
}
export default DashBoard