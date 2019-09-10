function object(){

    for(var i=1; i<16; i++){

        let myproperty = {
            name: i, value: i*i }
            console.log("The value of the square of " + myproperty.name + " is " + myproperty.value);
    }
    
}
console.log(object());