function petList() {
  const pet = [];
  return function (newPet) {
    if (newPet) {
      pet.push(newPet);
    }
    return pet;
  };
}

const myPetList = petList();
console.log(myPetList("Annie"));
console.log(myPetList("Konan"));