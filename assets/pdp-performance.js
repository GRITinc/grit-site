var arr, i;

const chartLength = 6;
var chart = $('#percentages');

const products = {
    "Performance Bites™": {
        "total": 60,
        "protein": 23,
    },
  	"2 Boiled Eggs": {
        "total": 100,
        "protein": 13,
    },
  	"Clif Builder's® Protein Bar": {
        "total": 68,
        "protein": 20,
    }, 
  	"Almonds": {
        "total": 28,
        "protein": 6,
    },	
  	"RXBAR®": {
        "total": 52,
        "protein": 12,
    }, 	          
};

var getProteinPercent = function(food) {
  //arr[name of food, protein density, protein content, serving size]
    return [food, Math.round(products[food].protein / products[food].total * 100), products[food].protein, products[food].total];
}


let loadFood = function() {
    for (i = 0; i < chartLength; i++) {
        arr = getProteinPercent( Object.keys(products)[i] );
        $(chart).append(
            '<tr style="height:' +
            arr[1]*2 +
            '%" data-content="Protein: ' +
            arr[2] +
            'g. Serving size: ' +
            arr[3] +
            'g.">' +
            '<th scope="row" class="noselect">' +
            arr[0] +
            '</th><td ><span class="noselect">' +
            arr[1] +
            '%</span></td>' +
            '</tr>'
        );        
    }
};
loadFood();