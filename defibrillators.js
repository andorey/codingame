//conditions:
//The city of Montpellier has equipped its streets with defibrillators to help save victims of cardiac arrests. The data corresponding to the position of all defibrillators is available online.
//
// Based on the data we provide in the tests, write a program that will allow users to find the defibrillator nearest to their location using their mobile phone.
//  	Rules
//
// The input data you require for your program is provided in text format.
// This data is comprised of lines, each of which represents a defibrillator. Each defibrillator is represented by the following fields:
// A number identifying the defibrillator
// Name
// Address
// Contact Phone number
// Longitude (degrees)
// Latitude (degrees)
// These fields are separated by a semicolon (;).
//
// Beware: the decimal numbers use the comma (,) as decimal separator. Remember to turn the comma (,) into dot (.) if necessary in order to use the data in your program.
//
// DISTANCE
// The distance d between two points A and B will be calculated using the following formula:
//
//
// ​
// Note: In this formula, the latitudes and longitudes are expressed in radians. 6371 corresponds to the radius of the earth in km.
//
// The program will display the name of the defibrillator located the closest to the user’s position. This position is given as input to the program.
//  	Game Input
//
// Input
// Line 1: User's longitude (in degrees)
//
// Line 2: User's latitude (in degrees)
//
// Line 3: The number N of defibrillators located in the streets of Montpellier
//
// N next lines: a description of each defibrillator
//
// Output
// The name of the defibrillator located the closest to the user’s position.
// Constraints
// 0 < N < 10000

// Example:

// Input:
// 3,879483
// 43,608177
// 3
// 1;Maison de la Prevention Sante;6 rue Maguelone 340000 Montpellier;;3,87952263361082;43,6071285339217
// 2;Hotel de Ville;1 place Georges Freche 34267 Montpellier;;3,89652239197876;43,5987299452849
// 3;Zoo de Lunaret;50 avenue Agropolis 34090 Mtp;;3,87388031141133;43,6395872778854

// Output:
// Maison de la Prevention Sante


//variant #1:
const radians = deg => Math.PI * (deg.replace(',', '.')) / 180

const LON = radians(readline());
const LAT = radians(readline());
const N = parseInt(readline());
const radiusEarth = 6371;   //from condition

let next = 100000, out = '';

for (let i = 0; i < N; i++) {
    const DEFIB = readline().split(';');
    const defLon = radians(DEFIB[4])    //lpongitude position
    const defLat = radians(DEFIB[5])    //latitude position
    const x = (defLon - LON) * Math.cos((defLat + LAT) / 2);
    const y = (defLat - LAT);
    const distance = Math.sqrt(x*x + y*y) * radiusEarth

    if (distance < next){
        next = distance;
        out = DEFIB[1]                  //name position
    }
}

console.log( out )


//variant #2:
let getFloat = (n) => (parseFloat(n.replace(/\,/, '\.')));

const LON = getFloat(readline());
const LAT = getFloat(readline());
const N = parseInt(readline());

let distance = (n) => {

    tLon = getFloat(n[4]);
    tLat = getFloat(n[5]);

    let x = (tLon - LON) * Math.cos((tLat + LAT) / 2);
    let y = tLat - LAT;
    let d = Math.sqrt(x*x + y*y) * 6371;

    return [d, n[1]];
}

const result = [...Array(N)]
                .map(() => readline().split(';'))
                .map(distance)
                .sort((a, b) => (a[0] - b[0]))
                    [0][1];

print(result);


//variant #3:
const pow = Math.pow.bind(Math);
const sqrt = Math.sqrt.bind(Math);
const dist = (a, b) => sqrt(pow(a[0]-b[0],2) + pow(a[1]-b[1],2));

const p = [0,0].map(x => +readline().replace(",","."));

print(new Array(+readline()).fill()
    .map(x => readline().split(";"))
    .map(x => {
        x = {
            n: x[1],
            p: x.splice(-2).map(x=>+x.replace(",","."))
        };
        x.d = dist(x.p, p);
        return x;
    })
    .sort((a,b)=>a.d-b.d)
    .shift().n

);



//variant #4 (like class):
class Position {
    constructor(data) {
        this.lon = Math.PI * data.shift().replace(',', '.') / 180.0;
        this.lat = Math.PI * data.shift().replace(',', '.') / 180.0;
    }
    distance({ lon, lat }) {
        const x = (this.lon - lon) * Math.cos((lat + this.lat) / 2);
        const y = (this.lat - lat);
        return Math.sqrt(x * x + y * y) * 6371.0;
    }
}

const user = new Position([
    readline(),
    readline(),
]);

print(
    Array(parseInt(readline()))
        .fill()
        .map(() => readline().split(';'))
        .map(data => ({
            id: data.shift(),
            name: data.shift(),
            address: data.shift(),
            ext: data.shift(),
            distance: user.distance(new Position(data)),
        }))
            .sort((a, b) => a.distance - b.distance)
            .map(({ name }) => name)
            .shift()
);