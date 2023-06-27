import React from 'react';
import PropTypes from 'prop-types';
import {formatOrdinals} from "@/Components/Helpers/formatOrdinals.js";

const CardBody = ({diagnose,number}) => {

    const specialists = diagnose.specialists.join(', ');

    const accuracy = Math.round(diagnose.accuracy);

    return (
        <dl className="text-gray-900 mb-2">
            <div className="flex flex-col pb-2">
                <dt className="mb-1 text-gray-500 md:text-lg">{formatOrdinals(number)} Possible Diagnose</dt>
                <dd className="text-lg font-semibold">
                    {diagnose.name}
                    <div className="flex flex-col mt-1">
                        <div className="mb-1 text-gray-500 md:text-sm">Accuracy {accuracy}%</div>
                        <div className="text-lg font-semibold">
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div className="bg-teal-400 h-2.5 rounded-full" style={{width:`${accuracy}%`}}></div>
                            </div>
                        </div>
                    </div>
                </dd>
            </div>
            <div className="flex flex-col pt-3">
                <dt className="mb-1 text-gray-500 text-sm">Recommended Specialist</dt>
                <dd className="font-semibold text-sm">
                    { specialists }
                </dd>
            </div>
        </dl>
    );
}

CardBody.propTypes = {
    diagnose: PropTypes.object,
    number: PropTypes.number
};

export default CardBody;
