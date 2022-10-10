function funkcija(X) {
    if (X >= 0 && X <= 100){
        console.log(X + " se nalazi unutar [0, 1000]")

        let rez = 1
        let visekratnik = 7

        while(visekratnik <= X){
            rez = rez * visekratnik
            visekratnik = visekratnik + 7
        }

        console.log(rez)
    }
    else console.log(X + " se ne nalazi u rasponu")
}

funkcija(23)