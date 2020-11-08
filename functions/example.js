exports.handler = function (event, context, callback) {
  const body = JSON.parse(event.body);

  console.log('body', body);

  return {
    statusCode: 200,
    body: 'success',
  };
}