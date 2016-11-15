// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params) {
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.libraryView = new LibraryView({collection: this.model.get('library')});
    this.songQueueView = new SongQueueView({collection: this.model.get('songQueue')});
    this.nowPlayingView = new NowPlayingView({model: this.model.get('currentSong')});

    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'
    this.model.on('change:currentSong', function(model) {
      // add now playing
      console.log(model.get('currentSong'));
      // this.$el.append.html('<div> Now Playing </br>(' + this.model.get("currentSong").attributes.artist 
      //   + ') ' + this.model.get("currentSong").attributes.title + '</div>');
      this.playerView.setSong(model.get('currentSong'));
    }, this);
  },

  render: function() {
    return this.$el.html([
      this.nowPlayingView.$el,
      this.playerView.$el,
      this.songQueueView.$el,
      this.libraryView.$el
    ]);
  }

});
