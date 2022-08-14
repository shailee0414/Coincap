import react, { useState, useEffect } from "react";
import axios from "axios";
import "./List.css";

const List = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios.get("https://api.coincap.io/v2/assets").then((response) => {
      setList(response?.data?.data);
    });
  }, []);

  return (
    <table className="ui  table ">
      <thead>
        <tr>
          <th>Rank</th>
          <th>Name</th>
          <th className="right aligned">Price</th>
          <th className="right aligned">MarketCap</th>
          <th className="right aligned">VWap(24Hr)</th>
          <th className="right aligned">Supply</th>
          <th className="right aligned">Volume(24Hr)</th>
          <th className="right aligned">Changes(24Hr)</th>
        </tr>
      </thead>
    </table>
  );
};
export default List;
