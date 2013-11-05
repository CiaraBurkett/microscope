Posts = new Meteor.Collection('posts');
Posts.allow({
    insert: function(userId, doc) {
        return !! userId; // only allow posting if you are logged in
    }
});
