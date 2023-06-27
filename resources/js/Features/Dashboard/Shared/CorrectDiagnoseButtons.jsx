import React, {useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import {Button} from "flowbite-react";

const CorrectDiagnoseButtons = ({diagnose}) => {

    const [submitting,setSubmitting] = useState( false);
    const [selected,setSelected] = useState( '');

    useEffect(() => {
        if(diagnose.created_at !== diagnose.updated_at){
            setSelected(diagnose.correct ? 'yes' : 'no' )
        }
    }, [diagnose]);


    const submit = (e,reply) => {
        e.preventDefault();

        setSubmitting(true);
        setSelected( reply ? 'yes' : 'no' )

        axios.patch(route('api.diagnoses.correct',{
            diagnose: diagnose.id
        }), {
            reply: reply
        }).finally(() => {
            setSubmitting(false)
        })
    };

    return (
        <>
            <Button size={'xs'} className={ selected === 'yes' || selected === '' ? 'opacity-100' : 'opacity-50' } onClick={e => submit(e,true)} disabled={submitting}>
                Yes
            </Button>
            <Button size={'xs'} color={'failure'} className={ selected === 'no' || selected === '' ? 'opacity-100' : 'opacity-50' } onClick={e => submit(e,false)} disabled={submitting}>
                No
            </Button>
        </>
    );
}

CorrectDiagnoseButtons.propTypes = {
    diagnose: PropTypes.object
};

export default CorrectDiagnoseButtons;
