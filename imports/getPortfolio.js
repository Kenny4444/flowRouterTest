import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
 
export const Portfolios = new Mongo.Collection('portfolios');
if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('portfolios', function   () {
    return Portfolios.find();
  });
}
 
Meteor.methods({
  'portfolios.insert'(text,image) {
    check(text, String);
    check(image, String);
 
    // Make sure the user is logged in before inserting a task
 
    Portfolios.insert({
      text,
      createdAt: new Date(),
      image
      //owner: this.userId,
      //username: Meteor.users.findOne(this.userId).username,
    });
  },
  'portfolios.remove'(portfolioId) {
    check(portfolioId, String);
 
    Portfolios.remove(portfolioId);
  },
  'portfolios.setChecked'(portfolioId, setChecked) {
    check(portfolioId, String);
    check(setChecked, Boolean);
 
    Portfolios.update(portfolioId, { $set: { checked: setChecked } });
  },
});