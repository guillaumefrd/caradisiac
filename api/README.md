## Installation 

In **api**, **populate** and **es** folders, run: 
```
> npm install 
```

## Launch the API

In the **api** folder, run: 
```
> npm start 
```
or 
```
> npm run dev 
```

## Usage 

In your web brower: 
- [localhost:8000/suv](http://localhost:8000/suv) to get the models with the biggest volume
- [localhost:8000/populate](http://localhost:8000/populate) to populate elasticsearch

Don't forget to launch elasticsearch and modify [connection.js](https://github.com/guillaumefrd/caradisiac/blob/master/api/es/connection.js) if needed. 

### Scraping 

To update the scraping, go in **populate** folder and run: 

```
> node caradisiac.js
```
It will update the file [cars.json](https://github.com/guillaumefrd/caradisiac/blob/master/api/populate/cars.json).

After deleting the previous data, by running
```
> node delete.js
```
in **es** folder, open [localhost:8000/populate](http://localhost:8000/populate) to repopulate. 
