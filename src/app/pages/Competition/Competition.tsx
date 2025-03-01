import { Text, Title, Badge, Paper, Grid, Stack, Container } from '@mantine/core';
import { HeaderSimple } from '../../../components/HeaderSimple/HeaderSimple';
import { FooterSocial } from '../../../components/FooterSocial/FooterSocial';
import { FadeIn } from '../../../components/FadeIn/FadeIn';
import styles from './Competition.module.css';

interface AwardProps {
    text: string;
}

const Award = ({ text }: AwardProps) => {
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
                    "9TH PLACE OVERALL PERFORMANCE AWARD",
                    "5TH PLACE DESIGN AWARD",
                    "1ST PLACE ACCELERATION AWARD",
                    "1ST PLACE HILL CLIMB AWARD",
                    "2ND PLACE MANEUVERABILITY AWARD",
                    "5TH PLACE SUSPENSION AWARD"
                ]
            },
            {
                name: "BAJA SAE WILLIAMSPORT",
                awards: [
                    "6TH PLACE OVERALL PERFORMANCE AWARD",
                    "4TH PLACE DESIGN AWARD",
                    "1ST PLACE ACCELERATION AWARD",
                    "7TH PLACE HILL CLIMB AWARD",
                    "5TH PLACE MANEUVERABILITY AWARD",
                    "10TH PLACE SUSPENSION AWARD"
                ]
            },
            {
                name: "BAJA SAE Michigan",
                awards: [
                    "6th Place Overall Performance Award",
                    "7th Place Design Award",
                    "1st Place Acceleration Award",
                    "3rd Place Hill Climb Award",
                    "11th Place Maneuverability Award",
                    "6th Place Suspension Award",
                    "6th Place Endurance Award"
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
                    "5TH PLACE OVERALL PERFORMANCE AWARD",
                    "5TH PLACE SALES AWARD",
                    "5TH PLACE DESIGN AWARD",
                    "2ND PLACE ACCELERATION AWARD",
                    "4TH PLACE MANEUVERABILITY AWARD",
                    "9TH PLACE ENDURANCE AWARD"
                ]
            },
            {
                name: "BAJA SAE OSHKOSH",
                awards: [
                    "5TH PLACE OVERALL PERFORMANCE AWARD",
                    "5TH PLACE SALES AWARD",
                    "5TH PLACE DESIGN AWARD",
                    "2ND PLACE ACCELERATION AWARD",
                    "4TH PLACE MANEUVERABILITY AWARD",
                    "9TH PLACE ENDURANCE AWARD"
                ]
            },
            {
                name: "BAJA SAE OSHKOSH",
                awards: [
                    "5TH PLACE OVERALL PERFORMANCE AWARD",
                    "5TH PLACE SALES AWARD",
                    "5TH PLACE DESIGN AWARD",
                    "2ND PLACE ACCELERATION AWARD",
                    "4TH PLACE MANEUVERABILITY AWARD",
                    "9TH PLACE ENDURANCE AWARD"
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
                    "5TH PLACE OVERALL PERFORMANCE AWARD",
                    "2ND PLACE SALES AWARD",
                    "3RD PLACE ACCELERATION AWARD",
                    "3RD PLACE MANEUVERABILITY AWARD",
                    "6TH PLACE SLED PULL AWARD",
                    "8TH PLACE ENDURANCE AWARD",
                    "3RD PLACE OVERALL DYNAMIC AWARD"
                ]
            },
            {
                name: "BAJA SAE ARIZONA",
                awards: [
                    "5TH PLACE OVERALL PERFORMANCE AWARD",
                ]
            },
            {
                name: "BAJA SAE ARIZONA",
                awards: [
                    "5TH PLACE OVERALL PERFORMANCE AWARD",
                    "2ND PLACE SALES AWARD",
                    "3RD PLACE ACCELERATION AWARD",
                    "3RD PLACE MANEUVERABILITY AWARD",
                    "6TH PLACE SLED PULL AWARD",
                    "8TH PLACE ENDURANCE AWARD",
                    "3RD PLACE OVERALL DYNAMIC AWARD"
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
                    "2ND PLACE OVERALL PERFORMANCE AWARD",
                    "2ND PLACE SALES AWARD"
                ]
            },
            {
                name: "BAJA SAE LOUISVILLE",
                awards: [
                    "FORD 1ST PLACE HILL CLIMB AWARD",
                    "1ST PLACE MANEUVERABILITY AWARD"
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
                    "3RD PLACE SALES AWARD"
                ]
            },
            {
                name: "BAJA SAE ROCHESTER (2019)",
                awards: [
                    "RAYMOND 1ST PLACE ACCELERATION AWARD"
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
                    "MAGNA 3RD PLACE MANEUVERABILITY AWARD"
                ]
            },
            {
                name: "BAJA SAE KANSAS",
                awards: [
                    "POLARIS 3RD PLACE DESIGN AWARD"
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
                    "9TH PLACE OVERALL PERFORMANCE AWARD"
                ]
            },
            {
                name: "BAJA SAE KANSAS (2017)",
                awards: [
                    "8TH PLACE OVERALL PERFORMANCE AWARD"
                ]
            },
            {
                name: "BAJA SAE ROCHESTER (2016)",
                awards: [
                    "3RD PLACE ACCELERATION AWARD"
                ]
            }
        ]
    }
];

export default function Competition() {
    return (
        <>
            <HeaderSimple />
            <Container className={styles.headerContainer}>
                <FadeIn direction="up">
                    <h1 className={styles.pageTitle}>THE BAJA SAE COLLEGIATE DESIGN SERIES</h1>
                </FadeIn>
                <FadeIn direction="up" delay={0.1}>
                    <div className={styles.introSection}>
                        <Text className={styles.introParagraph}>
                            Sanctioned by the Society of Automotive Engineers (SAE), the Baja SAE collegiate design series was founded in 1976 with the purpose of offering real-world engineering experience to students from universities around the world.  Student teams are challenged to design and manufacture a high-performance, single-seat off-road vehicle that is aimed at the recreational user market and conforms to the comprehensive Baja SAE rulebook.  Along with the challenge of engineering the vehicle, teams must also secure financial support for their project while at the same time managing their educational priorities.  Teams will then have their performance evaluated through four-day long competitions, which consist of a rigorous technical inspection to evaluate conformance to rules, design and sales presentations given to industry professionals, cost evaluation, several dynamic events, and a four-hour long wheel-to-wheel endurance race.
                            Three official Baja SAE competitions are held in the United States each year in the spring and the CWRU Motorsports team aims to compete in each one to maximize the experience each member gains.  The team will be competing in all three of the 2020 competitions, which will be held in Arizona, Louisville, and Illinois.  Detailed information for this year's events can be seen on the SAE International website.
                        </Text>
                    </div>
                </FadeIn>

                <FadeIn direction="up" delay={0.1}>
                    <div className={styles.accomplishmentsSection}>
                        <Title order={2} className={styles.accomplishmentsTitle}>
                            THE TEAM'S GROWING LIST OF ACCOMPLISHMENTS
                        </Title>
                        {seasons.map((season, index) => (
                            <SeasonSection
                                key={index}
                                year={season.year}
                                competitions={season.competitions}
                            />
                        ))}
                    </div>
                </FadeIn>
            </Container>
            <FooterSocial />
        </>
    );
}