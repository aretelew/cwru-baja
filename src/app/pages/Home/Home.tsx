import { HeaderSimple } from "../../../components/HeaderSimple.tsx";
import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';
import myImage from "../../../assets/images/LMF04307.jpg";
import "@mantine/carousel/styles.css";
import "./Home.module.css";

export default function Home() {
    return (
        <div className="home-container">
            <HeaderSimple />
            <div className="carousel-container">
                <Carousel withIndicators slideSize="50%" loop>
                    <Carousel.Slide><Image src={myImage} /></Carousel.Slide>
                    <Carousel.Slide><Image src={myImage} /></Carousel.Slide>
                    <Carousel.Slide><Image src={myImage} /></Carousel.Slide>
                </Carousel>
            </div>
        </div>
    );
}