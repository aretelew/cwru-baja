import { HeaderSimple } from '../../../components/HeaderSimple/HeaderSimple.tsx';
import { FooterSocial } from '../../../components/FooterSocial/FooterSocial.tsx';
import { Container, Card, Text, Button } from '@mantine/core';
import {
  IconBrandInstagram,
  IconBrandYoutube,
  IconBrandFacebook,
  IconBrandLinkedin
} from '@tabler/icons-react';
import styles from './Social.module.css';

const socialPlatforms = [
  {
    name: 'Instagram',
    icon: IconBrandInstagram,
    color: '#E1306C',
    url: 'https://instagram.com/your-handle',
    description: 'Follow us on Instagram for behind-the-scenes content and team updates.',
    buttonText: 'Follow on Instagram'
  },
  {
    name: 'YouTube',
    icon: IconBrandYoutube,
    color: '#FF0000',
    url: 'https://youtube.com/your-channel',
    description: 'Subscribe to our YouTube channel for technical videos and event coverage.',
    buttonText: 'Subscribe on YouTube'
  },
  {
    name: 'Facebook',
    icon: IconBrandFacebook,
    color: '#1877F2',
    url: 'https://facebook.com/your-page',
    description: 'Join our Facebook community for event announcements and team news.',
    buttonText: 'Like on Facebook'
  },
  {
    name: 'LinkedIn',
    icon: IconBrandLinkedin,
    color: '#0A66C2',
    url: 'https://linkedin.com/company/your-page',
    description: 'Connect with us on LinkedIn for professional updates and networking.',
    buttonText: 'Connect on LinkedIn'
  }
];

export default function Social() {
  return (
    <>
      <div className={styles.headerContainer}>
        <HeaderSimple />
        <Container size="xl" style={{ padding: '40px 0' }}>
            <h1 className={styles.redLineTitle}>Connect With Us</h1>          <div className={styles.gridContainer}>
            {socialPlatforms.map((platform) => (
              <Card
                key={platform.name}
                shadow="sm"
                padding="xl"
                className={styles.socialCard}
              >
                <Card.Section className={styles.iconSection}>
                  <platform.icon size={48} color={platform.color} />
                </Card.Section>
                <Text fw={500} size="lg" mt="md">{platform.name}</Text>
                <Text size="sm" c="dimmed" mt="sm">
                  {platform.description}
                </Text>
                <Button
                  component="a"
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="light"
                  fullWidth
                  mt="md"
                  radius="md"
                  style={{ backgroundColor: platform.color, color: 'white' }}
                >
                  {platform.buttonText}
                </Button>
              </Card>
            ))}
          </div>
        </Container>
      </div>
      <FooterSocial />
    </>
  );
}