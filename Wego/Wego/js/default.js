// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232509
(function () {
    "use strict";

    var app = WinJS.Application;

    function initDataSource() {
        var url = 'http://vanbungkring.com/api/get_recent_posts/';
        WinJS.xhr({ url: url }).then(function (data) {
            var result = JSON.parse(data.responseText);
            var msg = new Windows.UI.Popups.MessageDialog(result.posts[1].id);
            msg.showAsync().then();

        });
    }

    app.onactivated = function (eventObject) {
        if (eventObject.detail.kind === Windows.ApplicationModel.Activation.ActivationKind.launch) {
            if (eventObject.detail.previousExecutionState !== Windows.ApplicationModel.Activation.ApplicationExecutionState.terminated) {
                // TODO: This application has been newly launched. Initialize 
                // your application here.
                submit.addEventListener('click', function (e) {
                    initDataSource();
                })

                WinJS.UI.processAll();
            } else {
                // TODO: This application has been reactivated from suspension. 
                // Restore application state here.
            }
        }
    };

    app.oncheckpoint = function (eventObject) {
        // TODO: This application is about to be suspended. Save any state
        // that needs to persist across suspensions here. You might use the 
        // WinJS.Application.sessionState object, which is automatically
        // saved and restored across suspension. If you need to complete an
        // asynchronous operation before your application is suspended, call
        // eventObject.setPromise(). 
    };

    app.start();
})();
