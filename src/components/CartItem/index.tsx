import React from "react";
import "./index.scss";

type Props = {
  props: any;
};

const index = ({ props }: Props) => {
  console.log(props);

  return (
    <div className="product-row">
      <h5>{props?.productId?.title}</h5>
      <p>{props?.productId?.price}</p>
      <p>{props?.quantity}</p>
      <h4>{props?.productId?.price * props?.quantity.toFixed(2)}</h4>
    </div>
  );
};

export default index;
