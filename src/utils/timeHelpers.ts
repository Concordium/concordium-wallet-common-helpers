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
