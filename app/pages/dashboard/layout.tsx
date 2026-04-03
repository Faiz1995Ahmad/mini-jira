"use client"
import { redirect } from "next/navigation";
import { useState } from "react";


export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = useState(true);
    return (
        <div className="h-full">
            <div className="flex gap-2  bg-red-500 text-pink-200 h-1/14">
                <button className="bg-blue-500 rounded-sm p-1 cursor-pointer" onClick={() => {
                    // redirect("/pages/dashboard")
                    setOpen((temp) => !temp)
                }}>Menu</button>
                <span>  JIRA mini</span>
            </div>
            <div className="flex bg-gray-600 h-13/14 gap-4">
                {/* Side Bar */}
                {
                    open &&
                    <div className="flex items-center justify-center bg-yellow-300 w-1/5 ">
                        <div className="flex flex-col p-2 h-9/10 w-9/10 gap-4  bg-yellow-600">
                            <button className="bg-blue-500 rounded-sm p-8 cursor-pointer" onClick={() => {
                                redirect("/pages/dashboard")
                            }}>Dashboard</button>
                            <button className="bg-blue-500 rounded-sm cursor-pointer p-8 mt-2" onClick={() => {
                                redirect("/pages/dashboard/projects")
                            }}>Projects</button>
                            <button className="bg-blue-500 rounded-sm cursor-pointer p-8" onClick={() => {
                                redirect("/pages/dashboard/employee")
                            }}>Employee</button>
                        </div>
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