'use strict';

const server = require('./server');
const port = process.env.PORT || 3100;

server.listen(3100, () => console.log('Server running on port %d', port))
