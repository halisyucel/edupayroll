/* tslint:disable */
/* eslint-disable */
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
/**
 * 
 * @export
 * @interface TokenPayload
 */
export interface TokenPayload {
    /**
     * 
     * @type {string}
     * @memberof TokenPayload
     */
    token: string;
}

/**
 * Check if a given object implements the TokenPayload interface.
 */
export function instanceOfTokenPayload(value: object): value is TokenPayload {
    if (!('token' in value) || value['token'] === undefined) return false;
    return true;
}

export function TokenPayloadFromJSON(json: any): TokenPayload {
    return TokenPayloadFromJSONTyped(json, false);
}

export function TokenPayloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): TokenPayload {
    if (json == null) {
        return json;
    }
    return {
        
        'token': json['token'],
    };
}

export function TokenPayloadToJSON(value?: TokenPayload | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'token': value['token'],
    };
}

