/**
 * Sofodata - gem_database
 * gemstone and gemology information database
 *
 * The version of the OpenAPI document: 1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Record model module.
 * @module model/Record
 * @version 1
 */
class Record {
    /**
     * Constructs a new <code>Record</code>.
     * A representation of a record
     * @alias module:model/Record
     */
    constructor() { 
        
        Record.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Record</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Record} obj Optional instance to populate.
     * @return {module:model/Record} The populated <code>Record</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Record();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('img')) {
                obj['img'] = ApiClient.convertToType(data['img'], 'String');
            }
            if (data.hasOwnProperty('gemstone')) {
                obj['gemstone'] = ApiClient.convertToType(data['gemstone'], 'String');
            }
            if (data.hasOwnProperty('location_of_origin')) {
                obj['location_of_origin'] = ApiClient.convertToType(data['location_of_origin'], 'String');
            }
            if (data.hasOwnProperty('origin')) {
                obj['origin'] = ApiClient.convertToType(data['origin'], 'String');
            }
            if (data.hasOwnProperty('treatments')) {
                obj['treatments'] = ApiClient.convertToType(data['treatments'], 'String');
            }
            if (data.hasOwnProperty('cut_type')) {
                obj['cut_type'] = ApiClient.convertToType(data['cut_type'], 'String');
            }
            if (data.hasOwnProperty('weight')) {
                obj['weight'] = ApiClient.convertToType(data['weight'], 'String');
            }
            if (data.hasOwnProperty('dimensions')) {
                obj['dimensions'] = ApiClient.convertToType(data['dimensions'], 'String');
            }
            if (data.hasOwnProperty('cut_by')) {
                obj['cut_by'] = ApiClient.convertToType(data['cut_by'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
Record.prototype['id'] = undefined;

/**
 * @member {String} name
 */
Record.prototype['name'] = undefined;

/**
 * @member {String} description
 */
Record.prototype['description'] = undefined;

/**
 * @member {String} img
 */
Record.prototype['img'] = undefined;

/**
 * @member {String} gemstone
 */
Record.prototype['gemstone'] = undefined;

/**
 * @member {String} location_of_origin
 */
Record.prototype['location_of_origin'] = undefined;

/**
 * @member {String} origin
 */
Record.prototype['origin'] = undefined;

/**
 * @member {String} treatments
 */
Record.prototype['treatments'] = undefined;

/**
 * @member {String} cut_type
 */
Record.prototype['cut_type'] = undefined;

/**
 * @member {String} weight
 */
Record.prototype['weight'] = undefined;

/**
 * @member {String} dimensions
 */
Record.prototype['dimensions'] = undefined;

/**
 * @member {String} cut_by
 */
Record.prototype['cut_by'] = undefined;






export default Record;
