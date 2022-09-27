function findMatching(drivers, str){
    return drivers.filter(function(driver){
        return (driver.toLowerCase() === str.toLowerCase())
    })
}

function fuzzyMatch(drivers, str){
    return drivers.filter(function(driver){
        return driver.substring(0, str.length) === str})
    }

function matchName(drivers, str){
    return drivers.filter(function(element){
        return element.name === str
    })
}