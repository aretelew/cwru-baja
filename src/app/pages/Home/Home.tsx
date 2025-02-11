import { useRef } from 'react';
import { HeaderSimple } from '../../../components/HeaderSimple/HeaderSimple.tsx';
import { FooterSocial } from '../../../components/FooterSocial/FooterSocial.tsx';
import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';
import Autoplay from 'embla-carousel-autoplay';
import myImage from '../../../assets/images/butler_bash_car_lineup.jpg';
import styles from './Home.module.css';
import '@mantine/carousel/styles.css';

export default function Home() {
    const autoplay = useRef(Autoplay({ delay: 2000 }));
    return (
        <>
            <div className={styles.headerContainer}>
                <HeaderSimple />
                <div>
                    <Carousel
                        withIndicators
                        slideSize="60%"
                        height="100%"
                        draggable={true}
                        plugins={[autoplay.current]}
                        onMouseEnter={autoplay.current.stop}
                        onMouseLeave={autoplay.current.reset}
                        slideGap="md"
                        loop
                        classNames={styles}
                    >
                        <Carousel.Slide><Image src={myImage} /></Carousel.Slide>
                        <Carousel.Slide><Image src={myImage} /></Carousel.Slide>
                        <Carousel.Slide><Image src={myImage} /></Carousel.Slide>
                        <Carousel.Slide><Image src={myImage} /></Carousel.Slide>
                        <Carousel.Slide><Image src={myImage} /></Carousel.Slide>
                    </Carousel>
                </div>
                <hr className={styles.divider} />
                <div className={styles.aboutContainer}>
                    <div className={styles.textContainer}>
                        <a href="#about-us" className={styles.aboutLink}>
                            <h1 id="about-us">About Us</h1>
                        </a>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                        </p>
                    </div>
                    <Image src={myImage} alt="Text Image" className={styles.textImage}/>
                </div>
                <hr className={styles.divider}/>
                <div className={styles.videoContainer}>
                    <iframe
                        width="1000"
                        height="563"
                        src="https://www.youtube.com/watch?v=wtBAbLzCRr0"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
            <FooterSocial />
        </>
    );
}
