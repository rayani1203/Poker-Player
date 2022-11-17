class Card {
    constructor(value, suit){
        this.value = value.toUpperCase();
        this.suit = suit.toUpperCase();
    }
}

class Hand {
    constructor(Card1, Card2, Card3, Card4, Card5, Card6, Card7){
        this.cards = [Card1, Card2, Card3, Card4, Card5, Card6, Card7];

        this.values = [];
        this.suits = [];
        for(let i = 0; i < 7; i++){
            this.values[i] = this.cards[i].value;
            this.suits[i] = this.cards[i].suit;
        }
    }
}

const images = new Map([
    ['2C', './PNG-cards-1.3/2_of_clubs.png'],
    ['2D', './PNG-cards-1.3/2_of_diamonds.png'],
    ['2H', './PNG-cards-1.3/2_of_hearts.png'],
    ['2S', './PNG-cards-1.3/2_of_spades.png'],
    ['3C', './PNG-cards-1.3/3_of_clubs.png'],
    ['3D', './PNG-cards-1.3/3_of_diamonds.png'],
    ['3H', './PNG-cards-1.3/3_of_hearts.png'],
    ['3S', './PNG-cards-1.3/3_of_spades.png'],
    ['4C', './PNG-cards-1.3/4_of_clubs.png'],
    ['4D', './PNG-cards-1.3/4_of_diamonds.png'],
    ['4H', './PNG-cards-1.3/4_of_hearts.png'],
    ['4S', './PNG-cards-1.3/4_of_spades.png'],
    ['5C', './PNG-cards-1.3/5_of_clubs.png'],
    ['5D', './PNG-cards-1.3/5_of_diamonds.png'],
    ['5H', './PNG-cards-1.3/5_of_hearts.png'],
    ['5S', './PNG-cards-1.3/5_of_spades.png'],
    ['6C', './PNG-cards-1.3/6_of_clubs.png'],
    ['6D', './PNG-cards-1.3/6_of_diamonds.png'],
    ['6H', './PNG-cards-1.3/6_of_hearts.png'],
    ['6S', './PNG-cards-1.3/6_of_spades.png'],
    ['7C', './PNG-cards-1.3/7_of_clubs.png'],
    ['7D', './PNG-cards-1.3/7_of_diamonds.png'],
    ['7H', './PNG-cards-1.3/7_of_hearts.png'],
    ['7S', './PNG-cards-1.3/7_of_spades.png'],
    ['8C', './PNG-cards-1.3/8_of_clubs.png'],
    ['8D', './PNG-cards-1.3/8_of_diamonds.png'],
    ['8H', './PNG-cards-1.3/8_of_hearts.png'],
    ['8S', './PNG-cards-1.3/8_of_spades.png'],
    ['9C', './PNG-cards-1.3/9_of_clubs.png'],
    ['9D', './PNG-cards-1.3/9_of_diamonds.png'],
    ['9H', './PNG-cards-1.3/9_of_hearts.png'],
    ['9S', './PNG-cards-1.3/9_of_spades.png'],
    ['10C', './PNG-cards-1.3/10_of_clubs.png'],
    ['10D', './PNG-cards-1.3/10_of_diamonds.png'],
    ['10H', './PNG-cards-1.3/10_of_hearts.png'],
    ['10S', './PNG-cards-1.3/10_of_spades.png'],
    ['JC', './PNG-cards-1.3/jack_of_clubs2.png'],
    ['JD', './PNG-cards-1.3/jack_of_diamonds2.png'],
    ['JH', './PNG-cards-1.3/jack_of_hearts2.png'],
    ['JS', './PNG-cards-1.3/jack_of_spades2.png'],
    ['QC', './PNG-cards-1.3/queen_of_clubs2.png'],
    ['QD', './PNG-cards-1.3/queen_of_diamonds2.png'],
    ['QH', './PNG-cards-1.3/queen_of_hearts2.png'],
    ['QS', './PNG-cards-1.3/queen_of_spades2.png'],
    ['KC', './PNG-cards-1.3/king_of_clubs2.png'],
    ['KD', './PNG-cards-1.3/king_of_diamonds2.png'],
    ['KH', './PNG-cards-1.3/king_of_hearts2.png'],
    ['KS', './PNG-cards-1.3/king_of_spades2.png'],
    ['AC', './PNG-cards-1.3/ace_of_clubs.png'],
    ['AD', './PNG-cards-1.3/ace_of_diamonds.png'],
    ['AH', './PNG-cards-1.3/ace_of_hearts.png'],
    ['AS', './PNG-cards-1.3/ace_of_spades.png'],
])

const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10','J','Q','K','A'];
const suits = ['C', 'D', 'H', 'S'];

const strengths = new Map([
    [1, 'High Card'],
    [2, 'Pair'],
    [3, 'Two Pair'],
    [4, 'Three of a Kind'],
    [5, 'Straight'],
    [6, 'Flush'],
    [7, 'Full House'],
    [8, 'Four of a Kind'],
    [9, 'Straight Flush']
])

document.addEventListener('click', () => {
    let value1 = document.getElementById('v1').innerHTML;
    let value2 = document.getElementById('v2').innerHTML;
    let value3 = document.getElementById('v3').innerHTML;
    let value4 = document.getElementById('v4').innerHTML;
    let suit1 = document.getElementById('s1').innerHTML;
    let suit2 = document.getElementById('s2').innerHTML;
    let suit3 = document.getElementById('s3').innerHTML;
    let suit4 = document.getElementById('s4').innerHTML;
    let boardvalue1 = document.getElementById('cv1').innerHTML;
    let boardvalue2 = document.getElementById('cv2').innerHTML;
    let boardvalue3 = document.getElementById('cv3').innerHTML;
    let boardvalue4 = document.getElementById('cv4').innerHTML;
    let boardvalue5 = document.getElementById('cv5').innerHTML;
    let boardsuit1 = document.getElementById('cs1').innerHTML;
    let boardsuit2 = document.getElementById('cs2').innerHTML;
    let boardsuit3 = document.getElementById('cs3').innerHTML;
    let boardsuit4 = document.getElementById('cs4').innerHTML;
    let boardsuit5 = document.getElementById('cs5').innerHTML;
    
    let card1 = new Card(value1, suit1);
    let card2 = new Card(value2, suit2);
    let card3 = new Card(value3, suit3);
    let card4 = new Card(value4, suit4);
    let board1 = new Card(boardvalue1, boardsuit1);
    let board2 = new Card(boardvalue2, boardsuit2);
    let board3 = new Card(boardvalue3, boardsuit3);
    let board4 = new Card(boardvalue4, boardsuit4);
    let board5 = new Card(boardvalue5, boardsuit5);


    const hand1 = new Hand(board1, board2, board3, board4, board5, card1, card3);
    const hand2 = new Hand(board1, board2, board3, board4, board5, card2, card4);

    let firstHand = getHandStrength(hand1.values, hand1.suits, values, suits, strengths);

    let secondHand = getHandStrength(hand2.values, hand2.suits, values, suits, strengths);

    let handComparison = compareHands(firstHand, secondHand);

    if(handComparison === 0) {
        document.getElementById('current-winner').innerHTML = 'Tie';
        document.getElementById('current-hand').innerHTML = firstHand.handType;
    } else if(handComparison === 1) {
        document.getElementById('current-winner').innerHTML = 'Player 1';
        document.getElementById('current-hand').innerHTML = firstHand.handType;
    } else if(handComparison === 2) {
        document.getElementById('current-winner').innerHTML = 'Player 2';
        document.getElementById('current-hand').innerHTML = secondHand.handType;
    } 

    updateImages(card1, 'c1');
    updateImages(card2, 'c2');
    updateImages(card3, 'c3');
    updateImages(card4, 'c4');
    updateImages(board1, 'bc1');
    updateImages(board2, 'bc2');
    updateImages(board3, 'bc3');
    updateImages(board4, 'bc4');
    updateImages(board5, 'bc5');
});


function updateImages(card, id){
    if(images.has(card.value.concat(card.suit))){
        var src = images.get(card.value.concat(card.suit));
        document.getElementById(id).src = src;   
    }
}

function compareHands(hand1, hand2){
    if(hand1.handStrength > hand2.handStrength){
        return 1;
    }
    else if(hand1.handStrength < hand2.handStrength){
        return 2;
    }
    else{
        for(let i = 0; i < 5; i++){
            if(hand1.hand[i] > hand2.hand[i]){
                return 1;
            } else if (hand1.hand[i] < hand2.hand[i]){
                return 2;
            }
        }
    }
    return 0;
}

function setContent(content, value){
    document.getElementById(value).innerHTML = content;
}


function getHandStrength(values, suits, all_values, all_suits, strengths){
    let strength = {handStrength : 0, hand : [], handType : ''};
    if(checkStraightFlush(values, suits, all_values, all_suits == -1)){
        if(checkFourKind(values, all_values) == -1){
            if(checkFullHouse(values, all_values) == -1){
                if(checkFlush(values, suits, all_values, all_suits) == -1){
                    if(checkStraight(values, all_values) == -1){
                        if(checkThreeKind(values, all_values) == -1){
                            if(checkTwoPair(values, all_values) == -1){
                                if(checkPair(values, all_values) == -1){
                                    strength.handStrength = 1;
                                    strength.hand = checkHighCard(values, all_values);
                                } else {
                                    strength.handStrength = 2;
                                    strength.hand = checkPair(values, all_values);
                                }
                            } else {
                                strength.handStrength = 3;
                                strength.hand = checkTwoPair(values, all_values);
                            }
                        } else {
                            strength.handStrength = 4;
                            strength.hand = checkThreeKind(values, all_values);
                        }
                    } else {
                        strength.handStrength = 5;
                        strength.hand = checkStraight(values, all_values);
                    }
                } else {
                    strength.handStrength = 6;
                    strength.hand = checkFlush(values, suits, all_values, all_suits);
                }
            } else {
                strength.handStrength = 7;
                strength.hand = checkFullHouse(values, all_values);
            }
        } else {
            strength.handStrength = 8;
            strength.hand = checkFourKind(values, all_values);
        }
    } else {
        strength.handStrength = 9;
        strength.hand = checkStraightFlush(values, suits, all_values, all_suits);
    }
    strength.handType = strengths.get(strength.handStrength);
    return strength;
}

function checkStraightFlush(values, suits, all_values, all_suits){
    let valueClone = values.map((x) => x);
    let suitClone = suits.map((x) => x);
    let flush = [];
    let suit = '';
    loop2:
        for(let i = 0; i < 4; i++){
            for(let j = i+1; j < 6; j++){
                if((suitClone[i] == suitClone[j]) && (find_array(suitClone[i], all_suits) > -1)){
                    for(let k = j+1; k < 7; k++){
                        if(suitClone[i] == suitClone[k]){
                            suit = suitClone[k];
                            flush.push(find_array(valueClone[i], all_values), find_array(valueClone[j], all_values), find_array(valueClone[k], all_values));
                            valueClone.splice(i, 1); valueClone.splice(j-1, 1); valueClone.splice(k-2, 1);
                            suitClone.splice(i, 1); suitClone.splice(j-1, 1); suitClone.splice(k-2,1);
                            break loop2;
                        }
                    }
                }
            }
        }
    
    let j = 0;
    while((flush.length < 7) && (j < 3) && (valueClone.length < 7)){
        for(let i = 0; i < suitClone.length; i++){
            if(suitClone[i] == suit){
                next = find_array(valueClone[i], all_values);
                flush.push(next);
                suitClone.splice(i, 1);
                valueClone.splice(i, 1);
                break;
            }
        }
        j++;
    }
    flush.sort((a,b) => (a-b));
    let handClone = flush.map((x) => x);
    let straight = [];
    loop1:
        for(let i = 0; i < 7; i++){
            for(let j = i+1; j < 7; j++){
                if((Math.abs(handClone[j] - handClone[i]) == 1)){
                    let first = handClone[i];
                    let second = handClone[j];
                    handClone.splice(i,1); handClone.splice(j-1,1);
                    straight.push(first, second);
                    break loop1;
                }
            }
        }
    let k = 0;
    while((straight.length < 7) && (k < 3)){
        for(let i = 0; i < handClone.length; i++){
            if(straight[0] - handClone[i] == 1){
                let next = handClone[i];
                handClone.splice(i, 1);
                straight.unshift(next);
            }
            if(handClone[i] - straight[straight.length - 1] == 1){
                let next = handClone[i];
                handClone.splice(i,1);
                straight.push(next);
            }
        }   
        k++;
    }
    straight.sort((a,b) => a-b);
    if(straight[0] == 1){
        if(handClone.includes(13)){
            straight.unshift(0);
        }
    }
    while(straight.length > 5){
        straight.shift();
    }
    if(straight.length == 5){
        return straight;
    } else {
        return -1;
    }
}

function checkFourKind(values, all_values){
    let valueClone = values.map(x => x);
    let fourKind = [];
    for(let i = 0; i < 4; i++){
        for(let j = i + 1; j < 5; j++){
            if((valueClone[i] == valueClone[j]) && (find_array(valueClone[i], all_values) != -1)){
                for(let k = j + 1; k < 6; k++){
                    if(valueClone[i] == valueClone[k]){
                        for(let l = k + 1; l < 7; l++){
                            if(valueClone[i] == valueClone[l]){
                                fourKind.push(find_array(valueClone[i], all_values)); fourKind.push(find_array(valueClone[i], all_values)); fourKind.push(find_array(valueClone[i], all_values)); fourKind.push(find_array(valueClone[i], all_values));
                                valueClone.splice(l, 1); valueClone.splice(k, 1); valueClone.splice(j, 1); valueClone.splice(i, 1);
                                let max = 0;
                                for(let m = 0; m < 3; m++){
                                    if(find_array(valueClone[m], all_values) > max){
                                        max = find_array(valueClone[m], all_values);
                                    }
                                }
                                fourKind.push(max);
                                return fourKind;
                            }
                        }
                    }
                }
            }
        }
    }
    return -1;
}

function checkFullHouse(values, all_values){
    let fullHouse = [];
    if((checkThreeKind(values, all_values) != -1) && (checkTwoPair(values, all_values) != -1)){
        fullHouse.push(checkThreeKind(values,all_values)[0]); fullHouse.push(checkThreeKind(values,all_values)[0]); fullHouse.push(checkThreeKind(values,all_values)[0]);
        if(checkTwoPair(values, all_values)[0] != checkThreeKind(values, all_values)[0]){
            fullHouse.push(checkTwoPair(values,all_values)[0]); fullHouse.push(checkTwoPair(values,all_values)[0]);
        }
        else{
            fullHouse.push(checkTwoPair(values,all_values)[2]); fullHouse.push(checkTwoPair(values,all_values)[2]);
        }
        return fullHouse;
    }
    return -1;
}

function checkFlush(values, suits, all_values, all_suits){
    let valueClone = values.map((x) => x);
    let suitClone = suits.map((x) => x);
    let flush = [];
    let suit = '';
    loop2:
        for(let i = 0; i < 4; i++){
            for(let j = i+1; j < 6; j++){
                if((suitClone[i] == suitClone[j]) && (find_array(suitClone[i], all_suits) > -1)){
                    for(let k = j+1; k < 7; k++){
                        if(suitClone[i] == suitClone[k]){
                            suit = suitClone[k];
                            flush.push(find_array(valueClone[i], all_values), find_array(valueClone[j], all_values), find_array(valueClone[k], all_values));
                            valueClone.splice(i, 1); valueClone.splice(j-1, 1); valueClone.splice(k-2, 1);
                            suitClone.splice(i, 1); suitClone.splice(j-1, 1); suitClone.splice(k-2,1);
                            break loop2;
                        }
                    }
                }
            }
        }
    
    let j = 0;
    while((flush.length < 7) && (j < 3) && (valueClone.length < 7)){
        for(let i = 0; i < suitClone.length; i++){
            if(suitClone[i] == suit){
                next = find_array(valueClone[i], all_values);
                flush.push(next);
                suitClone.splice(i, 1);
                valueClone.splice(i, 1);
                break;
            }
        }
        j++;
    }
    flush.sort((a,b) => (a-b));
    while(flush.length > 5){
        flush.shift();
    }
    if(flush.length == 5){
        return flush;
    } else {
        return -1;
    }
    
}

function checkPair(hand, all_values){
    let valueClone = hand.map((x) => x);
    let pair1;
    let pair2;
    let totalPair = [];
    max = -1;
    for(let i = 0; i < 7; i++){
        for(let j = i; j < 7; j++){
            if((hand[i] == hand[j]) && (i != j) && find_array(hand[i].toUpperCase(), all_values) > max){
                max = find_array(hand[i], all_values);
                pair1 = i;
                pair2 = j;
            }
        }
    } 
    valueClone.splice(pair1, 1); valueClone.splice(pair2 - 1, 1);
    totalPair.push(max); totalPair.push(max);
    valueClone.sort((a,b) => a-b);
    for(let k = 0; k < 3; k++){
        totalPair.push(find_array(valueClone[valueClone.length - 1], all_values));
        valueClone.pop();
    }
    if(max == -1){
        return max;
    } else {
        return totalPair;
    }
}

function checkHighCard(hand, all_values){
    let highCard = [];
    let handClone = hand.map((x) => find_array(x, all_values));
    handClone.sort((a, b) => a-b);
    for(let i = 0; i < 5; i++){
        highCard.push(handClone[handClone.length - 1]);
        handClone.pop();
    }
    return highCard;
}

function checkTwoPair(hand, all_values){
    let handClone = hand.map((x) => find_array(x, all_values));
    let pair = false;
    let index1 = 0;
    let index2 = 0;
    let max = 0;
    let pairs = [];
    for(let i = 0; i < 7; i++){
        for(let j = i; j < 7; j++){
            if((hand[i] == hand[j]) && (i != j) && find_array(hand[i], all_values) > max){
                pair = true;
                max = find_array(hand[i],all_values);                
                index1 = i;
                index2 = j;
                pairs[0] = find_array(hand[i], all_values);
                pairs[1] = find_array(hand[i], all_values);
            }
        }
    }
    handClone.splice(index1, 1); handClone.splice(index2-1, 1);
    let index3;
    let index4;
    if(pair){
        max = 0;
        for(let i = 0; i < 7; i++){
            if((i == index1 || i == index2)){
                continue;
            }
            for(let j = i; j < 7; j++){
                if((j == index1 || j == index2)){
                    continue;
                }
                if((hand[i] == hand[j]) && (i != j) && find_array(hand[i], all_values) > max){
                    max = find_array(hand[i], all_values);
                    pairs[2] = find_array(hand[i], all_values);
                    pairs[3] = find_array(hand[i], all_values);
                    index3 = i;
                    index4 = j;
                }
            }
        }
        handClone.splice(index3, 1); handClone.splice(index4-1, 1);
        if(max == 0){
            return -1;
        }
        else{
            let max = 0;
            let next = 0;
            for(let i = 0; i < 3; i++){
                if(handClone[i] > max){
                    next = handClone[i];
                }
            }
            pairs.push(next);
            return pairs;
        }
    }
    else{
        return -1;
    }
}

function checkThreeKind(hand, all_values){
    let handClone = hand.map((x) => find_array(x, all_values));
    let max = -1;
    let threeKind = [];
    for(let i = 0; i < 7; i++){
        for(let j = i; j < 7; j++){
            if(hand[i] == hand[j] && (i != j) && (find_array(hand[i], all_values) > max)){
                for(let h = j; h < 7; h++){
                    if((hand[h] == hand[i]) && (h != i) && (h!= j)){
                        max = find_array(hand[j], all_values);
                        handClone.splice(h, 1); handClone.splice(j, 1); handClone.splice(i, 1); 
                    }
                }
            }
        }
    }
    if(max != -1){
        threeKind.push(max); threeKind.push(max); threeKind.push(max); 
        max = -1;
        let second = -1;
        for(let i = 0; i < 4; i++){
            if(handClone[i] >= max){
                second = max;
                max = handClone[i];
            } else if(handClone[i] >= second){
                second = handClone[i];
            }
        }
        threeKind.push(max);
        threeKind.push(second);
        return threeKind;   
    } else {
        return max;
    }
}

function checkStraight(hand, all_values){
    let handClone = hand.map((x) => x);
    const straight = [];
    loop1:
        for(let i = 0; i < 7; i++){
            for(let j = i+1; j < 7; j++){
                if((Math.abs(find_array(handClone[j], all_values) - find_array(handClone[i], all_values)) == 1)){
                    let first = find_array(handClone[i], all_values);
                    let second = find_array(handClone[j], all_values);
                    handClone.splice(i,1); handClone.splice(j-1,1);
                    straight.push(first); straight.push(second);
                    break loop1;
                }
            }
        }
    let j = 0;
    straight.sort((a,b) => a-b);
    while((straight.length < 7) && (j < 3)){
        for(let i = 0; i < handClone.length; i++){
            if((straight[0] - find_array(handClone[i], all_values)) == 1){
                let next = find_array(handClone[i], all_values);
                handClone.splice(i, 1);
                straight.unshift(next);
                continue;
            }
            if((find_array(handClone[i],all_values) - straight[straight.length - 1]) == 1){
                let next = find_array(handClone[i], all_values);
                handClone.splice(i,1);
                straight.push(next);
                continue;
            }
        }   
        j++;
    }
    if(straight[0] == 1){
        if(handClone.includes('A')){
            straight.unshift(0);
        }
    }
    while(straight.length > 5){
        straight.shift();
    }
    if(straight.length == 5){
        return straight;
    } else {
        return -1;
    }
}

function find_array(value, array){
    for(let i = 0; i < array.length; i++){
        if(value == array[i]){
            return i+1;
        }
    }
    return -1;
}