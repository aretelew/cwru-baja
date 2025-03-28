import { HeaderSimple } from '../../../components/HeaderSimple/HeaderSimple.tsx';
import { FooterSocial } from '../../../components/FooterSocial/FooterSocial.tsx';
import { Card, Text, Button } from '@mantine/core';
import { FadeIn } from '../../../components/FadeIn/FadeIn';
import {
  IconBrandInstagram,
  IconBrandYoutube,
  IconBrandFacebook,
  IconBrandLinkedin
} from '@tabler/icons-react';
import styles from './Social.module.css';
import { HeroSection } from "../../../components/HeroSection/HeroSection.tsx";
// import myImage from "../../../assets/images/butler_bash_car_lineup.jpg";
import heroImage from "../../../assets/images/LMF03065.jpg";


const socialPlatforms = [
  {
    name: 'Instagram',
    icon: IconBrandInstagram,
    color: '#E1306C',
    url: 'https://www.instagram.com/cwrubaja/?hl=en',
    description: 'Follow us on Instagram for behind-the-scenes content and team updates.',
    buttonText: 'Follow on Instagram'
  },
  {
    name: 'YouTube',
    icon: IconBrandYoutube,
    color: '#FF0000',
    url: 'https://www.youtube.com/channel/UCbYI9bH2k-ggW2idGL_oSUA',
    description: 'Subscribe to our YouTube channel for technical videos and event coverage.',
    buttonText: 'Subscribe on YouTube'
  },
  {
    name: 'Facebook',
    icon: IconBrandFacebook,
    color: '#1877F2',
    url: 'https://www.facebook.com/cwrubaja/',
    description: 'Join our Facebook community for event announcements and team news.',
    buttonText: 'Like on Facebook'
  },
  {
    name: 'LinkedIn',
    icon: IconBrandLinkedin,
    color: '#0A66C2',
    url: 'https://www.linkedin.com/company/cwru-motorsports/',
    description: 'Connect with us on LinkedIn for professional updates and networking.',
    buttonText: 'Connect on LinkedIn'
  }
];

export default function Social() {
  return (
      <>
        <HeaderSimple />
        <div className={styles.mainContainer}>
          <HeroSection
              backgroundImage={heroImage}
              title={`CONNECT WITH US`}
              verticalPosition="40%"
          />
            <div className={styles.gridContainer}>
              {socialPlatforms.map((platform, index) => (
                  <FadeIn key={platform.name} direction="up" delay={0.1 * index}>
                    <Card
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
                  </FadeIn>
              ))}
            </div>
        </div>
        <FooterSocial />
      </>
  );
}