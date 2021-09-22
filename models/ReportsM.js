const { Model } = require('objection');
const knex = require('../utils/db')

Model.knex(knex)

class Messages extends Model {
    static get tableName() {
        return 'messages';
    }
    $beforeInsert() {
        this.created_at = new Date().toISOString();
    }

    $beforeUpdate() {
    this.updated_at = new Date().toISOString();
    }

    // static get relationMappings() {
    //     const Message = require('./Message')
    //     return {
    //         messages: {
    //             relation: Model.HasManyRelation,
    //             modelClass: Message,
    //             join: {
    //                 from: 'users.id',
    //                 to: 'messages.user_id'
    //             }
    //         }
    //     }
    // }
}

module.exports = Question;