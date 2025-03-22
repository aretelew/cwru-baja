import { HeaderSimple } from '../../../components/HeaderSimple/HeaderSimple.tsx';
import { FooterSocial } from '../../../components/FooterSocial/FooterSocial.tsx';
import { Image, Text, Button, Group, Box } from '@mantine/core';
import myImage from '../../../assets/images/butler_bash_car_lineup.jpg';
// import svg from '../../../assets/logo/sponsor/grayscale/american-friction-technologies.svg';
import styles from './Home.module.css';
import '@mantine/carousel/styles.css';
import { FadeIn } from '../../../components/FadeIn/FadeIn.tsx';
import { HeroSection } from "../../../components/HeroSection/HeroSection.tsx";
import { LogoCarousel } from "../../../components/LogoCarousel/LogoCarousel.tsx";

import asset5 from '../../../assets/logo/sponsor/svg/Asset 5.svg';
import asset6 from '../../../assets/logo/sponsor/svg/Asset 6.svg';
import asset7 from '../../../assets/logo/sponsor/svg/Asset 7.svg';
import asset8 from '../../../assets/logo/sponsor/svg/Asset 8.svg';
import asset9 from '../../../assets/logo/sponsor/svg/Asset 9.svg';
import asset10 from '../../../assets/logo/sponsor/svg/Asset 10.svg';
import asset11 from '../../../assets/logo/sponsor/svg/Asset 11.svg';
import asset12 from '../../../assets/logo/sponsor/svg/Asset 12.svg';
import asset13 from '../../../assets/logo/sponsor/svg/Asset 13.svg';
import asset14 from '../../../assets/logo/sponsor/svg/Asset 14.svg';
import asset15 from '../../../assets/logo/sponsor/svg/Asset 15.svg';
import asset16 from '../../../assets/logo/sponsor/svg/Asset 16.svg';
import asset17 from '../../../assets/logo/sponsor/svg/Asset 17.svg';
import asset18 from '../../../assets/logo/sponsor/svg/Asset 18.svg';
import asset19 from '../../../assets/logo/sponsor/svg/Asset 19.svg';
import asset20 from '../../../assets/logo/sponsor/svg/Asset 20.svg';
import asset21 from '../../../assets/logo/sponsor/svg/Asset 21.svg';
import asset22 from '../../../assets/logo/sponsor/svg/Asset 22.svg';
import asset23 from '../../../assets/logo/sponsor/svg/Asset 23.svg';
import asset24 from '../../../assets/logo/sponsor/svg/Asset 24.svg';
import asset25 from '../../../assets/logo/sponsor/svg/Asset 25.svg';
import asset26 from '../../../assets/logo/sponsor/svg/Asset 26.svg';
import asset27 from '../../../assets/logo/sponsor/svg/Asset 27.svg';
import asset28 from '../../../assets/logo/sponsor/svg/Asset 28.svg';
import asset29 from '../../../assets/logo/sponsor/svg/Asset 29.svg';
import asset30 from '../../../assets/logo/sponsor/svg/Asset 30.svg';
import asset31 from '../../../assets/logo/sponsor/svg/Asset 31.svg';
import asset32 from '../../../assets/logo/sponsor/svg/Asset 32.svg';
import asset33 from '../../../assets/logo/sponsor/svg/Asset 33.svg';
import asset34 from '../../../assets/logo/sponsor/svg/Asset 34.svg';
import asset35 from '../../../assets/logo/sponsor/svg/Asset 35.svg';
import asset36 from '../../../assets/logo/sponsor/svg/Asset 36.svg';
import asset37 from '../../../assets/logo/sponsor/svg/Asset 37.svg';
import asset38 from '../../../assets/logo/sponsor/svg/Asset 38.svg';
import asset39 from '../../../assets/logo/sponsor/svg/Asset 39.svg';
import asset40 from '../../../assets/logo/sponsor/svg/Asset 40.svg';
import asset41 from '../../../assets/logo/sponsor/svg/Asset 41.svg';
import asset42 from '../../../assets/logo/sponsor/svg/Asset 42.svg';
import asset43 from '../../../assets/logo/sponsor/svg/Asset 43.svg';


const sponsorLogos = [
    asset5,
    asset6,
    asset7,
    asset8,
    asset9,
    asset10,
    asset11,
    asset12,
    asset13,
    asset14,
    asset15,
    asset16,
    asset17,
    asset18,
    asset19,
    asset20,
    asset21,
    asset22,
    asset23,
    asset24,
    asset25,
    asset26,
    asset27,
    asset28,
    asset29,
    asset30,
    asset31,
    asset32,
    asset33,
    asset34,
    asset35,
    asset36,
    asset37,
    asset38,
    asset39,
    asset40,
    asset41,
    asset42,
    asset43,
];


export default function Home() {
    return (
        <>
            <HeaderSimple />

            <div className={styles.mainContainer}>
                <HeroSection backgroundImage={myImage} title="CWRU MOTORSPORTS" />

                <FadeIn direction="up" delay={0.2}>
                    <div className={styles.aboutContainer}>
                        <div className={styles.textContainer}>
                            <h1 id="about-us">About Us</h1>
                            <Text size="xs" className={styles.p}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                                lacinia, justo eu tincidunt facilisis, velit nisi pulvinar eros...
                            </Text>
                            <Box mt={40}>
                                <Group>
                                    <Button
                                        variant="filled"
                                        color="red"
                                        size="md"
                                        component="a"
                                        href="/cwru-baja/competition"
                                    >
                                        Learn More
                                    </Button>
                                    <Button
                                        variant="outline"
                                        color="red"
                                        size="md"
                                        component="a"
                                        href="/cwru-baja/social"
                                    >
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
                        />
                    </div>
                </FadeIn>
                <LogoCarousel logos={sponsorLogos} />
            </div>
            <FooterSocial />
        </>
    );
}
