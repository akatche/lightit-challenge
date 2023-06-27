import React from 'react';
import PropTypes from 'prop-types';
import CardFooter from "@/Features/Dashboard/Diagnosis/Components/Card/CardFooter.jsx";
import CardBody from "@/Features/Dashboard/Diagnosis/Components/Card/CardBody.jsx";

const DiagnosisCard = ({diagnose,number}) => {
    return (
        <div className="grow-0 basis-1/3 p-4 bg-white border border-teal-300 rounded-lg shadow flex flex-col flex-1">
            <CardBody diagnose={diagnose} number={number} />
            <CardFooter diagnose={diagnose} />
        </div>
    );
}

DiagnosisCard.propTypes = {
    diagnose: PropTypes.object,
    number: PropTypes.number
};

export default DiagnosisCard;
