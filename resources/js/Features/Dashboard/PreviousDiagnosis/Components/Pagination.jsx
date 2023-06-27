import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({tableData}) => {
    return (
        <div className="flex flex-col items-center mt-4">
                <span className="text-sm text-gray-700 dark:text-gray-400">
                    Showing <span className="font-semibold text-gray-900 dark:text-white">{tableData.from}</span> to <span
                    className="font-semibold text-gray-900 dark:text-white">{tableData.to}</span> of <span
                    className="font-semibold text-gray-900 dark:text-white">{tableData.total}</span> Entries
                </span>
            <div className="inline-flex mt-2 xs:mt-0">
                <a
                    href={tableData.prev_page_url}
                    className="px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    Prev
                </a>
                <a
                    href={tableData.next_page_url}
                    className="px-4 py-2 text-sm font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    Next
                </a>
            </div>
        </div>
    );
}

Pagination.propTypes = {
    tableData: PropTypes.object
};

export default Pagination;
