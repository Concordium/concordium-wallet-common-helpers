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
