import { dateFromTimestamp, TimeStampUnit } from '../../src/utils/timeHelpers';

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
