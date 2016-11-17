var config = {
	entry: './src/app-client.js',

	output: {
		path: './src/js/',
		filename: 'index.js'
        },

	devServer: {
		inline: true,
		port: 7777
	},

	module: {
		loaders: [
		{
         		test: /\.jsx?$/,
			exclude: /node_modules/,
	              	loader: 'babel',
			query: {
				presets: ['es2015', 'react']
	          	}
		}
		]
	}
}

module.exports = config;
