const driver = {
    name: 'Sam',
    addres: '11 Broadway'
}

function updateDriverWithKeyAndValue(driver, key, value) {
    return Object.assign({}, driver, { [key] : value });
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;

    return driver;
  }

  function deleteFromDriverByKey(driver, key) {
      const driverTwo = Object.assign({}, driver);
      delete driverTwo.name;
      return driverTwo; 
    }

    function destructivelyDeleteFromDriverByKey(driver, key) {
        delete driver [key];
        return driver;
    }
