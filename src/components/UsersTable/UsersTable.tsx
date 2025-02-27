import { Anchor, Badge, Group, Table, Text } from '@mantine/core';
import styles from './UsersTable.module.css';

const jobColors: Record<string, string> = {
    'Systems': 'blue',
    'CNC Manufacturing': 'green',
    'Frame/Suspension': 'red',
    'Brakes': 'purple',
    'Manufacturing': 'yellow',
    'Test Engineering': 'orange',
    'Drivetrain': 'cyan',
    'Frame': 'pink',
    'Suspension': 'teal',
    'Design': 'gray'
};

const data = [
    { name: 'Abra Giddings', subteam: 'Systems', year: '', major: '' },
    { name: 'Abraham Loren', subteam: 'CNC Manufacturing', year: '', major: '' },
    { name: 'AJ Williams', subteam: 'Frame/Suspension', year: '', major: '' },
    { name: 'Anthony Retelewski', subteam: 'Brakes', year: '', major: '' },
    { name: 'Ari Avalos', subteam: 'Frame', year: '', major: '' },
    { name: 'Arka Nath', subteam: 'Brakes', year: '', major: '' },
    { name: 'Aryeh Rothenberg', subteam: 'Manufacturing', year: '', major: '' },
    { name: 'Avaneesh Rao', subteam: 'Brakes/Suspension', year: '', major: '' },
    { name: 'Ben Roy', subteam: 'Test Engineering', year: '', major: '' },
    { name: 'Brendan Flanagan', subteam: 'CNC', year: '', major: '' },
    { name: 'Cameron Griffith', subteam: 'Manufacturing', year: '', major: '' },
    { name: 'Ciaran Nimick', subteam: 'Test Engineering', year: '', major: '' },
    { name: 'Cole Smith', subteam: 'Systems', year: '', major: '' },
    { name: 'Daniel de Dios Molina', subteam: '', year: '', major: '' },
    { name: 'David Kaplan', subteam: '', year: '', major: '' },
    { name: 'Eladov Kleinerman', subteam: 'CNC', year: '', major: '' },
    { name: 'Evan Grover', subteam: 'Systems', year: '', major: '' },
    { name: 'Evan Zhou', subteam: 'Manufacturing', year: '', major: '' },
    { name: 'Finn Barrett', subteam: '', year: '', major: '' },
    { name: 'Gabriel Kenji Miyake', subteam: 'Frame', year: '', major: '' },
    { name: 'Giovanni Ricupero', subteam: 'Suspension', year: '', major: '' },
    { name: 'Isaac Hugenberger', subteam: 'Design', year: '', major: '' },
    { name: 'Jack Fink', subteam: 'Manufacturing', year: '', major: '' },
    { name: 'Jake Meltzer', subteam: 'Manufacturing', year: '', major: '' },
    { name: 'James Evans', subteam: 'Manufacturing', year: '', major: '' },
    { name: 'Jesse Nevling', subteam: 'Drivetrain', year: '', major: '' },
    { name: 'Jessica Shue', subteam: 'Frame', year: '', major: '' },
    { name: 'John Scherer', subteam: 'Frame', year: '', major: '' },
    { name: 'Jonah Keller', subteam: 'Manufacturing', year: '', major: '' },
    { name: 'Jonah Lorenzo', subteam: 'Systems', year: '', major: '' },
    { name: 'Karthik Rajasekar', subteam: 'Manufacturing', year: '', major: '' },
    { name: 'Kyle Rosenbaum', subteam: 'Manufacturing', year: '', major: '' },
    { name: 'Zach Wolf', subteam: 'Manufacturing', year: '', major: '' },
    { name: 'Zane Sandelin', subteam: 'Drivetrain', year: '', major: '' },
];

export function UsersTable() {
    const rows = data.map((item) => (
        <Table.Tr key={item.name} className={styles.tableRow}>
            <Table.Td className={styles.tableCell}>
                <Group gap="sm">
                    <Text fz="sm" fw={500}>{item.name}</Text>
                </Group>
            </Table.Td>
            <Table.Td className={styles.tableCell}>
                <Badge color={jobColors[item.subteam] || 'gray'} variant="light">{item.subteam}</Badge>
            </Table.Td>
            <Table.Td className={styles.tableCell}>
                <Anchor component="button" size="sm">{item.year}</Anchor>
            </Table.Td>
            <Table.Td className={styles.tableCell}>
                <Text fz="sm">{item.major}</Text>
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