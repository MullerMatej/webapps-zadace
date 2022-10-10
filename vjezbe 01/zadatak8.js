function funkcija(polje){
    var iter = 0
    var pomocno = []
    
    for (var i = polje.length - 1; i >= 0; i--) {
        pomocno.push(polje[i])
    }
    console.log(pomocno)

}

funkcija([3,4,5,6])