
// export class Marcador {

//     constructor(public lat: number, public lng: number) {

//     }
// }

export class Marcador {
    public lat: number;
    public lng: number;

    public title = 'No Title';
    public description = 'No Description';

    constructor(lat: number, lng: number) {
        this.lat = lat;
        this.lng = lng;
    }
}
