const { Cars } = require("../models");

const carPage = async (req, res) => {
    try {
      const car = await Cars.findAll();
      res.render("cars/index.ejs", {
        car,
        message: req.flash("message", ""),
      });
    } catch (err) {
      res.render("error.ejs", {
        message: err.message,
      });
    }
  };

const createCarPage = async (req,res) => {
    // desctructing Object
    const {name, sewa} = req.body

    try {
      res.render("cars/create.ejs")
    } catch (err) {
      res.render("error.ejs", {
        message: err.message,
      });
    }
}

const createCar = async (req, res) => {
  try {
    await Cars.create(req.body);
    req.flash("message", "Ditambah");
    res.redirect("/cars");
  } catch (err) {
    console.log(err.message);
  }
};

const editCarPage = async (req, res) => {
  try {
    const car = await Cars.findByPk(req.params.id);

    res.render("cars/edit.ejs", {
      car,
    });
  } catch (err) {
    res.render("error.ejs", {
      message: err.message,
    });
  }
};

const editCar = async (req, res) => {
  try {
    await Cars.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    req.flash("message", "Diedit");
    res.redirect("/cars");
  } catch (err) {
    res.render("error.ejs", {
      message: err.message,
    });
  }
};

const deleteCar = async (req, res) => {
  try {
    await Cars.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.redirect("/cars");
  } catch (err) {
    res.render("error.ejs", {
      message: err.message,
    });
  }
};


    module.exports =  {
        carPage,
        createCarPage,
        createCar,
        editCarPage,
        editCar,
        deleteCar
    } 