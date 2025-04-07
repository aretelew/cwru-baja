import { HeaderSimple } from '../../../components/HeaderSimple/HeaderSimple';
import { FooterSocial } from '../../../components/FooterSocial/FooterSocial';
import { Text, Title } from '@mantine/core';
import { Element } from 'react-scroll';
import { useEffect, useState } from 'react';
import styles from './Car.module.css';
import { FadeIn } from '../../../components/FadeIn/FadeIn';

export default function Car() {
    const [currentFrame, setCurrentFrame] = useState(1);
    const totalFrames = 5;

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY || document.documentElement.scrollTop;
            const scrollable = document.documentElement.scrollHeight - window.innerHeight;
            if (scrollable > 0) {
                const fraction = scrolled / scrollable;
                const nextFrame = Math.ceil(fraction * totalFrames);
                setCurrentFrame(Math.min(Math.max(nextFrame, 1), totalFrames));
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Trigger initial calculation
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [totalFrames]);

    const carSpecs = [
        {
            title: 'FRAME',
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
            title: 'FRONT SUSPENSION',
            specs: [
                { name: 'Suspension System', value: 'Double wishbones with custom upright and hub CNC-machined in-house' },
                { name: 'Springs and Dampers', value: 'FOX Float 3 EVOL with added piggyback chamber and semi-active valve' },
                { name: 'Steering System', value: 'Completely custom rack and pinion steering system machined by BMT Aerospace' },
            ]
        },
        {
            title: 'REAR SUSPENSION',
            specs: [
                { name: 'Suspension System', value: 'Semi-trailing arm with 3D-printed titanium load-bearing rear half-shaft produced by BMT Aerospace' },
                { name: 'Springs and Dampers', value: 'FOX Float 3 EVOL with added piggyback chamber and semi-active valve' },
            ]
        },
        {
            title: 'BRAKING SYSTEM',
            specs: [
                { name: 'Braking System', value: 'Tilton dual master cylinder hydraulic system with Wilwood proportioning valve' },
                { name: 'Calipers', value: 'Single piston custom CNC aluminum calipers. Outboard front and inboard rear calipers' },
                { name: 'Pads and Rotors', value: 'American Friction pads and single piece rotors' },
            ]
        },
    ];

    return (
        <>
            <HeaderSimple />
            <div className={styles.headerContainer}>
                <FadeIn direction="up">
                    <h1 className={styles.pageTitle}>THE 2024 CWRU MOTORSPORTS VEHICLE</h1>
                </FadeIn>
                <FadeIn direction="up" delay={0.1}>
                    <div className={styles.introSection}>
                        <Text className={styles.introParagraph}>
                            Introducing the 2025 CWRU Motorsports competition vehicle, the SR25, a true marvel of engineering that embodies nine months of relentless dedication by our talented team. Designed to conquer the 2025 Baja SAE Collegiate Design Series competition, the SR25 represents a groundbreaking evolution in CWRU Motorsports' vehicle design history. The design for SR25 began June 2022 after the conclusion of the 2024 Baja SAE competitions. The most notable change was the engine upgrade, transitioning to the 14hp Kohler Command Pro CH440 engine. A change away from the Briggs and Stratton Engine which had been in every SR model since the start of the team.
                        </Text>
                    </div>
                </FadeIn>
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.textContent}>
                    {carSpecs.map((section, sectionIndex) => (
                        <FadeIn direction="up" delay={0.1 * sectionIndex} key={sectionIndex}>
                            <Element name={`section-${sectionIndex}`} className={styles.section}>
                                <Title order={2}>{section.title}</Title>
                                <div className={styles.specGrid}>
                                    {section.specs.map((spec, specIndex) => (
                                        <div key={specIndex} className={styles.specRow}>
                                            <Text className={styles.specName}>{spec.name}</Text>
                                            <Text className={styles.specValue}>{spec.value}</Text>
                                        </div>
                                    ))}
                                </div>
                            </Element>
                        </FadeIn>
                    ))}
                </div>
                <div className={styles.modelContainer}>
                    <div className={styles.frameText}>
                        <Title order={1}>Frame {currentFrame}</Title>
                        <Text size="xl">
                            {currentFrame === 1 && 'Front view of the car'}
                            {currentFrame === 2 && 'Side view (driver\'s side)'}
                            {currentFrame === 3 && 'Rear view of the car'}
                            {currentFrame === 4 && 'Side view (passenger side)'}
                            {currentFrame === 5 && 'Top view of the car'}
                        </Text>
                    </div>
                </div>
            </div>
            <FooterSocial />
        </>
    );
}