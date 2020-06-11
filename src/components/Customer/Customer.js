import React from 'react';

function Customer(props) {
    const { customer,onDelete } = props;
    function handleClick(){
        // this.props.onDelete(customer.email);
        onDelete(customer.id);
    }
    return (
        <tr>
            <th>{customer.first_name}</th>
            <th>{customer.last_name}</th>
            <th>{customer.email}</th>
            <th>
                <button className="btn btn-info">Edit</button>
                <button className="btn btn-danger" onClick={handleClick}>Delete</button>
            </th>
        </tr>
    );
}
export default Customer;