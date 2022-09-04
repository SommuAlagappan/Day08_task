const restcountries = async() => {
    let data = await fetch("https://restcountries.com/v3.1/all")
    let res = await data.json()

    //a.Get all the countries from the Asia continent /region using the Filter function
    
    let filteredArr = res.filter((ele) => {
     return ele.region === "Asia"
    })
    console.log(filteredArr)

    let filteredArr1 = res.filter((ele) =>{
    return ele.continents[0] === "Asia"
    })
    console.log(filteredArr1)

    //b.Get all the countries with a population of less than 2 lakhs using Filter function
    let filteredArr2 = res.filter((ele) =>{
        return ele.population > 200000;
       })
       console.log(filteredArr2)

    //c.Print the following details name, capital, flag using forEach function
    let filter = res.forEach((ele) => {
        console.log(ele.name)
       console.log(ele.capital)
       console.log(ele.flag)
    })
       
    //d. Print the total population of countries using reduce function     //in reduce func accumulator,ele
    let reducefun = res.reduce((population, ele)=>{                        //accumulator default value is 0
          return population + ele.population               
    })
    console.log(reducefun)
}
restcountries()
    
    //e.Print the country which uses US Dollars as currency.
    const currency = async() => {
        let data = await fetch("https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
        let res = await data.json()
        let filteredArr3 = res.filter((ele) => {
           return ele.currencies[0].code === "USD"
        })
        console.log(filteredArr3)
}
currency()

