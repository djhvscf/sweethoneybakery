var datain = 
[
    {
        "nombre": "Azucar",
		"cantidad": "5kg",
        "precio": "3190",
		"precioUnidad": "0.64"
    },
    {
        "nombre": "Sal",
		"cantidad": "500g",
        "precio": "190",
		"precioUnidad": "0.4"
    },
    {
        "nombre": "Harina",
		"cantidad": "1kg",
        "precio": "700",
		"precioUnidad": "0.7"
    },
    {
        "nombre": "Polvo de hornear",
		"cantidad": "90g",
        "precio": "475",
		"precioUnidad": "5..3"
    },
    {
        "nombre": "Mantequilla",
		"cantidad": "4b",
        "precio": "3100",
		"precioUnidad": "775"
    },
    {
        "nombre": "Huevos",
		"cantidad": "30u",
        "precio": "3500",
		"precioUnidad": "120"
    },
    {
        "nombre": "Vainilla",
		"cantidad": "950g",
        "precio": "3858",
		"precioUnidad": "4.06"
    },
    {
        "nombre": "Coco",
		"cantidad": "100g",
        "precio": "545",
		"precioUnidad": "5.45"
    }
];


$(function () {
	loadBootstrapTable(datain);
});

var loadBootstrapTable = function (data) {
	$('#bstable').bootstrapTable({
		data: data,
		height: 450,
		width: 500,
		striped: true,
		pagination: false,
		pageSize: 15,
		pageList: [10, 15, 20, 25, 30],
		search: true
	});
};

var flatten = function(data) {
    var result = {};
    function recurse (cur, prop) {
        if (Object(cur) !== cur) {
            result[prop] = cur;
        } else if (Array.isArray(cur)) {
             for(var i=0, l=cur.length; i<l; i++)
                 recurse(cur[i], prop ? prop+"."+i : ""+i);
            if (l == 0)
                result[prop] = [];
        } else {
            var isEmpty = true;
            for (var p in cur) {
                isEmpty = false;
                recurse(cur[p], prop ? prop+"."+p : p);
            }
            if (isEmpty)
                result[prop] = {};
        }
    }
    recurse(data, "");
    return result;
};

var unflatten = function(data) {
    "use strict";
    if (Object(data) !== data || Array.isArray(data))
        return data;
    var result = {}, cur, prop, idx, last, temp;
    for(var p in data) {
        cur = result, prop = "", last = 0;
        do {
            idx = p.indexOf(".", last);
            temp = p.substring(last, idx !== -1 ? idx : undefined);
            cur = cur[prop] || (cur[prop] = (!isNaN(parseInt(temp)) ? [] : {}));
            prop = temp;
            last = idx + 1;
        } while(idx >= 0);
        cur[prop] = data[p];
    }
    return result[""];
};	

var getImg = function(value) {
	return '<img src="'+ value + ' width="50px" height="50px">';
};