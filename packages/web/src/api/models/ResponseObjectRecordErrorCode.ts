// @ts-nocheck

/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { ResponseErrorRecordErrorCode } from './ResponseErrorRecordErrorCode';
import {
    ResponseErrorRecordErrorCodeFromJSON,
    ResponseErrorRecordErrorCodeFromJSONTyped,
    ResponseErrorRecordErrorCodeToJSON,
} from './ResponseErrorRecordErrorCode';

/**
 * 
 * @export
 * @interface ResponseObjectRecordErrorCode
 */
export interface ResponseObjectRecordErrorCode {
    /**
     * 
     * @type {object}
     * @memberof ResponseObjectRecordErrorCode
     */
    node?: object;
    /**
     * 
     * @type {Array<ResponseErrorRecordErrorCode>}
     * @memberof ResponseObjectRecordErrorCode
     */
    errors: Array<ResponseErrorRecordErrorCode>;
}

/**
 * Check if a given object implements the ResponseObjectRecordErrorCode interface.
 */
export function instanceOfResponseObjectRecordErrorCode(value: object): value is ResponseObjectRecordErrorCode {
    if (!('errors' in value) || value['errors'] === undefined) return false;
    return true;
}

export function ResponseObjectRecordErrorCodeFromJSON(json: any): ResponseObjectRecordErrorCode {
    return ResponseObjectRecordErrorCodeFromJSONTyped(json, false);
}

export function ResponseObjectRecordErrorCodeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResponseObjectRecordErrorCode {
    if (json == null) {
        return json;
    }
    return {
        
        'node': json['node'] == null ? undefined : json['node'],
        'errors': ((json['errors'] as Array<any>).map(ResponseErrorRecordErrorCodeFromJSON)),
    };
}

export function ResponseObjectRecordErrorCodeToJSON(value?: ResponseObjectRecordErrorCode | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'node': value['node'],
        'errors': ((value['errors'] as Array<any>).map(ResponseErrorRecordErrorCodeToJSON)),
    };
}

