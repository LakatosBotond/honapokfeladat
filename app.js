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

try{
    function adatKereses(){
        if (honapszam < 1 || honapszam > 12){
            throw Error ("a szám nincs 1-12 közt, olyat adj meg ami 1-12 közt van!")
        }
        else if (isNaN(honapszam)){
            throw Error ("nem számot adtál meg!")
        }
        console.log(honapok[honapszam - 1])

    }
    adatKereses();

}
catch (error)
{
    console.log(error.message)
}
