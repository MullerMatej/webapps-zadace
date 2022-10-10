function funkcija (x) {
    let sati = Math.round(x / 60)
    let minute = x%60

    console.log(x + " je jednako " + sati + " sati i " + minute + " minute")
}

funkcija(562)