import React from "react";
import { Outlet } from "react-router-dom";

import { SideMenu } from "../components/Sidemenu";

function HomeScreen() {
    return (
        <div className="flex">
            <div className="w-60">
                <SideMenu />
            </div>
            <div className="w-full">
                <Outlet />
            </div>
        </div>
    );
}

export { HomeScreen };