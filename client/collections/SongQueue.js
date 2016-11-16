// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    var context = this;

    this.on('add', function() {
      if (this.models.length === 1) {
        context.playFirst();
      }
    });

    this.on('dequeue', function(song) {
      // context.shift();
      if (this.at(0) === song) {
        if (this.models.length > 1) {
          this.remove(song);
          this.playFirst();
        } else if (this.models.length === 1) {
          this.stopSong(); 
          this.remove(song);       
        }
      } else {
        this.remove(song);
      }
      
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
  },

  stopSong: function() {
    this.trigger('stop', this);
  }


});