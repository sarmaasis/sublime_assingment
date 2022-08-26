const customerModel = require('../model/model');


module.exports = {
 search: function(req, res) {
  console.log(req.body);
  const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0;
  const page = req.query.page ? parseInt(req.query.page) : 0;
  const response= customerModel.find({
        $and: [
          {first_name: req.body.first_name}, 
          {last_name: req.body.last_name}, 
          {city: req.body.city}
        ]
      })
      .limit(pageSize)
      .skip(page)
    
  response.then(customerList => res.json({status:"success", message: "Customers List found!!!", data:{customers: customerList}}))
 },


 getById: function(req, res, next) {
  console.log(req.body);
  customerModel.findById(req.params.customerId, function(err, customerInfo){
   if (err) {
    next(err);
   } else {
    res.json({status:"success", message: "Customer found!!!", data:{customer: customerInfo}});
   }
  });
 },


  uniqueCities: function(req, res, next) {

  customerModel.aggregate([{$group: {_id: "$city",total: {$sum: 1}}}], function(err, city){
    if(err)
      next(err);
     else {
      res.json({status:"success", message: "Unique City and number of customer found!!", data:{cities: city}});
     }
    })
 },


  create: function(req, res, next) {
  customerModel.create({ first_name: req.body.first_name, last_name: req.body.last_name, city: req.body.city, company: req.body.company }, function (err, result) {
      if (err) 
       next(err);
      else
       res.json({status: "success", message: "Customer added successfully!!!", data: null});
      
    });
 },
}