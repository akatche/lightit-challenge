import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'flowbite-react';
import TableRow from "@/Features/Dashboard/PreviousDiagnoses/Components/TableRow.jsx";
import Pagination from "@/Features/Dashboard/PreviousDiagnoses/Components/Pagination.jsx";

const HistoricTable = ({tableData}) => {

    return (
        <div className="relative overflow-x-auto">
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
                        Date
                    </Table.HeadCell>
                    <Table.HeadCell>
                      Correct
                    </Table.HeadCell>
                    <Table.HeadCell>

                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {
                        tableData.data.map((info,index) => {
                            return <TableRow data={info} key={index} />
                        })
                    }
                </Table.Body>
            </Table>
            <Pagination tableData={tableData} />
        </div>
    );
}

HistoricTable.propTypes = {
    tableData: PropTypes.object
};

export default HistoricTable;
