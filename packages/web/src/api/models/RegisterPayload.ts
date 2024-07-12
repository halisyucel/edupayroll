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
/**
 * 
 * @export
 * @interface RegisterPayload
 */
export interface RegisterPayload {
    /**
     * 
     * @type {boolean}
     * @memberof RegisterPayload
     */
    success: boolean;
}

/**
 * Check if a given object implements the RegisterPayload interface.
 */
export function instanceOfRegisterPayload(value: object): value is RegisterPayload {
    if (!('success' in value) || value['success'] === undefined) return false;
    return true;
}

export function RegisterPayloadFromJSON(json: any): RegisterPayload {
    return RegisterPayloadFromJSONTyped(json, false);
}

export function RegisterPayloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): RegisterPayload {
    if (json == null) {
        return json;
    }
    return {
        
        'success': json['success'],
    };
}

export function RegisterPayloadToJSON(value?: RegisterPayload | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'success': value['success'],
    };
}

