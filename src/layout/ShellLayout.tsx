import { AppShell, Burger, Group, NavLink, ScrollArea, Text, Title } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { NavLink as RouterNavLink, Outlet } from 'react-router'

import { showcasePages } from '../showcase/pages'

const groups = Map.groupBy(showcasePages, (page) => page.group)

export function ShellLayout() {
  const [opened, { toggle, close }] = useDisclosure()

  return (
    <AppShell
      header={{ height: 56 }}
      navbar={{ width: 260, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Title order={4}>React Showcase</Title>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="xs">
        <ScrollArea>
          <NavLink component={RouterNavLink} to="/" end label="Übersicht" onClick={close} />
          {[...groups].map(([group, pages]) => (
            <NavLink key={group} label={group} defaultOpened>
              {pages.map((page) => (
                <NavLink
                  key={page.path}
                  component={RouterNavLink}
                  to={`/${page.path}`}
                  label={page.label}
                  onClick={close}
                />
              ))}
            </NavLink>
          ))}
          {groups.size === 0 && (
            <Text size="sm" c="dimmed" p="sm">
              Noch keine Komponenten vorhanden.
            </Text>
          )}
        </ScrollArea>
      </AppShell.Navbar>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  )
}
