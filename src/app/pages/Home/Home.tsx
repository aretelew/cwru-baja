import { useRef } from 'react';
import { HeaderSimple } from '../../../components/HeaderSimple/HeaderSimple.tsx';
import { FooterSocial } from '../../../components/FooterSocial/FooterSocial.tsx';
import { Carousel } from '@mantine/carousel';
import { Image, Text, Button, Group, Box } from '@mantine/core';
import Autoplay from 'embla-carousel-autoplay';
import myImage from '../../../assets/images/butler_bash_car_lineup.jpg';
import styles from './Home.module.css';
import '@mantine/carousel/styles.css';
import { FadeIn } from '../../../components/FadeIn/FadeIn.tsx';

export default function Home() {
    const autoplay = useRef(Autoplay({ delay: 4000 }));

    return (
        <>
            <HeaderSimple />
            <div className={styles.mainContainer}>
                <FadeIn>
                    <div className={styles.carouselContainer}>
                        <Carousel
                            withIndicators
                            slideSize={{ base: '100%', sm: '70%', md: '40%' }}
                            height="100%"
                            draggable={true}
                            plugins={[autoplay.current]}
                            onMouseEnter={autoplay.current.stop}
                            onMouseLeave={autoplay.current.reset}
                            slideGap="xs"
                            loop
                        >
                            <Carousel.Slide><Image radius="md" src={myImage} /></Carousel.Slide>
                            <Carousel.Slide><Image radius="md" src={myImage} /></Carousel.Slide>
                            <Carousel.Slide><Image radius="md" src={myImage} /></Carousel.Slide>
                            <Carousel.Slide><Image radius="md" src={myImage} /></Carousel.Slide>
                            <Carousel.Slide><Image radius="md" src={myImage} /></Carousel.Slide>
                        </Carousel>
                    </div>
                </FadeIn>

                <FadeIn direction="up" delay={0.2}>
                    <div className={styles.aboutContainer}>
                        <div className={styles.textContainer}>
                            <h1 id="about-us">About Us</h1>
                            <Text size="xs" className={styles.p}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia,
                                justo eu tincidunt facilisis, velit nisi pulvinar eros, vel convallis
                                magna leo at odio. Praesent egestas, nisl vel commodo fermentum, justo
                                risus efficitur libero, vel rhoncus libero urna at justo.
                            </Text>
                            <Box mt={40}>
                                <Group>
                                    <Button variant="filled" color="red" size="md" component="a" href="/cwru-baja/competition">
                                        Learn More
                                    </Button>
                                    <Button variant="outline" color="red" size="md" component="a" href="/cwru-baja/social">
                                        Contact Us
                                    </Button>
                                </Group>
                            </Box>
                        </div>
                        <Image
                            src={myImage}
                            alt="Text Image"
                            className={styles.textImage}
                            radius="md"
                        />
                    </div>
                </FadeIn>

                <FadeIn direction="up" delay={0.3}>
                    <div className={styles.videoContainer}>
                        <iframe
                            src="https://www.youtube.com/embed/wtBAbLzCRr0"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </FadeIn>
            </div>
            <FooterSocial />
        </>
    );
}