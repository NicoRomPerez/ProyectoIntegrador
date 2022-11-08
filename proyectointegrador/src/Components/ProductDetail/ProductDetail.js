import React from "react";
import Header from "../Header/Header";
import DetailHeader from "../DetailHeader/DetailHeader";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";
import DetailAddress from "../DetailAddress/DetailAddress";

const ProductDetail = () => {
  return (
    <div>
      <Header className="header" />
      <DetailHeader />
      <DetailAddress />
      <Body className="body"></Body>
      <Footer className="footer"></Footer>
    </div>
  );
};

export default ProductDetail;
