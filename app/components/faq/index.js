

import React from 'react'
import Image from "next/image"
import Link from "next/link"
import circle from "../../assets/images/circle.png"
import user from "../../assets/images/user-circle.png"
import like from "../../assets/images/thumbs-up.png"
import dislike from "../../assets/images/thumbs-down.png"


const Faq = () => {
  return (
    <>
      <div>
        <h2 className='que'><strong>Ques:</strong>  Can this palette be used for both daytime and evening looks?</h2>
        <div className='user'>
          <Image src={user} width="auto" className='img-fluid' height="auto" alt="" />
          <span>Freda Legros  <Image src={circle} style={{marginLeft: '10px'}} width="auto" className='img-fluid' height="auto" alt="" />   <span>2 Days Ago</span></span>
        </div>
        <p>2 Answers</p>
        <p className='answer'><strong>Ans:</strong> Absolutely! This terracotta palette is versatile enough to create a wide range of looks, from natural daytime vibes to sultry evening glam. You can play with different combinations of shades to achieve your desired look, whether its a soft, bronzy glow for the daytime or a smoky, terracotta-inspired look for a night out.</p>
        <div className='view-others'>
          <Link href="">View other answers</Link>
          <div className='d-block d-lg-flex'>
            <p className='me-3 mt-3 mt-md-0'><strong>Helpful?</strong> </p>
            <div className='button active'>
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
        <div className='divider'></div>
      </div>
      <div>
        <h2 className='que'><strong>Ques:</strong>  Can this palette be used for both daytime and evening looks?</h2>
        <div className='user'>
          <Image src={user} width="auto" className='img-fluid' height="auto" alt="" />
          <span>Freda Legros  <Image src={circle} style={{marginLeft: '10px'}} width="auto" className='img-fluid' height="auto" alt="" />   <span>2 Days Ago</span></span>
        </div>
        <p>2 Answers</p>
        <p className='answer'><strong>Ans:</strong> Absolutely! This terracotta palette is versatile enough to create a wide range of looks, from natural daytime vibes to sultry evening glam. You can play with different combinations of shades to achieve your desired look, whether its a soft, bronzy glow for the daytime or a smoky, terracotta-inspired look for a night out.</p>
        <div className='view-others'>
          <Link href="">View other answers</Link>
          <div className='d-block d-lg-flex'>
            <p className='me-3 mt-3 mt-md-0'><strong>Helpful?</strong> </p>
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
        <div className='divider'></div>
      </div>
      <div>
        <h2 className='que'><strong>Ques:</strong>  Can this palette be used for both daytime and evening looks?</h2>
        <div className='user'>
          <Image src={user} width="auto" className='img-fluid' height="auto" alt="" />
          <span>Freda Legros  <Image src={circle} style={{marginLeft: '10px'}} width="auto" className='img-fluid' height="auto" alt="" />   <span>2 Days Ago</span></span>
        </div>
        <p>2 Answers</p>
        <p className='answer'><strong>Ans:</strong> Absolutely! This terracotta palette is versatile enough to create a wide range of looks, from natural daytime vibes to sultry evening glam. You can play with different combinations of shades to achieve your desired look, whether its a soft, bronzy glow for the daytime or a smoky, terracotta-inspired look for a night out.</p>
        <div className='view-others'>
          <Link href="">View other answers</Link>
          <div className='d-block d-lg-flex'>
            <p className='me-3 mt-3 mt-md-0'><strong>Helpful?</strong> </p>
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
        <div className='divider'></div>
      </div>
    </>
  )
}

export default Faq