import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import Layout from "../components/Layout/Layout";
const Categories = () => {
  const categories = useCategory();
  return (
    <Layout>
      <div className="container" style={{ marginTop: "100px" }}>
        <div className="row container">
          {categories.map((c) => (
            <div className="col-md-4 mt-5 mb-3 gx-3 gy-3" key={c._id}>
              <div className="card">
                <Link to={`/category/${c.slug}`} className="btn cat-btn">
                  {c.name}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Box */}
        <div className="row container">
          <div className="col-md-4 mt-5 mb-3 gx-3 gy-3">
            <a href="https://www.interviewbit.com/" target="_blank" rel="noopener noreferrer" className="card">
              {/* Content of the additional box */}
              <h3>PLACEMENT PREP GUIDE</h3>
              <p>You can browse here</p>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Categories;