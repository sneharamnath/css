var descRelative;
function static(){
    $('.b').removeClass().addClass('b block static');
    let desc = "All positions are static by default. Meaning they take up the appropriate amount of space they are supposed to take up. Its the default positioning value and every element will use this value, unless otherwise stated."
    $('.desc .text').html(desc);
}

function relative(){
    $('.b').removeClass().addClass('b block relative');
    let desc = `Position relative allows you to do two different things<br>

    1. To nudge elements in different directions with top, right, bottom and left values.
    When set to position relative, elements take up the same amount of space at the same exact position it was supposed to take as if its position was static.<br>
    
    It can however, appear to be pushed to a different location visually. <br>

    2. Allow a child element to be positioned absolutely with reference to it. `

    $('.desc .text').html(desc);
}

function absoluteParentRelative(){
    $('.container').css({position: 'relative'});
    $('.b').removeClass().addClass('b block absolute');
    descRelative = `Position absolute takes the document out of the document flow. This means that it no longer takes up any space like what static and relative does. <br>
    When position absolute is used on an element, it is positioned absolutely with reference to the closest parent that has a position relative value. <br>`
    $('.desc .text').html(descRelative);
}

function absoluteParentWindow(){
    $('.container').css({position: 'static'});
    $('.b').removeClass().addClass('b block absolute');
    let desc = descRelative + `If there are no parent elements that has a relative position, then the absolutely positioned element will take its reference from the browser window.`
    $('.desc .text').html(desc);
}

function fixed(){
    $('.b').addClass('b block fixed');
    let desc = `Similar to position absolute, an element that has fixed position is taken out of the document flow. The major difference is: elements with position fixed is always positioned relative to the browser window.`
    $('.desc .text').html(desc);
}

function sticky(){
    $('.b').addClass('b block sticky');
    let desc = `Sticky positioning is a hybrid of relative and fixed positioning. The element is treated as relative positioned until it crosses a specified threshold, at which point it is treated as fixed positioned.`
    $('.desc .text').html(desc);
}