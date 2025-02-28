import { HeaderSimple } from '../../../components/HeaderSimple/HeaderSimple.tsx';
import { FooterSocial } from '../../../components/FooterSocial/FooterSocial.tsx';
import { Container, Image, Text } from '@mantine/core';
import styles from './Team.module.css';
import { UsersTable } from "../../../components/UsersTable/UsersTable.tsx";
import myImage from '../../../assets/images/butler_bash_car_lineup.jpg';
import LMF04593 from '../../../assets/images/headshots/LMF04593.jpg';
import LMF04533 from '../../../assets/images/headshots/LMF04533.jpg';
import LMF04640 from '../../../assets/images/headshots/LMF04640.jpg';
import LMF04651 from '../../../assets/images/headshots/LMF04651.jpg';
import LMF04525 from '../../../assets/images/headshots/LMF04525.jpg';
import LMF04560 from '../../../assets/images/headshots/LMF04560.jpg';
import LMF04478 from '../../../assets/images/headshots/LMF04478.jpg';
import LMF04609 from '../../../assets/images/headshots/LMF04609.jpg';
import LMF04589 from '../../../assets/images/headshots/LMF04589.jpg';
import LMF04514 from '../../../assets/images/headshots/LMF04514.jpg';
import LMF04613 from '../../../assets/images/headshots/LMF04613.jpg';
import LMF04606 from '../../../assets/images/headshots/LMF04606.jpg';
import LMF04542 from '../../../assets/images/headshots/LMF04542.jpg';
import LMF04690 from '../../../assets/images/headshots/LMF04690.jpg';
import LMF04627 from '../../../assets/images/headshots/LMF04627.jpg';
import LMF04655 from '../../../assets/images/headshots/LMF04655.jpg';
import LMF04466 from '../../../assets/images/headshots/LMF04466.jpg';
import LMF04721 from '../../../assets/images/headshots/LMF04721.jpg';
import LMF04619 from '../../../assets/images/headshots/LMF04619.jpg';

type MemberType = {
    name: string;
    role: string;
    img: string;
    graduationYear: string; // Added graduation year
    linkedin?: string;
};

const executiveBoard: MemberType[] = [
    {
        name: "Simon Merenstein",
        role: "Team Captain",
        img: LMF04593,
        graduationYear: "2025",
        linkedin: "https://www.linkedin.com/in/simon-merenstein/"
    },
    {
        name: "Liam Flanagan",
        role: "Technical Lead",
        img: LMF04533,
        graduationYear: "2026",
        linkedin: "https://www.linkedin.com/in/liam-f"
    },
    {
        name: "Arnav Manu",
        role: "President",
        img: LMF04640,
        graduationYear: "2025",
        linkedin: "https://www.linkedin.com/in/arnav-manu-667444253/"
    },
    {
        name: "Amy Budzichowski",
        role: "President",
        img: LMF04651,
        graduationYear: "2024",
        linkedin: "https://www.linkedin.com/in/amy-budzichowski/"
    },
];

const operationsBoard: MemberType[] = [
    {
        name: "Brendan Flanagan",
        role: "CNC Lead",
        img: LMF04560,
        graduationYear: "2026",
        linkedin: "https://www.linkedin.com/in/brendan-flanagan-3220492a3/"
    },
    {
        name: "Auston Govender",
        role: "Brakes & Throttle Lead",
        img: LMF04525,
        graduationYear: "2027",
        linkedin: "https://www.linkedin.com/in/auston-govender/"
    },
    {
        name: "Ammar Ali Asghar",
        role: "Rear Drivetrain Lead",
        img: LMF04478,
        graduationYear: "2025",
        linkedin: "https://www.linkedin.com/in/ammar-ali-asghar-8129b524b/"
    },
    {
        name: "Daniel Clare",
        role: "Suspension & Steering Lead",
        img: LMF04609,
        graduationYear: "2026",
        linkedin: "https://www.linkedin.com/in/daniel-clare-5b49aa227/"
    },
    {
        name: "Jordan Haight",
        role: "Test Engineering",
        img: LMF04589,
        graduationYear: "2026",
        linkedin: "https://www.linkedin.com/in/jordanhaight/"
    },
    {
        name: "Xavier Nye",
        role: "Front Drivetrain Lead",
        img: LMF04514,
        graduationYear: "2025",
        linkedin: "https://www.linkedin.com/in/xavier-nye-29034a229/"
    },
    {
        name: "Uzair Syed",
        role: "Systems Lead",
        img: LMF04613,
        graduationYear: "2026",
        linkedin: "https://www.linkedin.com/in/77uzairsyed77/"
    },
    {
        name: "Devin Korybski",
        role: "Systems Lead",
        img: LMF04606,
        graduationYear: "2025",
        linkedin: "https://www.linkedin.com/in/devin-korybski-34835a28a/"
    },
    {
        name: "Shelley Wei",
        role: "Systems Lead",
        img: LMF04542,
        graduationYear: "2025",
        linkedin: "https://www.linkedin.com/in/shelleyywei/"
    },
    {
        name: "Collin Lorenzen",
        role: "Systems Lead",
        img: LMF04690,
        graduationYear: "2025",
        linkedin: ""
    },
];

const specialtyLeads: MemberType[] = [
    {
        name: "Lucy Ma",
        role: "President",
        img: LMF04627,
        graduationYear: "2026",
        linkedin: "https://www.linkedin.com/in/lucyma-/"
    },
    {
        name: "Ari Avalos",
        role: "Welding Lead",
        img: myImage,
        graduationYear: "2026",
        linkedin: ""
    },
    {
        name: "Kenji Miyake",
        role: "President",
        img: LMF04655,
        graduationYear: "2026",
        linkedin: "https://www.linkedin.com/in/gabrielkenjimiyake/"
    },
    {
        name: "Joshua Stout",
        role: "President",
        img: LMF04466,
        graduationYear: "2026",
        linkedin: "https://www.linkedin.com/in/joshua-martin-stout/"
    },
    {
        name: "Jessica Shue",
        role: "President",
        img: LMF04721,
        graduationYear: "2026",
        linkedin: "https://www.linkedin.com/in/jessica-s-7b7935268/"
    },
    {
        name: "John Scherer",
        role: "President",
        img: LMF04619,
        graduationYear: "2027",
        linkedin: "https://www.linkedin.com/in/john-scherer-299264300/"
    },
    {
        name: "Anthony Retelewski",
        role: "Website Lead",
        img: myImage,
        graduationYear: "2028",
        linkedin: "https://www.linkedin.com/in/anthony-retelewski-4340402aa/"
    },
];

function Member({ name, role, img, graduationYear, linkedin }: MemberType) {
    const imageContent = (
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
    );

    return (
        <div className={styles.member}>
            {linkedin ? (
                <>
                    <a
                        href={linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.linkedinLink}
                    >
                        {imageContent}
                        <Text size="lg" mt="md" className={styles.linkedinName}>
                            {name}
                        </Text>
                    </a>
                </>
            ) : (
                <>
                    {imageContent}
                    <Text size="lg" mt="md">
                        {name}
                    </Text>
                </>
            )}
            <Text size="sm">
                {role}
            </Text>
            <Text size="sm" className={styles.gradYear}>
                Class of {graduationYear}
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