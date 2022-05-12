import { Form, Button, Col, Row,Table } from "react-bootstrap";
import { useState } from 'react';

export default function AddProduct() {
    //typeOfData [stateData, stateUpdateFunction] =useState(initialData)
  let initialValue = [];
  const [products, setProduct] = useState(initialValue);
  
    //addprodut handler method
    const add = (event) => {
        event.preventDefault();
       //console.log(event.target.product_name.value);
        const formData = event.target;
        const newProduct = {
            product_name: formData.product_name.value,
            price: formData.price.value,
            Qty: formData.Qty.value,
        }
        //console.log(newProduct);
      //add a new product inside product array
      setProduct([...products,newProduct]);
      //console.log(products);
    }

    return (
      <div>
        <Form onSubmit={add}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridProductName">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Product name"
                name="product_name"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPrice">
              <Form.Label>Price:</Form.Label>
              <Form.Control
                type="number"
                placeholder="Price in cedis"
                name="Price"
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridQty">
              <Form.Label>Quantity:</Form.Label>
              <Form.Control type="number" placeholder="How many" name="Qty" />
            </Form.Group>
          </Row>

          

          <Button variant="primary" type="submit" action="submit">
            Add to list
          </Button>
        </Form>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Index</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Qty</th>
            </tr>
          </thead>
          <tbody>
            {
              products.map((item, index) => {
                 <tr>
                   <td>{index}</td>
                   <td>{item.product_name}</td>
                   <td>{item.price}</td>
                   <td>{item.qty}</td>
                 </tr>
           
              })
           }
          </tbody>
        </Table>
      </div>
    );
}