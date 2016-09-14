# ioc-test

[![Build Status](https://travis-ci.org/blacksun1/ioc-test.svg?branch=master)](https://travis-ci.org/blacksun1/ioc-test)
[![Coverage Status](https://coveralls.io/repos/github/blacksun1/ioc-test/badge.svg?branch=master)](https://coveralls.io/github/blacksun1/ioc-test?branch=master)


## To run

```bash
grunt
node ./
```

## To run

```bash
grunt
npm test
```

## How does it work?

It tries to show off EVERYTHING as a component - even the application. `server` simply calls the bootstrapper which
returns the IOC container, get the `app` component and then calls `run` on it. Job done.

The bootstrapper works by combining what I'm calling "registration modules" which are modules that look like this

```js
import Something from "./something";


export default function(container) {

    container.register("something", something);

    return;
}
```

and then the bootstrapper just needs to pass in the Intravenous container object and then the module does all of the
work of registering the objects. In a real application these could be in the context root seperated by concern, or they
could be part of the package which is providing the services.

Hope you like it.
