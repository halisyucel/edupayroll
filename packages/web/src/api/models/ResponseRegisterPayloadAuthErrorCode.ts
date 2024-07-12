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
import type { RegisterPayload } from './RegisterPayload';
import {
    RegisterPayloadFromJSON,
    RegisterPayloadFromJSONTyped,
    RegisterPayloadToJSON,
} from './RegisterPayload';
import type { ResponseErrorAuthErrorCode } from './ResponseErrorAuthErrorCode';
import {
    ResponseErrorAuthErrorCodeFromJSON,
    ResponseErrorAuthErrorCodeFromJSONTyped,
    ResponseErrorAuthErrorCodeToJSON,
} from './ResponseErrorAuthErrorCode';

/**
 * 
 * @export
 * @interface ResponseRegisterPayloadAuthErrorCode
 */
export interface ResponseRegisterPayloadAuthErrorCode {
    /**
     * 
     * @type {RegisterPayload}
     * @memberof ResponseRegisterPayloadAuthErrorCode
     */
    data?: RegisterPayload;
    /**
     * 
     * @type {Array<ResponseErrorAuthErrorCode>}
     * @memberof ResponseRegisterPayloadAuthErrorCode
     */
    errors: Array<ResponseErrorAuthErrorCode>;
}

/**
 * Check if a given object implements the ResponseRegisterPayloadAuthErrorCode interface.
 */
export function instanceOfResponseRegisterPayloadAuthErrorCode(value: object): value is ResponseRegisterPayloadAuthErrorCode {
    if (!('errors' in value) || value['errors'] === undefined) return false;
    return true;
}

export function ResponseRegisterPayloadAuthErrorCodeFromJSON(json: any): ResponseRegisterPayloadAuthErrorCode {
    return ResponseRegisterPayloadAuthErrorCodeFromJSONTyped(json, false);
}

export function ResponseRegisterPayloadAuthErrorCodeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResponseRegisterPayloadAuthErrorCode {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : RegisterPayloadFromJSON(json['data']),
        'errors': ((json['errors'] as Array<any>).map(ResponseErrorAuthErrorCodeFromJSON)),
    };
}

export function ResponseRegisterPayloadAuthErrorCodeToJSON(value?: ResponseRegisterPayloadAuthErrorCode | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'data': RegisterPayloadToJSON(value['data']),
        'errors': ((value['errors'] as Array<any>).map(ResponseErrorAuthErrorCodeToJSON)),
    };
}
