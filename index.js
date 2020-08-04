var ROAClient = require('@alicloud/pop-core').ROAClient;

var client = new ROAClient({
	  accessKeyId: 'LTAI4G9mS6Eyo8muHYGfCkgG',
	  accessKeySecret: 'QusirtvgODAoytCZzqUD9uzp2ZrXTU',
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
