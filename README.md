# Currency converter

Currency converter uses 2 separate functions to make currency conversions

================================================

1) The function calculateEurToUah takes two parameters: amount and exchangeRate. 
It multiplies the amount by the exchangeRate and returns the result.
https://larisagoga.github.io/currency-converter2/js/calculate-eur-uah.js

Therefore, the function calculates the equivalent amount of Ukrainian Hryvnia (UAH) for a given amount of Euros (EUR), using the specified exchange rate.

For example, if you call calculateEurToUah(100, 41.5), it will return 4150, 
which means that 100 EUR is equivalent to 4150 UAH at the exchange rate of 41.5 UAH per EUR.

================================================

2) The function calculateUahToEur takes two parameters: amount and exchangeRate. 
It divides the amount by the exchangeRate and returns the result.
https://larisagoga.github.io/currency-converter2/js/calculate-uah-eur.js

Therefore, the function calculates the equivalent amount of Euros (EUR) for a given amount of Ukrainian Hryvnia (UAH), using the specified exchange rate.

For example, if you call calculateUahToEur(4200, 42), 
it will return 100, which means that 4200 UAH is equivalent to 100 EUR at the exchange rate of 42 UAH per EUR.
