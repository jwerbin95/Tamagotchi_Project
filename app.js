class Tamagotchi {
	constructor(petName, hunger, boredom, sleepiness, age) {
		this.petName=petName
		this.hunger = hunger
		this.boredom = boredom
		this.sleepiness = sleepiness
		this.age = age
	}
	isDead() {
		if(this.hunger>=10 || this.boredom>=10 || this.sleepiness>=10) {
			if(death) {
				$(".giraffe").finish()
				$(".giraffe").fadeOut()
				$(".imageContainer").append(`<img src="./images/deadGiraffe.png" class="giraffe">`)
				death=false
			}
			return true
		}
	}
}
let death = true

let pet = new Tamagotchi("New Pet", 0, 0, 0, 0)

function refreshStats(pet) {
	$(".statsContainer").empty()
	$(".statsContainer").append(`<h2>${pet.petName}</h2>
								<p>Hunger: ${pet.hunger}</p>
								<p>Boredom: ${pet.boredom}</p>
								<p>Sleepiness: ${pet.sleepiness}</p>
								<p>Age: ${pet.age}</p>`)
}
$(".renameButton").click(function() {
	pet.petName = $(".renameField").val()
	refreshStats(pet)
})
setInterval(function() {
	if(!pet.isDead()) {
			pet.hunger++
			refreshStats(pet)
	}
}, 1000)
setInterval(function() {
	if(!pet.isDead()) {
		pet.boredom++
		refreshStats(pet)
	}
}, 20000)
setInterval(function() {
	if(!pet.isDead()) {
		pet.sleepiness++
		refreshStats(pet)
	}
}, 40000)
setInterval(function() {
	if(!pet.isDead()) {
		pet.age++
		refreshStats(pet)
	}
}, 100000)
$(".playButton").click(function() {
	if(!pet.isDead() && pet.boredom>0) {
		pet.boredom--
		refreshStats(pet)
	}
})
$(".sleepButton").click(function() {
	if(!pet.isDead() && pet.sleepiness>0) {
		pet.sleepiness--
		refreshStats(pet)
	}
})
$(".feedButton").click(function() {
	if(!pet.isDead() && pet.hunger>0) {
		pet.hunger--
		refreshStats(pet)
	}
})

$(".giraffe").animate({"left": "+=600px"},4000);
setInterval(function() {
	$(".giraffe").animate({"left": "-=1200px"},4000);
}, 4200)
setInterval(function() {
	$(".giraffe").animate({"left": "+=1200px"},4000);
}, 4200)
//$(".giraffe").animate({"left": "+=1200px"},4000);
refreshStats(pet)






