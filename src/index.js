const app = require('./main')

const isProduction = process.env.NODE_ENV === 'production';
const port = isProduction ? parseInt(process.env.PORT, 10) || 80 : 3000;

app.listen(port, () => console.log('Say "hello" to my little frind!'));
