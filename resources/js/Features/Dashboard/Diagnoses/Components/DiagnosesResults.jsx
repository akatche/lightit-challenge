import React, {useContext, useMemo} from 'react';
import DiagnosesCard from "@/Features/Dashboard/Diagnoses/Components/DiagnosesCard.jsx";
import DiagnosisContext from "@/Features/Dashboard/Diagnoses/DiagnosesContext.js";

const DiagnosesResults = () => {

    const { diagnoses,fetchingDiagnosis } = useContext(DiagnosisContext);

    const showDiagnoses = useMemo(() => {
        return diagnoses.length > 0 && !fetchingDiagnosis;
    }, [diagnoses, fetchingDiagnosis]);

    return (
        <>
            {
                showDiagnoses && diagnoses.map((diagnose,index)=>{
                    return <DiagnosesCard diagnose={diagnose} key={index} number={index + 1} />
                })
            }
        </>
    );
}

export default DiagnosesResults;
