const app = require('./app');
const port = 3001;
const host = '0.0.0.0';

const server = app.listen(port, host, () => {
    console.log(`Node Server is listening to ${server.address().port}`)
});