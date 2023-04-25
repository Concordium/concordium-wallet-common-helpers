import {
    dateFromTimestamp,
    formatDate,
    TimeStampUnit,
} from '../../src/utils/timeHelpers';

test('date from timestamp milliseconds', () => {
    const timestamp = BigInt(1659532455220);
    expect(dateFromTimestamp(timestamp, TimeStampUnit.milliSeconds)).toEqual(
        new Date('2022-08-03T13:14:15.220Z')
    );
});

test('date from timestamp seconds', () => {
    const timestamp = BigInt(1659532455);
    expect(dateFromTimestamp(timestamp, TimeStampUnit.seconds)).toEqual(
        new Date('2022-08-03T13:14:15Z')
    );
});

test('date from timestamp defaults to seconds', () => {
    const timestamp = BigInt(1659532455);
    expect(dateFromTimestamp(timestamp, TimeStampUnit.seconds)).toEqual(
        dateFromTimestamp(timestamp)
    );
});

test('format date without locales', () => {
    const date = '20230114';
    expect(formatDate(date)).toEqual('14 January 2023');
});

test('format date with locale', () => {
    const date = '20230114';
    expect(formatDate(date, 'da')).toEqual('14. januar 2023');
});
