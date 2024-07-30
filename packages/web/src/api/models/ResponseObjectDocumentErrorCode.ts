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
import type { ResponseErrorDocumentErrorCode } from './ResponseErrorDocumentErrorCode';
import {
    ResponseErrorDocumentErrorCodeFromJSON,
    ResponseErrorDocumentErrorCodeFromJSONTyped,
    ResponseErrorDocumentErrorCodeToJSON,
} from './ResponseErrorDocumentErrorCode';

/**
 * 
 * @export
 * @interface ResponseObjectDocumentErrorCode
 */
export interface ResponseObjectDocumentErrorCode {
    /**
     * 
     * @type {object}
     * @memberof ResponseObjectDocumentErrorCode
     */
    node?: object;
    /**
     * 
     * @type {Array<ResponseErrorDocumentErrorCode>}
     * @memberof ResponseObjectDocumentErrorCode
     */
    errors: Array<ResponseErrorDocumentErrorCode>;
}

/**
 * Check if a given object implements the ResponseObjectDocumentErrorCode interface.
 */
export function instanceOfResponseObjectDocumentErrorCode(value: object): value is ResponseObjectDocumentErrorCode {
    if (!('errors' in value) || value['errors'] === undefined) return false;
    return true;
}

export function ResponseObjectDocumentErrorCodeFromJSON(json: any): ResponseObjectDocumentErrorCode {
    return ResponseObjectDocumentErrorCodeFromJSONTyped(json, false);
}

export function ResponseObjectDocumentErrorCodeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResponseObjectDocumentErrorCode {
    if (json == null) {
        return json;
    }
    return {
        
        'node': json['node'] == null ? undefined : json['node'],
        'errors': ((json['errors'] as Array<any>).map(ResponseErrorDocumentErrorCodeFromJSON)),
    };
}

export function ResponseObjectDocumentErrorCodeToJSON(value?: ResponseObjectDocumentErrorCode | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'node': value['node'],
        'errors': ((value['errors'] as Array<any>).map(ResponseErrorDocumentErrorCodeToJSON)),
    };
}

