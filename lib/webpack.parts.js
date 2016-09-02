const webpack = require('webpack')
const cleanWebpackPlugin = require('clean-webpack-plugin')
const AUTOPREFIXER_BROWSERS = [
	'Android 2.3',
	'Android >= 4',
	'Chrome >= 35',
	'Firefox >= 31',
	'Explorer >= 9',
	'iOS >= 7',
	'Opera >= 12',
	'Safari >= 7.1',
]

exports.devServer = function(options){
	return {
		devServer: {
			contentBase: options.contentBase,
			historyApiFallback: true,
			hot: true,
			inline: true,
			stats: 'errors-only',
			host: options.host,
			port: options.port,
			proxy: {
				'/api/*': {
					target: 'http://127.0.0.1:3000',
					secure: false,
				}
			}
		},
		plugins: [
			new webpack.NoErrorsPlugin(),
			new webpack.HotModuleReplacementPlugin({
				multistep: true
			})
		]
	}
}

exports.CSSDev = function(){
	return {
		module: {
			loaders: [
				{
					test: /\.css$/,
					loaders: ['style-loader', 'css-loader?modules&importLoaders=1!postcss-loader'],
				}
			]
		},
		postcss(bundler){
			return {
				plugins: [
					require('postcss-import')({ addDependencyTo: bundler }),
					require('precss')(),
					require('autoprefixer')({ browsers: AUTOPREFIXER_BROWSERS })
				],
				syntax: require('postcss-scss')
			}
		}
	}
}

exports.CSSdist = function(path){
	return {
		module: {
			loaders: [
				{
					test: /\.css$/,
					loader: require('extract-text-webpack-plugin').extract('style-loader', 'css-loader?modules&importLoaders=1!postcss-loader'),
					query: {
						minimize: true
					}
				}
			]
		},
		plugins: [
			new ExtractTextPlugin('[name].[chunkhash].css')
		],
		postcss(bundler){
			return {
				plugins: [
					require('postcss-import')({ addDependencyTo: bundler }),
					require('precss')(),
					require('autoprefixer')({ browsers: AUTOPREFIXER_BROWSERS }),
				],
				syntax: require('postcss-scss')
			}
		}
	}
}

exports.babelDist = function(){
	return {
		module: {
			loaders: [
				{
					test: /\.js?$/,
					exclude: /node_modules/,
					loader: 'babel',
					query: {
						cacheDirectory: true,
						presets: ['es2015', 'react']
					}
				}
			]
		},
		resolve: {
			extensions: ['', '.js', '.jsx']
		}
	}
}

exports.babelDev = function(){
	return {
		module: {
			loaders:[
				{
					test: /\.js?$/,
					exclude: /node_modules/,
					loader: 'babel',
					query: {
						cacheDirectory: true,
						presets: ['react', 'es2015'],
						plugins:  ['react-hot-loader/babel']
					}
				}
			]
		},
		resolve: {
			extensions: ['', '.js', '.jsx'],
		}
	}
}

exports.minify = function(){
	return {
		plugins: [
			new webpack.optimize.UglifyJsPlugin({
				compress: {
					warnings: false
				}
			})
		]
	}
}

exports.freeVar = function(key, value){
	const env = {};
	env[key] = JSON.stringify(value);

	return {
		plugins: [
			new webpack.DefinePlugin(env)
		]
	}
}

exports.extractBundle = function(options){
	const entry = {};
	entry[options.name] = options.entries;

	return {
		entry: entry,
		plugins: [
			new webpack.optimize.CommonsChunkPlugin({
				names: [options.name, 'manifest'],
				minChunks: Infinity
			})
		]
	}
}

exports.clean = function(path){
	return {
		plugins: [
			new cleanWebpackPlugin([path], {
				root: process.cwd()
			})
		]
	}
}

exports.images = function(path){
	return {
		module: {
			loaders:[
				{
					test: /\.(png|gif|jpg?g|svg)$/i,
					loader: 'file',
					include: path,
					query: {
						filename: 'img/[path][name].[hash].[ext]'
					}
				}
			]
		}
	}
}

exports.fonts = function(path){
	return {
		module: {
			loaders: [
				{
					test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
					loader: 'url',
					include: path,
					query: {
						limit: 25000
					}
				},
				{
					test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
					loader: 'file',
					include: path,
					query: {
						name: 'font/[hash].[ext]'
					}
				}
			]
		}
	}
}
