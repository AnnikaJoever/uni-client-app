module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    purge: {
        enabled: true,
        content: [
            'src/**/*.js',
            'src/**/*.jsx',
            'public/**/*.html',
        ],
    },
    theme: {
        extend: {
            colors: {
                primary: '#87027b',
                'primary-dark': '#700d67',
                'primary-extra-dark': '#600b58',
                secondary: '#00b0b9',
            },
            height: {
                fit: 'fit-content',
            },
            minHeight: {
                xxxs: '4rem',
                fit: 'fit-content',
            },
            maxHeight: {
                xxxs: '4rem',
                fit: 'fit-content',
            },
            width: {
                fit: 'fit-content',
            },
            minWidth: {
                xxs: '16rem',
                xxxs: '12rem',
                '1/2': '50%;',
                fit: 'fit-content',
            },
            maxWidth: {
                xxs: '12rem',
                fit: 'fit-content',
            },
            inset: {
                '-48': '-12rem',
            },
            gridAutoColumns: {
                '3fr': 'minmax(0, 3fr)',
            },
        },
    },
    variants: {
        backgroundColor: [ 'responsive', 'even', 'hover', 'focus', 'group-hover' ],
        display: [ 'group-hover' ],
    },
    plugins: [],
};
