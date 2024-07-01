const wrapper = document.querySelector( '.wrapper' )
const main = document.querySelector( 'main' )
const head = document.querySelector( 'h4' )
const center = document.querySelector( 'center' )
const back = document.querySelector( '.back' )

function list ( card, book )
{
    card.addEventListener( 'click', function ()
    {
        wrapper.classList.add( 'hide' )
        head.classList.add( 'hide' )
        center.classList.add( 'hide' )
        book.classList.remove( 'hide' )
        back.classList.remove( 'hide' )
    } )

    back.addEventListener( 'click', function ()
    {
        wrapper.classList.remove( 'hide' )
        head.classList.remove( 'hide' )
        center.classList.remove( 'hide' )
        book.classList.add( 'hide' )
        back.classList.add( 'hide' )
    } )

}



const devil_card = document.querySelector( '.devil-card' )
const devil = document.querySelector( '.devil' )
list( devil_card, devil )

const death_card = document.querySelector( '.death-card' )
const death = document.querySelector( '.death' )
list( death_card, death )

const emperor_card = document.querySelector( '.emperor-card' )
const emperor = document.querySelector( '.emperor' )
list( emperor_card, emperor )

const high_card = document.querySelector( '.high-card' )
const high = document.querySelector( '.high' )
list( high_card, high )

const fool_card = document.querySelector( '.fool-card' )
const fool = document.querySelector( '.fool' )
list( fool_card, fool )

const queen_card = document.querySelector( '.queen-card' )
const queen = document.querySelector( '.queen' )
list( queen_card, queen )

const lover_card = document.querySelector( '.lover-card' )
const lover = document.querySelector( '.lover' )
list( lover_card, lover )

const magic_card = document.querySelector( '.magic-card' )
const magic = document.querySelector( '.magic' )
list( magic_card, magic )

const knight_card = document.querySelector( '.knight-card' )
const knight = document.querySelector( '.knight' )
list( knight_card, knight )

const justice_card = document.querySelector( '.justice-card' )
const justice = document.querySelector( '.justice' )
list( justice_card, justice )

const wheel_card = document.querySelector( '.wheel-card' )
const wheel = document.querySelector( '.wheel' )
list( wheel_card, wheel )

const chariot_card = document.querySelector( '.chariot-card' )
const chariot = document.querySelector( '.chariot' )
list( chariot_card, chariot )