import React, {useEffect, useState} from 'react';
import Symptoms from "@/Features/Dashboard/Diagnoses/Symptoms.jsx";
import DiagnosesList from "@/Features/Dashboard/Diagnoses/DiagnosesList.jsx";
import DiagnosesContext from "@/Features/Dashboard/Diagnoses/DiagnosesContext.js";

export default function Diagnoses() {

    const [diagnoses,setDiagnoses] = useState( []);
    const [fetchingDiagnosis,setFetchingDiagnosis] = useState( false);
    const [noResults,setNoResults] = useState( false);

    useEffect(() => {
        if(fetchingDiagnosis){
            setDiagnoses([]);
        }
    }, [fetchingDiagnosis]);

    const updateDiagnosis = (id,data) => {
        const newDiagnoses = diagnoses.map(diagnose => {
            if(diagnose.id===data.id){
                return data;
            }
            return diagnose;
        });

        setDiagnoses(newDiagnoses);
    }

    const data = {
        diagnoses,
        setDiagnoses,
        fetchingDiagnosis,
        setFetchingDiagnosis,
        noResults,
        setNoResults,
        updateDiagnosis
    }

    return (
        <DiagnosesContext.Provider value={data}>
            <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
                Find your <span className="underline underline-offset-3 decoration-8 decoration-blue-400">diagnose</span>
            </h1>
            <div className="grid">
                <Symptoms />
                <DiagnosesList />
            </div>
        </DiagnosesContext.Provider>
    );
};

