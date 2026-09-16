let honapszam = window.prompt("hányadik hónapot szeretnéd kiirni? 1-12")


let honapok = [
    {honapnev: "január" , evszak: "tél" , napokszama:30},
    {honapnev: "február" , evszak: "tél" , napokszama:28},
    {honapnev: "március" , evszak: "tavasz" , napokszama:30},
    {honapnev: "április" , evszak: "tavasz" , napokszama:31},
    {honapnev: "május" , evszak: "tavasz" , napokszama:30},
    {honapnev: "junius" , evszak: "nyár" , napokszama:31},
    {honapnev: "julius" , evszak: "nyár" , napokszama:30},
    {honapnev: "augusztus" , evszak: "nyár" , napokszama:31},
    {honapnev: "szeptember" , evszak: "ösz" , napokszama:30},
    {honapnev: "oktober" , evszak: "ösz" , napokszama:31},
    {honapnev: "november" , evszak: "ösz" , napokszama:30},
    {honapnev: "december" , evszak: "tél" , napokszama:31}
]


if (honapszam < 1 || honapszam > 12){
    window.alert("A hónapszámnak egy számnak kell lennie 1-12 közt!")
    honapszam = window.prompt("hányadik hónapot szeretnéd kiirni? 1-12")
}
else{
    adatKereses();
}


function adatKereses(){
    if(honapszam == 1){
        console.log(honapok[0])
    }
    else if (honapszam == 2){
        console.log(honapok[1])
    }
    else if (honapszam == 3){
        console.log(honapok[2])
    }
    else if (honapszam == 4){
        console.log(honapok[3])
    }
    else if (honapszam == 5){
        console.log(honapok[4])
    }
    else if (honapszam == 6){
        console.log(honapok[5])
    }
    else if (honapszam == 7){
        console.log(honapok[6])
    }
    else if (honapszam == 8){
        console.log(honapok[7])
    }
    else if (honapszam == 9){
        console.log(honapok[8])
    }
    else if (honapszam == 10){
        console.log(honapok[9])
    }
    else if (honapszam == 11){
        console.log(honapok[10])
    }
    else if (honapszam == 12){
        console.log(honapok[11])
    }

}