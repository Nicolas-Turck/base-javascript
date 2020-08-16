// condition if/else

let clientIslogged = true;

if (clientIslogged){
  console.log('client is connected') // if boolean is true display message 
  
} else {
  console.log('client is not connected') // else boolean is false display other message
  
}

let numberClient = 5;

// verify if is smallest 
if (numberClient < 10){
  console.log(" smallest of  10")
  
} else {
  console.log("tallest of 10")
}

// verify if is tallest
if (numberClient > 2){
  console.log(" tallest of  2")
  
} else {
  console.log("smallest of 2")
}

// verify if is equals
if (numberClient == 5){
    console.log(" number equals")
    
  } else {
    console.log("not equals")
  }

// verify if is different
if (numberClient != 5){
    console.log(" different")
    
  } else {
    console.log("same")
  }

// verify if is smallest or equals 
if (numberClient <= 5){
    console.log(" smallest or equals")
    
  } else {
    console.log("tallest ")
  }
  
// verify if is tallest or equals  
if (numberClient >= 5){
    console.log(" tallest or equals")
    
  } else {
    console.log("smallest ")}


    // if else and else if

    let clientIslogged = true;
    let acceptedClient = 10;
    let numberofClient = 5;

    
    if (clientIslogged){
      console.log('client is connected')
      
    } else {
      console.log('client is not connected')
      
    }
    
    if (numberofClient == acceptedClient){
      console.log("full client")
    } else if (numberofClient < acceptedClient){
      console.log("add new client")
    } else {
      console.log("not add new clients")
    }