import { HeaderSimple } from '../../../components/HeaderSimple/HeaderSimple.tsx';
import { FooterSocial } from '../../../components/FooterSocial/FooterSocial.tsx';
import { Image, Text, Button, Group, Box } from '@mantine/core';
import myImage from '../../../assets/images/butler_bash_car_lineup.jpg';
import styles from './Home.module.css';
import '@mantine/carousel/styles.css';
import { FadeIn } from '../../../components/FadeIn/FadeIn.tsx';
import { HeroSection } from "../../../components/HeroSection/HeroSection.tsx";
import { LogoCarousel } from "../../../components/LogoCarousel/LogoCarousel.tsx";

import gmnBearingLogo from '../../../assets/logo/sponsor/svg/gmn-bearing.svg';
import jergensLogo from '../../../assets/logo/sponsor/svg/jergens.svg';
import bwxtLogo from '../../../assets/logo/sponsor/svg/bwxt.svg';
import orangeViseLogo from '../../../assets/logo/sponsor/svg/orange-vise.svg';
import kissoftLogo from '../../../assets/logo/sponsor/svg/kissoft.svg';
import skfLogo from '../../../assets/logo/sponsor/svg/skf.svg';
import tylokLogo from '../../../assets/logo/sponsor/svg/tylok.svg';
import gmpFrictionLogo from '../../../assets/logo/sponsor/svg/gmp-friction.svg';
import siemensLogo from '../../../assets/logo/sponsor/svg/siemens.svg';
import magnaLogo from '../../../assets/logo/sponsor/svg/magna.svg';
import sgsLogo from '../../../assets/logo/sponsor/svg/sgs.svg';
import altiumLogo from '../../../assets/logo/sponsor/svg/altium.svg';
import kenestoLogo from '../../../assets/logo/sponsor/svg/kenesto.svg';
import ansysLogo from '../../../assets/logo/sponsor/svg/ansys.svg';
import skamarLogo from '../../../assets/logo/sponsor/svg/skamar.svg';
import schunkLogo from '../../../assets/logo/sponsor/svg/schunk.svg';
import thinkboxLogo from '../../../assets/logo/sponsor/svg/thinkbox.svg';
import michiganScientificLogo from '../../../assets/logo/sponsor/svg/michigan-scientific.svg';
import mastercamLogo from '../../../assets/logo/sponsor/svg/mastercam.svg';
import blaserSwisslubeLogo from '../../../assets/logo/sponsor/svg/blaser-swisslube.svg';
import speedMetalsLogo from '../../../assets/logo/sponsor/svg/spee-d-metals.svg';
import automationDirectLogo from '../../../assets/logo/sponsor/svg/automation-direct.svg';
import nordLockGroupLogo from '../../../assets/logo/sponsor/svg/nord-lock-group.svg';
import southingtonLogo from '../../../assets/logo/sponsor/svg/southington.svg';
import geneHaasFoundationLogo from '../../../assets/logo/sponsor/svg/gene-haas-foundation.svg';
import americanFrictionLogo from '../../../assets/logo/sponsor/svg/american-friction-technologies.svg';
import ptgLogo from '../../../assets/logo/sponsor/svg/ptg.svg';
import boltDepotLogo from '../../../assets/logo/sponsor/svg/bolt-depot.svg';
import clarkLogo from '../../../assets/logo/sponsor/svg/clark.svg';
import fkRodEndsLogo from '../../../assets/logo/sponsor/svg/fk-rod-ends.svg';
import asiLogo from '../../../assets/logo/sponsor/svg/asi.svg';
import altairLogo from '../../../assets/logo/sponsor/svg/altair.svg';
import alroLogo from '../../../assets/logo/sponsor/svg/alro.svg';
import foxLogo from '../../../assets/logo/sponsor/svg/fox.svg';
import bmtAerospaceLogo from '../../../assets/logo/sponsor/svg/bmt-aerospace.svg';
import enterlineFoundationLogo from '../../../assets/logo/sponsor/svg/enterline-foundation.svg';
import stifelLogo from '../../../assets/logo/sponsor/svg/stifel.svg';
import parkerLogo from '../../../assets/logo/sponsor/svg/parker.svg';
import caseAlumniLogo from '../../../assets/logo/sponsor/svg/case-alumni-association.svg';


const sponsorLogos = [
    gmnBearingLogo,
    jergensLogo,
    bwxtLogo,
    orangeViseLogo,
    kissoftLogo,
    skfLogo,
    tylokLogo,
    gmpFrictionLogo,
    siemensLogo,
    magnaLogo,
    sgsLogo,
    altiumLogo,
    kenestoLogo,
    ansysLogo,
    skamarLogo,
    schunkLogo,
    thinkboxLogo,
    michiganScientificLogo,
    mastercamLogo,
    blaserSwisslubeLogo,
    speedMetalsLogo,
    automationDirectLogo,
    nordLockGroupLogo,
    southingtonLogo,
    geneHaasFoundationLogo,
    americanFrictionLogo,
    ptgLogo,
    boltDepotLogo,
    clarkLogo,
    fkRodEndsLogo,
    asiLogo,
    altairLogo,
    alroLogo,
    foxLogo,
    bmtAerospaceLogo,
    enterlineFoundationLogo,
    stifelLogo,
    parkerLogo,
    caseAlumniLogo,
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
                            <h1 className={styles.aboutTitle}>About Us</h1>
                            <Text size="xs" className={styles.p}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                                lacinia, justo eu tincidunt facilisis, velit nisi pulvinar eros...
                            </Text>
                            <Box mt={40}>
                                <Group justify="center">
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