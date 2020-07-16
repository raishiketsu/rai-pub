var ROAClient = require('@alicloud/pop-core').ROAClient;

var client = new ROAClient({
	  accessKeyId: 'LTAI4GKdiZgz2Sr3ocf4BjBp',
	  accessKeySecret: 'zwTJupv07qfmRe19tSycix06br7YFN',
	  endpoint: 'https://ecs.ap-northeast-1.aliyuncs.com',
	  apiVersion: '2014-05-26'
});

var params = {
  "RegionId": "ap-northeast-1"
}

var requestOption = {
  method: 'POST'
};

client.request('DescribeInstances', params, requestOption).then((result) => {
	console.log("OK")；
  console.log(JSON.stringify(result));
}, (ex) => {
	console.log("NG")；
  console.log(ex);
})

// => returns Promise
// // request(HTTPMethod, uriPath, queries, body, headers, options);
// // options => {timeout}
// client.request('GET', '/regions');
