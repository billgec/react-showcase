import { createBrowserRouter } from 'react-router'

import { ShellLayout } from './shell/ShellLayout'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { PlaceholderPage } from './pages/PlaceholderPage'
import { showcasePages } from './showcase/pages'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <ShellLayout />,
    children: [
      { index: true, element: <HomePage /> },
      ...showcasePages.map(({ path, label, Component }) => ({
        path,
        element: Component ? <Component /> : <PlaceholderPage title={label} />,
      })),
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])
