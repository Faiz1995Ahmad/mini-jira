"use client"
import { redirect } from "next/navigation";
import { useState } from "react";
import ProfilePopover from "./projects/ProfilePopover";


export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="h-full">
            <div className="flex items-center justify-between gap-2  bg-red-500 text-pink-200 md:h-1/14 h-1/14 p-4">
                <button className="bg-gray-800 rounded-sm px-3 py-1 cursor-pointer hidden md:block" onClick={() => {
                    setOpen((temp) => !temp)
                }}>Menu</button>
                <ProfilePopover />
                {/* <select className="text-black md:hidden p-2">
                    <option>Dashboard</option>
                    <option>Project</option>
                    <option>Employee</option>
                </select> */}
                <span className="pr-2 text-2xl">  JIRA mini</span>
            </div>
            <div className="flex bg-gray-600 h-13/14">
                {/* Side Bar */}
                {
                    open &&
                    <div className="flex flex-col gap-8 items-center pt-8 w-1/5 ">
                        {/* <div className="flex flex-col w-full h-full pt-2 gap-4 bg-amber-300"> */}
                        {/* </div> */}
                        <button className="w-full  text-white cursor-pointer py-1 hover:bg-blue-500" onClick={() => {
                            redirect("/pages/dashboard")
                        }}>Dashboard</button>
                        <button className="w-full  text-white cursor-pointer py-1 hover:bg-blue-500" onClick={() => {
                            redirect("/pages/dashboard/projects")
                        }}>Projects</button>
                        <button className="w-full  text-white cursor-pointer py-1 hover:bg-blue-500" onClick={() => {
                            redirect("/pages/dashboard/employee")
                        }}>Employee</button>
                    </div>
                }
                {/* Content Area */}
                <div className="w-full bg-pink-300">
                    {children}
                </div>
            </div>
        </div>
    )
}