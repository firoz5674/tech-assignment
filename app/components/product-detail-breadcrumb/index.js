

import React from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
} from 'reactstrap';

const ProductDetailBreadcrumb = () => {
  return (
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="#">
            Home
          </a>
        </BreadcrumbItem>
        <BreadcrumbItem active>
          Library
        </BreadcrumbItem>
      </Breadcrumb>
  )
}

export default ProductDetailBreadcrumb