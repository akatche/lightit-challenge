import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Button} from "flowbite-react";

const CardFooter = ({diagnose}) => {

    const [submitting,setSubmitting] = useState( false);

    const submit = (e,reply) => {
        e.preventDefault();

        setSubmitting(true);

        axios.patch(route('api.diagnoses.correct',{
            diagnose: diagnose.id
        }), {
            reply: reply
        }).then(res => {

        })
            .finally(() => {
                setSubmitting(false)
            })
    };

    return (
        <div
            className="border-t border-neutral-100 pt-2 mt-auto grid grid-cols-2 gap-4 place-content-between items-center">
            <p className={'text-sm'}>Correct diagnose?</p>
            <div className={"grid grid-cols-2 gap-4"}>
                <Button size={'xs'} onClick={e => submit(e,true)} disabled={submitting}>
                    Yes
                </Button>
                <Button size={'xs'} color={'failure'} onClick={e => submit(e,false)} disabled={submitting}>
                    No
                </Button>
            </div>
        </div>
    );
}

CardFooter.propTypes = {
    diagnose: PropTypes.object
};

export default CardFooter;
