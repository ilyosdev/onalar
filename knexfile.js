module.exports = {
    development: {
        client: 'postgresql',
        connection: {
            database: 'ona12',
            user: 'postgres',
            password: '1234'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
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
    }

};