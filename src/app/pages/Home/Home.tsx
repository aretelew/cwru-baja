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

import asset5 from '../../../assets/logo/sponsor/svg/gmn-bearing.svg';
import asset6 from '../../../assets/logo/sponsor/svg/jergens.svg';
import asset7 from '../../../assets/logo/sponsor/svg/bwxt.svg';
import asset8 from '../../../assets/logo/sponsor/svg/orange-vise.svg';
import asset9 from '../../../assets/logo/sponsor/svg/kissoft.svg';
import asset10 from '../../../assets/logo/sponsor/svg/skf.svg';
import asset11 from '../../../assets/logo/sponsor/svg/tylok.svg';
import asset12 from '../../../assets/logo/sponsor/svg/gmp-friction.svg';
import asset13 from '../../../assets/logo/sponsor/svg/siemens.svg';
import asset14 from '../../../assets/logo/sponsor/svg/magna.svg';
import asset15 from '../../../assets/logo/sponsor/svg/sgs.svg';
import asset16 from '../../../assets/logo/sponsor/svg/altium.svg';
import asset17 from '../../../assets/logo/sponsor/svg/kenesto.svg';
import asset18 from '../../../assets/logo/sponsor/svg/ansys.svg';
import asset19 from '../../../assets/logo/sponsor/svg/skamar.svg';
import asset20 from '../../../assets/logo/sponsor/svg/schunk.svg';
import asset21 from '../../../assets/logo/sponsor/svg/thinkbox.svg';
import asset22 from '../../../assets/logo/sponsor/svg/michigan-scientific.svg';
import asset23 from '../../../assets/logo/sponsor/svg/mastercam.svg';
import asset24 from '../../../assets/logo/sponsor/svg/blaser-swisslube.svg';
import asset25 from '../../../assets/logo/sponsor/svg/spee-d-metals.svg';
import asset26 from '../../../assets/logo/sponsor/svg/automation-direct.svg';
import asset27 from '../../../assets/logo/sponsor/svg/nord-lock-group.svg';
import asset28 from '../../../assets/logo/sponsor/svg/southington.svg';
import asset29 from '../../../assets/logo/sponsor/svg/gene-haas-foundation.svg';
import asset30 from '../../../assets/logo/sponsor/svg/american-friction-technologies.svg';
import asset31 from '../../../assets/logo/sponsor/svg/ptg.svg';
import asset32 from '../../../assets/logo/sponsor/svg/bolt-depot.svg';
import asset33 from '../../../assets/logo/sponsor/svg/clark.svg';
import asset34 from '../../../assets/logo/sponsor/svg/fk-rod-ends.svg';
import asset35 from '../../../assets/logo/sponsor/svg/asi.svg';
import asset36 from '../../../assets/logo/sponsor/svg/altair.svg';
import asset37 from '../../../assets/logo/sponsor/svg/alro.svg';
import asset38 from '../../../assets/logo/sponsor/svg/fox.svg';
import asset39 from '../../../assets/logo/sponsor/svg/bmt-aerospace.svg';
import asset40 from '../../../assets/logo/sponsor/svg/enterline-foundation.svg';
import asset41 from '../../../assets/logo/sponsor/svg/stifel.svg';
import asset42 from '../../../assets/logo/sponsor/svg/parker.svg';
import asset43 from '../../../assets/logo/sponsor/svg/case-alumni-association.svg';


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
