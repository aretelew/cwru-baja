import { Title, Image, Container } from '@mantine/core';
import { FadeIn } from '../FadeIn/FadeIn';
import styles from './HeroSection.module.css';

interface HeroSectionProps {
  backgroundImage: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export function HeroSection({ backgroundImage, title, subtitle, className }: HeroSectionProps) {
  return (
    <div className={`${styles.heroSection} ${className || ''}`}>
      <div className={styles.heroOverlay}></div>
      <Image src={backgroundImage} alt="Hero background" className={styles.heroBackground} />
      <Container size="xl" className={styles.heroContent}>
        <FadeIn direction="up">
          <Title className={styles.heroTitle}>{title}</Title>
          {subtitle && (
            <Title order={2} className={styles.heroSubtitle}>{subtitle}</Title>
          )}
        </FadeIn>
      </Container>
    </div>
  );
}