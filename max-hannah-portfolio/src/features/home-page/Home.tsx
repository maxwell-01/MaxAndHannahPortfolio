import React from "react";
import {Link} from "react-router-dom";

export const Home = () => {
    return (
        <div>
            <div>
                Placeholder for the homepage
            </div>
            <div>
                Click <Link to={"/about"}>here</Link> to go to the about page
            </div>
            <div>
                first example project page: <Link to={"/projects/firstExampleProject"}>First Example Project</Link>
            </div>
        </div>
    );
}