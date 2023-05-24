import Link from "next/link";
import React from "react";

const BreadCrumbs = ({ route }) => {
  return (
    <section id="breadcrumb">
      <div>
        <span>
          Home
          {route.map((item, index) => {
            return (
              <Link href={item.href} class="crumbs">
                / {item.page}
              </Link>
            );
          })}
        </span>
      </div>
    </section>
  );
};

export default BreadCrumbs;
