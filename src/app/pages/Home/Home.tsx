import { useRef } from 'react';
import { HeaderSimple } from '../../../components/HeaderSimple.tsx';
import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';
import Autoplay from 'embla-carousel-autoplay';
import myImage from '../../../assets/images/butler_bash_car_lineup.jpg';
import styles from './Home.module.css';
import '@mantine/carousel/styles.css';


export default function Home() {
    const autoplay = useRef(Autoplay({ delay: 5000 }));
    return (
        <div className="home-container">
            <HeaderSimple />
            <div className={styles.carouselContainer}>
                <Carousel
                    withIndicators
                    slideSize="50%"
                    height="50vh"
                    draggable={true}
                    plugins={[autoplay.current]}
                    onMouseEnter={autoplay.current.stop}
                    onMouseLeave={autoplay.current.reset}
                    slideGap="md"
                    loop
                >
                    <Carousel.Slide><Image src={myImage}/></Carousel.Slide>
                    <Carousel.Slide><Image src={myImage}/></Carousel.Slide>
                    <Carousel.Slide><Image src={myImage} /></Carousel.Slide>
                </Carousel>
            </div>
        </div>
    );
}