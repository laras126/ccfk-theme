const path = require( 'path' );

module.exports = {

    webpack: {
        // Example of adding a new entry point for webpack.
        entry: {
            'common': path.resolve( './entries/common.entry.js' ),
		},
		resolve: {
			alias: {
				'js': path.resolve( __dirname, 'src/js' ),
				'scss': path.resolve( __dirname, 'src/scss' )
			}
		}
    }

};