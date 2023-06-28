import React, {useContext, useEffect, useState} from 'react';
import { useForm } from '@inertiajs/react';
import InputError from "@/Components/Form/InputError.jsx";
import {Button} from "flowbite-react";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { Spinner } from 'flowbite-react';
import DiagnosisContext from "@/Features/Dashboard/Diagnoses/DiagnosesContext.js";

const Symptoms = () => {

    const { setDiagnoses,fetchingDiagnosis,setFetchingDiagnosis,setNoResults } = useContext(DiagnosisContext);
    const [symptoms,setSymptoms] = useState( []);
    const [loading,setLoading] = useState( true);
    const {
        data,
        setData,
        errors,
    } = useForm({
        symptoms: []
    });

    useEffect(() => {

        axios(route('api.symptoms'))
            .then(res => {
                setSymptoms(res.data.data)
            })
            .finally(() => {
                setLoading(false)
            })

    }, []);

    useEffect(() => {
        setDiagnoses([]);
        setNoResults(false);
    }, [data]);

    const submit = (e) => {
        e.preventDefault();

        setFetchingDiagnosis(true);

        axios.post(route('api.diagnoses'), data).then(res => {
            const results = res.data.data;

            if(results.length > 0){
                setDiagnoses(results)
            }else{
                setNoResults(true);
            }
        })
        .finally(() => {
            setFetchingDiagnosis(false)
        })
    };

    return (
        <div
            className="p-4 ">
            <h2 className="text-2xl font-bold border-b border-gray-300 pb-2 mb-4">Describe your symptoms</h2>
            <form className="space-y-4 md:space-y-6" onSubmit={submit}>
                <div>
                    <Autocomplete
                        multiple
                        id="symptoms-picker"
                        size="small"
                        options={symptoms}
                        getOptionLabel={(option) => option.name}
                        loading={loading}
                        renderOption={(props, option) => {
                            return (
                                <li {...props} key={option.id}>
                                    {option.name}
                                </li>
                            );
                        }}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                variant="standard"
                                label="Select"
                                placeholder="Symptoms"
                            />
                        )}
                        onChange={(_, newValue) => {
                            setData({
                                symptoms : newValue
                            });
                        }}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <Button type="submit" disabled={fetchingDiagnosis || data.symptoms.length === 0}>
                    {fetchingDiagnosis && <Spinner size={'md'} className={'mr-2'}/>}
                    Find Diagnose
                </Button>
            </form>
        </div>
    );
}

export default Symptoms;
