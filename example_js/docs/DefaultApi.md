# SofodataGemDatabase.DefaultApi

All URIs are relative to *https://genesis.sofodata.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listRecords**](DefaultApi.md#listRecords) | **GET** /rVjsrm | List all records



## listRecords

> [Record] listRecords(opts)

List all records

### Example

```javascript
import SofodataGemDatabase from 'sofodata_gem_database';
let defaultClient = SofodataGemDatabase.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new SofodataGemDatabase.DefaultApi();
let opts = {
  'limit': 56, // Number | How many items to return at one time (default 20, max 100)
  'id': 3.4 // Number | Filter results based on this parameter
};
apiInstance.listRecords(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| How many items to return at one time (default 20, max 100) | [optional] 
 **id** | **Number**| Filter results based on this parameter | [optional] 

### Return type

[**[Record]**](Record.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

