

import React from 'react'
import {
  Container,
  Row,
  Col
} from "reactstrap";
import Image from "next/image"
import Link from "next/link"
import logo from "../assets/images/footer-logo.png";
import { IoSearch } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SlSocialYoutube } from "react-icons/sl";
import { PiTiktokLogo } from "react-icons/pi";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col md={6} lg={3}>
            <Image src={logo} width="auto" className='img-fluid logo' height="auto" alt="" />
            <p>BFY is a modern beauty brand dedicated to cruelty-free, paraben-free, and vegan standards. They provide affordable, high-quality products aligned with current beauty trends.</p>
            <ul className='footer-social'>
            <li><FaFacebookF /></li>
            <li><FaInstagram /></li>
            <li><FaXTwitter /></li>
            <li><PiTiktokLogo /></li>
            <li><SlSocialYoutube /></li>
            <li><CiLinkedin /></li>
          </ul>
          </Col>
          <Col md={6} lg={3}>
            <h2 className='title'>Quick Links</h2>
            <ul>
              <li><Link href="">My Account</Link></li>
              <li><Link href="">Shopping Cart</Link></li>
              <li><Link href="">Wishlist</Link></li>
              <li><Link href="">Contact Us</Link></li>
            </ul>
          </Col>
          <Col md={6} lg={3}>
            <h2 className='title'>Others</h2>
            <ul>
              <li><Link href="">Our Founder</Link></li>
              <li><Link href="">About Us</Link></li>
              <li><Link href="">Wishlist</Link></li>
              <li><Link href="">Privacy Policy</Link></li>
            </ul>
          </Col>
          <Col md={6} lg={3}>
            <h2 className='title'>Subscribe & Save 15%</h2>
            <p>Plus exclusive updates and offers straight to your inbox</p>
            <div className='newsletter'>
              <input type='text' name='' placeholder='EMAIL ADDRESS' />
              <button>SUBSCRIBE</button>
            </div>
          </Col>
        </Row>
      </Container>
      <div className='divider'></div>
      <Container>
        <p className='copy'><span>©️ 2024</span> BFY Cosmetics. All Rights Reserved.️</p>
      </Container>
    </footer>
  )
}

export default Footer