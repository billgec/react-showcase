import { Button, Group, Stack, Title } from '@mantine/core'

export function AktionenPage() {
  return (
    <Stack>
        <Title order={2}>Aktionen</Title>

        {/* Standard sizes */}
        <Group justify="center" align="flex-start">
            <Stack>
                <h4>Size = 'xs'</h4>
                <Button size="sm">Standard Button</Button>
                <Button variant="default" size="xs">Variant = 'default'</Button>
                <Button variant="white" size="xs">Variant = 'white'</Button>
                <Button variant="filled" size="xs">Variant = 'filled'</Button>
                <Button variant="gradient" size="xs">Variant = 'gradient'</Button>
                <Button variant="light" size="xs">Variant = 'light'</Button>
                <Button variant="subtle" size="xs">Variant = 'subtle'</Button>
                <Button variant="transparent" size="xs">Variant = 'transparent'</Button>
            </Stack>
            <Stack>
                <h4>Size = 'sm'</h4>
                <Button size="sm">Standard Button</Button>
                <Button variant="default" size="sm">Variant = 'default'</Button>
                <Button variant="white" size="sm">Variant = 'white'</Button>
                <Button variant="filled" size="sm">Variant = 'filled'</Button>
                <Button variant="gradient" size="sm">Variant = 'gradient'</Button>
                <Button variant="light" size="sm">Variant = 'light'</Button>
                <Button variant="subtle" size="sm">Variant = 'subtle'</Button>
                <Button variant="transparent" size="sm">Variant = 'transparent'</Button>
            </Stack>
            <Stack>
                <h4>Size = 'md'</h4>
                <Button size='md'>Standard button</Button>
                <Button variant="default" size="md">Variant = 'default'</Button>
                <Button variant="white" size="md">Variant = 'white'</Button>
                <Button variant="filled" size="md">Variant = 'filled'</Button>
                <Button variant="gradient" size="md">Variant = 'gradient'</Button>
                <Button variant="light" size="md">Variant = 'light'</Button>
                <Button variant="subtle" size="md">Variant = 'subtle'</Button>
                <Button variant="transparent" size="md">Variant = 'transparent'</Button>
            </Stack>
            <Stack>
                <h4>Size = 'lg'</h4>
                <Button size="lg">Standard Button</Button>
                <Button variant="default" size="lg">Variant = 'default'</Button>
                <Button variant="white" size="lg">Variant = 'white'</Button>
                <Button variant="filled" size="lg">Variant = 'filled'</Button>
                <Button variant="gradient" size="lg">Variant = 'gradient'</Button>
                <Button variant="light" size="lg">Variant = 'light'</Button>
                <Button variant="subtle" size="lg">Variant = 'subtle'</Button>
                <Button variant="transparent" size="lg">Variant = 'transparent'</Button>
            </Stack>
            <Stack>
                <h4>Size = 'xl'</h4>
                <Button size="xl">Standard Button</Button>
                <Button variant="default" size="xl">Variant = 'default'</Button>
                <Button variant="white" size="xl">Variant = 'white'</Button>
                <Button variant="filled" size="xl">Variant = 'filled'</Button>
                <Button variant="gradient" size="xl">Variant = 'gradient'</Button>
                <Button variant="light" size="xl">Variant = 'light'</Button>
                <Button variant="subtle" size="xl">Variant = 'subtle'</Button>
                <Button variant="transparent" size="xl">Variant = 'transparent'</Button>
            </Stack>
        </Group>

      {/* Compact */}
        <Group justify="center" align="flex-start">
            <Stack>
                <h4>Size = 'compact-xs'</h4>
                <Button size="compact-xs">Standard Button</Button>
                <Button variant="default" size="compact-xs">Variant = 'default'</Button>
                <Button variant="white" size="compact-xs">Variant = 'white'</Button>
                <Button variant="filled" size="compact-xs">Variant = 'filled'</Button>
                <Button variant="gradient" size="compact-xs">Variant = 'gradient'</Button>
                <Button variant="light" size="compact-xs">Variant = 'light'</Button>
                <Button variant="subtle" size="compact-xs">Variant = 'subtle'</Button>
                <Button variant="transparent" size="compact-xs">Variant = 'transparent'</Button>
            </Stack>
            <Stack>
                <h4>Size = 'compact-sm'</h4>
                <Button size="compact-sm">Standard Button</Button>
                <Button variant="default" size="compact-sm">Variant = 'default'</Button>
                <Button variant="white" size="compact-sm">Variant = 'white'</Button>
                <Button variant="filled" size="compact-sm">Variant = 'filled'</Button>
                <Button variant="gradient" size="compact-sm">Variant = 'gradient'</Button>
                <Button variant="light" size="compact-sm">Variant = 'light'</Button>
                <Button variant="subtle" size="compact-sm">Variant = 'subtle'</Button>
                <Button variant="transparent" size="compact-sm">Variant = 'transparent'</Button>
            </Stack>
            <Stack>
                <h4>Size = 'compact-md'</h4>
                <Button size="compact-md">Standard button</Button>
                <Button variant="default" size="md">Variant = 'default'</Button>
                <Button variant="white" size="md">Variant = 'white'</Button>
                <Button variant="filled" size="md">Variant = 'filled'</Button>
                <Button variant="gradient" size="md">Variant = 'gradient'</Button>
                <Button variant="light" size="md">Variant = 'light'</Button>
                <Button variant="subtle" size="md">Variant = 'subtle'</Button>
                <Button variant="transparent" size="md">Variant = 'transparent'</Button>
            </Stack>
            <Stack>
                <h4>Size = 'compact-lg'</h4>
                <Button size="compact-lg">Standard Button</Button>
                <Button variant="default" size="compact-lg">Variant = 'default'</Button>
                <Button variant="white" size="compact-lg">Variant = 'white'</Button>
                <Button variant="filled" size="compact-lg">Variant = 'filled'</Button>
                <Button variant="gradient" size="compact-lg">Variant = 'gradient'</Button>
                <Button variant="light" size="compact-lg">Variant = 'light'</Button>
                <Button variant="subtle" size="compact-lg">Variant = 'subtle'</Button>
                <Button variant="transparent" size="compact-lg">Variant = 'transparent'</Button>
            </Stack>
           <Stack>
                <h4>Size = 'compact-xl'</h4>
                <Button size="compact-xl">Standard Button</Button>
                <Button variant="default" size="compact-xl">Variant = 'default'</Button>
                <Button variant="white" size="compact-xl">Variant = 'white'</Button>
                <Button variant="filled" size="compact-xl">Variant = 'filled'</Button>
                <Button variant="gradient" size="compact-xl">Variant = 'gradient'</Button>
                <Button variant="light" size="compact-xl">Variant = 'light'</Button>
                <Button variant="subtle" size="compact-xl">Variant = 'subtle'</Button>
                <Button variant="transparent" size="compact-xl">Variant = 'transparent'</Button>
            </Stack>
        </Group>
    </Stack>
  )
}
