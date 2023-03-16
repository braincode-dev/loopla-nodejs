exports.getAllRates = async (req, res) => {
  
  var myHeaders = new Headers();
  myHeaders.append("apikey", process.env.API_KEY);

  var requestOptions = {
    method: "GET",
    redirect: "follow",
    headers: myHeaders,
  };

  let url = `https://api.apilayer.com/exchangerates_data/latest?symbols=${process.env.LIST_CURRENCY}&base=${process.env.BASE_CURRENCY}`;

  try {
    const response = await fetch(url, requestOptions);
    if (!response.ok) {
      throw new Error("Error fetching data");
    }
    const result = await response.json();
    res.status(200).json({
      status: "success",
      requestedAt: req.requestTime,
      result,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
