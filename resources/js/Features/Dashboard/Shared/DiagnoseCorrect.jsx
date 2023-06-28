import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import CheckIcon from "@/Components/Icons/CheckIcon.jsx";
import NegativeIcon from "@/Components/Icons/NegativeIcon.jsx";

const DiagnoseCorrect = ({diagnose}) => {

    const [selected,setSelected] = useState( '');

    useEffect(() => {
        if(diagnose.created_at !== diagnose.updated_at){
            setSelected(diagnose.correct ? 'yes' : 'no' )
        }
    }, [diagnose]);

    return (
        <>
            {
                selected === 'yes' && <CheckIcon className={'w-6 h-6 stroke-cyan-500'} />
            }
            {
                selected === 'no' && <NegativeIcon className={'w-6 h-6 stroke-red-700'}/>
            }
        </>
    );
}

DiagnoseCorrect.propTypes = {
    diagnose: PropTypes.object
};

export default DiagnoseCorrect;
