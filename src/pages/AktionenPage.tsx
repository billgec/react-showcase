import { Button, Code, Group, Paper, Stack, Table, Text, Title } from '@mantine/core'

const properties = [
  [
    'variant',
    "'filled' (Default), 'light', 'outline', 'subtle', 'transparent', 'white', 'default', 'gradient'",
  ],
  ['size', "'xs'–'xl', dazu 'compact-xs'–'compact-xl' für flachere Buttons"],
  ['color', 'Theme-Farbe oder CSS-Farbe; ohne Angabe die primaryColor aus theme.ts'],
  ['radius', 'Theme-Key oder CSS-Wert, überschreibt defaultRadius'],
  ['leftSection / rightSection', 'Icon oder beliebiger Node links bzw. rechts vom Label'],
  ['justify', "Verteilung von Sections und Label innerhalb des Buttons, z. B. 'space-between'"],
  ['fullWidth', 'Button nimmt die volle Breite des Containers ein'],
  ['loading', 'Loader über dem Button, Klicks werden geblockt'],
  ['disabled', 'Setzt das echte disabled-Attribut und die Disabled-Styles'],
  ['component', 'Rendert als anderes Element, z. B. component={Link} für Navigation'],
]

const jsfMapping = [
  ['p:commandButton action="#{bean.save}"', '<Button onClick={save}>'],
  ['p:commandButton ajax="true" update="..."', 'State setzen, React rendert das Abhängige neu'],
  ['p:commandButton type="submit"', '<Button type="submit"> innerhalb eines <form>'],
  ['p:commandLink', '<Button variant="subtle"> oder <Anchor component="button">'],
  ['p:button outcome="seite"', '<Button component={Link} to="/seite">'],
  ['icon="pi pi-save"', 'leftSection={<IconDeviceFloppy size={16} />}'],
  ['disabled="#{bean.gesperrt}"', 'disabled={gesperrt}'],
  ['Ajax-Status / BlockUI', 'loading={isPending}'],
]

export function AktionenPage() {
  return (
    <Stack>
      <Title order={2}>Aktionen</Title>

      {/* Description */}
      <Stack gap="md" maw={820}>
        <Text>
          Ersetzt <Code>p:commandButton</Code>, <Code>p:commandLink</Code> und <Code>p:button</Code>
          . Einen eigenen Command-Button gibt es nicht: In JSF braucht er das Formular und{' '}
          <Code>update</Code>, weil der Server den Zustand hält. Hier ruft der Klick eine Funktion,
          die den State ändert – React rendert selbst, was davon abhängt.
        </Text>

        <Title order={3}>Wichtigste Properties</Title>
        <Table striped withTableBorder verticalSpacing="xs">
          <Table.Tbody>
            {properties.map(([name, description]) => (
              <Table.Tr key={name}>
                <Table.Td w={200}>
                  <Code>{name}</Code>
                </Table.Td>
                <Table.Td>{description}</Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
        <Text size="sm" c="dimmed">
          Dazu alle nativen Button-Attribute (<Code>onClick</Code>, <Code>type</Code>,{' '}
          <Code>form</Code>) und die Style-Props jeder Mantine-Komponente (<Code>mt</Code>,{' '}
          <Code>w</Code>, <Code>ms=&quot;auto&quot;</Code> …).
        </Text>

        <Title order={3}>JSF-Entsprechungen</Title>
        <Table striped withTableBorder verticalSpacing="xs">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>PrimeFaces</Table.Th>
              <Table.Th>React / Mantine</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {jsfMapping.map(([jsf, react]) => (
              <Table.Tr key={jsf}>
                <Table.Td>
                  <Code>{jsf}</Code>
                </Table.Td>
                <Table.Td>
                  <Code>{react}</Code>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Stack>

      {/* Standard sizes */}
      <Paper bg="var(--surface-card)" p="md" radius="md" shadow="sm">
        <Title order={4}>Standard</Title>
        <Group justify="center" align="flex-start" mt="md">
          <Stack>
            <Title order={4}>Size = 'xs'</Title>
            <Button size="sm">Standard Button</Button>
            <Button variant="default" size="xs">
              Variant = 'default'
            </Button>
            <Button variant="white" size="xs">
              Variant = 'white'
            </Button>
            <Button variant="filled" size="xs">
              Variant = 'filled'
            </Button>
            <Button variant="gradient" size="xs">
              Variant = 'gradient'
            </Button>
            <Button variant="light" size="xs">
              Variant = 'light'
            </Button>
            <Button variant="subtle" size="xs">
              Variant = 'subtle'
            </Button>
            <Button variant="transparent" size="xs">
              Variant = 'transparent'
            </Button>
          </Stack>
          <Stack>
            <Title order={4}>Size = 'sm'</Title>
            <Button size="sm">Standard Button</Button>
            <Button variant="default" size="sm">
              Variant = 'default'
            </Button>
            <Button variant="white" size="sm">
              Variant = 'white'
            </Button>
            <Button variant="filled" size="sm">
              Variant = 'filled'
            </Button>
            <Button variant="light" size="sm">
              Variant = 'light'
            </Button>
            <Button variant="subtle" size="sm">
              Variant = 'subtle'
            </Button>
            <Button variant="transparent" size="sm">
              Variant = 'transparent'
            </Button>
          </Stack>
          <Stack>
            <Title order={4}>Size = 'md'</Title>
            <Button size="md">Standard button</Button>
            <Button variant="default" size="md">
              Variant = 'default'
            </Button>
            <Button variant="white" size="md">
              Variant = 'white'
            </Button>
            <Button variant="filled" size="md">
              Variant = 'filled'
            </Button>
            <Button variant="light" size="md">
              Variant = 'light'
            </Button>
            <Button variant="subtle" size="md">
              Variant = 'subtle'
            </Button>
            <Button variant="transparent" size="md">
              Variant = 'transparent'
            </Button>
          </Stack>
          <Stack>
            <Title order={4}>Size = 'lg'</Title>
            <Button size="lg">Standard Button</Button>
            <Button variant="default" size="lg">
              Variant = 'default'
            </Button>
            <Button variant="white" size="lg">
              Variant = 'white'
            </Button>
            <Button variant="filled" size="lg">
              Variant = 'filled'
            </Button>
            <Button variant="light" size="lg">
              Variant = 'light'
            </Button>
            <Button variant="subtle" size="lg">
              Variant = 'subtle'
            </Button>
            <Button variant="transparent" size="lg">
              Variant = 'transparent'
            </Button>
          </Stack>
          <Stack>
            <Title order={4}>Size = 'xl'</Title>
            <Button size="xl">Standard Button</Button>
            <Button variant="default" size="xl">
              Variant = 'default'
            </Button>
            <Button variant="white" size="xl">
              Variant = 'white'
            </Button>
            <Button variant="filled" size="xl">
              Variant = 'filled'
            </Button>
            <Button variant="light" size="xl">
              Variant = 'light'
            </Button>
            <Button variant="subtle" size="xl">
              Variant = 'subtle'
            </Button>
            <Button variant="transparent" size="xl">
              Variant = 'transparent'
            </Button>
          </Stack>
        </Group>
      </Paper>

      {/* Compact */}
      <Paper bg="var(--surface-card)" p="md" radius="md" shadow="sm">
        <Title order={4}>Compact</Title>
        <Group justify="center" align="flex-start" mt="md">
          <Stack>
            <Title order={4}>Size = 'compact-xs'</Title>
            <Button size="compact-xs">Standard Button</Button>
            <Button variant="default" size="compact-xs">
              Variant = 'default'
            </Button>
            <Button variant="white" size="compact-xs">
              Variant = 'white'
            </Button>
            <Button variant="filled" size="compact-xs">
              Variant = 'filled'
            </Button>
            <Button variant="light" size="compact-xs">
              Variant = 'light'
            </Button>
            <Button variant="subtle" size="compact-xs">
              Variant = 'subtle'
            </Button>
            <Button variant="transparent" size="compact-xs">
              Variant = 'transparent'
            </Button>
          </Stack>
          <Stack>
            <Title order={4}>Size = 'compact-sm'</Title>
            <Button size="compact-sm">Standard Button</Button>
            <Button variant="default" size="compact-sm">
              Variant = 'default'
            </Button>
            <Button variant="white" size="compact-sm">
              Variant = 'white'
            </Button>
            <Button variant="filled" size="compact-sm">
              Variant = 'filled'
            </Button>
            <Button variant="light" size="compact-sm">
              Variant = 'light'
            </Button>
            <Button variant="subtle" size="compact-sm">
              Variant = 'subtle'
            </Button>
            <Button variant="transparent" size="compact-sm">
              Variant = 'transparent'
            </Button>
          </Stack>
          <Stack>
            <Title order={4}>Size = 'compact-md'</Title>
            <Button size="compact-md">Standard button</Button>
            <Button variant="default" size="compact-md">
              Variant = 'default'
            </Button>
            <Button variant="white" size="compact-md">
              Variant = 'white'
            </Button>
            <Button variant="filled" size="compact-md">
              Variant = 'filled'
            </Button>
            <Button variant="light" size="compact-md">
              Variant = 'light'
            </Button>
            <Button variant="subtle" size="compact-md">
              Variant = 'subtle'
            </Button>
            <Button variant="transparent" size="compact-md">
              Variant = 'transparent'
            </Button>
          </Stack>
          <Stack>
            <Title order={4}>Size = 'compact-lg'</Title>
            <Button size="compact-lg">Standard Button</Button>
            <Button variant="default" size="compact-lg">
              Variant = 'default'
            </Button>
            <Button variant="white" size="compact-lg">
              Variant = 'white'
            </Button>
            <Button variant="filled" size="compact-lg">
              Variant = 'filled'
            </Button>
            <Button variant="light" size="compact-lg">
              Variant = 'light'
            </Button>
            <Button variant="subtle" size="compact-lg">
              Variant = 'subtle'
            </Button>
            <Button variant="transparent" size="compact-lg">
              Variant = 'transparent'
            </Button>
          </Stack>
          <Stack>
            <Title order={4}>Size = 'compact-xl'</Title>
            <Button size="compact-xl">Standard Button</Button>
            <Button variant="default" size="compact-xl">
              Variant = 'default'
            </Button>
            <Button variant="white" size="compact-xl">
              Variant = 'white'
            </Button>
            <Button variant="filled" size="compact-xl">
              Variant = 'filled'
            </Button>
            <Button variant="light" size="compact-xl">
              Variant = 'light'
            </Button>
            <Button variant="subtle" size="compact-xl">
              Variant = 'subtle'
            </Button>
            <Button variant="transparent" size="compact-xl">
              Variant = 'transparent'
            </Button>
          </Stack>
        </Group>
      </Paper>
    </Stack>
  )
}
