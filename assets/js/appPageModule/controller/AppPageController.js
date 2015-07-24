define([
    'jquery','marionette', '../layout/AppPageLayout', 'backbone.radio', '../models/FormModel', 'i18n'
], function($, Marionette, AppPageLayout, Radio, FormModel) {

    var HomePageController = Marionette.Controller.extend({

        initialize: function(options) {
            // Kepp homepage region
            this.appPageRegion = options.appPageRegion;

            this.URLOptions = options.URLOptions;

            this.initHomePageChannel();
            this.initGlobalChannel();
        },

        /**
         * Init backbone radio channel for global channel events
         */
        initGlobalChannel : function() {
            this.globalChannel = Backbone.Radio.channel('global');
        },

        initHomePageChannel : function() {
            this.homePageChannel = Backbone.Radio.channel('homepage');
        },

        /**
         *
         * @param newModel
         */
        getTemplate : function(newModel) {
            if( newModel.template == 0) {
                var formToEdit = new FormModel({
                    id : 0,
                    name : newModel.name
                });

                this.globalChannel.trigger('displayEditionPage', formToEdit.toJSON());
            } else {
                this[this.URLOptions.templateUrl.indexOf('json') > 0 ? 'createModelWithJSON' : 'createModelWithURL'](newModel);
            }

        },

        appAction: function() {
            $('#navbarContext').text($.t('navbar.context.home'));

            //  Init homepage layout and render it in the homepage region
            var appPageLayout = new AppPageLayout({
                URLOptions : this.URLOptions
            });
            this.appPageRegion.show( appPageLayout );
        }
    });

    return HomePageController;

});
