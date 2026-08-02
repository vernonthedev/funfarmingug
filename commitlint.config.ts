const types = [
    'feat',
    'fix',
    'refactor',
    'docs',
    'style',
    'test',
    'chore',
    'perf',
    'ci',
];

const scopes = ['app', 'docs', 'infra', 'web', 'admin', 'laravel', 'checkback'];

module.exports = {
    extends: ['@commitlint/config-conventional'],
    plugins: [
        {
            rules: {
                'scope-required': (parsed: { scope?: string }) => {
                    const { scope } = parsed;
                    if (!scope || scope === '') {
                        return [
                            false,
                            `scope is required. funfarmingug commiting valid scopes: ${scopes.join(', ')}`,
                        ];
                    }
                    if (!scopes.includes(scope)) {
                        return [
                            false,
                            `scope must be one of: ${scopes.join(', ')}`,
                        ];
                    }
                    return [true];
                },
            },
        },
    ],
    rules: {
        'type-enum': [2, 'always', types],
        'scope-required': [2, 'always'],
        'scope-case': [2, 'always', 'lower-case'],
        'subject-case': [
            2,
            'never',
            ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
        ],
        'subject-empty': [2, 'never'],
        'subject-full-stop': [2, 'never', '.'],
        'header-max-length': [2, 'always', 300],
        'body-max-line-length': [2, 'always', 900],
        'body-leading-blank': [2, 'always'],
    },
};
