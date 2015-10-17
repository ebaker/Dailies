Trying to create a schedule for everyday tasks.

# Dependancies
```sh
$ brew install jq
```

# Quickstart
```sh
# setup
$ npm install
$ ./bin/www&
open 'http;//localhost:3000'
curl localhost:3000/api/v0.1/users | jq .

## CURL API

### GET USERS (ALL)
```sh
curl localhost:3000/api/v0.1/users | jq .
```

### GET TASK FOR USER(S)
```sh
curl localhost:3000/api/v0.1/users/2157401960/tasks | jq .
```

### CREATE USER WITH - phone - password

```sh
curl --data "phone=2157401960&password=shhhhh" localhost:3000/api/v0.1/users | jq .
```