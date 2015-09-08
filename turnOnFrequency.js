var map = {
  "1": "Threesome",
  "3": "Being Dominant/Master",
  "4": "Being Submissive/Slave",
  "6": "Bondage",
  "7": "Conventional Sex",
  "11": "Fetishes",
  "14": "Nothing Kinky",
  "15": "One-Night Stands",
  "17": "Role Playing",
  "18": "Sex Talk",
  "19": "Spanking",
  "21": "Experimenting with Tantric Sex",
  "23": "Experimenting with Sex Toys",
  "26": "Aggressiveness",
  "27": "Blindfolding",
  "28": "Bubble Bath for 2",
  "29": "Cuddling &amp; Hugging",
  "30": "Curious - Domination",
  "31": "Curious - Submission",
  "32": "Dressing Up/Lingerie",
  "33": "Erotic Movies",
  "34": "Erotic Tickling",
  "36": "Extended Foreplay/Teasing",
  "37": "Gentleness",
  "38": "Good With Your Hands",
  "39": "Kissing",
  "40": "Light Kinky Fun",
  "41": "Likes to be Watched/Exhibitionism",
  "42": "Likes to Give Oral Sex",
  "43": "Likes to Receive Oral Sex",
  "44": "Likes to Go Slow",
  "45": "Lots of Stamina",
  "46": "Open to Experimentation",
  "48": "Sensual Massage",
  "49": "Sharing Fantasies",
  "50": "Someone I Can Teach",
  "51": "Someone Who Can Teach Me",
  "52": "You Like to Cross Dress",
  "53": "I Like to Cross Dress",
  "intimate_desires_other": "Other:"
},
mapDesires = {
  "4": "Sense of Humor",
  "6": "Aggressive/Take Charge Nature",
  "9": "Average Sex Drive",
  "10": "Confidence",
  "11": "Discretion/Secrecy",
  "12": "Dislikes Routine",
  "14": "Good Personal Hygiene",
  "16": "Has a Secret Love Nest",
  "17": "High Sex Drive",
  "18": "Imagination",
  "19": "Likes Routine",
  "30": "A Professional/Well Groomed",
  "31": "Stylish/Classy",
  "32": "Casual Jeans/T-shirt Type",
  "33": "Tattoos",
  "34": "Body Piercing",
  "35": "BBW",
  "37": "Muscular/Fit Body",
  "38": "Petite Figure",
  "40": "Tall Height",
  "41": "Short Height",
  "42": "Long Hair",
  "43": "Short Hair",
  "44": "Girl Next Door",
  "45": "Naughty Girl",
  "48": "Creative and Adventurous",
  "49": "Relaxed and Easy Going",
  "50": "Hopeless Romantic",
  "52": "Not Possessive",
  "53": "A Good Listener",
  "54": "Good Communicator",
  "55": "Disease Free",
  "56": "Drug Free",
  "57": "Casual/Social Drinker",
  "58": "Seeking a Sugar Baby",
  "60": "Natural Breasts"
};
freq = {};

// to parse other file, use turnOnFrequency.csv and swap out the above mapDesires var as map
var csv = require('fs').readFileSync('./openToFreq.csv').toString();
var rows = csv.split(',');
var max = 0;
rows.forEach(function(row){
  var items = row.split('|');
  items.forEach(function(item){
    if (item  === '' || item === '\n' || !item) return;
    var mappedName = map[item] || item;
    if (!freq.hasOwnProperty(mappedName)){
      freq[mappedName] = 0;
    }
    freq[mappedName]++;
    max = Math.max(0, freq[mappedName]);
  }); 
});
var _ = require('underscore');
var inverted = _.invert(freq);

var keys = _.map(_.keys(inverted), function(k){ return parseInt(k, 10); });
// console.log(keys);
// console.log(freq);

_.each(keys, function(k){
  console.log(k + ',' + inverted[k.toString()])
});
