import type { ComponentType } from 'react'

import { AktionenPage } from '../pages/layout/AktionenPage'

export interface ShowcasePage {
  /** Mirrors the reference page path without ".xhtml" */
  path: string
  label: string
  /** Navigation heading, e.g. "layout" */
  group: string
  /** Without one the route renders a placeholder */
  Component?: ComponentType
}

// Routes and navigation are generated from this list; order and labels follow
// the reference showcase menu.
export const showcasePages: ShowcasePage[] = [
  { group: 'Building Blocks', label: 'Dialog-Templates', path: 'building-blocks/dialog-templates' },

  { group: 'validierungen', label: 'Pflichtfelder & BV', path: 'validierungen/pflichtfelder' },

  { group: 'layout', label: 'Aktionen', path: 'layout/aktionen', Component: AktionenPage },
  { group: 'layout', label: 'Confirm Dialog', path: 'layout/confirmdialog' },
  { group: 'layout', label: 'Container', path: 'layout/container' },
  { group: 'layout', label: 'Fileupload', path: 'layout/fileupload' },
  { group: 'layout', label: 'Formulare', path: 'layout/formulare' },
  { group: 'layout', label: 'Grunddaten', path: 'layout/grunddaten' },
  { group: 'layout', label: 'Kontexthilfe', path: 'layout/kontexthilfe' },
  { group: 'layout', label: 'Meldungen', path: 'layout/meldungen' },
  { group: 'layout', label: 'Prozess-Template', path: 'layout/prozess-template' },
  { group: 'layout', label: 'Prozess-Navigation (alt)', path: 'layout/prozess-navigation' },
  { group: 'layout', label: 'Tabellen', path: 'layout/tabellen' },
  { group: 'layout', label: 'Toolbars', path: 'layout/toolbars' },
  { group: 'layout', label: 'UI-Elemente', path: 'layout/uielemente' },

  { group: 'Jakarta EE', label: 'Scopes', path: 'jakartaee/scopes' },

  { group: 'Faces Flows', label: 'Erfassen-Flow', path: 'flows' },
]
