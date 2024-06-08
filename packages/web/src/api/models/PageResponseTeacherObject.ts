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
import type { PageMeta } from './PageMeta';
import {
    PageMetaFromJSON,
    PageMetaFromJSONTyped,
    PageMetaToJSON,
} from './PageMeta';
import type { ResponseErrorObject } from './ResponseErrorObject';
import {
    ResponseErrorObjectFromJSON,
    ResponseErrorObjectFromJSONTyped,
    ResponseErrorObjectToJSON,
} from './ResponseErrorObject';
import type { Teacher } from './Teacher';
import {
    TeacherFromJSON,
    TeacherFromJSONTyped,
    TeacherToJSON,
} from './Teacher';

/**
 * 
 * @export
 * @interface PageResponseTeacherObject
 */
export interface PageResponseTeacherObject {
    /**
     * 
     * @type {Array<Teacher>}
     * @memberof PageResponseTeacherObject
     */
    data?: Array<Teacher>;
    /**
     * 
     * @type {PageMeta}
     * @memberof PageResponseTeacherObject
     */
    meta?: PageMeta;
    /**
     * 
     * @type {Array<ResponseErrorObject>}
     * @memberof PageResponseTeacherObject
     */
    errors: Array<ResponseErrorObject>;
}

/**
 * Check if a given object implements the PageResponseTeacherObject interface.
 */
export function instanceOfPageResponseTeacherObject(value: object): value is PageResponseTeacherObject {
    if (!('errors' in value) || value['errors'] === undefined) return false;
    return true;
}

export function PageResponseTeacherObjectFromJSON(json: any): PageResponseTeacherObject {
    return PageResponseTeacherObjectFromJSONTyped(json, false);
}

export function PageResponseTeacherObjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): PageResponseTeacherObject {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(TeacherFromJSON)),
        'meta': json['meta'] == null ? undefined : PageMetaFromJSON(json['meta']),
        'errors': ((json['errors'] as Array<any>).map(ResponseErrorObjectFromJSON)),
    };
}

export function PageResponseTeacherObjectToJSON(value?: PageResponseTeacherObject | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(TeacherToJSON)),
        'meta': PageMetaToJSON(value['meta']),
        'errors': ((value['errors'] as Array<any>).map(ResponseErrorObjectToJSON)),
    };
}

