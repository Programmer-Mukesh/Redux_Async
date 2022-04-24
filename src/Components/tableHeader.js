import React from "react";

const TableHeader = ({item}) => (
  <tr>
    {item.map((x, index) => (
      <th key={index}>{x} </th>
    ))}
    ;
  </tr>
);

export default TableHeader;
