import * as React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png"
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
} from "@material-tailwind/react";

export const NavBar = () => {

    return (
        <nav className="flex justify-between items-center pt-3 pb-6 bg-transparent relative shadow-sm ">
            <Link to="/">
                <div className="flex items-center px-4 md:px-12">

                    <img src={logo} alt="Logo" className="h-12 md:h-16" />
                </div>

            </Link>

            <div className="px-4 cursor-pointer md:hidden">
                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg> */}
                <Menu>
                    <MenuHandler>
                        <Button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /> </svg></Button>
                    </MenuHandler>
                    <MenuList>
                        <MenuItem>Menu Item 1</MenuItem>
                        <MenuItem>Menu Item 2</MenuItem>
                        <MenuItem>Menu Item 3</MenuItem>
                    </MenuList>
                </Menu>
            </div>

            <div className="hidden md:flex items-center pr-12 space-x-4">


                <Link to="/">
                    <Button className="p-4" type="button" color="white">
                        Menú
                    </Button>
                </Link>
            </div>
        </nav>
    )

};