const logger = (store) => (next) => (action )=>{


    console.group()

    console.log("Action is:",action)

    const result = next(action)

    console.log("New state is:" ,store.getState())

    console.groupEnd()

    return result;


}



export default logger