const weatherArray = (response) => {
    let weatherArray = [];
    let weatherNameList = [];

    const respArr = response.data.list

    for (var i = 0; i < respArr.length; i++) {
      const date = respArr[i].dt_txt;
      const cutDate = date.split(" ")[0];
      console.log(date.split(" ")[0]);

      if (weatherNameList.indexOf(cutDate) !== -1) {
        console.log('weather piece  ' + cutDate + ' already exists!!!');

        let arrRef = weatherArray.find(x => x.dt_txt === cutDate);

        if (arrRef.temp_min > respArr[i].main.temp_min) {
          arrRef.temp_min = respArr[i].main.temp_min;
        }

        if (respArr[i].main.temp_max > arrRef.temp_max) {
          arrRef.temp_max = respArr[i].main.temp_max
        }

      } else {
        weatherArray.push({
          dt_txt: cutDate,
          temp: respArr[i].main.temp,
          temp_max: respArr[i].main.temp_max,
          temp_min: respArr[i].main.temp_min,
          icon: respArr[i].weather[0].icon,
          description: respArr[i].weather[0].description,
          condition: respArr[i].weather[0].main,
          key: respArr[i].dt
        });

        weatherNameList.push(cutDate);
      }
    }

    console.log('logging self built array');
    console.log(weatherArray);

    return weatherArray;
}

export default weatherArray;