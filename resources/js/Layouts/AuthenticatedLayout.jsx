import React from 'react';
import {Head} from '@inertiajs/react';
import MainNavigation from "@/Components/Layouts/MainNavigation.jsx";
import Sidebar from "@/Components/Layouts/Sidebar.jsx";
import DashboardContext from "@/Components/Layouts/DashboardContext.js";

export default function Authenticated({ user, children }) {

    const data = {
        user: user
    }

    return (
        <DashboardContext.Provider value={data}>
            <div className="antialiased bg-gray-50">
                <Head title="Dashboard" />
                <MainNavigation />
                <Sidebar />
                <main className="p-2 md:ml-64 h-auto">
                    <div className="grid grid-cols-1 h-screen p-2">
                        {children}
                    </div>
                </main>
            </div>
        </DashboardContext.Provider>
    );
}

