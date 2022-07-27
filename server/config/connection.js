const mongoose = require('mongoose');

<<<<<<< HEAD
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/Oddjobs', {
=======
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/oddJobs', {
>>>>>>> 6945ddd16ad559b7330d72f30b42efd73e285ad7
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;