import { useRef, useEffect, useState, ReactNode } from 'react';
import './FadeIn.module.css';

interface FadeInProps {
    children: ReactNode;
    delay?: number;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
    distance?: number;
    threshold?: number;
}

export const FadeIn = ({
                           children,
                           delay = 0,
                           direction = 'up',
                           distance = 30,
                           threshold = 0.1
                       }: FadeInProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: threshold
            }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [threshold]);

    // Determine the initial transform based on direction
    let transform = 'translateY(0)';
    if (direction === 'up') transform = `translateY(${distance}px)`;
    if (direction === 'down') transform = `translateY(-${distance}px)`;
    if (direction === 'left') transform = `translateX(${distance}px)`;
    if (direction === 'right') transform = `translateX(-${distance}px)`;

    return (
        <div
            ref={ref}
            className={`fade-in ${isVisible ? 'visible' : ''}`}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translate(0)' : transform,
                transition: `opacity 0.6s ease-out, transform 0.6s ease-out`,
                transitionDelay: `${delay}s`
            }}
        >
            {children}
        </div>
    );
};