Counter = {};
Counter.collection = new Meteor.Collection('counters-collection');

Counter.get = async function(name) {
  var doc = await Counter.collection.findOneAsync(name);
  if(doc) {
    return doc.count;
  } else {
    return 0;
  }
};