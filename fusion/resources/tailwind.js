const defaultTheme = require('tailwindcss/defaultTheme')
const { colors } = require('tailwindcss/defaultTheme')

const cursors = {
    auto: 'auto',
    default: 'default',
    pointer: 'pointer',
    wait: 'wait',
    text: 'text',
    move: 'move',
    'not-allowed': 'not-allowed',
    'ns-resize': 'ns-resize',
}

const screens = {
    sm: '640px',
    md: '1018px', // 768 + 250
    lg: '1274px', // 1024 + 250
    xl: '1530px', // 1280 + 250
}

const spacing = {
    px: '1px',
    '0': '0',
    '0.5': '0.125rem',
    '1': '0.25rem',
    '1.5': '0.375rem',
    '2': '0.5rem',
    '2.5': '0.625rem',
    '3': '0.75rem',
    '3.5': '0.875rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '7': '1.75rem',
    '8': '2rem',
    '9': '2.25rem',
    '10': '2.5rem',
    '11': '2.75rem',
    '12': '3rem',
    '13': '3.25rem',
    '14': '3.5rem',
    '15': '3.75rem',
    '16': '4rem',
    '20': '5rem',
    '24': '6rem',
    '28': '7rem',
    '32': '8rem',
    '36': '9rem',
    '40': '10rem',
    '48': '12rem',
    '56': '14rem',
    '60': '15rem',
    '64': '16rem',
    '72': '18rem',
    '80': '20rem',
    '96': '24rem',
    '1/2': '50%',
    '1/3': '33.333333%',
    '2/3': '66.666667%',
    '1/4': '25%',
    '2/4': '50%',
    '3/4': '75%',
    '1/5': '20%',
    '2/5': '40%',
    '3/5': '60%',
    '4/5': '80%',
    '1/6': '16.666667%',
    '2/6': '33.333333%',
    '3/6': '50%',
    '4/6': '66.666667%',
    '5/6': '83.333333%',
    '1/12': '8.333333%',
    '2/12': '16.666667%',
    '3/12': '25%',
    '4/12': '33.333333%',
    '5/12': '41.666667%',
    '6/12': '50%',
    '7/12': '58.333333%',
    '8/12': '66.666667%',
    '9/12': '75%',
    '10/12': '83.333333%',
    '11/12': '91.666667%',
    full: '100%',

    '45px': '45px',
    '50px': '50px',
    '60px': '60px',
    '75px': '75px',
    '90px': '90px',
    '100px': '100px',
    '250px': '250px',
    '300px': '300px',
    '400px': '400px',
    '500px': '500px',

    'full-sidebar-open': 'calc(100% - 250px)',
    'full-sidebar-collapsed': 'calc(100%)',
}

module.exports = {
    theme: {
        cursors: cursors,

        screens: screens,

        boxShadow: {
            'default': '0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06)',
            'md': ' 0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -1px rgba(0, 0, 0, .06)',
            'lg': ' 0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .05)',
            'xl': ' 0 20px 25px -5px rgba(0, 0, 0, .1), 0 10px 10px -5px rgba(0, 0, 0, .04)',
            '2xl': '0 25px 50px -12px rgba(0, 0, 0, .25)',
            '3xl': '0 35px 60px -15px rgba(0, 0, 0, .3)',
            'inner': 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
            'focus': '0 0 0 3px rgba(160,174,192,0.5)',
            'focus-success': '0 0 0 3px rgba(72,187,120,0.5)',
            'focus-danger': '0 0 0 3px rgba(245,101,101,0.5)',
            'none': 'none',
        },

        extend: {
            colors: {
                'transparent': 'rgba(0, 0, 0, 0)',
                'black': '#000000',
                'white': '#ffffff',
                'emoji': '#fbd043',

                'smoke': {
                    100: 'rgba(35, 42, 60, 0.1)',
                    200: 'rgba(35, 42, 60, 0.2)',
                    300: 'rgba(35, 42, 60, 0.3)',
                    400: 'rgba(35, 42, 60, 0.4)',
                    500: 'rgba(35, 42, 60, 0.5)',
                    600: 'rgba(35, 42, 60, 0.6)',
                    700: 'rgba(35, 42, 60, 0.7)',
                    800: 'rgba(35, 42, 60, 0.8)',
                    900: 'rgba(35, 42, 60, 0.9)',
                },

                'brand': {
                    100: '#FFEEE9',
                    200: '#FFD5C8',
                    300: '#FFBCA7',
                    400: '#FF8964',
                    500: '#FF5722',
                    600: '#E64E1F',
                    700: '#993414',
                    800: '#73270F',
                    900: '#4D1A0A',
                },

                'primary': {
                    100: '#FFEEE9',
                    200: '#FFD5C8',
                    300: '#FFBCA7',
                    400: '#FF8964',
                    500: '#FF5722',
                    600: '#E64E1F',
                    700: '#993414',
                    800: '#73270F',
                    900: '#4D1A0A',
                },

                'secondary': {
                    100: '#EDFAFC',
                    200: '#D3F3F8',
                    300: '#B8ECF3',
                    400: '#82DEEA',
                    500: '#4DD0E1',
                    600: '#45BBCB',
                    700: '#2E7D87',
                    800: '#235E65',
                    900: '#173E44',
                },

                'gray': {
                    50: '#f9fafb',
                    ...colors.gray,
                },

                'info': {
                    50: '#ebf5ff',
                    ...colors.blue,
                },

                'success': {
                    50: '#f3faf7',
                    ...colors.green,
                },

                'warning': {
                    50: '#fdfdea',
                    ...colors.yellow,
                },

                'danger': {
                    50: '#fdf2f2',
                    ...colors.red,
                },
            },

            fontFamily: {
                sans: [
                    'Source Sans Pro',
                    ...defaultTheme.fontFamily.sans,
                ],

                serif: [
                    'Montserrat',
                    ...defaultTheme.fontFamily.serif,
                ],
            },

            spacing: {
                ...spacing,
            },

            width: {
                ...screens,
                ...spacing,
            },

            minWidth: {
                ...screens,
                ...spacing,
            },

            maxWidth: {
                ...screens,
                ...spacing,
            },

            height: {
                ...screens,
                ...spacing,
            },

            minHeight: {
                ...screens,
                ...spacing,
            },

            maxHeight: {
                ...screens,
                ...spacing,
            },

            padding: {
                ...spacing,
            },
        }
    },

    plugins: [
        // require('@tailwindcss/ui')
    ],
}