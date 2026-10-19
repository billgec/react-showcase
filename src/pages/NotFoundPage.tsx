import { Anchor, Stack, Text, Title } from '@mantine/core'
import { Link } from 'react-router'

export function NotFoundPage() {
  return (
    <Stack>
      <Title order={2}>Seite nicht gefunden</Title>
      <Text>
        Zurück zur{' '}
        <Anchor component={Link} to="/">
          Übersicht
        </Anchor>
      </Text>
    </Stack>
  )
}
