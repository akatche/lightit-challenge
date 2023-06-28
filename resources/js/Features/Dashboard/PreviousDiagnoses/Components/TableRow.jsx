import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Table} from "flowbite-react";
import CorrectDiagnoseButtons from "@/Features/Dashboard/Shared/CorrectDiagnoseButtons.jsx";
import DiagnoseCorrect from "@/Features/Dashboard/Shared/DiagnoseCorrect.jsx";

const TableRow = ({data}) => {

    const sypmtoms = data.search.symptoms.join(', ');

    const date = new Date(data.created_at);

    const formattedDate = date.toLocaleString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    });

    return (
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {data.name}
            </Table.Cell>
            <Table.Cell>
                {sypmtoms}
            </Table.Cell>
            <Table.Cell>
                {Math.round(data.accuracy)}%
            </Table.Cell>
            <Table.Cell>
                <ul>
                    {
                        data.specialists.map((specialist,index)=>{
                            return <li key={index}>{specialist}</li>
                        })
                    }
                </ul>
            </Table.Cell>
            <Table.Cell>
                <p className={''}>{formattedDate}</p>
            </Table.Cell>
            <Table.Cell>
                <DiagnoseCorrect diagnose={data} />
            </Table.Cell>
            <Table.Cell>
                <div className={"grid grid-cols-2 gap-4"}>
                    <CorrectDiagnoseButtons diagnose={data} />
                </div>
            </Table.Cell>
        </Table.Row>
    );
}

TableRow.propTypes = {
    data: PropTypes.object
};

export default TableRow;
