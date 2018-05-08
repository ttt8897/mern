const PostSchema = new Schema ({
    user: {
        type: Schema.Types.ObjectId,
                             ref: 'users'
    },
    text: {
        type: String,
                  required: true

    },
    name: {
        type: String,

    },
    avatar: {
              type: String

    },

    likes: [
        {
            user: {
                                            ref: 'users'
            }
        }
    ],

    comments: [
        {
            user: {
                ref: 'users'
               },
            text: {
                type: String
            },
            name: {
                type: String
            },
            avatar:{
                type: String
            },
            date: {
                type: Date
            },

        }
    ],

    date: {
        type: Date
    },



});
module.exports= Post = mongoose.model('users', PostSchema);
