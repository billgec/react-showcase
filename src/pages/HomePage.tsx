import { Stack, Text, Title } from '@mantine/core'

export function HomePage() {
  return (
    <Stack>
      <Title order={2}>React Showcase</Title>
      <Text>
        Gegenüberstellung klassischer JSF/PrimeFaces-Komponenten mit React-Umsetzungen auf Basis
        von Mantine und TanStack Table.
      </Text>
    </Stack>
  )
}
