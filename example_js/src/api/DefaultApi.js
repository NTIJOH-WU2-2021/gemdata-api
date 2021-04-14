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


import ApiClient from "../ApiClient";
import Record from '../model/Record';

/**
* Default service.
* @module api/DefaultApi
* @version 1
*/
export default class DefaultApi {

    /**
    * Constructs a new DefaultApi. 
    * @alias module:api/DefaultApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the listRecords operation.
     * @callback module:api/DefaultApi~listRecordsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Record>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all records
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit How many items to return at one time (default 20, max 100)
     * @param {Number} opts.id Filter results based on this parameter
     * @param {module:api/DefaultApi~listRecordsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Record>}
     */
    listRecords(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'limit': opts['limit'],
        'id': opts['id']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Record];
      return this.apiClient.callApi(
        '/rVjsrm', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
