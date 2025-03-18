import { HeaderSimple } from '../../../components/HeaderSimple/HeaderSimple.tsx';
import { FooterSocial } from '../../../components/FooterSocial/FooterSocial.tsx';
import { Container, Image } from '@mantine/core';
import styles from './Support.module.css';
import { FadeIn } from '../../../components/FadeIn/FadeIn.tsx';

import foxLogo from '../../../assets/logo/sponsor/fox_logo.png';
import altiumLogo from '../../../assets/logo/sponsor/altium_logo.png';
import altairLogo from '../../../assets/logo/sponsor/altair_logo.png';
import bmtLogo from '../../../assets/logo/sponsor/bmt_logo.png';
import kissoftLogo from '../../../assets/logo/sponsor/kissoft_logo.png';
import jergensLogo from '../../../assets/logo/sponsor/jergens_logo.png';


const sponsors = {
    ultimate: [
        {
            name: "Ultimate Sponsor 1",
            logo: "",
            url: "https://sponsor1.com",
            scale: .75
        },
        {
            name: "Ultimate Sponsor 2",
            logo: altiumLogo,
            url: "https://sponsor2.com",
            scale: 1.25
        },
        {
            name: "Ultimate Sponsor 2",
            logo: altiumLogo,
            url: "https://sponsor2.com",
            scale: 1.25
        },
        {
            name: "Ultimate Sponsor 2",
            logo: altiumLogo,
            url: "https://sponsor2.com",
            scale: 1.25
        },
    ],
    platinum: [
        {
            name: "Platinum Sponsor 1",
            logo: foxLogo,
            url: "https://sponsor3.com",
            scale: 1
        },
        {
            name: "Platinum Sponsor 2",
            logo: altairLogo,
            url: "https://sponsor4.com",
            scale: 1
        },
        {
            name: "Platinum Sponsor 3",
            logo: bmtLogo,
            url: "https://sponsor5.com",
            scale: 1.0
        },
        {
            name: "Platinum Sponsor 3",
            logo: kissoftLogo,
            url: "https://sponsor5.com",
            scale: 1.0
        },
    ],
    gold: [
        {
            name: "Gold Sponsor 1",
            logo: jergensLogo,
            url: "https://sponsor6.com",
            scale: 1.0
        },
        {
            name: "Gold Sponsor 1",
            logo: jergensLogo,
            url: "https://sponsor6.com",
            scale: 1.0
        },
        {
            name: "Gold Sponsor 1",
            logo: jergensLogo,
            url: "https://sponsor6.com",
            scale: 1.0
        },
        {
            name: "Gold Sponsor 1",
            logo: jergensLogo,
            url: "https://sponsor6.com",
            scale: 1.0
        },
    ],
    silver: [
        {
            name: "Silver Sponsor 1",
            logo: "/api/placeholder/160/96",
            url: "https://sponsor10.com",
            scale: 1.0
        },
        // ... other silver sponsors
    ],
    bronze: [
        {
            name: "Bronze Sponsor 1",
            logo: "/api/placeholder/120/72",
            url: "https://sponsor15.com",
            scale: 1.0
        },
        // ... other bronze sponsors
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
                    <FadeIn>
                        <h1 className={styles.sponsorsTitle}>OUR VALUED SPONSORS</h1>
                    </FadeIn>

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