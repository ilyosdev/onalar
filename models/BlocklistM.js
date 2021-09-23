const { Model } = require('objection')
const knex = require('../utils/db')

Model.knex(knex)

class Blocklist extends Model {
    static get tableName() {
        return 'block_list'
    }
    $beforeInsert() {
        this.created_at = new Date().toISOString()
    }

    $beforeUpdate() {
        this.updated_at = new Date().toISOString()
    }
}

module.exports = Blocklist
