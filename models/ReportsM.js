const { Model } = require('objection')
const knex = require('../utils/db')

Model.knex(knex)

class Reports extends Model {
    static get tableName() {
        return 'reports'
    }
    $beforeInsert() {
        this.created_at = new Date().toISOString()
    }

    $beforeUpdate() {
        this.updated_at = new Date().toISOString()
    }
}

module.exports = Reports
