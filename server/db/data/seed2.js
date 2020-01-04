const fs = require('fs');
const faker = require('faker');
const categories = require('../categories.json');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const cliProgress = require('cli-progress');

const csvWriter = createCsvWriter({
  path: './server/db/data/test2.csv',
  header: [
      {id: 'id', title: 'ID'},
      {id: 'title', title: 'Title'},
      {id: 'review', title: 'Review'},
      {id: 'reviewStars', title: 'Review Stars'},
      {id: 'numOfReviews', title: 'Num of Reviews'},
      {id: 'pricePerPersonLow', title: 'Price Per Person Low'},
      {id: 'pricePerPersonHigh', title: 'Price Per Person High'},
      {id: 'category', title: 'Category'},
      {id: 'topTags', title: 'Top Tags'},
      {id: 'description', title: 'Description'}
  ]
});

const records = [];
let id = 0
let idArray = [];
for (let i = 1; i < 10000001; i += 100000){
  idArray.push(i);
}
const generate = (start) => {
  for (let i = 0; i < 100000; i++) {
    // Logic for Review and Review Stars data for each record
    const review = Math.round((Math.random() * 2 + 3) * 10) / 10;
    const reviewStars = [];
    for (let k = 0; k < review - 1; k++) {
      reviewStars.push(1);
    }
    if (Number.isInteger(review)) {
      reviewStars.push(1);
    } else if (review - Math.floor(review) >= 0.5) {
      reviewStars.push(0);
    }
    // Creates 1 new record
    records.push({
      id: start,
      title: faker.company.companyName(),
      review: review,
      reviewStars: reviewStars,
      numOfReviews: Math.floor(Math.random() * 10000),
      pricePerPersonLow: Math.floor(Math.random() * 50),
      pricePerPersonHigh: 50 + Math.floor(Math.random() * 50),
      category: categories[Math.floor(Math.random() * categories.length)],
      topTags: `${faker.commerce.productAdjective()}, ${faker.commerce.productAdjective()}, ${faker.commerce.productAdjective()}`,
      description: faker.lorem.sentences(Math.random() * 4 + 2),
    });
    start++
  }
};

const write = async () => {
  for (let i = 0; i < idArray.length; i++) {
    records.length = 0;
    await generate(idArray[i])
    const max = 3
      await csvWriter.writeRecords(records)
        .then(() => {
            let val = i+1
            console.log(`${Math.floor(val/idArray.length * 100)}%`);
        });
    }
  }
write();
