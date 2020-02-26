use hotel;
db.dropDatabase();

db.bookings.insertMany([
  {
    "name": "Harley",
    "email": "Harleybramwell97@gmail.com",
    "Date in": "2020-02-01",
    "Date out": "2020-02-25",
    "Checked in": true
  },
  {
    "name": "Joseph",
    "email": "onitwin@gmail.com",
    "Date in": "2020-02-01",
    "Date out": "2020-02-25",
    "Checked in": true
  }
])
