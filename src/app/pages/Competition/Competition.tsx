import { Text, Title, Badge, Paper, Grid, Stack } from '@mantine/core';
import { HeaderSimple } from '../../../components/HeaderSimple/HeaderSimple';
import { FooterSocial } from '../../../components/FooterSocial/FooterSocial';
import styles from './Competition.module.css';

const Award = ({ place, text }) => {
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
            {`${placement}${getOrdinalSuffix(placement)} Place ${award}`}
        </Badge>
    );
};

const getOrdinalSuffix = (number: number) => {
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

const SeasonSection = ({ year, competitions }) => (
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
                                <Award key={awardIndex} place={awardIndex + 1} text={award} />
                            ))}
                        </Stack>
                    </Paper>
                </Grid.Col>
            ))}
        </Grid>
    </div>
);

export default function Competition() {
    const seasons = [
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
            year: "2019",
            competitions: [
                {
                    name: "BAJA SAE ROCHESTER",
                    awards: [
                        "RAYMOND 1ST PLACE ACCELERATION AWARD"
                    ]
                }
            ]
        }
    ];

    return (
        <>
            <HeaderSimple />
            <div className={styles.headerContainer}>
                <div className={styles.introSection}>
                    <Title order={1} className={styles.mainTitle}>
                        THE BAJA SAE COLLEGIATE DESIGN SERIES
                    </Title>
                    <Text size="lg" className={styles.description}>
                        Supported by the Society of Automotive Engineers (SAE), the Baja SAE collegiate design series was founded in 1976 with the intention of offering engineering students the chance to gain real-world experience around the world.
                    </Text>
                </div>
                <div>
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
            </div>
            <FooterSocial />
        </>
    );
}
