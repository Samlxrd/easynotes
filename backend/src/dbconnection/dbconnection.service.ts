import { Injectable } from '@nestjs/common';
import * as mysql from 'mysql';

@Injectable()
export class DbconnectionService {
    private static connection: mysql.Connection;

    constructor() {
        if (!DbconnectionService.connection) {
            DbconnectionService.connection = mysql.createConnection({
                host: 'localhost',
                user: 'root',
                database: 'easynotes',
                password: '',
            });

            DbconnectionService.connection.connect((err: mysql.MysqlError) => {
                if (err) {
                    console.error('Error connecting to database: ' + err.stack);
                    return;
                }
                console.log('Connected: ' + DbconnectionService.connection.threadId);
            });
        }
    }

    async executeQuery(query: string): Promise<any> {
        console.log('query recebida: ', query)
        return new Promise((resolve, reject) => {
            DbconnectionService.connection.query(query, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }
}