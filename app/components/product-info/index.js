

import React from 'react'
import Image from "next/image"
import starIcon from "../../assets/images/star.png"
import halfStarIcon from "../../assets/images/star-half.png"
import wishlist from "../../assets/images/wish.png"
import cartIcon from "../../assets/images/cart.png"
import circle1 from "../../assets/images/Ellipse1.png"
import circle2 from "../../assets/images/Ellipse2.png"
import tag from "../../assets/images/tag.png"
import { FaShoppingCart } from "react-icons/fa";

const ProductInfo = () => {
  return (
    <div className='product-info'>
      <h2 className='product-info__title'>Baked Terracotta Palette</h2>
      <div className='product-info__rating'>
        <Image src={starIcon} width="auto" className='img-fluid' height="auto" alt="" />
        <Image src={starIcon} width="auto" className='img-fluid' height="auto" alt="" />
        <Image src={starIcon} width="auto" className='img-fluid' height="auto" alt="" />
        <Image src={starIcon} width="auto" className='img-fluid' height="auto" alt="" />
        <Image src={halfStarIcon} width="auto" className='img-fluid' height="auto" alt="" />
        <p>4.5(119 Reviews)</p>
      </div>
      <div className='price'>
        <p className='dis'>$12</p>
        <p className='full'>$20</p>
      </div>
      <p className='mt-2 mb-3'>Silky smooth baked highlighters, bronzers and blushes that are highly pigmented and buildable. Apply lightly for a subtle glow or build on the colors for a bolder look.</p>
      <p className='mb-5'><strong>CAUTION:</strong> If irritation occurs, discontinue use.</p>
      <p>Color : <i> Blonde </i></p>
      <div className='more-options'>
        <p className='qty'>Quantity: </p>
        <div className='inc-qty'>
          <button className="">-</button>
          <button className='value'>2</button>
          <button>+</button>
        </div>
        <button className='add-to-cart-btn'>
          <Image src={cartIcon} width="auto" className='img-fluid' height="auto" alt="" />ADD TO CART
        </button>
        <div className='wishlist'>
          <Image src={wishlist} width="auto" className='img-fluid' height="auto" alt="" />
        </div>
      </div>
      <div className='divider'></div>
      <div className='stock-info'>
        <div className='left'>
          <h6>Availability: </h6>
          <h6>Availability Color: </h6>
          <h6>Offers: </h6>
        </div>
        <div className='right'>
          <div className='d-flex'>
            <p className='mb-0'>In Stock</p>
          </div>
          <div className='d-flex'>
            <Image src={circle1} width="auto" className='img-fluid me-2' height="auto" alt="" />
            <Image src={circle2} width="auto" className='img-fluid' height="auto" alt="" />
          </div>
          <ul>
            <li><Image src={tag} width="auto" className='img-fluid' height="auto" alt="" />30-Day 100% Money Back Guarantee</li>
            <li><Image src={tag} width="auto" className='img-fluid' height="auto" alt="" />Free Shipping for Orders $40+</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ProductInfo