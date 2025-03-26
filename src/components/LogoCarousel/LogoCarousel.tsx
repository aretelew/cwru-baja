import styles from './LogoCarousel.module.css';

interface LogoCarouselProps {
  logos: string[];
  links?: string[];
}

export const LogoCarousel = ({ logos, links = [] }: LogoCarouselProps) => {
  return (
    <div className={styles.logoCarousel}>
      <div className={styles.logoTrack}>
        {/* First set */}
        {logos.map((logo, index) => (
          <div className={styles.logoItem} key={`logo-1-${index}`}>
            {links[index] ? (
              <a
                href={links[index]}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.logoLink}
              >
                <img src={logo} alt={`Sponsor logo ${index + 1}`} />
              </a>
            ) : (
              <div className={styles.logoLink}>
                <img src={logo} alt={`Sponsor logo ${index + 1}`} />
              </div>
            )}
          </div>
        ))}
        {/* Second set */}
        {logos.map((logo, index) => (
          <div className={styles.logoItem} key={`logo-2-${index}`}>
            {links[index] ? (
              <a
                href={links[index]}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.logoLink}
              >
                <img src={logo} alt={`Sponsor logo ${index + 1} (copy)`} />
              </a>
            ) : (
              <div className={styles.logoLink}>
                <img src={logo} alt={`Sponsor logo ${index + 1} (copy)`} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};