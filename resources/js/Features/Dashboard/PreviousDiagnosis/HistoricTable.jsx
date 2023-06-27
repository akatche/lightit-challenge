import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'flowbite-react';
import TableRow from "@/Features/Dashboard/PreviousDiagnosis/Components/TableRow.jsx";

const HistoricTable = ({data}) => {
    return (
        <Table hoverable>
            <Table.Head>
                <Table.HeadCell>
                    Diagnose
                </Table.HeadCell>
                <Table.HeadCell>
                    Symptoms
                </Table.HeadCell>
                <Table.HeadCell>
                    Accuracy
                </Table.HeadCell>
                <Table.HeadCell>
                    Specialist
                </Table.HeadCell>
                <Table.HeadCell>
                  Correct
                </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
                {
                    data.map((info,index) => {
                        return <TableRow data={info} key={index} />
                    })
                }
            </Table.Body>
        </Table>
    );
}

HistoricTable.propTypes = {
    data: PropTypes.array
};

export default HistoricTable;
