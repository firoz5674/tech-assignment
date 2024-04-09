

import React from 'react'
import starBlack from "../../assets/images/star-black.png"
import Image from "next/image"
import { ratingSnapshot } from '@/app/data'

const RatingSnapshot = () => {
  return (
    <div className='rating-snapshot'>
      <div className='rating-snapshot__header'>
        <p className='mb-0'>Rating Snaphost</p>
        <button className='review-btn'>Write a Review</button>
      </div>
      <div className='rating-snapshot__data'>
        <div className='left'>
          {ratingSnapshot.map((item) => {
            return (
              <div className='rating-wrap' key={item}>
                <p className='mb-0'>5</p>
                <Image src={starBlack} width="auto" className='img-fluid star' height="auto" alt="" />
                <div className='rating'>
                  <div className='progress'></div>
                </div>
                <p className='mb-0'>{item.reviews}</p>
              </div>
            )
          })}
        </div>
        <div className='right'>
          <div className='quality'>
            <p className='mb-0 me-4'>Quality of Product</p>
            <div className='qty-progress'>
              <div className='progress'></div>
              <div className='progress'></div>
              <div className='progress'></div>
              <div className='progress'></div>
            </div>
          </div>
          <div className='quality'>
            <p className='mb-0 me-4'>Value of Product</p>
            <div className='qty-progress'>
              <div className='progress'></div>
              <div className='progress'></div>
              <div className='progress'></div>
              <div className='progress'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RatingSnapshot