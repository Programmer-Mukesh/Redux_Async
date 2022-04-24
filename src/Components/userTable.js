import React, { useEffect } from "react";
import { fetchUsers } from "../Action/actions";
import { useSelector, useDispatch } from "react-redux";
import "./component.css";
import { headerArray } from "./constant";
import TableHeader from "./tableHeader";
import UserDetails from "./tableInformations";

const UserTable = () => {
  const dispatch = useDispatch();
  const userData = useSelector((store) => store.user);
  useEffect(() => {
    dispatch(fetchUsers());
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

export default UserTable;
