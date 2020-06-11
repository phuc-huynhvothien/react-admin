import React, { Component } from 'react';
import axios from 'axios';
import CustomerList from './Customer/CustomerList';
import Loader from './Loader/Loader'
class Home extends Component {
  state = {
    customers: [],
    url: "http://127.0.0.1:8000/api/customers",
    loading: false
  };

  getList = async () => {
    this.setState({ loading: true });
    const customers = await axios.get(this.state.url);
    this.setState({ customers: customers.data, loading: false });
  }
  deleteCustomer = async (id) => {
    this.setState({ loading: true });
    await axios.delete(this.state.url+ "/" + id).catch(e => {
      alert(e.response.status === 404 ? "Customer not found":"");
    }
    );
    this.setState({ loading: false });
    this.getList();
  }
  componentDidMount() {
    this.getList();
  };
  onDelete = (id) =>{
     this.deleteCustomer(id);
  }
  render() {
    return (
      <div className="ui main container">
        {/* <MyForm /> */}
        {this.state.loading ? <Loader /> : ""}
        <CustomerList customers={this.state.customers} onDelete={this.onDelete} />
      </div>

    )
  }
}

export default Home;
