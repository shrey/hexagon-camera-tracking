# hexagon-camera-tracking

## Steps to setup algorithm
>Click Fork on the top right corner of screen

>Go to the forked repository in your profile

>Click the clone or download button and copy the http link

>Go to terminal

>Make a new directory

>in the terminal:- `git clone <the copied link>`

>cd into the repository

>run node index.js

I've made a 30X30 gird for simulation of coordinates. It'll randomize movements of 9 people one by one, some are infected, some are not, and as a non infected person will enter a infected zone, it'll log Alert and the person's name. After that wherever that person goes, will become a danger zone. The time is taken from 0, but as the program currently is one time run, We can't use setTimeout function, but as we use a database and frontend connectivity, We can do that. In the end, It'll display a final grid, Where 0 represents not infected zones and 1 represents infected zones.
