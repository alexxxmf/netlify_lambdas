exports.handler = async (event, context) => {
  const body = JSON.parse(event.body);

  console.log('body', body);

  return {
    statusCode: 300,
    body: JSON.stringify({ message: 'Success' }),
  };
}