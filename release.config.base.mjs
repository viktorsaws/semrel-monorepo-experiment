export const releaseConfig = (tagFormat, packageName) => ({
    extends: 'semantic-release-monorepo',
    branches: ['main'],
    plugins: [
        ['@semantic-release/commit-analyzer', {
            preset: 'conventionalcommits',
        }],
        '@semantic-release/release-notes-generator',
        '@semantic-release/changelog',
        '@semantic-release/npm',
        '@semantic-release/github', // Creates new Github Release
        ['@semantic-release/git', {
            message: 'chore(release): ' + packageName + ' ${nextRelease.version} [skip ci]'
        }]
    ],
    tagFormat: tagFormat,
    dryRun: false,
})
