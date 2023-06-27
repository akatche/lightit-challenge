import React from 'react';

const Sidebar = () => {
    return (
        <aside
            className="fixed top-0 left-0 z-40 w-64 h-screen pt-12 transition-transform -translate-x-full bg-teal-400 border-r border-gray-200 md:translate-x-0"
            aria-label="Sidenav"
            id="drawer-navigation"
        >
            <div className="overflow-y-auto py-5 px-3 h-full bg-teal-300 text-white">
                <ul className="space-y-2">
                    <li>
                        <a
                            href={route('dashboard')}
                            className="flex items-center p-2 text-base font-medium rounded-lg hover:bg-teal-400 group"
                        >
                            <svg className="w-[16px] h-[16px] text-gray-800 fill-white" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"
                            >
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                      strokeWidth="1" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                            <span className="ml-3">Diagnose Me</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href={route('historic')}
                            className="flex items-center p-2 text-base font-medium rounded-lg hover:bg-teal-400 group"
                        >
                            <svg className="w-[16px] h-[16px] text-gray-800 fill-white" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                      strokeWidth="1"
                                      d="M9 5h6M9 8h6m-6 3h6M4.996 5h.01m-.01 3h.01m-.01 3h.01M2 1h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Z"/>
                            </svg>
                            <span className="ml-3">Previous diagnoses</span>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    );
}

Sidebar.propTypes = {

};

export default Sidebar;
