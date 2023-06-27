import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import PreviousDiagnosis from "@/Features/Dashboard/PreviousDiagnosis/PreviousDiagnosis.jsx";

export default function Dashboard({ auth, historicData }) {

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Historic</h2>}
        >
            <Head title="Previous diagnosis" />

            <div className="py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 h-full">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-4 drop-shadow-md h-full">
                        <PreviousDiagnosis historicData={historicData} />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
