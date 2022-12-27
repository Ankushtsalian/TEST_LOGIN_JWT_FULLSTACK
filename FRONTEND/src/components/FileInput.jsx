import axios from "axios";
import React, { useEffect, useState } from "react";
const imgUrl = "http://localhost:5000";
const url = "http://localhost:5000/api/v1/products";
const FileInput = () => {
  const [fileFormData, setFileFormData] = useState({
    name: "",
    price: "",
    image: "",
  });
  const [productList, setProducts] = useState([]);
  const { name, price, image } = fileFormData;
  let imageValue;

  const fetchProducts = async () => {
    try {
      const products = await axios.get(url);
      setProducts(products.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();

    return () => {
      console.log("done");
    };
  }, []);

  const handleFileInput = async (event) => {
    const imageFile = event.target.files[0];
    let formData = new FormData();
    formData = { ...formData, ["image"]: imageFile };
    // formData.append("image", imageFile);
    try {
      const {
        data: {
          image: { src },
        },
      } = await axios.post(`${url}/uploads`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      imageValue = src;
      alert(imageValue);
      setFileFormData((data) => ({ ...data, image: imageValue }));
    } catch (error) {
      imageValue = null;
      console.log(error);
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFileFormData((data) => ({ ...data, [name]: value }));
  };
  const handleForm = async (event) => {
    event.preventDefault();
    try {
      await axios.post(url, fileFormData);
      alert("Image suceesfully Uploaded");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (e, id) => {
    e.preventDefault();
    try {
      const prod = await axios.delete(`${url}/${id}`);
      alert("Product Deleted");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="file-form-container">
        <form className="login-form">
          <div className="textbox">
            <input
              className="input"
              type="text"
              required
              name="name"
              onChange={handleInput}
            />
            <label>Name</label>
          </div>
          <div className="textbox">
            <input
              className="input"
              type="text"
              required
              name="price"
              onChange={handleInput}
            />
            <label>price</label>
          </div>
          <div className="textbox">
            <input
              className="input"
              type="file"
              required
              name="image"
              onChange={handleFileInput}
            />
            <label>Image</label>
          </div>

          <button
            className="control"
            type="button"
            //   disabled={!loginUsername || !loginPassword}
            onClick={handleForm}
          >
            Submit
          </button>
        </form>
      </div>
      <div className="product-img-container">
        {productList.map((product) => {
          const { name, price, image, _id } = product;
          return (
            <div key={_id} className="product-container">
              <p>name: {name}</p>
              <p>price: {price}</p>
              {/* <p>Image: {image}</p> */}
              {/* <img className="product-img" src={`${imgUrl + image}`} /> */}
              <img className="product-img" src={image} />
              <button
                className="control "
                onClick={(e) => handleDelete(e, _id)}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FileInput;
