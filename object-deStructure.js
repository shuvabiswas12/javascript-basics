const address = {
    city: 'Chittagong',
    country: 'Bangladesh',
    postCode: '1200',
    house: {
        no: 189,
        village: 'madhyam-gram'
    }
}


// ekhane country ta ke asCountry name declare korechi.
// house object ta inner object. Tai etake deStructure korar way taw niche syntext e deya ache.


// "house: {no, village}"  eta korle  house name ar kono variable arcmemory the pabo na. Jodi etake pore pete jai tahole alada vabe house name onno ekta reference declare korte hobe jeta nicher syntex e last e "house" name deya ache.


const {postCode, city, country: asCountry, house: {no, village}, house} = address


console.log(city + ' '+ asCountry + " " + postCode + " " + no + " " + village+ ' ' + house)
