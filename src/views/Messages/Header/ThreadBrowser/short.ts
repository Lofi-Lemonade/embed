// based on https://github.com/researchgate/moment-shortformat/blob/master/moment-shortformat.js
// Copyright (c) 2015 ResearchGate GmbH, MIT license

import moment, { Moment } from 'moment'

const minute = 6e4;
const hour = 36e5;
const day = 864e5;

export const short = function(time: Moment) {
    const now = moment();
    const diff = Math.abs(time.diff(now));
    let unit = null;

    if (diff < minute) {
        unit = 'seconds';
    } else if (diff < hour) {
        unit = 'minutes';
    } else if (diff < day) {
        unit = 'hours';
    } else {
        unit = 'days';
    }
    const num = Math.max(1, moment.duration(diff)[unit]());

    let result = num + unit.charAt(0);
    result = moment.localeData().pastFuture(time.diff(now), result);

    return result;
};
