define([
  'extensions/controllers/controller',
  'common/collections/filtered_list',
  'client/views/services'
], function (Controller, ListCollection, ServicesView) {
  return Controller.extend({
    collectionClass: ListCollection,
    viewClass: ServicesView,
    clientRenderOnInit: true,
    renderView: function (options) {
      options = _.extend({}, this.viewOptions(), options);
      if (!this.view) {
        this.view = new this.viewClass(options);
      }
      this.view.render();
      this.trigger('ready');
      this.trigger('loaded');
    },
    collectionData: function () {
      return this.model.get('data');
    },
    viewOptions: function () {
      return {
        el: '#content'
      };
    }
  });
});