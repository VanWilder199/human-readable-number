module.exports = function toReadable (number) {
    let str = number.toString();
    
    /* Remove spaces and another */
    strRemove = str.replace(/[, ]/g,"");
    /* Check zero */
    if (parseInt(strRemove) === 0) {
        return 'zero';
    }
    /* Add name(words) for number */
    const  numberForTwenty = [ '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen' ];

    const  numberForNinety = [ '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety' ];

    

    /* Split user argument into 3 digit bit from right to left  */
    start = strRemove.length;
    bit = [];
    while ( start > 0) {
        end = start;
        bit.push( strRemove.slice( ( start = Math.max ( 0, start - 3) ), end));
    }
    /* String each integer in each chunk   */
    Readable = [];
    for (let i = 0; i < bit.length; i++) {
        bits = parseInt( bit[i]);

        if (bits) {
            bitsSplit = bit[i].split( '' ).reverse().map( parseFloat);

            /* if tens integer is 1, i.e. 10, then add 10 */
            if (bitsSplit[1] === 1) {
                bitsSplit[0] += 10;
            }
            if ( ( word = numberForTwenty[ bitsSplit[0] ] ) ) {
                Readable.push( word);
            }
            if ( ( word = numberForNinety[ bitsSplit[1] ] ) ) {
                Readable.push( word);
            }
            if ( ( word = numberForTwenty[ bitsSplit[2] ] ) ) {
                Readable.push( word + ' hundred');
            }
        }
    }
    return Readable.reverse().join( ' ');
}



