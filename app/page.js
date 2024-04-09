import ProductDetail from "./components/product-detail";
import ProductDetailBreadcrumb from "./components/product-detail-breadcrumb";
import { moreProducts, prodCard, productData, ratingCard } from "./data";
import TopHeader from "./layout/TopHeader";
import ProductTabs from "./components/product-tabs";
import {
  Container,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Row,
  Col,
  CardTitle,
  CardBody,
  Card,
  Button,
} from "reactstrap";
import Image from "next/image"

import one from "./assets/images/one.png"
import two from "./assets/images/two.png"
import three from "./assets/images/three.png"
import four from "./assets/images/four.png"
import star from "./assets/images/star2.png"
import starHalf from "./assets/images/star2-half.png"
import chevronDown from "./assets/images/chevron-down.png"
import insta1 from "./assets/images/insta1.png"
import insta2 from "./assets/images/insta2.png"
import insta3 from "./assets/images/insta3.png"
import insta4 from "./assets/images/insta4.png"
import insta5 from "./assets/images/insta5.png"
import RatingSnapshot from "./components/rating-snapshot";
import RatingCard from "./components/rating-card";
import Faq from "./components/faq";
import Link from "next/link"

            

export default function Home() {
  return (
    <main className="product-main">
      <Container>
        <ProductDetail />
        <ProductTabs tabs={productData} />
        <div className="prod-features">
          <Image src={one} width="auto" className='img-fluid' height="auto" alt="" />
          <Image src={two} width="auto" className='img-fluid' height="auto" alt="" />
          <Image src={three} width="auto" className='img-fluid' height="auto" alt="" />
          <Image src={four} width="auto" className='img-fluid' height="auto" alt="" />
        </div>
        <div className="more-products">
          <div className="tabs">
            <button className="active">Related Products</button>
            <button>Recently Viewed</button>
          </div>
          <Row>
            {prodCard.map((card) => {
              return (
                <Col md={6} lg={3} xl={3} key={card}>
                  <Card>
                    <Image src={card.img} width="auto" className='img-fluid' height="auto" alt="" />
                    <CardBody>
                      <CardTitle>{card.title}</CardTitle>
                      <span className="dis-price">{card.disPrice}</span>
                      <span className="full-price">{card.fullPrice}</span>
                    </CardBody>
                  </Card>
                </Col>
              )
            })}
          </Row>
        </div>
      </Container>
      <section className="reviews">
        <Container>
          <Image src={star} width="auto" className='img-fluid' height="auto" alt="" />
          <Image src={star} width="auto" className='img-fluid' height="auto" alt="" />
          <Image src={star} width="auto" className='img-fluid' height="auto" alt="" />
          <Image src={star} width="auto" className='img-fluid' height="auto" alt="" />
          <Image src={starHalf} width="auto" className='img-fluid' height="auto" alt="" />
          <span>4.5</span>
          <div className="total">
            <span className="span1">119 Reviews</span>
            <span className="dividers">|</span>
            <span className="span1">4 Questions</span>
            <span className="dividers">|</span>
            <span className="span1">4 Answers</span>
          </div>
        </Container>
      </section>
      <Container>
        <RatingSnapshot />
      </Container>
      <section className="sorting">
        <Container>
          <div className="sorting-flex">
            <p>1-6 of 119 Reviews</p>
            <p>Sort By: Most Recent <Image src={chevronDown} width="auto" className='img-fluid' height="auto" alt="" /></p>
          </div>
        </Container>
      </section>
      <section className="all-ratings">
        <Container>
          <Row>
            <Col md={6} lg={4} xl={4} className="mb-3">
              <RatingCard />
            </Col>
            <Col md={6} lg={4} xl={4} className="mb-3">
              <RatingCard />
            </Col>
            <Col md={6} lg={4} xl={4} className="mb-3">
              <RatingCard />
            </Col>
            <Col md={6} lg={4} xl={4} className="mb-3">
              <RatingCard />
            </Col>
            <Col md={6} lg={4} xl={4} className="mb-3">
              <RatingCard />
            </Col>
            <Col md={6} lg={4} xl={4} className="mb-3">
              <RatingCard />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="have-que">
        <Container>
          <h4>Have a question? Ask people who own it.</h4>
          <div className="input-flex">
            <input type="text" name="search" placeholder="EX: Shipping Information" />
          </div>
          <p className="ins mb-0">Start typing your question and we will check if it was already asked and answered.</p>
        </Container>
      </section>
      <section className="faq">
        <Container>
          <Faq />
        </Container>
      </section>
      <section className="insta">
        <Container>
          <h2>Follow @bfy_cosmetics on Instagram</h2>
          <Row className="justify-content-center">
            <Col md={6} lg={2}>
              <Image src={insta1} width="auto" className='img-fluid star' height="auto" alt="" />
            </Col>
            <Col md={6} lg={2}>
              <Image src={insta2} width="auto" className='img-fluid star' height="auto" alt="" />
            </Col>
            <Col md={6} lg={2}>
              <Image src={insta3} width="auto" className='img-fluid star' height="auto" alt="" />
            </Col>
            <Col md={6} lg={2}>
              <Image src={insta4} width="auto" className='img-fluid star' height="auto" alt="" />
            </Col>
            <Col md={6} lg={2}>
              <Image src={insta5} width="auto" className='img-fluid star' height="auto" alt="" />
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}
