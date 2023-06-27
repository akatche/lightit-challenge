import React from 'react';
import PropTypes from 'prop-types';
import CorrectDiagnoseButtons from "@/Features/Dashboard/Shared/CorrectDiagnoseButtons.jsx";

const CardFooter = ({diagnose}) => {
    return (
        <div
            className="border-t border-neutral-100 pt-2 mt-auto grid grid-cols-2 gap-4 place-content-between items-center">
            <p className={'text-sm'}>Correct diagnose?</p>
            <div className={"grid grid-cols-2 gap-4"}>
                <CorrectDiagnoseButtons diagnose={diagnose} />
            </div>
        </div>
    );
}

CardFooter.propTypes = {
    diagnose: PropTypes.object
};

export default CardFooter;
