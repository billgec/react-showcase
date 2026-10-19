import { Stack, Text, Title } from '@mantine/core'

export function PlaceholderPage({ title }: { title: string }) {
  return (
    <Stack>
      <Title order={2}>{title}</Title>
      <Text c="dimmed">Diese Seite ist noch nicht umgesetzt.</Text>
    </Stack>
  )
}
