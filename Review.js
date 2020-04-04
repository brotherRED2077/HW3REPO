var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

mongoose.connect(process.env.DB, { useNewUrlParser: true } );
mongoose.set('useCreateIndex', true);

var reviewSchema = new Schema({
    reviewerName: { type: String, required: true, index: { unique: true }},
    yearReleased: { type: Date, required: true },
    quote: { type: String, required: true },
    rateing: { type: integer, required: true }
});

module.exports = mongoose.model('Review', reviewSchema);