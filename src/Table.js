import React from 'react';
import classNames from 'classnames';

const Table = ({red,green,item}) => (
    <tr className={classNames({
        red:red,
        green:green
    })}>
        <td>{item.name}</td>
        <td>{item.roll}</td>
        <td>{item.marks}</td>
        <td>{item.status}</td>
    </tr>
);

export default Table;

