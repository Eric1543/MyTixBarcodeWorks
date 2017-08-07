var Customer = require("../models/Customer"); 
var Event = require("../models/Event");

module.exports = {
	get: function(data, cb) {
		Event.find({
			"_id": data._id 
		}, cb); 
	}, //end get

	// save: function(data, cb) {
	// 	var newCustomer = {
	// 		event: data.event, 
	// 		quantitySelect: data.quantitySelect,
 //      option: data.option,
 //      customerName: data.customerName,
 //      customerEmail: data.customerEmail,
 //      barcode: data.barcode
	// 		}
	// 	}

	// 	Customer.create(newCustomer, function(err, doc) {
	// 		if (err) {
	// 			console.log(err); 
	// 		}
	// 		else {
	// 			console.log(doc); 
	// 			cb(doc); 
	// 		}
	// 	})
	// } //end save

} //end module.exports