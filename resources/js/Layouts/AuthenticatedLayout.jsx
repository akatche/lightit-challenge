import React from 'react';
import {Head} from '@inertiajs/react';
import MainNavigation from "@/Layouts/Dashboard/MainNavigation.jsx";
import Sidebar from "@/Layouts/Dashboard/Sidebar.jsx";
import DashboardContext from "@/Layouts/Dashboard/DashboardContext.js";

export default function Authenticated({ user, header, children }) {

    const data = {
        user: user
    }

    return (
        <DashboardContext.Provider value={data}>
            <div className="antialiased bg-gray-50 dark:bg-gray-900">
                <Head title="Dashboard" />
                <MainNavigation />
                <Sidebar />
                <main className="p-4 md:ml-64 h-auto pt-20">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                        {children}
                    </div>
                </main>
            </div>
        </DashboardContext.Provider>
    );
}

