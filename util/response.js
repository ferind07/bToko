const resp = (error, data) => {
  const responseData = {
    error: error,
    data: data,
  };
  return responseData;
};

const response = {
  success: (data, res) => {
    res.send(resp(false, data));
  },
  error: (error, res) => {
    res.send(resp(true, error));
  },
};

module.exports = response;
