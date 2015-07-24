define(['marionette'], function(Marionette) {

    var AppPageRouter = Backbone.Marionette.AppRouter.extend({

        appRoutes: {
            "": "appAction"
        }

    });

    return AppPageRouter;

});
