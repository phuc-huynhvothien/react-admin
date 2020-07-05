import React, { useState, useEffect } from 'react';
import Icons from './service/icons';
import axios from 'axios';
import Pagination from './BootrapsComponents/Pagination';
import {useParams,useLocation} from "react-router-dom";
function About({match}) {
  const [loading, setLoading] = useState(false);
  const [rows, setRows] = useState(null);
  const [total, setTotal] = useState(0);
  const [perPage, setPerpage] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  let urlSearch = new URLSearchParams(useLocation().search);
  async function getList(page = 1) {
    try {
      setLoading(false);
      const response = await axios.get('/customers', {
        params: {
          page: page
        }
      });
      let data = response.data;
      setTotal(data.total);
      setPerpage(data.per_page);
      setCurrentPage(data.current_page);
      setTotalPage(data.last_page);
      let dataRow = response.data.data;
      setRows(dataRow);
    } catch (error) {
      console.log(error);

    }

  }
  function onChangePage(page) {
    getList(page);
  }

  
  useEffect(() => {
    getList(urlSearch.get("page"));
  }, []);
  return (
    <>
    <h1>ABOUT</h1>
      <div className="container-body container-scroll pd-20">
        <div className="table-responsive">
          <table className="table han-table">
            <thead>
              <tr>
                <th align={`left`} className="pd-l-10" scope="col">First Name </th>
                <th scope="col" className="text-center">Last Name</th>
                <th scope="col" className="text-center">Email</th>
                <th scope="col" className="text-center">Create</th>
                <th scope="col" className="text-center">Update</th>
                <th scope="col" className="text-center">Option</th>
              </tr>
            </thead>
            <tbody>
              {
                loading
                  ?
                  <tr className="text-center">
                    <td colSpan={6}>
                      <h2>EMPTY</h2>
                    </td>
                  </tr>
                  :
                  rows && rows.length > 0 && rows.map((row, index) => {
                    return (
                      <tr key={index} className="text-center">
                        <td>{row.first_name}</td>
                        <td>{row.last_name}</td>
                        <td>{row.email}</td>
                        <td>{row.created_at ? row.created_at : " --"}</td>
                        <td className="text-right">
                        </td>
                        <td>{"--"}</td>
                      </tr>
                    )
                  })
              }
            </tbody>
          </table>
        </div>
        <Pagination
          total={total}
          pageSize={perPage}
          initialPage={currentPage}
          currentPage={currentPage}
          numberOfItemDisplay={3}
          totalPage={totalPage}
          onChangePage={onChangePage}
          numberOfItemDisplayCenter={2}
        />
      </div>

    </>
  );
}
export default About;
