import { forwardRef, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const SelectForm = forwardRef(({
                                   options = [],
                                   className = '',
                                   isFocused = false,
                                   defaultValue = '',
                                   ...props
                               }, ref
) => {
    const select = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            select.current.focus();
        }
    }, []);

    return (
        <select
            {...props}
            className={
                'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ' +
                className
            }
            ref={select}
        >
            <option selected>{defaultValue}</option>
            <>
                {
                    options.length > 0 && options.map(option => {
                        return <option value={option.id}>{option.value}</option>
                    })
                }
            </>
        </select>
    );
});

SelectForm.propType = {
    options: PropTypes.array.isRequired,
    className: PropTypes.string,
    isFocused: PropTypes.bool,
    defaultValue: PropTypes.string
};

export default SelectForm;
