/* eslint-disable import/prefer-default-export */
type YearMonth = string; // "YYYYMM"
type YearMonthDate = string; // "YYYYMMDD"

/**
 * given a YearMonth | YearMonthDate string (YYYYMM | YYYYMMDD), returns
 * a displayable format.
 *
 * @example
 * formatDate("202001") => "January 2020"
 * formatDate("20200101") => "01 January 2020"
 */
export function formatDate(date: YearMonth | YearMonthDate) {
    const y = date.slice(0, 4);
    const m = date.slice(4, 6);
    const d = date.slice(6, 8);

    const dtFormat = new Intl.DateTimeFormat('en-GB', {
        day: d ? '2-digit' : undefined,
        month: 'long',
        year: 'numeric',
        timeZone: 'UTC',
    });

    return dtFormat.format(new Date(`${y}-${m}${d ? `-${d}` : ''}`));
}

/**
 * Units of Time for the unix timestamp.
 * Values are set so that (time in unit) * unit = (time in milliseconds)
 */
export enum TimeStampUnit {
    seconds = 1e3,
    milliSeconds = 1,
}

/**
 * Converts a unix timestamp to a Date type.
 * @param timestamp the unix timestamp, in seconds or milliseconds.
 * @param unit the unit of timestamp
 * @returns a Date representing the unix timestamp
 */
export function dateFromTimestamp(
    timestamp: string | bigint,
    unit: TimeStampUnit = TimeStampUnit.seconds
): Date {
    return new Date(parseInt(timestamp.toString(), 10) * unit);
}
