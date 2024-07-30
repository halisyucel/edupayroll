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
import type { DocumentUpdateInputTime } from './DocumentUpdateInputTime';
import {
    DocumentUpdateInputTimeFromJSON,
    DocumentUpdateInputTimeFromJSONTyped,
    DocumentUpdateInputTimeToJSON,
} from './DocumentUpdateInputTime';

/**
 * 
 * @export
 * @interface DocumentCreateInput
 */
export interface DocumentCreateInput {
    /**
     * 
     * @type {string}
     * @memberof DocumentCreateInput
     */
    name: string;
    /**
     * 
     * @type {DocumentUpdateInputTime}
     * @memberof DocumentCreateInput
     */
    time: DocumentUpdateInputTime;
    /**
     * 
     * @type {string}
     * @memberof DocumentCreateInput
     */
    description: string;
}

/**
 * Check if a given object implements the DocumentCreateInput interface.
 */
export function instanceOfDocumentCreateInput(value: object): value is DocumentCreateInput {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('time' in value) || value['time'] === undefined) return false;
    if (!('description' in value) || value['description'] === undefined) return false;
    return true;
}

export function DocumentCreateInputFromJSON(json: any): DocumentCreateInput {
    return DocumentCreateInputFromJSONTyped(json, false);
}

export function DocumentCreateInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): DocumentCreateInput {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'time': DocumentUpdateInputTimeFromJSON(json['time']),
        'description': json['description'],
    };
}

export function DocumentCreateInputToJSON(value?: DocumentCreateInput | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'time': DocumentUpdateInputTimeToJSON(value['time']),
        'description': value['description'],
    };
}

