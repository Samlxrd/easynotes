import { Injectable } from '@nestjs/common';
import * as mysql from 'mysql';

@Injectable()
export class DbconnectionService {
    private connection: mysql.Connection;

    constructor() {
        this.connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            database: 'easynotes',
            password: '',
        });
        
        this.connection.connect((err: mysql.MysqlError) => {
            if (err) {
                console.error('Error connecting to database: ' + err.stack);
                return;
            }
            console.log('Connected: ' + this.connection.threadId);
        });
    }

    async executeQuery(query: string): Promise<any> {
        return new Promise((resolve, reject) => {
            this.connection.query(query, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }
}
