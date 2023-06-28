import React, {useState} from 'react';
import PropTypes from 'prop-types';
import HistoricTable from "@/Features/Dashboard/PreviousDiagnoses/HistoricTable.jsx";
import DiagnosesContext from "@/Features/Dashboard/Diagnoses/DiagnosesContext.js";

const PreviousDiagnoses = ({historicData}) => {

    const [tableData,setTableData] = useState(historicData);

    const updateDiagnosis = (id,data) => {
        const newDiagnoses = tableData.data.map(diagnose => {
            if(diagnose.id===data.id){
                return {...diagnose,
                    correct:data.correct,
                    updated_at: data.updated_at
                };
            }
            return diagnose;
        });
        setTableData({...tableData,data:newDiagnoses});
    }

    const data = {
        updateDiagnosis
    }

    return (
        <DiagnosesContext.Provider value={data}>
            <div>
                <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
                    Previous <span className="underline underline-offset-3 decoration-8 decoration-blue-400">diagnoses</span>
                </h1>
                <HistoricTable tableData={tableData} />
            </div>
        </DiagnosesContext.Provider>
    );
}

PreviousDiagnoses.propTypes = {
    historicData: PropTypes.object
};

export default PreviousDiagnoses;
