import { Anchor, Badge, Group, Table, Text } from '@mantine/core';
import styles from './UsersTable.module.css';

const jobColors: Record<string, string> = {
    'Systems': 'blue',
    'CNC': 'green',
    'Brakes': 'red',
    'Manufacturing': 'yellow',
    'Test Engineering': 'brown',
    'Drivetrain': 'cyan',
    'Frame': 'orange',
    'Suspension': 'teal',
    'Design': 'gray'
};

interface UserDataType {
    name: string;
    subteams: string[];
    classOf: string;
    major: string;
}

const data: UserDataType[] = [
    { name: 'Abra Giddings', subteams: ['Systems', 'Brakes'], classOf: '', major: '' },
    { name: 'Abraham Loren', subteams: ['CNC'], classOf: '', major: '' },
    { name: 'AJ Williams', subteams: ['Frame', 'Suspension'], classOf: '', major: '' },
    { name: 'Anthony Retelewski', subteams: ['Brakes'], classOf: '', major: '' },
    { name: 'Ari Avalos', subteams: ['Frame'], classOf: '', major: '' },
    { name: 'Arka Nath', subteams: ['Brakes'], classOf: '', major: '' },
    { name: 'Aryeh Rothenberg', subteams: ['Manufacturing'], classOf: '', major: '' },
    { name: 'Avaneesh Rao', subteams: ['Brakes', 'Suspension'], classOf: '', major: '' },
    { name: 'Ben Roy', subteams: ['Test Engineering'], classOf: '', major: '' },
    { name: 'Brendan Flanagan', subteams: ['CNC'], classOf: '', major: '' },
    { name: 'Cameron Griffith', subteams: ['Manufacturing'], classOf: '', major: '' },
    { name: 'Ciaran Nimick', subteams: ['Test Engineering'], classOf: '', major: '' },
    { name: 'Cole Smith', subteams: ['Systems'], classOf: '', major: '' },
    { name: 'Daniel de Dios Molina', subteams: [], classOf: '', major: '' },
    { name: 'David Kaplan', subteams: [], classOf: '', major: '' },
    { name: 'Eladov Kleinerman', subteams: ['CNC'], classOf: '', major: '' },
    { name: 'Evan Grover', subteams: ['Systems'], classOf: '', major: '' },
    { name: 'Evan Zhou', subteams: ['Manufacturing'], classOf: '', major: '' },
    { name: 'Finn Barrett', subteams: [], classOf: '', major: '' },
    { name: 'Gabriel Kenji Miyake', subteams: ['Frame'], classOf: '', major: '' },
    { name: 'Giovanni Ricupero', subteams: ['Suspension'], classOf: '', major: '' },
    { name: 'Isaac Hugenberger', subteams: ['Design'], classOf: '', major: '' },
    { name: 'Jack Fink', subteams: ['Manufacturing'], classOf: '', major: '' },
    { name: 'Jake Meltzer', subteams: ['Manufacturing'], classOf: '', major: '' },
    { name: 'James Evans', subteams: ['Manufacturing'], classOf: '', major: '' },
    { name: 'Jesse Nevling', subteams: ['Drivetrain'], classOf: '', major: '' },
    { name: 'Jessica Shue', subteams: ['Frame'], classOf: '', major: '' },
    { name: 'John Scherer', subteams: ['Frame'], classOf: '', major: '' },
    { name: 'Jonah Keller', subteams: ['Manufacturing'], classOf: '', major: '' },
    { name: 'Jonah Lorenzo', subteams: ['Systems'], classOf: '', major: '' },
    { name: 'Karthik Rajasekar', subteams: ['Manufacturing'], classOf: '', major: '' },
    { name: 'Kyle Rosenbaum', subteams: ['Manufacturing'], classOf: '', major: '' },
    { name: 'Zach Wolf', subteams: ['Manufacturing'], classOf: '', major: '' },
    { name: 'Zane Sandelin', subteams: ['Drivetrain'], classOf: '', major: '' },
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
                <Group gap="xs">
                    {item.subteams.map((subteam) => (
                        <Badge
                            key={subteam}
                            color={jobColors[subteam] || 'gray'}
                            variant="light"
                        >
                            {subteam}
                        </Badge>
                    ))}
                </Group>
            </Table.Td>
            <Table.Td className={styles.tableCell}>
                <Anchor component="button" size="sm">{item.classOf}</Anchor>
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
                        <Table.Th>Class Of</Table.Th>
                        <Table.Th>Major</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{rows}</Table.Tbody>
            </Table>
        </div>
    );
}