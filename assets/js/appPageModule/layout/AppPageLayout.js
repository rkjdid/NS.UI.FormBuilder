define([
    'marionette',
    'text!../templates/AppPageLayout.html',
    '../views/MainView',
    '../views/GridPanelView'
], function(Marionette, HomePageLayoutTemplate, MainView, GridPanelView) {

    var AppPageLayout =  Backbone.Marionette.LayoutView.extend({

        initialize : function(options) {
            this.URLOptions = options.URLOptions;
        },

        template: HomePageLayoutTemplate,

        regions : {
            mainPanel   : '#mainPanel',
            gridPanel   : '#gridPanel'
        },

        onRender : function() {
            //  Create and render item views
            this.mainPanel.show( new MainView({
                URLOptions : this.URLOptions
            }));

            this.gridPanel.show(new GridPanelView({
                URLOptions : this.URLOptions
            }));
        }

    });

    return AppPageLayout;

});
