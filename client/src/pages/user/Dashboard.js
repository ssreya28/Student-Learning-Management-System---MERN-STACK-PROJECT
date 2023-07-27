import React from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import { useCart } from "../../context/cart";
import { useAuth } from "../../context/auth";
import "../../styles/Dashboard.css";

const PDF_FILE_URL = "https://mrcet.com/downloads/digital_notes/CSE/III%20Year/PYTHON%20PROGRAMMING%20NOTES.pdf";

const Dashboard = () => {
  const [auth] = useAuth();
  const [cart, setCart] = useCart();

  // Download file
  const downloadFileAtUrl = (url) => {
    window.open(url, "_blank");
  };

  // Remove item
  const removeCartItem = (pid) => {
    try {
      let myCart = [...cart];
      let index = myCart.findIndex((item) => item._id === pid);
      myCart.splice(index, 1);
      setCart(myCart);
      localStorage.setItem("cart", JSON.stringify(myCart));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout title={"Dashboard - SLMS App"}>
      <link rel="stylesheet" href="style.css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"/>
      <div class="container-dash">
    <div class = "navbar">
      <ul>
        <li><a href="#" class="logo">
        </a></li>
        
      </ul>
    </div>

    <section class="main">
      <div class="main-top">
        <h1>Skills</h1>
        <i class="fas fa-user-cog"></i>
      </div>
      <div class="main-skills">
        <div class="card">
          <div className="col-md-12">
            
            <div className="row">
            {cart?.map((p) => (
          <div className="col-md-4" key={p._id}>
            <div className="containerquizrep">
              <img
                src={`/api/v1/product/product-photo/${p._id}`}
                className="card-img-top"
                alt={p.name}
                width="100%"
                height={"130px"}
              />
            </div>
            <center>
            <button className="mb-5 me-4"
                  onClick={() => downloadFileAtUrl(PDF_FILE_URL)}
                >
                  Download
                </button>
                <button
                  onClick={() => removeCartItem(p._id)}
                >
                  Remove
                </button>
            </center>
                
            
          </div>
        ))}
            </div>
          </div>
        </div>
        
      </div>

      <section class="main-course">
        <h1>My courses</h1>
        <div class="course-box">
          <ul>
            <li class="active">In progress</li>
            <li>explore</li>
            <li>incoming</li>
            <li>finished</li>
          </ul>
          <div class="course">
            <div class="box">
              <h3>HTML</h3>
              <p>80% - progress</p>
              <button>continue</button>
              <i class="fab fa-html5 html"></i>
            </div>
            <div class="box">
              <h3>CSS</h3>
              <p>50% - progress</p>
              <button>continue</button>
              <i class="fab fa-css3-alt css"></i>
            </div>
            <div class="box">
              <h3>JavaScript</h3>
              <p>30% - progress</p>
              <button>continue</button>
              <i class="fab fa-js-square js"></i>
            </div>
          </div>
        </div>
      </section>
    </section>
  </div>
    </Layout>
  );
};

export default Dashboard;