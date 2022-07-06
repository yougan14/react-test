import React, { useEffect, useState } from "react";
import { Container, Card, Row, Col, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProductTask.module.css";
import axios from "axios";

const ProductTask = () => {
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState([]);
  useEffect(() => {
    getProduct();
    getCategory();
  }, []);

  const detailsChangeHandler = (event) => {
    getProductByCategory(event.target.value);
  };

  const getProductByCategory = (event) => {
    axios
      .get(`https://fakestoreapi.com/products/category/${event}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((err) => {});
  };

  const getProduct = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProduct(response.data);
      })
      .catch((err) => {});
  };
  const getCategory = () => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => {
        setCategory(response.data);
      })
      .catch((err) => {});
  };
  const filteredItem = (event) => {
    setProduct(
      product.filter((datas) => {
        return datas.price.toString().includes(event.target.value);
      })
    );
  };

  return (
    <div>
      <Container>
        <Card style={{ marginTop: "4%" }}>
          <Row style={{ marginTop: "2%" }}>
            <Form.Label>Refine your results</Form.Label>
            <label>
              Price from
              <Form.Control
                type=""
                placeholder="price"
                className="me-2"
                aria-label="Search"
                style={{ width: "50%" }}
                onChange={(event) => {
                  filteredItem(event);
                }}
              />
            </label>
            <Col md={5}>
              <Form.Select
                aria-label="Default select example"
                name="categoryname"
                onChange={detailsChangeHandler}
                style={{ width: "50%" }}
              >
                <option>Category</option>
                {category &&
                  category.length &&
                  category.map((value) => {
                    return (
                      <React.Fragment key={value}>
                        <option>{value}</option>
                      </React.Fragment>
                    );
                  })}
              </Form.Select>
            </Col>
          </Row>
          <Row style={{ marginTop: "2%" }}>
            {product?.map((products) => {
              return (
                <Col md={4} key={products.id}>
                  <div className="four wide column">
                    <div className="ui link cards">
                      <div className="card">
                        <div className="image">
                          <img
                            src={products && products.image}
                            alt="description"
                          />
                        </div>
                        <div className="content">
                          <div className="header">{products.title}</div>
                          <div className="meta price">$ {products.price}</div>
                          <div className="meta">{products.category}</div>
                          <div className="content">{products.description}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Card>
      </Container>
    </div>
  );
};
export default ProductTask;
