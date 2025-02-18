import { Anchor, Avatar, Badge, Group, Table, Text } from '@mantine/core';
import styles from './UsersTable.module.css';

const data = [
    {
        avatar:
            'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png',
        name: 'Robert Wolfkisser',
        job: 'Engineer',
        email: 'rob_wolf@gmail.com',
        phone: '+44 (452) 886 09 12',
    },
    {
        avatar:
            'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png',
        name: 'Jill Jailbreaker',
        job: 'Engineer',
        email: 'jj@breaker.com',
        phone: '+44 (934) 777 12 76',
    },
    {
        avatar:
            'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png',
        name: 'Henry Silkeater',
        job: 'Designer',
        email: 'henry@silkeater.io',
        phone: '+44 (901) 384 88 34',
    },
    {
        avatar:
            'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png',
        name: 'Bill Horsefighter',
        job: 'Designer',
        email: 'bhorsefighter@gmail.com',
        phone: '+44 (667) 341 45 22',
    },
    {
        avatar:
            'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-10.png',
        name: 'Jeremy Footviewer',
        job: 'Manager',
        email: 'jeremy@foot.dev',
        phone: '+44 (881) 245 65 65',
    },
];

const jobColors: Record<string, string> = {
    engineer: 'blue',
    manager: 'cyan',
    designer: 'pink',
};

export function UsersTable() {
    const rows = data.map((item) => (
        <Table.Tr key={item.name} className={styles.tableRow}>
            <Table.Td className={styles.tableCell}>
                <Group gap="sm">
                    <Avatar size={50} src={item.avatar} radius={30} />
                    <Text fz="sm" fw={500}>
                        {item.name}
                    </Text>
                </Group>
            </Table.Td>
            <Table.Td className={styles.tableCell}>
                <Badge color={jobColors[item.job.toLowerCase()]} variant="light">
                    {item.job}
                </Badge>
            </Table.Td>
            <Table.Td className={styles.tableCell}>
                <Anchor component="button" size="sm">
                    {item.email}
                </Anchor>
            </Table.Td>
            <Table.Td className={styles.tableCell}>
                <Text fz="sm">{item.phone}</Text>
            </Table.Td>
        </Table.Tr>
    ));

    return (
        <div className={styles.tableContainer}>
            <Table className={styles.table} verticalSpacing="sm" highlightOnHover>
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>Student</Table.Th>
                        <Table.Th>Subteam</Table.Th>
                        <Table.Th>Year</Table.Th>
                        <Table.Th>Major</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{rows}</Table.Tbody>
            </Table>
        </div>
    );
}