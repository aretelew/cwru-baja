import { Text, Title, Badge, Paper, Grid, Stack } from '@mantine/core';
import { HeaderSimple } from '../../../components/HeaderSimple/HeaderSimple';
import { FooterSocial } from '../../../components/FooterSocial/FooterSocial';
import { FadeIn } from '../../../components/FadeIn/FadeIn';
import styles from './Competition.module.css';
import { HeroSection } from '../../../components/HeroSection/HeroSection';
// import myImage from '../../../assets/images/butler_bash_car_lineup.jpg';
import heroImage from '../../../assets/images/LMF02976.jpg';

const Award = ({ text }: { text: string }) => {
    const match = text.match(/(\d+)[A-Z]+\s+PLACE\s+(.+)/i);
    if (!match) return null;

    const [, placement, award] = match;
    const placementNum = parseInt(placement);

    return (
        <Badge
            variant="filled"
            color={placementNum <= 3 ? "red" : "dark"}
            radius="sm"
            className={styles.award}
            size="lg"
        >
            {`${placement}${getOrdinalSuffix(parseInt(placement))} Place ${award}`}
        </Badge>
    );
};

const getOrdinalSuffix = (number: number): string => {
    const num = number;
    if (num <= 0) return '';
    if (num > 3 && num < 21) return 'th';
    switch (num % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
    }
};

interface Competition {
    name: string;
    awards: string[];
}

interface Season {
    year: string;
    competitions: Competition[];
}

const SeasonSection = ({ year, competitions }: { year: string, competitions: Competition[] }) => (
    <FadeIn direction="up" delay={0.1}>
        <div className={styles.seasonSection}>
            <Title order={3} className={styles.seasonTitle}>{year} SEASON</Title>
            <hr className={styles.divider} />
            <Grid gutter="lg">
                {competitions.map((competition, index) => (
                    <Grid.Col key={index} span={{ base: 12, sm: 6, md: 4 }}>
                        <Paper shadow="sm" p="lg" radius="md" className={styles.competitionCard}>
                            <Title order={4} mb="md" className={styles.competitionTitle}>
                                {competition.name}
                            </Title>
                            <Stack gap="xs" align="center">
                                {competition.awards.map((award, awardIndex) => (
                                    <Award key={awardIndex} text={award} />
                                ))}
                            </Stack>
                        </Paper>
                    </Grid.Col>
                ))}
            </Grid>
        </div>
    </FadeIn>
);

// Combined seasons for years with fewer awards
const seasons: Season[] = [
    {
        year: "2024",
        competitions: [
            {
                name: "BAJA SAE CALIFORNIA",
                awards: [
                    "9TH PLACE OVERALL PERFORMANCE",
                    "5TH PLACE DESIGN",
                    "1ST PLACE ACCELERATION",
                    "1ST PLACE HILL CLIMB",
                    "2ND PLACE MANEUVERABILITY",
                    "5TH PLACE SUSPENSION"
                ]
            },
            {
                name: "BAJA SAE WILLIAMSPORT",
                awards: [
                    "6TH PLACE OVERALL PERFORMANCE",
                    "4TH PLACE DESIGN",
                    "1ST PLACE ACCELERATION",
                    "7TH PLACE HILL CLIMB",
                    "5TH PLACE MANEUVERABILITY",
                    "10TH PLACE SUSPENSION"
                ]
            },
            {
                name: "BAJA SAE Michigan",
                awards: [
                    "6th Place Overall Performance",
                    "7th Place Design",
                    "1st Place Acceleration",
                    "3rd Place Hill Climb",
                    "11th Place Maneuverability",
                    "6th Place Suspension",
                    "6th Place Endurance"
                ]
            }
        ]
    },
    {
        year: "2023",
        competitions: [
            {
                name: "BAJA SAE OSHKOSH",
                awards: [
                    "5TH PLACE OVERALL PERFORMANCE",
                    "5TH PLACE SALES",
                    "5TH PLACE DESIGN",
                    "2ND PLACE ACCELERATION",
                    "4TH PLACE MANEUVERABILITY",
                    "9TH PLACE ENDURANCE"
                ]
            },
            {
                name: "BAJA SAE OSHKOSH",
                awards: [
                    "5TH PLACE OVERALL PERFORMANCE",
                    "5TH PLACE SALES",
                    "5TH PLACE DESIGN",
                    "2ND PLACE ACCELERATION",
                    "4TH PLACE MANEUVERABILITY",
                    "9TH PLACE ENDURANCE"
                ]
            },
            {
                name: "BAJA SAE OSHKOSH",
                awards: [
                    "5TH PLACE OVERALL PERFORMANCE",
                    "5TH PLACE SALES",
                    "5TH PLACE DESIGN",
                    "2ND PLACE ACCELERATION",
                    "4TH PLACE MANEUVERABILITY",
                    "9TH PLACE ENDURANCE"
                ]
            }
        ]
    },
    {
        year: "2022",
        competitions: [
            {
                name: "BAJA SAE ARIZONA",
                awards: [
                    "5TH PLACE OVERALL PERFORMANCE",
                    "2ND PLACE SALES",
                    "3RD PLACE ACCELERATION",
                    "3RD PLACE MANEUVERABILITY",
                    "6TH PLACE SLED PULL",
                    "8TH PLACE ENDURANCE",
                    "3RD PLACE OVERALL DYNAMIC"
                ]
            },
            {
                name: "BAJA SAE ARIZONA",
                awards: [
                    "5TH PLACE OVERALL PERFORMANCE",
                ]
            },
            {
                name: "BAJA SAE ARIZONA",
                awards: [
                    "5TH PLACE OVERALL PERFORMANCE",
                    "2ND PLACE SALES",
                    "3RD PLACE ACCELERATION",
                    "3RD PLACE MANEUVERABILITY",
                    "6TH PLACE SLED PULL",
                    "8TH PLACE ENDURANCE",
                    "3RD PLACE OVERALL DYNAMIC"
                ]
            }
        ]
    },
    {
        year: "2021",
        competitions: [
            {
                name: "BAJA SAE KNOWLEDGE",
                awards: [
                    "2ND PLACE OVERALL PERFORMANCE",
                    "2ND PLACE SALES"
                ]
            },
            {
                name: "BAJA SAE LOUISVILLE",
                awards: [
                    "FORD 1ST PLACE HILL CLIMB",
                    "1ST PLACE MANEUVERABILITY"
                ]
            }
        ]
    },
    {
        year: "2020-2019",
        competitions: [
            {
                name: "BAJA SAE LOUISVILLE (2020)",
                awards: [
                    "3RD PLACE SALES"
                ]
            },
            {
                name: "BAJA SAE ROCHESTER (2019)",
                awards: [
                    "RAYMOND 1ST PLACE ACCELERATION"
                ]
            }
        ]
    },
    {
        year: "2018",
        competitions: [
            {
                name: "BAJA SAE MARYLAND",
                awards: [
                    "MAGNA 3RD PLACE MANEUVERABILITY"
                ]
            },
            {
                name: "BAJA SAE KANSAS",
                awards: [
                    "POLARIS 3RD PLACE DESIGN"
                ]
            }
        ]
    },
    {
        year: "2017-2016",
        competitions: [
            {
                name: "BAJA SAE CALIFORNIA (2017)",
                awards: [
                    "9TH PLACE OVERALL PERFORMANCE"
                ]
            },
            {
                name: "BAJA SAE KANSAS (2017)",
                awards: [
                    "8TH PLACE OVERALL PERFORMANCE"
                ]
            },
            {
                name: "BAJA SAE ROCHESTER (2016)",
                awards: [
                    "3RD PLACE ACCELERATION"
                ]
            }
        ]
    }
];

export default function Competition() {
    return (
        <>
            <HeaderSimple />
            <div className={styles.mainContainer}>
                <HeroSection
                    backgroundImage={heroImage}
                    title={"COMPETITION"}
                    verticalPosition="80%"
                />
                <FadeIn direction="up" delay={0.1}>
                    <div className={styles.introSection}>
                        <h1 className={styles.introTitle}>THE BAJA SAE COLLEGIATE DESIGN SERIES</h1>
                        <Text className={styles.introParagraph}>
                            Sanctioned by the Society of Automotive Engineers (SAE), the Baja SAE collegiate design series was founded in 1976 with the purpose of offering real-world engineering experience to students from universities around the world.
                            Student teams are challenged to design and manufacture a high-performance, single-seat off-road vehicle that is aimed at the recreational user market and conforms to the comprehensive Baja SAE rulebook.
                            Along with the challenge of engineering the vehicle, teams must also secure financial support for their project while at the same time managing their educational priorities.
                            Teams will then have their performance evaluated through four-day long competitions, which consist of a rigorous technical inspection to evaluate conformance to rules, design and sales presentations given to industry professionals, cost evaluation, several dynamic events, and a four-hour long wheel-to-wheel endurance race.
                            Three official Baja SAE competitions are held in the United States each year in the spring and the CWRU Motorsports team aims to compete in each one to maximize the experience each member gains.
                            The team will be competing in all three of the 2020 competitions, which will be held in Arizona, Louisville, and Illinois.  Detailed information for this year's events can be seen on the SAE International website.
                        </Text>
                    </div>
                </FadeIn>

                <FadeIn direction="up" delay={0.1}>
                    <div className={styles.accomplishmentsSection}>
                        <h1 className={styles.accomplishmentsTitle}>
                            THE TEAM'S GROWING LIST OF ACCOMPLISHMENTS
                        </h1>
                        {seasons.map((season, index) => (
                            <SeasonSection
                                key={index}
                                year={season.year}
                                competitions={season.competitions}
                            />
                        ))}
                    </div>
                </FadeIn>
            </div>
            <FooterSocial />
        </>
    );
}