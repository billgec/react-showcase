import { AppShell, Burger, Group, NavLink, ScrollArea, Text, Title } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { NavLink as RouterNavLink, Outlet } from 'react-router'

import { showcasePages } from '../showcase/pages'
import classes from './ShellLayout.module.css'

const groups = Map.groupBy(showcasePages, (page) => page.group)

export function ShellLayout() {
  const [opened, { toggle, close }] = useDisclosure()

  return (
    <AppShell
      header={{ height: 56 }}
      navbar={{ width: 240, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Title order={4}>React Showcase</Title>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar py="xs" pl="xs">
        <ScrollArea>
          <NavLink
            className={classes.item}
            component={RouterNavLink}
            to="/"
            end
            label="Übersicht"
            onClick={close}
          />
          {[...groups].map(([group, pages]) => (
            <nav key={group} aria-label={group}>
              <Text className={classes.heading}>{group}</Text>
              {pages.map((page) => (
                <NavLink
                  key={page.path}
                  className={classes.item}
                  component={RouterNavLink}
                  to={`/${page.path}`}
                  label={page.label}
                  onClick={close}
                />
              ))}
            </nav>
          ))}
        </ScrollArea>
      </AppShell.Navbar>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  )
}
