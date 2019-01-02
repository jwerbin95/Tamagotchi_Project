class Tamagotchi {
	constructor(petName, hunger, boredom, sleepiness, age) {
		this.petName=petName
		this.hunger = hunger
		this.boredom = boredom
		this.sleepiness = sleepiness
		this.age = age
	}
}

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
refreshStats(pet)