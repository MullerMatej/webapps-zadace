function funkcija(objekt1, objekt2){

    let polje1 = Object.keys(objekt1)
    let polje2 = Object.keys(objekt2)

        let x1 = polje1[0]
        let x2 = polje1[1]
        let x3 = polje1[2]
    
        let x4 = polje2[0]
        let x5 = polje2[1]
        let x6 = polje2[2]

        if (x1 == x4 && x2 == x5 && x3 == x6){
            console.log("true")
        }
        else console.log("false")
}

funkcija({a:1,b:2,c:3}, {a:321,b:3,c:1})