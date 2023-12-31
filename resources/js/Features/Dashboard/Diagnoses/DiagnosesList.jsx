import React, {useContext} from 'react';
import Skeleton from "@/Features/Dashboard/Diagnoses/Components/Skeleton.jsx";
import { Alert } from 'flowbite-react';
import DiagnosisContext from "@/Features/Dashboard/Diagnoses/DiagnosesContext.js";
import DiagnosesResults from "@/Features/Dashboard/Diagnoses/Components/DiagnosesResults.jsx";

const DiagnosesList = () => {

    const { noResults } = useContext(DiagnosisContext);

    return (
        <div
            className="p-4">
            <h2 className="text-2xl font-bold border-b border-gray-300 pb-2 mb-2">See possible diagnoses</h2>
            {
                noResults && <Alert color="failure">
                    <span>
                    <p>No diagnosis has been found for the provided symptoms</p>
                    </span>
                </Alert>
            }
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <DiagnosesResults />
                <Skeleton />
            </div>
        </div>
    );
}

export default DiagnosesList;
