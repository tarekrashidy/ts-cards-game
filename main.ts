// #region imports

import { IPrepare } from "./models/prepare.model";
import { ICard } from "./models/card.model";

//#region variables
const prepare:IPrepare={};
prepare.cards=[];
prepare.progress=0;
prepare.fullTrack=new Audio('./assets/start.wav');
prepare.flipAudio=new Audio('./assets/flip.wav');
prepare.goodAudio=new Audio('./assets/correct-answer.wav');
prepare.failAudio = new Audio('./assets/wrong-answer.wav');
prepare.gameOverAudio=new Audio('./assets/end.wav');
prepare.fullTrack.loop=true;
const numberOfcards=20;
const tempNumber=[];
let cardsHtmlContent :string='';

//#region 
const getRandomNum = (min:number,max:number) => { 
let result:number;
let exists:boolean=true;
min=Math.ceil(min);
max=Math.floor(max);
    while (exists) {
    result=Math.floor(Math.random()*(max-min+1))+min;
    if (!tempNumber.find(no=>no===result.toString())) {
        exists=false;
        tempNumber.push(result.toString())
    }
}

 }
//  
const toggleFlip = (index:any) => { 
prepare.fullTrack.play();
const card=prepare.cards[index];
if (!card.flip && card.clickable) {
    flip(card.index);
    selectedCard(card,index)
}

 }
//  
const flip = (card:ICard,index:number) => { 
    prepare.flipAudio.play();
    if (card) {
        card.flip = card.flip === ''?'flip':'';
         document.getElementById(`card-flip-${index}`).classList.value=card.flip;
    };

 };
//  
