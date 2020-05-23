
const mongoose = require('mongoose')


if (process.argv.length < 3) {
    console.log('Please call the app like this: node mongo.js <password> <contact name> <contact phone number>')
    process.exit(1)
  }
  
  const password = process.argv[2]
  const name = process.argv[3]
  const phone = process.argv[4]


  const url =
    `mongodb+srv://fullstack:${password}@cluster0-gr4dh.gcp.mongodb.net/phonebook-app?retryWrites=true&w=majority`
  
  mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).catch(e => {
      console.log("Error: ", e)
  }) 
  
  const contactSchema = new mongoose.Schema({
    name: String,
    date: Date,
    phone: String,
  })
  
  const Contact = mongoose.model('Person', contactSchema)
  
  const newContact = new Contact({
    name: name,
    date: new Date(),
    phone: phone,
  })

  if (name) {
    newContact.save().then(result => {
    console.log('contact saved!')
    mongoose.connection.close()
  })
  }
  else {
    Contact.find({}).then(result => {
      console.log("phonebook:")
      result.forEach(contact => {
        console.log(contact.name, contact.phone)
      })
      mongoose.connection.close()
    })
  }

  

 