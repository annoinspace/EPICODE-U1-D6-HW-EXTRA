let spaghetti = 400
let guanciale = 250
let freshEggYolks = 6
let gratedPecorinoRomano = 50
let blackPepper = 4

// first cut the guanciale into 1cm layers, then into long strips
let slicedGunaciale = (guanciale / 10) * 5
console.log(`The sliced guanciale makes ` + slicedGunaciale + ` pieces`)

//Combine the egg yolks with the finely grated Pecorino Romano.
let eggYolkPecorinoMixture = freshEggYolks + gratedPecorinoRomano
console.log(
  `The fresh egg yolk and pecorino romano mixture weighs ` +
    eggYolkPecorinoMixture +
    ` grams`
)

/* Roast the black pepper on a pan until it smokes and sizzles, 
and combine a small amount of it to the yolks and chees mixture, set aside the rest. */
let seasonedEggYolkPecorinoMixture = blackPepper * 0.33 + eggYolkPecorinoMixture
console.log(
  `After adding the roasted black pepper: ` + seasonedEggYolkPecorinoMixture
)

//cook the guanciale and leave the fat in the pan
let cookedGuanciale = guanciale * 0.6
let greaseInPan = guanciale - cookedGuanciale
console.log(
  `After cooking the guanciale we are left with ` +
    cookedGuanciale +
    ` grams of meat`
)

// cook pasta
let boilingWater = 2000
let pinchOfSalt = 1
let pastaWater = boilingWater + pinchOfSalt
let potOfPasta = pastaWater + spaghetti

// pasta is now cooked
let waterAbsorbtionRate = 1.8
let cookedPasta = spaghetti * waterAbsorbtionRate
let seasonedCookedPasta = pinchOfSalt * 0.5 + cookedPasta
let pastaWaterLeft = potOfPasta - cookedPasta
console.log(
  `The cooked and drained spaghetti is ` +
    seasonedCookedPasta +
    ` and the amount of water left is ` +
    pastaWaterLeft
)

// keep aside 1 ladle of pasta water
let ladleOfPastaWater = 150

// add hot pasta water to cooked guanciale
let spoonOfPastaWater = 15
let sauce = cookedGuanciale + spoonOfPastaWater + spoonOfPastaWater
console.log(`Our pasta sauce is ready: ` + sauce)

// add spaghetti to sauce
let spaghettiInSauce = sauce + seasonedCookedPasta
console.log(
  `After adding out cooked spaghetti to the sauce we have : ` + spaghettiInSauce
)

// add the yolk and cheese mixture - make sure to stir quickly
let carbonara = spaghettiInSauce + seasonedEggYolkPecorinoMixture
console.log(
  `After adding the yolk mixture and stirring quickly over heat, our carbonara is alomst done :` +
    carbonara
)

// the remaining black pepper
let blackPepperUsed = blackPepper * 0.33
let blackPepperRemaining = blackPepper - blackPepperUsed
let finishedDish = carbonara + blackPepperRemaining
console.log(
  `Yay! We have finished cooking our carbonara :` +
    finishedDish +
    `. All that is left is to eat!`
)
