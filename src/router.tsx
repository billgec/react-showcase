import { createBrowserRouter } from 'react-router'

import { ShellLayout } from './layout/ShellLayout'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { showcasePages } from './showcase/pages'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <ShellLayout />,
    children: [
      { index: true, element: <HomePage /> },
      ...showcasePages.map(({ path, Component }) => ({ path, Component })),
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])
