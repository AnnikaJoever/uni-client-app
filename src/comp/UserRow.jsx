/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import DeleteModal from './DeleteModal';
import EditModal from './EditModal';

const UserRow = (props) => {
    const {
        fullName,
        userName,
        comments,
        rights,
        status,
    } = props;

    return (
        <tr className="text-gray-700">
            <td className="break-all table-data text-left">{ fullName }</td>
            <td className="table-data">{ userName }</td>
            <td className="table-data">{ comments }</td>
            <td className="table-data">{ rights }</td>
            <td className="table-data">{ status }</td>
            <td>
                <EditModal />
            </td>
            <td>
                <DeleteModal />
            </td>
        </tr>
    );
};

UserRow.propTypes = {
    fullName: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    comments: PropTypes.string.isRequired,
    rights: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
};

export default UserRow;
