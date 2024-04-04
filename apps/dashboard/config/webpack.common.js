const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
	resolve: {
		extensions: ['.ts', '.js', '.vue'],
	},
	entry: './src/index.ts',
	output: {
		filename: '[name].[contenthash].js',
	},
	module: {
		rules: [
			{
				test: /\.(png|jpe?g|gif|woff|svg|eot|ttf)$/i,
				use: [{ loader: 'file-loader' }],
			},
			{
				test: /\.vue$/,
				use: 'vue-loader',
			},
			{
				test: /\.(scss|css)$/,
				use: ['vue-style-loader', 'style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.ts?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'ts-loader',
						options: {
							appendTsSuffixTo: [/\.vue$/],
						},
					},
				],
			},
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
						plugins: ['@babel/plugin-transform-runtime'],
					},
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
		new VueLoaderPlugin(),
	],
}
