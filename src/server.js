import path from 'path';
import KoaStatic from 'koa-static';
import { Server } from 'boardgame.io/server';
import TicTacToe from './game';

const server = Server({ games: [TicTacToe] });
//server.app.use(KoaStatic(path.join(__dirname, '../build')));
server.run(8000);
/*
const path = require('path');
const KoaStatic = require('koa-static');
const Server = require('boardgame.io/server').Server;
const TicTacToe = require('./game');
const server = Server({ games: [TicTacToe] });
//server.app.use(KoaStatic(path.join(__dirname, '../build')));
server.run(8000);
*/
