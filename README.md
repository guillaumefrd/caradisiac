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
- [localhost:8000/suv/:maxVolume](http://localhost:8000/suv/1000) to get the models with a volume lower than the volume max you fix
- [localhost:8000/populate](http://localhost:8000/populate) to populate elasticsearch

Don't forget to launch elasticsearch and modify [connection.js](https://github.com/guillaumefrd/caradisiac/blob/master/api/es/connection.js) if needed. 

### Scraping 

To update the scraping, go in **populate** folder and run: 

```
> node caradisiac.js
```
It will update the file [cars.json](https://github.com/guillaumefrd/caradisiac/blob/master/api/populate/cars.json).

Delete the previous data, by running
```
> node delete.js
```
in **es** folder

Then open [localhost:8000/populate](http://localhost:8000/populate) to repopulate. 

## React Application 

### Usage 

Go into [my-app](https://github.com/guillaumefrd/caradisiac/tree/master/my-app) folder and run: 

```
> npm start
```

Then open your web browser and go to [localhost:3000](http://localhost:3000/).

The page will display the list of cars with the biggest volumes lower than 1000.

Click on "More information" to go directly to the caradisiac page for the specific model you've chosen. 

### Screenshot

![screenshot](https://raw.githubusercontent.com/guillaumefrd/caradisiac/master/img/screen-app.PNG)
