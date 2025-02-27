import { HeaderSimple } from '../../../components/HeaderSimple/HeaderSimple.tsx';
import { FooterSocial } from '../../../components/FooterSocial/FooterSocial.tsx';
import { Container, Image, Text } from '@mantine/core';
import styles from './Team.module.css';
import { UsersTable } from "../../../components/UsersTable/UsersTable.tsx";
import myImage from '../../../assets/images/butler_bash_car_lineup.jpg';

type MemberType = {
    name: string;
    role: string;
    img: string;
    linkedin?: string;
};

const executiveBoard: MemberType[] = [
    {
        name: "Liam Flanagan",
        role: "President",
        img: myImage,
        linkedin: "https://www.linkedin.com/in/liam-f"
    },
];

const operationsBoard: MemberType[] = [
    {
        name: "John Doe",
        role: "President",
        img: myImage,
        linkedin: "https://www.linkedin.com/in/liam-f"
    },
];

const specialtyLeads: MemberType[] = [
    {
        name: "John Doe",
        role: "President",
        img: myImage,
        linkedin: "https://www.linkedin.com/in/liam-f"
    },
];

function Member({ name, role, img, linkedin }: MemberType) {
    return (
        <div className={styles.member}>
            {linkedin ? (
                <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkedinLink}
                >
                    <div className={styles.imageWrapper}>
                        <Image
                            src={img}
                            alt={name}
                            radius="50%"
                            h={150}
                            w={150}
                            fit="cover"
                        />
                    </div>
                    <Text size="lg" mt="md" className={styles.linkedinName}>
                        {name}
                    </Text>
                </a>
            ) : (
                <>
                    <div className={styles.imageWrapper}>
                        <Image
                            src={img}
                            alt={name}
                            radius="50%"
                            h={150}
                            w={150}
                            fit="cover"
                        />
                    </div>
                    <Text size="lg" mt="md">
                        {name}
                    </Text>
                </>
            )}
            <Text size="sm">
                {role}
            </Text>
        </div>
    );
}

export default function Team() {
    return (
        <>
            <div className={styles.headerContainer}>
                <HeaderSimple />
                <Container>
                    <h1 className={styles.teamTitle}>THE 2024-2025 CWRU MOTORSPORTS TEAM</h1>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>Executive Board</h2>
                        <div className={styles.membersContainer}>
                            {executiveBoard.map((member) => (
                                <Member key={member.name} {...member} />
                            ))}
                        </div>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>Operations Board</h2>
                        <div className={styles.membersContainer}>
                            {operationsBoard.map((member) => (
                                <Member key={member.name} {...member} />
                            ))}
                        </div>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>Specialty Leads</h2>
                        <div className={styles.membersContainer}>
                            {specialtyLeads.map((member) => (
                                <Member key={member.name} {...member} />
                            ))}
                        </div>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>General Body</h2>
                        <UsersTable />
                    </div>
                </Container>
            </div>
            <FooterSocial />
        </>
    );
}