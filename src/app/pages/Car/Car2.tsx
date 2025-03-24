import { HeaderSimple } from '../../../components/HeaderSimple/HeaderSimple';
import { FooterSocial } from '../../../components/FooterSocial/FooterSocial';
import { HeroSection } from '../../../components/HeroSection/HeroSection';
import { FadeIn } from '../../../components/FadeIn/FadeIn';
import { Container, Title, Text, Image } from '@mantine/core';
import styles from './Car2.module.css';

// Import hero image
import heroImage from '../../../assets/images/LMF02810.jpg';

// Use hero image as a placeholder for section images until real ones are available
const placeholderImage = heroImage;

export default function Car() {
  const carData = {
    name: "SR25",
    year: 2025,
    sections: [
      {
        key: "overview",
        title: "OVERVIEW",
        image: placeholderImage,
        description: "The SR24 represents the pinnacle of CWRU Motorsports engineering, designed and built over nine months for the 2024 Baja SAE Collegiate Design Series. This vehicle features significant upgrades from previous models, including a transition to the 14hp Kohler Command Pro CH440 engine—a departure from the Briggs and Stratton engines used in all previous SR models.",
      },
      {
        key: "frame",
        title: "FRAME",
        image: placeholderImage,
        description: "Our custom frame provides the foundation for our competition vehicle, designed for optimal strength-to-weight ratio and driver safety.",
        specs: [
          { name: 'Material', value: '4130N CrMo tubular structure' },
          { name: 'Joining Method', value: 'GTAW with ER70S-2 filler material at manually-notched joints' },
          { name: 'Body Panels', value: 'Molded carbon-fiber wet layup body panels with aluminum firewall and UHMW skid plate' },
          { name: 'Engine', value: '600cc 4-stroke engine' },
          { name: 'Weight', value: '400 lbs (182 kg)' },
          { name: 'Transmission', value: 'CVT with reverse' },
        ]
      },
      {
        key: "front-suspension",
        title: "FRONT SUSPENSION",
        image: placeholderImage,
        description: "Our front suspension system delivers exceptional handling and terrain absorption capabilities.",
        specs: [
          { name: 'Suspension System', value: 'Double wishbones with custom upright and hub CNC-machined in-house' },
          { name: 'Springs and Dampers', value: 'FOX Float 3 EVOL with added piggyback chamber and semi-active valve' },
          { name: 'Travel', value: '254 mm (10 in)' },
          { name: 'Wheel Size', value: '10-inch aluminum wheels with 22x7-10 Maxxis tires' },
          { name: 'Anti-Dive', value: '10% anti-dive geometry' },
          { name: 'Steering', value: 'Custom rack and pinion with 2:1 ratio' }
        ]
      },
      {
        key: "rear-suspension",
        title: "REAR SUSPENSION",
        image: placeholderImage,
        description: "Our rear suspension system provides optimal traction and stability across challenging terrain.",
        specs: [
          { name: 'Suspension System', value: 'Semi-trailing arm with 3D-printed titanium load-bearing rear half-shaft produced by BMT Aerospace' },
          { name: 'Springs and Dampers', value: 'FOX Float 3 EVOL with added piggyback chamber and semi-active valve' },
          { name: 'Travel', value: '254 mm (10 in)' },
          { name: 'Wheel Size', value: '10-inch aluminum wheels with 22x10-10 Maxxis tires' },
          { name: 'Axle', value: 'Custom 4340 steel axle with needle bearings' },
          { name: 'Anti-Squat', value: '30% anti-squat geometry' }
        ]
      },
      {
        key: "braking",
        title: "BRAKING SYSTEM",
        image: placeholderImage,
        description: "Our custom braking system delivers reliable stopping power and precise control.",
        specs: [
          { name: 'Braking System', value: 'Tilton dual master cylinder hydraulic system with Wilwood proportioning valve' },
          { name: 'Calipers', value: 'Single piston custom CNC aluminum calipers. Outboard front and inboard rear calipers' },
          { name: 'Rotors', value: 'Laser-cut 1/8" 420 stainless steel, 152mm diameter' },
          { name: 'Pedal Ratio', value: '5:1 pedal ratio for optimal braking force' },
          { name: 'Lines', value: 'Steel-braided Teflon hydraulic lines' },
          { name: 'Fluid', value: 'DOT 5.1 brake fluid' }
        ]
      },
      {
        key: "drivetrain",
        title: "DRIVETRAIN",
        image: placeholderImage,
        description: "Our powertrain system delivers optimal power transfer and efficiency for competition demands.",
        specs: [
          { name: 'Engine', value: '14hp Kohler Command Pro CH440 single-cylinder 4-stroke' },
          { name: 'Transmission', value: 'Gaged Engineering GX9 Continuously Variable Transmission (CVT)' },
          { name: 'Drive Ratio', value: '12:1 final drive ratio' },
          { name: 'Output Shaft', value: '4340 steel shaft with needle bearings' },
          { name: 'Differential', value: 'Custom torque-biasing limited slip differential' },
          { name: 'Cooling', value: 'Direct air cooled with optimized shroud design' }
        ]
      },
      {
        key: "electronics",
        title: "ELECTRONICS",
        image: placeholderImage,
        description: "Our electrical systems provide reliable power distribution and data collection for vehicle optimization.",
        specs: [
          { name: 'Battery', value: 'Lithium iron phosphate (LiFePO4) 12V battery' },
          { name: 'Wiring', value: 'Automotive-grade waterproof wiring harness with deutsch connectors' },
          { name: 'Data Acquisition', value: 'Custom PCB with integrated sensors monitoring 15+ vehicle parameters' },
          { name: 'Kill Switches', value: 'Redundant kill switches accessible from inside and outside vehicle' },
          { name: 'Sensors', value: 'Wheel speed, shock travel, steering position, brake pressure sensors' },
          { name: 'Telemetry', value: 'Real-time data transmission to pit crew with 100m range' }
        ]
      }
    ]
  };

  return (
    <>
      <HeaderSimple />
      <div className={styles.mainContainer}>
        <HeroSection
          style={{ backgroundImage: `url(${heroImage})` }}
          title="CWRU MOTORSPORTS VEHICLE"
          subtitle={carData.name}
          verticalPosition="60%"
        />

        <Container size="xl" className={styles.carContainer}>
          <FadeIn direction="up">
            <div className={styles.carIntro}>
              <Title order={1} className={styles.sectionMainTitle}>THE {carData.name} BAJA VEHICLE</Title>
              <div className={styles.mainAccent}></div>
              <Text className={styles.introDescription}>
                {carData.sections[0].description}
              </Text>
            </div>
          </FadeIn>

          <div className={styles.carSections}>
            {carData.sections.slice(1).map((section) => (
              <FadeIn key={section.key} direction="up">
                <div id={section.key} className={styles.carSection}>
                  <div className={styles.sectionHeader}>
                    <Title order={2} className={styles.sectionTitle}>{section.title}</Title>
                    <div className={styles.sectionAccent}></div>
                  </div>

                  <div className={styles.sectionContent}>
                    <div className={styles.sectionInfo}>
                      <Text className={styles.sectionDescription}>{section.description}</Text>

                      {section.specs && (
                        <div className={styles.specsList}>
                          {section.specs.map((spec, index) => (
                            <div key={index} className={styles.specItem}>
                              <Text component="span" className={styles.specName}>{spec.name}</Text>
                              <Text component="span" className={styles.specValue}>{spec.value}</Text>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className={styles.sectionImageContainer}>
                      <img
                          src={section.image}
                          alt={section.title}
                          className={styles.sectionImage}
                      />
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
        <FooterSocial />
      </div>
    </>
  );
}