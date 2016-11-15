// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    var context = this;
    $.ajax({
      url: 'https://api.parse.com/1/classes/songs',
      type: 'GET',
      success: function(data) {
        console.log('CONTEXT',context);
        _.each(data, function(song) {
          
          context.set(song);
        });
        context.trigger('changedSong', context);
        console.log(data);
        console.log('Successfully fetched songs');
      },
      error: function(error) {
        console.error('myTunes: error with fetch', error);
      }
    });
  }

});