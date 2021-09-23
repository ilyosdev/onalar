const { Model } = require('objection')
const knex = require('../utils/db')

Model.knex(knex)

class Likes extends Model {
    static get tableName() {
        return 'post_likes'
    }
    $beforeInsert() {
        this.created_at = new Date().toISOString()
    }

    $beforeUpdate() {
        this.updated_at = new Date().toISOString()
    }
}

module.exports = Question
