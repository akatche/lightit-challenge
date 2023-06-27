import React, {useContext, useMemo} from 'react';
import DiagnosisCard from "@/Features/Dashboard/Diagnosis/Components/DiagnosisCard.jsx";
import DiagnosisContext from "@/Features/Dashboard/Diagnosis/DiagnosisContext.js";

const DiagnosisResults = () => {

    const { diagnoses,fetchingDiagnosis } = useContext(DiagnosisContext);

    const showDiagnoses = useMemo(() => {
        return diagnoses.length > 0 && !fetchingDiagnosis;
    }, [diagnoses, fetchingDiagnosis]);

    return (
        <>
            {
                showDiagnoses && diagnoses.map((diagnose,index)=>{
                    return <DiagnosisCard diagnose={diagnose} key={index} number={index + 1} />
                })
            }
        </>
    );
}

export default DiagnosisResults;
