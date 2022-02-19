export function generatePhotoLocationMap (gridSize = 4) {
  const arr = Array.from({length: gridSize**2}, (_, i) => i);
  const locationArray = Array(gridSize**2);

  function generateRandomNumber() {
    const randomNum = Math.floor(Math.random() * arr.length);
    const numArray = arr.splice(randomNum, 1);
    return numArray[0];
  }

  for(let i = 0; i < gridSize * 2; i++) {
    const index1 = generateRandomNumber();
    const index2 = generateRandomNumber();

    locationArray[index1] = i;
    locationArray[index2] = i;
  }

  return locationArray;
}

