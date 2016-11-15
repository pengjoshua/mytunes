// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    var context = this;

    this.on('add enqueue', function() {
      if (this.models.length === 1) {
        context.playFirst();
      }
    });

    this.on('dequeue', function() {
      context.shift();
    });

    this.on('ended', function() {
      context.shift();
      if (this.models.length > 0) {
        context.playFirst();
      }
    });
  },

  playFirst: function() {
    this.models[0].play();
  }


});