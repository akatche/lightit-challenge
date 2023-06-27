import React from 'react';
import PropTypes from 'prop-types';
import {Table} from "flowbite-react";
import CorrectDiagnoseButtons from "@/Features/Dashboard/Shared/CorrectDiagnoseButtons.jsx";

const TableRow = ({data}) => {

    const sypmtoms = data.search.symptoms.join(', ');

    const specialists = data.specialists.join(', ');

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
                {specialists}
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
