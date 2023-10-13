/* eslint-disable jest/no-jest-import */
import type { Config } from 'jest';

const config: Config = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleNameMapper: {
        '^(\\.\\.?\\/.+)\\.js$': '$1', // Remap esmodule file extensions
    },
    transformIgnorePatterns: [
        'node_modules/(?!@concordium/web-sdk)', // @concordium/web-sdk is an ES module only
    ],
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
    moduleDirectories: ['node_modules'],
    setupFiles: ['./test/loadModules.ts'],
    transform: {
        '^.+\\.[jt]sx?$': [
            'ts-jest',
            {
                useESM: true,
                tsconfig: 'tsconfig.json',
            },
        ],
    },
    extensionsToTreatAsEsm: ['.ts'],
};

export default config;
