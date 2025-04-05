const Service = require("../models/Service");

exports.getAllServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addDummyService = async (req, res) => {
  try {
    const { title, description, image, price } = req.body;
    const service = new Service({ title, description, image, price });
    await service.save();
    res.status(201).json(service);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
