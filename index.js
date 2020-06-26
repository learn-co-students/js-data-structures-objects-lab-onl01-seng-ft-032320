// Write your solution in this file!
const driver = {name: 'Sam', address: '11 Broadway'}

function updateDriverWithKeyAndValue(driver,key,value) {
    return Object.assign({},driver, {[key]: value});
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;

    return driver;
}

function deleteFromDriverByKey(driver, name) {
    
    const newDriver = Object.assign({},driver);

    delete newDriver.name

    return newDriver;

    return driver;
}


function destructivelyDeleteFromDriverByKey(driver, name) {

    delete driver.name

    return driver;
}