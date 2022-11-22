/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")([
    "@fullcalendar/bootstrap5",
    "@fullcalendar/common",
    "@babel/preset-react",
    "@fullcalendar/common",
    "@fullcalendar/daygrid",
    "@fullcalendar/interaction",
    "@fullcalendar/list",
    "@fullcalendar/react",
    "@fullcalendar/timegrid",
]);

module.exports = withTM({
    // your custom config goes here
});
