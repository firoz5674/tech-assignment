"use client"
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  NavLink,
} from 'reactstrap';
import logo from "../assets/images/logo.png"
import Image from 'next/image'
import { IoSearch } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SlSocialYoutube } from "react-icons/sl";
import { PiTiktokLogo } from "react-icons/pi";
import { CiLinkedin } from "react-icons/ci";

function TopHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  

  const dropdownToggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className='top-header'>
      <Container>
      <Navbar expand="md">
        <div className='d-md-none d-block'>
          <Image src={logo} width="auto" className='logo' height="auto" alt="" />
        </div>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <ul className='top-social'>
            <li><FaFacebookF /></li>
            <li><FaInstagram /></li>
            <li><FaXTwitter /></li>
            <li><PiTiktokLogo /></li>
            <li><SlSocialYoutube /></li>
            <li><CiLinkedin /></li>
          </ul>
          <Nav className="ms-auto d-none d-md-block" navbar>
            <Image src={logo} width="auto" className='logo' height="auto" alt="" />  
          </Nav>
          <Nav className="ms-auto" navbar>
            <div className='account'>
            <Dropdown isOpen={dropdownOpen} toggle={dropdownToggle}>
              <DropdownToggle className='dropdown-btn' caret>Account</DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Some Action</DropdownItem>
                <DropdownItem>Some Action</DropdownItem>
                <DropdownItem>Some Action</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <IoSearch className='icon' />
            <IoCartOutline className='icon' />
            </div>
          </Nav>
        </Collapse>
      </Navbar>
      </Container>
    </div>
  );
}

export default TopHeader;