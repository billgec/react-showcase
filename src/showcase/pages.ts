import type { ComponentType } from 'react'

export interface ShowcasePage {
  /** Route path, e.g. "inputs/text" */
  path: string
  /** Label shown in the navigation */
  label: string
  /** Navigation group, e.g. "Eingabe" */
  group: string
  Component: ComponentType
}

// Register every showcase page here; routes and navigation are generated from this list.
export const showcasePages: ShowcasePage[] = []
