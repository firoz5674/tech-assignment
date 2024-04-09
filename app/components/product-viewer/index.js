

import React from 'react'
import Image from "next/image"
import logo from "../../assets/images/logo.png"
import img1 from "../../assets/images/product-small1.png"
import img2 from "../../assets/images/product-small2.png"
import img3 from "../../assets/images/product-small3.png"
import imgBig from "../../assets/images/product-big.png"

const ProductViewer = () => {
  return (
    <div className='product-viewer'>
      <div className='images'>
        <ul>
          <li>
            <Image src={img1} width="auto" className='img-fluid' height="auto" alt="" />
          </li>
          <li>
            <Image src={img2} width="auto" className='img-fluid' height="auto" alt="" />
          </li>
          <li>
            <Image src={img3} width="auto" className='img-fluid' height="auto" alt="" />
          </li>
          <li>
            <Image src={img3} width="auto" className='img-fluid' height="auto" alt="" />
          </li>
        </ul>
      </div>
      <div className='big-image'>
        <Image src={imgBig} width="auto" className='img-fluid' height="auto" alt="" /> 
      </div>
    </div>
  )
}

export default ProductViewer