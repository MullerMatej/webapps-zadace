function funkcija(string) {
    let arr = string.split(/(\s+)/)
    console.log(arr)

    function capitalizeFirstLetter(string){
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    let x1 = capitalizeFirstLetter(arr[0])
    let x2 = capitalizeFirstLetter(arr[2])
    let x3 = capitalizeFirstLetter(arr[4])

    let rez = x1.concat(x2, x3)

    console.log(rez)
    
}

funkcija("web apps vjezbe")