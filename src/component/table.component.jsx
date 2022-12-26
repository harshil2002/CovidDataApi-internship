import React from "react";

const Table = ({data}) => {
  return (
    <table style={{ marginTop: "10px" }} border="1">
      <tr>
        <td>NEW CASES</td>
        <td>{data.dailyconfirmed}</td>
      </tr>
      <tr>
        <td>NEW DEATHS</td>
        <td>{data.dailydeceased}</td>
      </tr>
    </table>
  );
};
 export default Table;