import Link from "next/link";
import React from "react";

const HeaderBreadCrumbs = ({ title, root, home }) => {
  return (
    <div class="container breadcrumb">
      <Link href={root} className="breadcrumb-header">
        <span>{title}</span>
        <div className="hr-line"></div>
        <h6>Please fill all the required details to continue with booking.</h6>
      </Link>
    </div>
  );
};

export default HeaderBreadCrumbs;
