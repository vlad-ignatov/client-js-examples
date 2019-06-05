/* global FHIR */
import "./styles.css";
import { display, crearSessionAfterFiveLoads } from "./lib";

// This is a standalone launch of single page app.
//
// NOTE: It is designed to clear the session and reauthorize you
// after every 5 page loads!
//
// By default it lauches against STU3 sandbox server. An EHR could
// still launch it against itself by passing "iss" and "launch"
// parameters. For example try loading this url:
// https://tmzqz.codesandbox.io/?iss=https://launch.smarthealthit.org/v/r2/fhir&launch=123
FHIR.oauth2
    .init({
        clientId: "whatever",
        scope: "launch launch/patient launch/encounter openid fhirUser",
        iss: "https://launch.smarthealthit.org/v/r3/sim/eyJoIjoiMSJ9/fhir"
    })
    .then(client => client.request("Patient"))
    .then(display, display)
    .finally(crearSessionAfterFiveLoads);
