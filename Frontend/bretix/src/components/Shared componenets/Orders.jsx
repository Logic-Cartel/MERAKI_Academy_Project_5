import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Orders() {
  const [is_deleted, setIs_deleted] = useState(false);
  const [token, setToken] = useState(null);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/cart/getCartWhereIsDeletedTrue`)
      .then((result) => {
        setToken(result.data.token);
        localStorage.setItem(result.data.token);
        setOrders(result.data.token);
        console.log(result.data.token);
        setIs_deleted(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return <div>{orders}</div>;
}

export default Orders;
