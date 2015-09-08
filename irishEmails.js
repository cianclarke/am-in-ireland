var fs = require('fs');
var _ = require('underscore');
var emails = fs.readFileSync('./irish_mails').toString();
emails = emails.split('\n');
var domainsMap = {};

emails.forEach(function(email){
  var parts = email.split('@');
  if (parts.length < 2) return;
  var domain = parts[1].trim();
  domain = domain.toLowerCase();
  if (!domainsMap.hasOwnProperty(domain)){
    domainsMap[domain] = 0;
  }
  domainsMap[domain]++;
});

var inverse = _.invert(domainsMap);
_.each(inverse, function(value, key){
  console.log(value + ',' + key);
});
