import React from "react";
import DesktopIcon from "../Components/Icons";
import NavigationBar from "../Components/Navbar"
import TaskBar from "../Components/TaskBar/TaskBar";
import UserListBox from "../Components/UsersList";
import { getUsers, User } from "@/utils/api-manager";


let icons = [
  {
    title: "Career",
    img_src: "https://i.pinimg.com/736x/08/68/f9/0868f96271fd81b7d86674085391db25.jpg",
  },
  {
    title: "Experience",
    img_src: "https://i.pinimg.com/1200x/05/2e/bd/052ebd7e9dcb06080b7cda54c06c1a9c.jpg",
  },
];

function UsersSetup(): Promise<User[]> {
  return  getUsers()
}

async function HomePage() {
    let full_icons: any = [];
    const current_users: User[] = await UsersSetup()

    icons.forEach((icon: { title: string; img_src: string }, _index: any) => {
        full_icons.push(
        <DesktopIcon title={icon.title} img_src={icon.img_src}></DesktopIcon> 
    );
    });
    return ( 
        <>
            <NavigationBar />
            <div className="row">
                <div className="column-main">
                    <div id="icons">{full_icons}</div>
                </div>
            </div>
            <UserListBox users_to_list = {current_users}></UserListBox>
            <TaskBar></TaskBar>
        </>
    )
};

export default HomePage