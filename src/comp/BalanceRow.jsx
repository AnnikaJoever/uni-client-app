/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';

const BalanceRow = (props) => {
    const {
        name,
        code,
        color,
        prize,
        storage,
        ordered,
        sold,
    } = props;

    return (
        <tr className="text-gray-700">
            <td className="break-all table-data text-left">{ name }</td>
            <td className="table-data">{ code }</td>
            <td className="table-data">{ color }</td>
            <td className="table-data">{ prize }</td>
            <td className="table-data">{ storage }</td>
            <td className="table-data">{ ordered }</td>
            <td className="table-data">{ sold }</td>
        </tr>
    );
};

BalanceRow.propTypes = {
    name: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    color: PropTypes.string,
    prize: PropTypes.number,
    storage: PropTypes.number,
    ordered: PropTypes.number,
    sold: PropTypes.number,
};

export default BalanceRow;
