"use client"

import { redirect } from "next/navigation";



export default function LoginPage() {
    return (
        <main className="backdrop-blur-lg w-xs h-1/2 rounded-lg flex flex-col items-center
            justify-center gap-8"
        >
            <p className="text-2xl">Login</p>
            <input type="text" placeholder="e-mail" className="border-b-1 border-solid border-b-white-200 rounded-sm w-3/4 focus:outline-none focus:ring-2 focus:ring-blue-400 indent-4"></input>
            <input type="password" placeholder="password" className="border-b-1 border-b-white-200 rounded-sm w-3/4 focus:outline-none focus:ring-2 focus:ring-blue-400 indent-4"></input>
            <button className="bg-blue-500 rounded-sm cursor-pointer" style={{ padding: '2% 8%' }} onClick={() => {
                redirect("/pages/dashboard");
            }}>Login</button>
        </main>
    );
}
