const _ = {
    clamp: function(number, lower, upper) {
        var lowerClampedValue = Math.max(number, lower);
        var clampedValue = Math.min(lowerClampedValue, upper);
        return clampedValue;
    },
    inRange: function(number, start, end) {
        if (typeof end === "undefined") {
            end = start;
            start = 0;
        }
        if (start > end) {
            var temp = end
            end = start
            start = temp
        }
        if (number === end) {
            return false;
        }
        if (number < start) {
            return false;
        } else if (number > end) { 
            return false;
        } else {
            return true
        }
    },
    words: function(word) {
        return word.split(' ');

    },
    pad: function(string, length) {
        stringLength = string.length;
        difference = Math.abs(length - string.length);
        
        spaces = " ";
        function checkDecimal(n) {
            if (n > 1) {
                var result = (n - Math.floor(n)) !== 0;
                if (result) {
                    return n * 2
                } else {
                    return n;
                }
            } else {
                return n;
            }

        }
        halfDifference = checkDecimal(difference/2);
        //console.log(`test spaces${spaces.repeat(10)}hello`)
        console.log(halfDifference);
        function spacer(dif) {
            if (dif%2 === 0) {
                return `${spaces.repeat(dif)}${string}${spaces.repeat(dif)}`
            } else {
                var firstSpace = (halfDifference + 1)/2 - 1;
                var secondSpace = (halfDifference + 1)/2;
                console.log(firstSpace);
                console.log(secondSpace);

                return `${spaces.repeat(firstSpace)}${string}${spaces.repeat(secondSpace)}`
            }
            
            
        }
        if (halfDifference < 1) {
            return string;
        }
        if (halfDifference >= 2 ){
            return spacer(halfDifference);
        }


    }
}


// Do not write or modify code below this line.
module.exports = _;