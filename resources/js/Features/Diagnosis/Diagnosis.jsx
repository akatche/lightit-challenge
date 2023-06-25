import React, {useEffect, useState} from 'react';
import Symptoms from "@/Features/Diagnosis/Symptoms.jsx";
import DiagnosesList from "@/Features/Diagnosis/DiagnosesList.jsx";
import DiagnosisContext from "@/Features/Diagnosis/DiagnosisContext.js";

export default function Diagnosis() {

    const [diagnoses,setDiagnoses] = useState( []);
    const [fetchingDiagnosis,setFetchingDiagnosis] = useState( false);
    const [noResults,setNoResults] = useState( false);

    useEffect(() => {
        if(fetchingDiagnosis){
            setDiagnoses([]);
        }
    }, [fetchingDiagnosis]);

    const data = {
        diagnoses,
        setDiagnoses,
        fetchingDiagnosis,
        setFetchingDiagnosis,
        noResults,
        setNoResults
    }

    return (
        <DiagnosisContext.Provider value={data}>
            <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
                Find your <span className="underline underline-offset-3 decoration-8 decoration-blue-400">diagnose</span>
            </h1>
            <div className="grid">
                <Symptoms />
                <DiagnosesList />
            </div>
        </DiagnosisContext.Provider>
    );
};

