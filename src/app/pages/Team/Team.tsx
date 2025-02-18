import { HeaderSimple } from '../../../components/HeaderSimple/HeaderSimple.tsx';
import { FooterSocial } from '../../../components/FooterSocial/FooterSocial.tsx';
import { Container, Image, Text } from '@mantine/core';
import styles from './Team.module.css';
import { UsersTable } from "../../../components/UsersTable/UsersTable.tsx";
import myImage from '../../../assets/images/butler_bash_car_lineup.jpg';

// Use placeholder images for testing
const placeholderImage = myImage

const executiveBoard = [
    { name: "John Doe", role: "President", img: placeholderImage },
    { name: "Jane Smith", role: "Vice President", img: placeholderImage },
];

const operationsBoard = [
    { name: "Alice Johnson", role: "Operations Manager", img: placeholderImage },
    { name: "Bob Brown", role: "Logistics Lead", img: placeholderImage },
    { name: "David Miller", role: "Finance Lead", img: placeholderImage },
    { name: "David Miller", role: "Finance Lead", img: placeholderImage },
    { name: "David Miller", role: "Finance Lead", img: placeholderImage },
    { name: "David Miller", role: "Finance Lead", img: placeholderImage },
    { name: "David Miller", role: "Finance Lead", img: placeholderImage },
];

const specialtyLeads = [
    { name: "Charlie Davis", role: "Braking Lead", img: placeholderImage },
    { name: "Emily White", role: "Suspension Lead", img: placeholderImage },
    { name: "Frank Roberts", role: "Powertrain Lead", img: placeholderImage },
    { name: "Grace Chen", role: "Aerodynamics Lead", img: placeholderImage },
];

function Member({ name, role, img }: { name: string; role: string; img: string }) {
    return (
        <div className={styles.member}>
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