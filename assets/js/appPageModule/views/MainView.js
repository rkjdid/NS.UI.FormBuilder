define([
    'jquery', 'marionette', 'text!../templates/MainView.html','jcanvas', 'i18n', 'jquery-ui'
], function($, Marionette, MainViewTemplate, JCanvas) {

    /**
     * Left panel view in the homepage layout, contains form to filter grid on the center view
     */
    var MainView = Backbone.Marionette.ItemView.extend({

        /**
         * Left panel view template
         */
        template : MainViewTemplate,

        /**
         * View constructor, init grid channel
         */
        initialize : function(options) {
            this.URLOptions = options.URLOptions;

        },

        /**
         * View rendering callback
         */
        onRender : function() {
            this.$el.i18n();
        }

    });

    return MainView;

});
