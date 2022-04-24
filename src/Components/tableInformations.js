import React from "react";

const UserDetails = ({ user }) => (
  <tr key={user.id}>
    <td>{user.id}</td>
    <td>{user.name}</td>
    <td>{user.username}</td>
    <td>{user.website}</td>
    <td>{user.email}</td>
    <td>{user.address.city}</td>
  </tr>
);

export default UserDetails;
