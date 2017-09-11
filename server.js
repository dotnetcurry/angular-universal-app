let express = require('express');
let path = require('path');
let ngCore = require('@angular/core');
let fs = require('fs');

let app = express();
const PORT = 3000;

// Load zone.js for the server
require('zone.js/dist/zone-node');

// Enabling prod mode
ngCore.enableProdMode();

// Import renderModuleFactory from @angular/platform-server
let renderModuleFactory = require('@angular/platform-server').renderModuleFactory;

// Load the index.html file from the dist folder
let index = fs.readFileSync('./dist/index.html', 'utf8');

// Import the AOT compiled factory for your AppServerModule
// This import will change with the hash of your built server bundle
let AppServerModuleNgFactory = require('./dist-server/main.bundle').AppServerModuleNgFactory;
app.engine('html', (_, options, callback) => {
	const opts = { document: index, url: options.req.url };
	// Render to HTML and send it to the callback
	renderModuleFactory(AppServerModuleNgFactory, opts).then(html => callback(null, html));
});

app.set('view engine', 'html');
app.set('views', 'dist')
app.get('*.*', express.static(path.join(__dirname, '.', 'dist')));

// Respond with the content read from index for all requests
app.get('*', (req, res) => {
	res.render('index', { req });
});

app.listen(PORT, () => {
	console.log(`listening on http://localhost:${PORT}!`);
});
