CREATE TABLE overviews(
  id SERIAL PRIMARY KEY,
  restaurantId INTEGER,
  title TEXT NOT NULL,
  review TEXT NOT NULL,
  reviewStars TEXT [],
  numOfReviews TEXT,
  pricePerPersonLow TEXT,
  pricePerPersonHigh TEXT,
  category TEXT [],
  topTags TEXT [],
  description TEXT
);

// (restaurantId, title, review, reviewStars, numOfReviews, pricePerPersonLow, pricePerPersonHigh, category, topTags, description)