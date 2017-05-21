// 28天內 4 *-3 && 4 *0 
// 14天內 2 *-3


// 1   08:00-17:30
// 329	08:30-17:30
// -3  例假日
// 0   休假日
// -2  國定假日

function filterSpace(element, index, array){
    return (element!=='');    
}

function isInt(value) {
  return !isNaN(value) && 
         parseInt(Number(value)) == value && 
         !isNaN(parseInt(value, 10));
}

function findNumOfElementInArray (arr, num) {
	var count = 0;
	for(var i = 0; i < arr.length; ++i){
	    if(arr[i] === num)
	        count++;
	}
	return count;
}

function clone(obj) {
    if (null == obj || "object" != typeof obj) return obj;
    var copy = obj.constructor();
    for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    }
    return copy;
}

Array.prototype.subarray=function(start,end){
     if(!end){
       end = this.length;
     } 
var newArray = clone(this);
    return newArray.slice(start, end);
};


function myFunction () {
	var datas = document.getElementById('data').value.split('\n')
	datas = datas.filter(filterSpace)
	var dates = datas.shift().split(',')
	dates.shift()
	dates.shift()
	console.log(dates)
    var errorMassage = '';


    for (var i = 0; i < datas.length; i++) {

    	var contents = datas[i].split(',');

    	if (contents.length <= 1) {
    		continue;
    	}

    	var name = contents[1];

    	if (name === '') { continue;};

    	if (contents.length != 30) {
    		errorMassage += name + '沒有28天';
    	}

    	var numOf3 = findNumOfElementInArray(contents, '-3')
    	var numOf0 = findNumOfElementInArray(contents, '0')


    	if (numOf3 != 4) {
    		errorMassage += name + "在 28 天中沒有 4 個 -3 \n";
    	}

    	if (numOf0 != 4) {
    		errorMassage += name + "在 28 天中沒有 4 個 0 \n";
    	}

        contents.shift();
        contents.shift();
    	for (var j = 0; j < contents.length - 14; j++) {
    		var newArr = contents.subarray(j, j + 14);
    		numOf3 = findNumOfElementInArray(newArr, '-3')
    		numOf0 = findNumOfElementInArray(contents, '0')
    		console.log(newArr.length)

if (newArr[newArr.length-1] !== contents[j+13]) {console.log('e')};


    		if (numOf3 < 2) {
    			errorMassage += name + "在 14 天 ("+ dates[j] + '-' + dates[j+13] +")中沒有 2 個 -3 \n";
	    	}

    	}
    }
  
    if (errorMassage !== '') { alert(errorMassage)};
}