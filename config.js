// Standard Twitter Stream API RT Bot
// Must have read/write permissions
// Mobile phone must be linked to account for write permission

module.exports = {

    debug: false,

    // Twitter user ID
    user_id_str:           '',

    // https://apps.twitter.com/app/yourappid/keys
    consumer_key:         '',
    consumer_secret:      '',
    access_token:         '',
    access_token_secret:  '',

    // Mot-dièse AKA hashtag to receive
    keywords: [''],

    valid: function(tweet) { return true; }
};
