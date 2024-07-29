import { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { MdMode,MdPictureAsPdf,MdDelete } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

import "./index.css";
let headers = ["#", "date", "description", "transaction-type", "balance"];
let baseUrl = "http://localhost:8000/transactions";
class Home extends Component {
  state = { usersData: [], userSearch: '' };

  componentDidMount() {
    axios.get(baseUrl).then((response) => {
      this.setState({ usersData: response.data });
    });
  }
  render() {
    const { usersData } = this.state;
    console.log(usersData);
    return (
      <div className="transactions-form-card">
        <div className="input-card">
          <div className="mk">
            <div className="input-section">
              <CiSearch className="serch-icon" />
              <input
                type="text"
                placeholder="Search users"
                className="inputEl"
              />
            </div>
            <button type="button" className="serch-btn">
              Search
            </button>
          </div>
          <Link to='/add'>
          <button type="button" className="adduser-btn">
              {" "}
              + Add New tranaction
            </button>
          </Link>

          
        </div>
        <div className="table-card table-responsive-sm">
          <table class="table table-hover">
            <thead className="bg-dry">
              <tr>
                {" "}
                {headers.map((head) => (
                  <th>{head}</th>
                ))}{" "}
              </tr>
            </thead>
            <tbody>
              {this.state.usersData.map((each, index) => (
                <tr className="s">
                  <th scope="row">{"#"}</th>
                  <td>{each.date}</td>
                  <td className="t">{each.description}</td>
                  <td>{each.transaction_type}</td>

                  <td>{each.balance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
      </div>
    );
  }
}
export default Home;
