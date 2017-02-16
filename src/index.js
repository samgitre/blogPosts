import http from 'http';
import express from 'express';
import BodyParser from 'body-parser'
import mongoose from 'mongoose';

import config from './config';
import routes from './routes';

let app =express();
app.server = http.createServer(app);


app.use('/api', routes);
app.use(bodyParser.urlencoded({extended: true}));
app.use(BodyParser.json());


app.server.listen(config.port);

console.log('App running at : ${app.server.address().port}');

export default app;
