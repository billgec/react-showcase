import { createTheme, type CSSVariablesResolver, type MantineColorsTuple } from '@mantine/core'

/** Green Cyan */
const brand: MantineColorsTuple = [
  '#e0f3eb',
  '#c7eada',
  '#ade0c9',
  '#85d1af',
  '#5cc294',
  '#34b379',
  '#238659',
  '#1c6a46',
  '#144e34',
  '#0d3221',
]

/** Moderate Blue */
const accent: MantineColorsTuple = [
  '#cee4fc',
  '#a5cdf9',
  '#7bb6f7',
  '#529ff4',
  '#2989f2',
  '#0072ef',
  '#005ec6',
  '#004b9d',
  '#003773',
  '#00234a',
]

/** Charcoal */
const gray: MantineColorsTuple = [
  '#ebebeb',
  '#d6d6d6',
  '#adadad',
  '#858585',
  '#5c5c5c',
  '#333333',
  '#2a2a2a',
  '#212121',
  '#191919',
  '#101010',
]

/** Success */
const success: MantineColorsTuple = [
  '#d7f1e0',
  '#b5e5c6',
  '#94d9ac',
  '#72ce92',
  '#51c278',
  '#18873d',
  '#147032',
  '#105828',
  '#0c411d',
  '#072a13',
]

/** Information */
const info: MantineColorsTuple = [
  '#e2effd',
  '#c9e1fc',
  '#b1d3fa',
  '#98c6f9',
  '#80b8f7',
  '#0072ef',
  '#005ec6',
  '#004b9d',
  '#003773',
  '#00234a',
]

/** Alert */
const alert: MantineColorsTuple = [
  '#fff7e2',
  '#fff1cb',
  '#feeab3',
  '#fee49b',
  '#fedd83',
  '#fdbb08',
  '#d19b07',
  '#a67b05',
  '#7a5a04',
  '#4f3a02',
]

/** Warning */
const warning: MantineColorsTuple = [
  '#fff0dd',
  '#ffe3c1',
  '#ffd6a5',
  '#ffc989',
  '#ffbc6d',
  '#f58e15',
  '#cb7611',
  '#a15d0e',
  '#76450a',
  '#4c2c07',
]

/** Error */
const error: MantineColorsTuple = [
  '#fedddd',
  '#fdc1c1',
  '#fda5a5',
  '#fc8888',
  '#fb6c6c',
  '#e01919',
  '#b91515',
  '#931010',
  '#6c0c0c',
  '#460808',
]

// Chart Colors
const turquoise: MantineColorsTuple = [
  '#edf8f8',
  '#dff3f3',
  '#d0eded',
  '#c1e8e7',
  '#b3e2e2',
  '#a4dddc',
  '#88b7b6',
  '#6b9190',
  '#4f6b6a',
  '#334544',
]
const violet: MantineColorsTuple = [
  '#ebe9fc',
  '#dad7f9',
  '#c9c5f6',
  '#b9b3f3',
  '#a8a1f0',
  '#978fed',
  '#7d76c4',
  '#635e9b',
  '#494572',
  '#2f2c4a',
]
const yellow: MantineColorsTuple = [
  '#fdf6e6',
  '#fceed1',
  '#fae6bc',
  '#f9dea7',
  '#f7d792',
  '#f6cf7d',
  '#ccab67',
  '#a18852',
  '#77643c',
  '#4c4027',
]
const blue: MantineColorsTuple = [
  '#d6e7f2',
  '#b3d2e7',
  '#91bedb',
  '#6faad0',
  '#4c95c5',
  '#2a81ba',
  '#236b9a',
  '#1c557a',
  '#143e5a',
  '#0d283a',
]
const cyan: MantineColorsTuple = [
  '#cef3fb',
  '#a5e8f7',
  '#7bdef4',
  '#52d4f0',
  '#29c9ed',
  '#00bfe9',
  '#009ec1',
  '#007d99',
  '#005c70',
  '#003b48',
]
const pink: MantineColorsTuple = [
  '#fce8f9',
  '#f9d5f4',
  '#f6c2ee',
  '#f3afe9',
  '#f19ce4',
  '#ee89df',
  '#c571b9',
  '#9c5a92',
  '#73426c',
  '#4a2b45',
]
const orange: MantineColorsTuple = [
  '#ffefd0',
  '#ffe2a8',
  '#ffd481',
  '#ffc75a',
  '#ffb932',
  '#ffac0b',
  '#d38e09',
  '#a77107',
  '#7b5305',
  '#4f3503',
]
const lilac: MantineColorsTuple = [
  '#e2e5fb',
  '#cad0f7',
  '#b2bbf4',
  '#99a6f0',
  '#8190ed',
  '#697be9',
  '#5766c1',
  '#455199',
  '#333b70',
  '#212648',
]

export const theme = createTheme({
  colors: {
    brand,
    accent,
    gray,
    success,
    info,
    alert,
    warning,
    error,
    turquoise,
    violet,
    yellow,
    blue,
    cyan,
    pink,
    orange,
    lilac,
  },
  fontFamily: '"Manrope Variable", sans-serif',
  headings: { fontFamily: '"Manrope Variable", sans-serif' },
  primaryColor: 'brand',
  primaryShade: 5,
  white: '#ffffff',
  black: '#333333',
  defaultRadius: 'sm',
})

export const cssVariablesResolver: CSSVariablesResolver = () => ({
  variables: {},
  light: {
    '--mantine-color-body': 'var(--mantine-color-white)',
    '--mantine-color-text': 'var(--mantine-color-gray-5)',
    '--mantine-color-dimmed': 'var(--mantine-color-gray-4)',
    '--mantine-color-placeholder': 'var(--mantine-color-gray-2)',
    '--mantine-color-default-border': 'var(--mantine-color-gray-1)',
    '--mantine-color-anchor': 'var(--mantine-color-accent-5)',
    '--mantine-color-error': 'var(--mantine-color-error-5)',
    '--mantine-color-success': 'var(--mantine-color-success-5)',
  },
  dark: {},
})
