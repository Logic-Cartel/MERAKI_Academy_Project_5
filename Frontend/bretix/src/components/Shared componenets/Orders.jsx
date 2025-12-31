import axios from "axios";
import React, { useEffect, useState } from "react";

function Orders() {
  const [order, setOrder] = useState(false);
  const {userId}=
  useEffect(() => {
    axios
      .get(`http://localhost:5000/cart/getCartWhereIsDeletedTrue`)
      .then((result) => {
        setOrder(result.data);
        console.log(result.data);
      });
  }, []);
  return <div></div>;
}

export default Orders;
