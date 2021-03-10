// function to calculate new state
function calcNewState(currentState, action) {
    switch (action.type) {
      case "add":
        const newSheep = currentState.sheep[0] == "🐺" ? ["🐑"] : [...currentState.sheep, "🐑"]
        return {
          sheep: newSheep,
          message: "Choose your preferred number of sheep!"
        }
      
      case "subtract":
        const sheepCopy = [...currentState.sheep] // make a copy
        sheepCopy.pop() // delete last item
        return {  // return new state
          sheep: sheepCopy.length ? sheepCopy : ["🐺"],
          message: sheepCopy.length ? currentState.message : "No more sheep left! Sorry."
        }

      default:
        return currentState
    }
}

export { calcNewState as sheepReducer }