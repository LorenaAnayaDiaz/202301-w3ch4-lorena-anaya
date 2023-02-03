var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Card_i;
import Component from '../Component/Component.js';
export const series = [
    {
        id: 1,
        name: 'The Sopranos',
        creator: 'David Chase',
        year: 1999,
        poster: 'https://m.media-amazon.com/images/M/MV5BZGJjYzhjYTYtMDBjYy00OWU1LTg5OTYtNmYwOTZmZjE3ZDdhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg',
        watched: true,
        score: 5,
        emmies: 21,
    },
    {
        id: 2,
        name: 'Game of Thrones',
        creator: 'David Benioff D. B. Weiss',
        year: 2011,
        poster: 'https://t1.pixers.pics/img-1fb6f67c/posters-game-of-thrones.jpg?H4sIAAAAAAAAA3VOW27EIAy8DpGS2BAIkBvs394gIjy2afNAQNtVT1_Sqp-VZXs80ngG3o9sggfrj-IT7Ktzm4ewbvXKU_J5_fJkUGOLzVTZjSBWdH74ZNMZSUcH1VLRCsbaUYpm-jRVuJv0Rl5KiXkCyEMf12f9VpfNYPcMDKkEVCC00lpYzh1aN8cuF3M4k1zH8TliH49Hi1c1f0EkYiuvACWtO6mJzupVyGt8NPCP3y-GqoL7DSgCsp-JwNnFzvcbRWS1kbNZuEELHox0izdBeoUYLBVej9qZEMIsFmmWRY7Kec_n_hu83S9APwEAAA==',
        watched: false,
        score: 0,
        emmies: 164,
    },
    {
        id: 3,
        name: 'Mad Men',
        creator: 'Matthew Weiner',
        year: 2007,
        poster: 'https://es.web.img3.acsta.net/pictures/21/02/10/20/02/0834301.jpg',
        watched: true,
        score: 5,
        emmies: 116,
    },
    {
        id: 4,
        name: '6 feet under',
        creator: 'Alan Ball',
        year: 2001,
        poster: 'https://www.cine.com/media/series/2711.jpg',
        watched: true,
        score: 5,
        emmies: 53,
    },
    {
        id: 5,
        name: 'Atypical',
        creator: 'Robia Rashid',
        year: 2017,
        poster: 'https://www.cine.com/media/series/2711.jpg',
        watched: false,
        score: 0,
        emmies: 0,
    },
];
export default class Card extends Component {
    constructor(parentElement, cssClasses = '', i) {
        super(parentElement, 'ul', cssClasses);
        _Card_i.set(this, void 0);
        __classPrivateFieldSet(this, _Card_i, i, "f");
    }
    render() {
        super.render();
        this.element.innerHTML = `   
          <li class="serie">
              <img class="serie__poster"
                src=${series[__classPrivateFieldGet(this, _Card_i, "f")].poster}
                alt="${series[__classPrivateFieldGet(this, _Card_i, "f")].name} poster" />
              <h4 class="serie__title">${series[__classPrivateFieldGet(this, _Card_i, "f")].name}</h4>
              <p class="serie__info">${series[__classPrivateFieldGet(this, _Card_i, "f")].creator} (${series[__classPrivateFieldGet(this, _Card_i, "f")].year})</p>
              <ul class="score">
                <li class="score__star">
                  <i class="icon--score fas fa-star" title="1/5"></i>
                </li>
                <li class="score__star">
                  <i class="icon--score fas fa-star" title="2/5"></i>
                </li>
                <li class="score__star">
                  <i class="icon--score fas fa-star" title="3/5"></i>
                </li>
                <li class="score__star">
                  <i class="icon--score fas fa-star" title="4/5"></i>
                </li>
                <li class="score__star">
                  <i class="icon--score fas fa-star" title="5/5"></i>
                </li>
             
            `;
    }
}
_Card_i = new WeakMap();
