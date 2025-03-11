import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const express = require('express');
const mysql =  require('mysql2/promise');
require('dotenv').config();

const connection = await mysql.createConnection({
    host: process.env.HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB
});

