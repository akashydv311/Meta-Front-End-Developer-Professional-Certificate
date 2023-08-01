console.log("Let's make the swape code in js");

const swapNumber = (arr)=>{
	return [arr[1], arr[0]];
}

const arr=[12,34];

console.log("Given value => ", arr);
console.log("Type of return value => ", typeof swapNumber(arr));
console.log("Ans is => ", swapNumber(arr));
