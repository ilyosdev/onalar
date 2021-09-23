module.exports = {
    development: {
        client: 'mysql',
        connection: {
            database: 'onalar',
            user: 'root',
            password: 'root',
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: './database/migrations',
        },
        seeds: {
            directory: './database/seeds',
        },
    },
    production: {
        // client: 'postgresql',
        // connection: {
        //     database: 'ona12',
        //     user: 'postgres',
        //     password: '1234'
        // },
        // pool: {
        //     min: 2,
        //     max: 10
        // },
        // migrations: {
        //     tableName: 'knex_migrations'
        // }
    },
}
