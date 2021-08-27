function cal_weight(){
  const value = new FormData(document.querySelector('form[name="form-component"]'))

  let price = value.get('price')
  let gold_value = document.querySelector('#gold_value').value
  let weight_origin = document.querySelector('#weight_origin').value

  let sum = (price*weight_origin)/gold_value
  document.querySelector('#sum').innerHTML = sum.toFixed(2)
}

function cal_price(){
  const value = new FormData(document.querySelector('form[name="form-component2"]'))

  let weight = value.get('weight')
  let gold_value = document.querySelector('#gold_value').value
  let weight_origin = document.querySelector('#weight_origin').value

  let sum = (weight*gold_value)/weight_origin
  document.querySelector('#sum2').innerHTML = sum.toFixed(2)
}

function getGoldprice(){
  axios.get('https://thai-gold-api.herokuapp.com/latest').then(function (response) {
    // handle success
    console.log(response.data.response.price.gold_bar);
    const gold_val = (response.data.response.price.gold_bar.buy).replace(",","")
    document.querySelector('input[name="gold_value"]').value = parseFloat(gold_val)
  }).catch(function (error) {
    // handle error
    console.log(error);
  })
}

getGoldprice()