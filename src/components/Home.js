import React, { Component } from 'react';
import axios from 'axios';
import CustomerList from './Customer/CustomerList';
import Loader from './Loader/Loader'
class Home extends Component {
  state = {
    customers: [],
    url: "/customers",
    loading: false,
    error: false
  };

  getList = async () => {
    this.setState({ loading: true });
    axios.get(this.state.url).then(response => {
      this.setState({ customers: response.data, loading: false });
    }).catch(
      error => {
        console.log(error);
        this.setState({ error: true });
      }
    );

  }
  deleteCustomer = async (id) => {
    this.setState({ loading: true });
    await axios.delete("/" + id).catch(e => {
      alert(e.response.status === 404 ? "Customer not found" : "");
    }
    );
    this.setState({ loading: false });
    this.getList();
  }
  componentDidMount() {
    this.getList();
  };
  onDelete = (id) => {
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
