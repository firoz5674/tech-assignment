

import React from 'react'
import {
  Row,
  Col
} from 'reactstrap';
import Image from "next/image"
import ProductDetailBreadcrumb from '../product-detail-breadcrumb';
import ProductViewer from '../product-viewer';
import ProductInfo from '../product-info';

const ProductDetail = () => {
  return (
    <section className='product-detail'>
      <ProductDetailBreadcrumb />
      <Row>
        <Col md={12} lg={6} l={6}>
          <ProductViewer />
        </Col>
        <Col md={12} lg={6} l={6}>
          <ProductInfo />
        </Col>
      </Row>
    </section>
  )
}

export default ProductDetail