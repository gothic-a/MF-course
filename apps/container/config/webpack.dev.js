const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const packageJson = require('../package.json')

module.exports = merge(commonConfig, {
	mode: 'development',
	devServer: {
		static: './dist',
		port: 3000,
		hot: true,
		historyApiFallback: true,
	},
	plugins: [
		new ModuleFederationPlugin({
			name: 'host-app',
			remotes: {
				marketing: 'marketing@http://localhost:3001/remoteEntry.js',
			},
			shared: packageJson.dependencies,
		}),
	],
})
