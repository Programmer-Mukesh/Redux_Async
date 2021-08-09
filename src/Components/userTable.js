import React, { useEffect } from "react";
import { fetchUsers } from "../Action/actions";
import { connect } from "react-redux";
import "./component.css";
import { headerArray } from "./constant";
import TableHeader from "./tableHeader";
import UserDetails from "./tableInformations";

const UserTable = ({ fetchUsers, userData }) => {
  useEffect(() => {
    fetchUsers();
  }, []);

  return userData.loading ? (
    <h2>Loading...</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h2>User Data List</h2>
      <table className="table">
        <TableHeader item={headerArray} />
        {userData && userData.user.map((user) => <UserDetails user={user} />)}
      </table>
    </div>
  );
};

const mapStatetoProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};
export default connect(mapStatetoProps, mapDispatchtoProps)(UserTable);
