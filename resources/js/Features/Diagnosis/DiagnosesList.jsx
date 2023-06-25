import React, {useContext} from 'react';
import Skeleton from "@/Features/Diagnosis/Components/Skeleton.jsx";
import { Alert } from 'flowbite-react';
import DiagnosisContext from "@/Features/Diagnosis/DiagnosisContext.js";
import DiagnosisResults from "@/Features/Diagnosis/Components/DiagnosisResults.jsx";

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
            <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
                <DiagnosisResults />
                <Skeleton />
            </div>
        </div>
    );
}

export default DiagnosesList;
