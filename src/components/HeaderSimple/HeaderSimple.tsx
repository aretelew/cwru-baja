import { useState, useEffect } from 'react';
import { Burger, Container, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useNavigate, useLocation } from 'react-router-dom';
import classes from './HeaderSimple.module.css';
import logo from '../../assets/logo/team/cwru_motorsports_white_no_text_logo.png';

const links = [
    { link: '/', label: 'Home' },
    { link: '/about', label: 'About' },
    { link: '/team', label: 'Team' },
    { link: '/car', label: 'Car' },
    { link: '/competition', label: 'Competition' },
    { link: '/support', label: 'Support' },
    { link: '/social', label: 'Social' }
];

export function HeaderSimple() {
    const [opened, { toggle }] = useDisclosure(false);
    const location = useLocation();
    const [active, setActive] = useState(location.pathname);
    const navigate = useNavigate();

    useEffect(() => {
        setActive(location.pathname);
    }, [location.pathname]);

    const items = links.map((link) => (
        <a
            key={link.label}
            href={link.link}
            className={classes.link}
            data-active={active === link.link || undefined}
            onClick={(event) => {
                event.preventDefault();
                setActive(link.link);
                navigate(link.link);
            }}
        >
            {link.label}
        </a>
    ));

    return (
        <header className={classes.header}>
            <Container size="xl" className={classes.inner}>
                <img src={logo} alt="Logo" style={{ height: 40 }} />
                <Group gap={5} visibleFrom="xs">
                    {items}
                </Group>
                <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
            </Container>
        </header>
    );
}