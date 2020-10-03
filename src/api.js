export function banksAPI () {
    let bankData;
    return fetch('https://controllerdata.lacity.org/resource/v2mg-qsxf.json')
        .then(response => response.json())
        .then((jsonData) => {
        // jsonData is parsed json object received from url
        console.log(jsonData)
  })
};


