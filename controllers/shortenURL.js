const ShortenURL = require('../models').URLShorts;
let currentNumber = 0;
function toBase62(n) {
    if (n === 0) {
      return '0';
    }
    let digits = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var result = ''; 
    while (n > 0) {
      result = digits[n % digits.length] + result;
      n = parseInt(n / digits.length, 10);
    }
    return result;
}

// const map = {};
module.exports = {
    
    generateURL(req, res) {
        const base62num = toBase62(currentNumber);
        console.log(base62num);
        currentNumber++;
        // map[base62num] = req.body.URLToShorten;
        return ShortenURL.create({
          shortURL: base62num,
          longURL: req.body.URLToShorten,
        }).then(URLData => 
          res.status(201).send({shortURL: `127.0.0.1:8000/api/shortenURL/${URLData.shortURL}`})
        ).catch(error => res.status(400).send(error));
        
        // return res.status(200).send({shortenedURL: `127.0.0.1:8000/api/shortenURL/${base62num}`});
    },
    async redirectToShortURL(req, res) {
        const URLData = await ShortenURL.findOne(
          {
            where: {
              shortURL: req.params.shortURLKey,
            },
          });
          console.log(URLData);
          return res.status(200).redirect(URLData.longURL)
          // .then(URLData => res.status(200).redirect(URLData.longURL))
          // .catch(error => res.status(400).send(error));
        // console.log(req.params.shortURLKey);
        // const completeURL = map[req.params.shortURLKey];
        // res.status(200).redirect(completeURL);
    }
}