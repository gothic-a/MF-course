const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const packageJson = require('../package.json')

const domain = process.env.PRODUCTION_DOMAIN

module.exports = merge(common, {
	mode: 'production',
	output: {
		filename: '[name].[contenthash].js',
		publicPath: '/container/latest/',
	},
	plugins: [
		new ModuleFederationPlugin({
			name: 'host',
			remotes: {
				marketing: `marketing@${domain}/marketing/latest/remoteEntry.js`,
				auth: `auth@${domain}/auth/latest/remoteEntry.js`,
				dashboard: `dashboard@${domain}/dashboard/latest/remoteEntry.js`,
			},
			shared: packageJson.dependencies,
		}),
	],
})
