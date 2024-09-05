exports.handler = async function(event, context) {
    return {
      statusCode: 200,
      body: JSON.stringify({
        API_KEY: process.env.API_KEY,
        API_URL: process.env.API_URL
      })
    };
  };