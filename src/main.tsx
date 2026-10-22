import '@mantine/core/styles.css'
import '@mantine/dates/styles.css'
import '@mantine/notifications/styles.css'
import '@mantine/dropzone/styles.css'
import '@mantine/tiptap/styles.css'
import 'dayjs/locale/de'

import { MantineProvider, type CSSVariablesResolver } from '@mantine/core'
import { DatesProvider } from '@mantine/dates'
import { ModalsProvider } from '@mantine/modals'
import { Notifications } from '@mantine/notifications'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'

import { router } from './router'
import { theme } from './theme'

// App background for every page. Warm off-white so white Paper/Card
// surfaces stay visible against it; Mantine's default is #fff / dark-7.
const cssVariablesResolver: CSSVariablesResolver = () => ({
  variables: {},
  light: { '--mantine-color-body': '#f5f3ef' },
  dark: { '--mantine-color-body': 'var(--mantine-color-dark-8)' },
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider
      theme={theme}
      defaultColorScheme="light"
      cssVariablesResolver={cssVariablesResolver}
    >
      <DatesProvider settings={{ locale: 'de', firstDayOfWeek: 1 }}>
        <ModalsProvider>
          <Notifications />
          <RouterProvider router={router} />
        </ModalsProvider>
      </DatesProvider>
    </MantineProvider>
  </StrictMode>,
)
