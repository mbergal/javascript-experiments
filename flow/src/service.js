// @flow


// trackingService.js
var trackingService  = {
    enableIntercomTracking() {
    },

    addons : {
        googleClassroom: {
            enabled() {
            },

            disabled() {
            }
        },
    }
};

type TrackingService = typeof trackingService;



// SomewhereElse.js

function SomethingElse( trackingService: TrackingService ) {

    trackingService.enableIntercomTracking();
//    trackingService.enableIntercomTracking2();

}





