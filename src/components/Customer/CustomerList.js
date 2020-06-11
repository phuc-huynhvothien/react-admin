import React from 'react';
import Customer from './Customer'

function CustomerList(props) {
    const customers = props.customers;
    function onDelete(id) {
        props.onDelete(id)
    }
    return (
        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Option</th>
                </tr>
            </thead>
            <tbody>
                {customers.map(customer => {
                    return <Customer customer={customer} key={customer.email} onDelete={onDelete} />
                }
                )}
            </tbody>
        </table>
    );
}
export default CustomerList;