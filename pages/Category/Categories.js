import GetAllCategories from "components/api/GetAllCategories";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { host } from "static";

const Categories = () => {
  const router = useRouter();
  const [categoryData, setCategoryData] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [errorState, setErrorState] = useState("");

  useEffect(() => {
    GetAllCategories({ setCategoryData, setIsloading, setErrorState });
  }, []);

  return (
    <div className="container container-fluid">
      <span className="auto-container text-heading">OUR COLLECTIONS</span>
      {isLoading === true ? (
        <span className="auto-container">
          {errorState !== "" ? errorState : "Wait Getting Data For You."}
        </span>
      ) : (
        <div className="auto-container">
          {categoryData.slice(0, 5).map((item, index) => {
            return (
              <Link
                className="category-div"
                href={{ pathname: `/shop`, query: { cd: item.CategoryID } }}
              >
                <div className="image-div">
                  {/* <img src="https://publish.purewow.net/wp-content/uploads/sites/2/2021/02/types-of-oranges-cat.jpg?fit=728%2C524" /> */}
                  <img
                    src={`${host}resources/${item.catImage}`}
                    class="image"
                  />
                </div>
                <span>{item.CategoryName}</span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Categories;
