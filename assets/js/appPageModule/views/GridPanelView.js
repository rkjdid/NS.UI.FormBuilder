define([
    'homePageModule/views/CenterGridPanelView',
    'text!../templates/GridPanelView.html',
], function(CenterGridPanelView, GridPanelViewTemplate) {

    var CenterGridView = CenterGridPanelView.extend({
        template: GridPanelViewTemplate,

        initialize : function(options) {
            var opt = options;
            options.scrollSize = '80%';

            CenterGridPanelView.prototype.initialize.apply(this, [opt])
        }
    });

    return CenterGridView;

})