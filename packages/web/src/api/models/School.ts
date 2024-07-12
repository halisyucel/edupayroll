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
 * @interface School
 */
export interface School {
    /**
     * 
     * @type {string}
     * @memberof School
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof School
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof School
     */
    editorName: string;
    /**
     * 
     * @type {string}
     * @memberof School
     */
    editorTitle: string;
    /**
     * 
     * @type {string}
     * @memberof School
     */
    principalName: string;
}

/**
 * Check if a given object implements the School interface.
 */
export function instanceOfSchool(value: object): value is School {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('editorName' in value) || value['editorName'] === undefined) return false;
    if (!('editorTitle' in value) || value['editorTitle'] === undefined) return false;
    if (!('principalName' in value) || value['principalName'] === undefined) return false;
    return true;
}

export function SchoolFromJSON(json: any): School {
    return SchoolFromJSONTyped(json, false);
}

export function SchoolFromJSONTyped(json: any, ignoreDiscriminator: boolean): School {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'editorName': json['editorName'],
        'editorTitle': json['editorTitle'],
        'principalName': json['principalName'],
    };
}

export function SchoolToJSON(value?: School | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'name': value['name'],
        'editorName': value['editorName'],
        'editorTitle': value['editorTitle'],
        'principalName': value['principalName'],
    };
}

