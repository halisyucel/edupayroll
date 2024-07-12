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
import type { ResponseErrorUserErrorCode } from './ResponseErrorUserErrorCode';
import {
    ResponseErrorUserErrorCodeFromJSON,
    ResponseErrorUserErrorCodeFromJSONTyped,
    ResponseErrorUserErrorCodeToJSON,
} from './ResponseErrorUserErrorCode';
import type { User } from './User';
import {
    UserFromJSON,
    UserFromJSONTyped,
    UserToJSON,
} from './User';

/**
 * 
 * @export
 * @interface ResponseUserUserErrorCode
 */
export interface ResponseUserUserErrorCode {
    /**
     * 
     * @type {User}
     * @memberof ResponseUserUserErrorCode
     */
    data?: User;
    /**
     * 
     * @type {Array<ResponseErrorUserErrorCode>}
     * @memberof ResponseUserUserErrorCode
     */
    errors: Array<ResponseErrorUserErrorCode>;
}

/**
 * Check if a given object implements the ResponseUserUserErrorCode interface.
 */
export function instanceOfResponseUserUserErrorCode(value: object): value is ResponseUserUserErrorCode {
    if (!('errors' in value) || value['errors'] === undefined) return false;
    return true;
}

export function ResponseUserUserErrorCodeFromJSON(json: any): ResponseUserUserErrorCode {
    return ResponseUserUserErrorCodeFromJSONTyped(json, false);
}

export function ResponseUserUserErrorCodeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResponseUserUserErrorCode {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : UserFromJSON(json['data']),
        'errors': ((json['errors'] as Array<any>).map(ResponseErrorUserErrorCodeFromJSON)),
    };
}

export function ResponseUserUserErrorCodeToJSON(value?: ResponseUserUserErrorCode | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'data': UserToJSON(value['data']),
        'errors': ((value['errors'] as Array<any>).map(ResponseErrorUserErrorCodeToJSON)),
    };
}
