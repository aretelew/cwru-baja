import { IconBrandInstagram, IconBrandYoutube, IconBrandFacebook, IconBrandLinkedin } from '@tabler/icons-react';
import { ActionIcon, Container, Group } from '@mantine/core';
import classes from './FooterSocial.module.css';
import logo from '../../assets/logo/team/cwru_motorsports_white_logo.png';

export function FooterSocial() {
    return (
        <div className={classes.footer}>
            <Container className={classes.inner}>
                <img src={logo} alt="Logo" style={{height: 40}}/>
                <Group gap={0} className={classes.links} justify="flex-end" wrap="nowrap">
                    <ActionIcon
                        size="lg"
                        color="gray"
                        variant="subtle"
                        component="a"
                        href="https://twitter.com/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <IconBrandInstagram size={18} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon
                        size="lg"
                        color="gray"
                        variant="subtle"
                        component="a"
                        href="https://www.youtube.com/channel/UCbYI9bH2k-ggW2idGL_oSUA"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <IconBrandYoutube size={18} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon
                        size="lg"
                        color="gray"
                        variant="subtle"
                        component="a"
                        href="https://www.instagram.com/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <IconBrandFacebook size={18} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon
                        size="lg"
                        color="gray"
                        variant="subtle"
                        component="a"
                        href="https://www.instagram.com/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <IconBrandLinkedin size={18} stroke={1.5} />
                    </ActionIcon>
                </Group>
            </Container>
        </div>
    );
}