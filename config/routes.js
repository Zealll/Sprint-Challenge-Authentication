const axios = require('axios');
const bcrypt = require('bcryptjs')

const db = require('./helpers.js')

const { authenticate, generateToken } = require('../auth/authenticate');

module.exports = server => {
  server.post('/api/register', register);
  server.post('/api/login', login);
  server.get('/api/jokes', authenticate, getJokes);
};

function register(req, res) {
  let user = req.body
  const hash = bcrypt.hashSync(user.password)
  user.password = hash

  db
  .insert(user)
  .then(saved => res.status(201).json(saved))
  .catch(error => res.status(500).json(error))
}

function login(req, res) {
  const user = req.body;

    db
    .findBy(user)
    .then(users => {
        if(users.length && bcrypt.compareSync(user.password, users[0].password)) {
            const token = generateToken(users);
            res.json({ message: `Welcome ${user.username}`, token: token });
        } else {
            res.status(404).json({ message: 'Unable to login' });
        }
    })
    .catch(err => {
        res.status(500).json({ errorMessage: 'Failed to verify. Please try again.' });
    });
}

function getJokes(req, res) {
  const requestOptions = {
    headers: { accept: 'application/json' },
  };

  axios
    .get('https://icanhazdadjoke.com/search', requestOptions)
    .then(response => {
      res.status(200).json(response.data.results);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error Fetching Jokes', error: err });
    });
} 









function login(req, res) {
  const {username, password} = req.body

  db
  .findBy({ username })
  .first()
  .then(user => {
    req.session.user = user

    if (user && bcrypt.compareSync(password, user.password)) {
      const token = generateToken(user)

      res.status(200).json({message: `Logged In! Your ID is ${user.id}`, token})
    } else {
      res.status(401).json({message: 'Wrong Credentials'})
    }
  })
  .catch(error => res.status(500).json(error))
}