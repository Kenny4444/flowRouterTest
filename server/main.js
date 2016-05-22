import { Portfolios } from '../imports/getPortfolio.js';

if(Portfolios.find().count() == 0){
  Portfolios.insert({
    text: "This is a new Portfolio",
    createdAt: new Date(),
    image:"/images/childrens_2.jpg"
  });
  Portfolios.insert({
    text: "This is it yo",
    createdAt: new Date(),
    image:"/images/cut_1x.png"
  });
  Portfolios.insert({
    text: "From Dribble",
    createdAt: new Date(),
    image:"https://d13yacurqjgara.cloudfront.net/users/86597/screenshots/2712792/dr231.jpg"
  });
}