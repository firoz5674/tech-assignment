

import React from 'react'
import star from "../../assets/images/star2.png"
import like from "../../assets/images/thumbs-up.png"
import dislike from "../../assets/images/thumbs-down.png"
import Image from "next/image"
import Link from "next/link"
import { ratingCard } from '@/app/data'

const RatingCard = () => {
  return (
   <>
    {ratingCard.map((item) => {
      return (
        <div className='rating-card' key={item}>
          <div>
            <Image src={star} width="auto" className='img-fluid star' height="auto" alt="" />
            <Image src={star} width="auto" className='img-fluid star' height="auto" alt="" />
            <Image src={star} width="auto" className='img-fluid star' height="auto" alt="" />
            <Image src={star} width="auto" className='img-fluid star' height="auto" alt="" />
            <Image src={star} width="auto" className='img-fluid star' height="auto" alt="" />
            <h3 className='title'>{item.title}</h3>
            <div className='d-flex justify-content-between'>
              <p style={{fontSize: '13px'}}><i>Minnie Hoppe, US</i></p>
              <p style={{fontSize: '13px'}}><i>3 Days ago</i></p>
            </div>
            <p className='desc'>{item.desc}</p>
          </div>
          <div>
            <p>Helpful?</p>
            <div className='d-flex align-items-center'>
              <div className='button'>
                <Image src={like} width="auto" className='img-fluid star' height="auto" alt="" />
                <span className='span1'>YES</span>
                <span className='span2'>10</span>
              </div>
              <div className='button'>
                <Image src={dislike} width="auto" className='img-fluid star' height="auto" alt="" />
                <span className='span1'>YES</span>
                <span className='span2'>10</span>
              </div>
              <Link href="">Report</Link>
            </div>
          </div>
        </div>
      )
    })}
   </>
    
  )
}

export default RatingCard