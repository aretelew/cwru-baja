import { Title, Image, Container } from '@mantine/core';
import { FadeIn } from '../FadeIn/FadeIn';
import styles from './HeroSection.module.css';

interface HeroSectionProps {
  backgroundImage: string;
  title: string;
  subtitle?: string;
  className?: string;
  maxWidth?: string | number;
  verticalPosition?: string | number;
}

export function HeroSection({
  backgroundImage,
  title,
  subtitle,
  className,
  maxWidth = "xl",
  verticalPosition = "center"
}: HeroSectionProps) {

  const imageStyle = {
    objectPosition: `center ${verticalPosition}`
  };

  return (
    <div className={`${styles.heroSection} ${className || ''}`}>
      <div className={styles.heroOverlay}></div>
      <Image
        src={backgroundImage}
        alt="Hero background"
        className={styles.heroBackground}
        style={imageStyle}
      />
      <Container size={maxWidth} className={styles.heroContent}>
        <FadeIn direction="up">
          <Title size="3rem" className={styles.heroTitle}>{title}</Title>{subtitle && (<Title order={2} className={styles.heroSubtitle}>{subtitle}</Title>
          )}
        </FadeIn>
      </Container>
    </div>
  );
}