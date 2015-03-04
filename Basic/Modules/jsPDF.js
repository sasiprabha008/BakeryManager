/*	The helloWorld() function can be executed from any of your project's server-side JavaScript file using the require() method as follows:
	var result = require('jsPDF').helloWorld();

	For more information, refer to http://doc.wakanda.org/Wakanda Studio0.Beta/help/Title/en/page3355.html
*/
include(ds.getModelFolder().path+"Modules/jspdfsource.js");

exports.jsPDF = jsPDF;