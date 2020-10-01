const app = require('./app');

const DEFAULT_PORT = 3000;

const onError = (error) => { console.error(error); throw error; };
const onListening = (data) => { console.info(data); };

const port = parseInt(process.env.PORT, 10) || DEFAULT_PORT;
app.set('port', port);

app.listen(port);

app.on('error', onError);
app.on('listening', onListening);

console.log(app.settings);
