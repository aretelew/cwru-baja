import { HeaderSimple } from '../../../components/HeaderSimple/HeaderSimple.tsx';
import { FooterSocial } from '../../../components/FooterSocial/FooterSocial.tsx';
import { Container, Image } from '@mantine/core';
import styles from './Support.module.css';
import { FadeIn } from '../../../components/FadeIn/FadeIn.tsx';
import {HeroSection} from "../../../components/HeroSection/HeroSection.tsx";
import heroImage from "../../../assets/images/butler_bash_car_lineup.jpg";

// ULTIMATE SPONSORS
import fox from '../../../assets/logo/sponsor/svg/fox.svg';
import bmt from '../../../assets/logo/sponsor/svg/bmt-aerospace.svg';
import enterline from '../../../assets/logo/sponsor/svg/enterline-foundation.svg';
import stifel from '../../../assets/logo/sponsor/svg/stifel.svg';
import caseAlumniAssociation from '../../../assets/logo/sponsor/svg/case-alumni-association.svg';

// PLATINUM SPONSORS
import speedMetals from '../../../assets/logo/sponsor/svg/spee-d-metals.svg';
import siemens from '../../../assets/logo/sponsor/svg/siemens.svg';
import altium from '../../../assets/logo/sponsor/svg/altium.svg';
import parker from '../../../assets/logo/sponsor/svg/parker.svg';

// GOLD SPONSORS
import jergens from '../../../assets/logo/sponsor/svg/jergens.svg';
import bwxt from '../../../assets/logo/sponsor/svg/bwxt.svg';
import orangeVise from '../../../assets/logo/sponsor/svg/orange-vise.svg';
import gmnBearing from '../../../assets/logo/sponsor/svg/gmn-bearing.svg';
import kissoft from '../../../assets/logo/sponsor/svg/kissoft.svg';
import skf from '../../../assets/logo/sponsor/svg/skf.svg';
import magna from '../../../assets/logo/sponsor/svg/magna.svg';
import ansys from '../../../assets/logo/sponsor/svg/ansys.svg';
import skamar from '../../../assets/logo/sponsor/svg/skamar.svg';
import haas from '../../../assets/logo/sponsor/svg/gene-haas-foundation.svg';

// SILVER SPONSORS
import tylok from '../../../assets/logo/sponsor/svg/tylok.svg';
import gmp from '../../../assets/logo/sponsor/svg/gmp-friction.svg';
import sgs from '../../../assets/logo/sponsor/svg/sgs.svg';
import kenesto from '../../../assets/logo/sponsor/svg/kenesto.svg';
import thinkbox from '../../../assets/logo/sponsor/svg/thinkbox.svg';
import michiganScientific from '../../../assets/logo/sponsor/svg/michigan-scientific.svg';
import mastercam from '../../../assets/logo/sponsor/svg/mastercam.svg';
import blaser from '../../../assets/logo/sponsor/svg/blaser-swisslube.svg';
import automationDirect from '../../../assets/logo/sponsor/svg/automation-direct.svg';
import americanFriction from '../../../assets/logo/sponsor/svg/american-friction-technologies.svg';
import clark from '../../../assets/logo/sponsor/svg/clark.svg';
import asi from '../../../assets/logo/sponsor/svg/asi.svg';
import schunk from '../../../assets/logo/sponsor/svg/schunk.svg';

// BRONZE SPONSORS
import nordlock from '../../../assets/logo/sponsor/svg/nord-lock-group.svg';
import southington from '../../../assets/logo/sponsor/svg/southington.svg';
import ptg from '../../../assets/logo/sponsor/svg/ptg.svg';
import boltDepot from '../../../assets/logo/sponsor/svg/bolt-depot.svg';
import fkRodEnds from '../../../assets/logo/sponsor/svg/fk-rod-ends.svg';
import altair from '../../../assets/logo/sponsor/svg/altair.svg';
import alro from '../../../assets/logo/sponsor/svg/alro.svg';




const sponsors = {
    ultimate: [
        {
            name: "Ultimate Sponsor 1",
            logo: fox,
            url: "https://sponsor1.com",
            scale: 1
        },
        {
            name: "Ultimate Sponsor 2",
            logo: bmt,
            url: "https://sponsor2.com",
            scale: 1
        },
        {
            name: "Ultimate Sponsor 2",
            logo: enterline,
            url: "https://sponsor2.com",
            scale: 1
        },
        {
            name: "Ultimate Sponsor 2",
            logo: stifel,
            url: "https://sponsor2.com",
            scale: 1
        },
        {
            name: "Ultimate Sponsor 2",
            logo: caseAlumniAssociation,
            url: "https://sponsor2.com",
            scale: 1.25
        },
    ],
    platinum: [
        {
            name: "Platinum Sponsor 1",
            logo: speedMetals,
            url: "https://sponsor3.com",
            scale: 1
        },
        {
            name: "Platinum Sponsor 2",
            logo: siemens,
            url: "https://sponsor4.com",
            scale: 1
        },
        {
            name: "Platinum Sponsor 3",
            logo: altium,
            url: "https://sponsor5.com",
            scale: 1.0
        },
        {
            name: "Platinum Sponsor 3",
            logo: parker,
            url: "https://sponsor5.com",
            scale: 1.0
        },
    ],
    gold: [
        {
            name: "Gold Sponsor 1",
            logo: jergens,
            url: "https://sponsor6.com",
            scale: 1.0
        },
        {
            name: "Gold Sponsor 1",
            logo: bwxt,
            url: "https://sponsor6.com",
            scale: 1.0
        },
        {
            name: "Gold Sponsor 1",
            logo: orangeVise,
            url: "https://sponsor6.com",
            scale: 1.0
        },
        {
            name: "Gold Sponsor 1",
            logo: gmnBearing,
            url: "https://sponsor6.com",
            scale: 1.0
        },
        {
            name: "Gold Sponsor 1",
            logo: kissoft,
            url: "https://sponsor6.com",
            scale: 1.0
        },
        {
            name: "Gold Sponsor 1",
            logo: skf,
            url: "https://sponsor6.com",
            scale: 1.0
        },
        {
            name: "Gold Sponsor 1",
            logo: magna,
            url: "https://sponsor6.com",
            scale: 1.0
        },
        {
            name: "Gold Sponsor 1",
            logo: ansys,
            url: "https://sponsor6.com",
            scale: 1.0
        },
        {
            name: "Gold Sponsor 1",
            logo: skamar,
            url: "https://sponsor6.com",
            scale: 1.0
        },
        {
            name: "Gold Sponsor 1",
            logo: haas,
            url: "https://sponsor6.com",
            scale: 1.0
        },
    ],
    silver: [
        {
            name: "Silver Sponsor 1",
            logo: tylok,
            url: "https://sponsor10.com",
            scale: 1.0
        },
        {
            name: "Silver Sponsor 1",
            logo: gmp,
            url: "https://sponsor10.com",
            scale: 1.0
        },
        {
            name: "Silver Sponsor 1",
            logo: sgs,
            url: "https://sponsor10.com",
            scale: 1.0
        },
        {
            name: "Silver Sponsor 1",
            logo: kenesto,
            url: "https://sponsor10.com",
            scale: 1.0
        },
        {
            name: "Silver Sponsor 1",
            logo: thinkbox,
            url: "https://sponsor10.com",
            scale: 1.0
        },
        {
            name: "Silver Sponsor 1",
            logo: michiganScientific,
            url: "https://sponsor10.com",
            scale: 1.0
        },
        {
            name: "Silver Sponsor 1",
            logo: mastercam,
            url: "https://sponsor10.com",
            scale: 1.0
        },
        {
            name: "Silver Sponsor 1",
            logo: blaser,
            url: "https://sponsor10.com",
            scale: 1.0
        },
        {
            name: "Silver Sponsor 1",
            logo: automationDirect,
            url: "https://sponsor10.com",
            scale: 1.0
        },
        {
            name: "Silver Sponsor 1",
            logo: americanFriction,
            url: "https://sponsor10.com",
            scale: 1.0
        },
        {
            name: "Silver Sponsor 1",
            logo: clark,
            url: "https://sponsor10.com",
            scale: 1.0
        },
        {
            name: "Silver Sponsor 1",
            logo: asi,
            url: "https://sponsor10.com",
            scale: 1.0
        },
        {
            name: "Silver Sponsor 1",
            logo: schunk,
            url: "https://sponsor10.com",
            scale: 1.0
        },
    ],
    bronze: [
        {
            name: "Bronze Sponsor 1",
            logo: nordlock,
            url: "https://sponsor15.com",
            scale: 1.0
        },
        {
            name: "Silver Sponsor 1",
            logo: southington,
            url: "https://sponsor10.com",
            scale: 1.0
        },
        {
            name: "Silver Sponsor 1",
            logo: ptg,
            url: "https://sponsor10.com",
            scale: 1.0
        },
        {
            name: "Silver Sponsor 1",
            logo: boltDepot,
            url: "https://sponsor10.com",
            scale: 1.0
        },
        {
            name: "Silver Sponsor 1",
            logo: fkRodEnds,
            url: "https://sponsor10.com",
            scale: 1.0
        },
        {
            name: "Silver Sponsor 1",
            logo: altair,
            url: "https://sponsor10.com",
            scale: 1.0
        },
        {
            name: "Silver Sponsor 1",
            logo: alro,
            url: "https://sponsor10.com",
            scale: 1.0
        },
    ],
};

interface Sponsor {
    name: string;
    logo: string;
    url: string;
    scale: number;
}

function SponsorTier({ title, sponsors, tierClass }: {
    title: string;
    sponsors: Array<Sponsor>;
    tierClass: string;
}) {
    return (
        <FadeIn>
            <div className={`${styles.tierSection} ${styles[tierClass]}`}>
                <h2 className={styles.tierTitle}>{title} Sponsors</h2>
                <div className={styles.sponsorsGrid}>
                    {sponsors.map((sponsor, index) => (
                        <FadeIn key={sponsor.name} delay={index * 0.1}>
                            <a
                                href={sponsor.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.sponsorLink}
                            >
                                <div className={styles.sponsorWrapper}>
                                    <Image
                                        src={sponsor.logo}
                                        alt={`${sponsor.name} logo`}
                                        className={`${styles.sponsorLogo} ${styles.dynamicScale}`}
                                        data-scale={sponsor.scale}
                                        fit="contain"
                                    />
                                </div>
                            </a>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </FadeIn>
    );
}

export default function Support() {
    return (
        <>
            <HeaderSimple />
                <Container className={styles.mainContainer}>
                    <HeroSection
                        backgroundImage={heroImage}
                        title={`SPONSORS`}
                    />

                    <SponsorTier
                        title="Ultimate"
                        sponsors={sponsors.ultimate}
                        tierClass="ultimate"
                    />
                    <SponsorTier
                        title="Platinum"
                        sponsors={sponsors.platinum}
                        tierClass="platinum"
                    />
                    <SponsorTier
                        title="Gold"
                        sponsors={sponsors.gold}
                        tierClass="gold"
                    />
                    <SponsorTier
                        title="Silver"
                        sponsors={sponsors.silver}
                        tierClass="silver"
                    />
                    <SponsorTier
                        title="Bronze"
                        sponsors={sponsors.bronze}
                        tierClass="bronze"
                    />
                </Container>
            <FooterSocial />
        </>
    );
}