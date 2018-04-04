


var endpoint = "http://data.fixer.io/api/latest?access_key=7096227d08beef4d32e58f6a442119de&format=1";
//console.log("test");
//let currencyForm = $("#currencyForm");
//console.log(currencyForm);
//console.log("hello");
function convertCurrency(event) 
{

  	if ('type' in event.target && event.target.type === 'button') 
  	{
  	
  	$.ajax({

  		method: 'GET',
  		url: 'http://data.fixer.io/api/latest?access_key=7096227d08beef4d32e58f6a442119de',
  		dataType: 'json',
  		success: onSuccess
  		//console.log("hello");
  	});

 
  	}
  
}

function onSuccess(response)
{

	switch(event.target.value){
            case "EUR":
            value = response["rates"]["EUR"];
            currencyType = " EUR"
            break;
            case "GBP":
            value = response["rates"]["GBP"];
            currencyType = " GBP"
            break;
            case "CNY":
            value = response["rates"]["CNY"];
            currencyType = " CNY"
            break;
            case "JPY":
            value = response["rates"]["JPY"];
            currencyType = ' JPY'
            break;
            default:
            break;
        }
    result = 1/response['rates']["USD"]*$('#dataEntered').val() * value
    console.log(result);
    $('#output_amount').append("<p>"+result+currencyType+"</p>")
    })

 }
	//var temp = $("#usd").val();
	//console.log(temp);
	//var dollar = parseInt(temp);
	//console.log(dollar);
	//var eur = responseData.rates.USD * dollar;
	//console.log(eur);
	
	//console.log(responseData.rates);
	//console.log(responseData.rates.USD);
	//console.log(responseData.rates.GBP);
	//$("#output_amount").append(temp);
	//$("#output_currency").append(eur);

	//if($("#gbp").val() === "GBP")
	//{
		//$("#gbp").append("");
		//temp = $("#gbp").val();
		//dollar = parseInt(temp);
		//var gpd = dollar * responseData.rates.GBP;
		//console.log(responseData.rates.GBD);
	//}
}

document.body.addEventListener('click', convertCurrency);


