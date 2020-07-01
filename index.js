// Write your solution in this file!

 const driver = {name: "sam"}

function updateDriverWithKeyAndValue(driver, key, value) {

    const newObj = {...driver};

    newObj[key] = value;

    return newObj;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {

    driver[key] = value;

    return driver;

}

function deleteFromDriverByKey(driver, key) {
    let d = Object.assign({}, driver)

    delete d[key]
    return d 
}

function destructivelyDeleteFromDriverByKey(driver, key) {
     
    delete driver[key]

    return driver 
}