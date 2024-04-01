const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const packageJson = require('../package.json')

const PORT = 3000

module.exports = merge(commonConfig, {
	mode: 'development',
	output: {
		publicPath: `http://localhost:${PORT}/`,
	},
	devServer: {
		static: './dist',
		port: PORT,
		hot: true,
		historyApiFallback: true,
	},
	plugins: [
		new ModuleFederationPlugin({
			name: 'host-app',
			remotes: {
				marketing: 'marketing@http://localhost:3001/remoteEntry.js',
				auth: 'auth@http://localhost:3002/remoteEntry.js',
			},
			shared: packageJson.dependencies,
		}),
	],
})
