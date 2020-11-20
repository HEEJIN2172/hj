'use strict';

/************* include library **************/
const http    = require('http');
const express = require('express');
const server  = express();

//<<<<<<< HEAD
const serverPort = 2172;
//port 자신거에 맞게 수정하기

//const serverPort = 1948;
//1234
//>>>>>>> f968c59804416f6bccbf7afcaa03332807f46ce6

//
/************* Routing **************/
//웹페이지의 세부 주소를 지정한다.
server.use('/',            require('./server'));
server.use('/phjapi',         require('./phjapi'));
server.use('/client',         require('./client'));

/************* Running server **************/
const httpServer = http.createServer(server);
httpServer.listen(serverPort, () => {
    const startdate = new Date();
    console.log(`[START SERVER (port ${serverPort}) ${startdate}]`);
});