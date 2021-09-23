const { Model } = require('objection')
const knex = require('../utils/db')

Model.knex(knex)

class Messages extends Model {
    static get tableName() {
        return 'messages'
    }
    $beforeInsert() {
        this.created_at = new Date().toISOString()
    }

    $beforeUpdate() {
        this.updated_at = new Date().toISOString()
    }
}

module.exports = Question
