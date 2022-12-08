import {
    Attributes,
    AttributesKeys,
    AttributeKey,
} from '@concordium/common-sdk/lib/types';
import { formatDate } from './timeHelpers';

export const attributeNamesMap: {
    [P in AttributeKey]: string;
} = {
    countryOfResidence: 'Country of residence',
    firstName: 'First name',
    idDocExpiresAt: 'ID valid to',
    idDocIssuedAt: 'ID valid from',
    idDocIssuer: ' Identity document issuer',
    idDocType: 'Identity document type',
    idDocNo: ' Identity document number',
    lastName: 'Last name',
    taxIdNo: 'Tax ID number',
    nationalIdNo: 'National ID number',
    nationality: 'Country of nationality',
    sex: 'Sex',
    dob: 'Date of birth',
};

enum Sex {
    NotKnown,
    Male,
    Female,
    NA = 9,
}

const parseGender = (sex: Sex) => {
    switch (sex) {
        case Sex.NotKnown:
            return 'Not known';
        case Sex.Male:
            return 'Male';
        case Sex.Female:
            return 'Female';
        case Sex.NA:
            return 'N/A';
        default:
            return 'Unavailable';
    }
};

enum DocumentType {
    NA,
    Passport,
    NationalIdCard,
    DriversLicense,
    ImmigrationCard,
}

const parseDocType = (docType: DocumentType) => {
    switch (docType) {
        case DocumentType.NA:
            return 'N/A';
        case DocumentType.NationalIdCard:
            return 'National ID card';
        case DocumentType.Passport:
            return 'Passport';
        case DocumentType.DriversLicense:
            return 'Drivers license';
        case DocumentType.ImmigrationCard:
            return 'Immigration card';
        default:
            return 'Unavailable';
    }
};

const parseDate = (date: string) => {
    try {
        return formatDate(date);
    } catch {
        return 'Unavailable';
    }
};

export function formatAttributeValue(
    key: AttributeKey,
    value: Attributes[typeof key]
): string;
export function formatAttributeValue(key: string, value: string): string {
    switch (key) {
        case 'idDocExpiresAt':
        case 'idDocIssuedAt':
        case 'dob':
            return parseDate(value);
        case 'sex':
            return parseGender(parseInt(value, 10));
        case 'idDocType':
            return parseDocType(parseInt(value, 10));
        default:
            return value;
    }
}

/**
 * Compare two attribute key names.
 * Tags, that are not in AttributeKey, are considered larger than those in AttributeKey.
 * This is to ensure that in a sorted ascending list, unknown attributes are placed at the end of the list.
 */
export function compareAttributes(
    attributeTag1: AttributeKey | string,
    attributeTag2: AttributeKey | string
) {
    const attr1 = AttributesKeys[attributeTag1 as AttributeKey];
    const attr2 = AttributesKeys[attributeTag2 as AttributeKey];
    if (attr1 === undefined && attr2 === undefined) {
        return attributeTag1.localeCompare(attributeTag2);
    }
    if (attr1 === undefined) {
        return 1;
    }
    if (attr2 === undefined) {
        return -1;
    }
    return attr1 - attr2;
}
