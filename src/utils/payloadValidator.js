const getPayloadWithValidFieldsOnly = (validFields, payload) =>
  Object.entries(payload).reduce(
    (acc, [key, value]) =>
      // if req.body key is valid, put in payload
      validFields.includes(key) ? { ...acc, [key]: value } : acc,
    {}
  );

module.exports = {
  getPayloadWithValidFieldsOnly,
};
