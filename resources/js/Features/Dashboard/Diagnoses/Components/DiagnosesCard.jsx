import React from 'react';
import PropTypes from 'prop-types';
import CardFooter from "@/Features/Dashboard/Diagnoses/Components/Card/CardFooter.jsx";
import CardBody from "@/Features/Dashboard/Diagnoses/Components/Card/CardBody.jsx";

const DiagnosesCard = ({diagnose,number}) => {
    return (
        <div className="grow-0 basis-1/3 p-4 bg-white border border-teal-300 rounded-lg shadow flex flex-col flex-1">
            <CardBody diagnose={diagnose} number={number} />
            <CardFooter diagnose={diagnose} />
        </div>
    );
}

DiagnosesCard.propTypes = {
    diagnose: PropTypes.object,
    number: PropTypes.number
};

export default DiagnosesCard;
