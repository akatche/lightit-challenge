import React from 'react';
import PropTypes from 'prop-types';
import HistoricTable from "@/Features/Dashboard/PreviousDiagnosis/HistoricTable.jsx";

const PreviousDiagnosis = ({historicData}) => {
    return (
        <div>
            <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
                Previous <span className="underline underline-offset-3 decoration-8 decoration-blue-400">diagnoses</span>
            </h1>
            <HistoricTable tableData={historicData} />
        </div>
    );
}

PreviousDiagnosis.propTypes = {
    historicData: PropTypes.object
};

export default PreviousDiagnosis;
