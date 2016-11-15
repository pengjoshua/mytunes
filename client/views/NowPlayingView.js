// PlayerView.js - Defines a backbone view class for the music player.
var NowPlayingView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  tagName: 'div',

  initialize: function() {
    var context = this;
    this.$el.on('play', function() {
      context.collection.render();
    });
  },

  render: function() {
    console.log('render')
    this.$el.append.html('<span> Now Playing </br>(' + this.model.get("currentSong").attributes.artist + ') ' + this.model.get("currentSong").attributes.title + '</span>');
  }

});
