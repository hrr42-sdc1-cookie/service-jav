CREATE TABLE overviews (
  id int PRIMARY KEY,
  title text,
  review float,
  reviewStars list<int>,
  numOfReviews text,
  pricePerPersonLow text,
  pricePerPersonHigh text,
  category list<text>,
  topTags list<text>,
  "description" text
);
