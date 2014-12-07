var datain = 
[
    {
		"id": "1",
        "nombre": "Azucar",
		"cantidad": "5kg",
        "precio": "3190",
		"precioUnidad": "0.64"
    },
    {
		"id": "2",
        "nombre": "Sal",
		"cantidad": "500g",
        "precio": "190",
		"precioUnidad": "0.4"
    },
    {
		"id": "3",
        "nombre": "Harina",
		"cantidad": "1kg",
        "precio": "700",
		"precioUnidad": "0.7"
    },
    {
		"id": "4",
        "nombre": "Polvo de hornear",
		"cantidad": "90g",
        "precio": "475",
		"precioUnidad": "5..3"
    },
    {
		"id": "5",
        "nombre": "Mantequilla",
		"cantidad": "4b",
        "precio": "3100",
		"precioUnidad": "775"
    },
    {
		"id": "6",
        "nombre": "Huevos",
		"cantidad": "30u",
        "precio": "3500",
		"precioUnidad": "120"
    },
    {
		"id": "7",
        "nombre": "Vainilla",
		"cantidad": "950g",
        "precio": "3858",
		"precioUnidad": "4.06"
    },
    {
		"id": "8",
        "nombre": "Coco",
		"cantidad": "100g",
        "precio": "545",
		"precioUnidad": "5.45"
    }
];


$(function () {
	loadBootstrapTable(datain);
	//populateIngredientes();
	test();
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

var populateIngredientes = function ()
{
	//var selecct = $("#listaIngredientes");
	var selecct = $('<select>').appendTo('.select');
	for(var i = 0; i < datain.length; i++)
	{
		selecct.append('<option value=' + datain[i].id + '>' + datain[i].nombre + '</option>');
	}
	
	
	//return selecct;
};

var test = function()
{
	$("#tblData tbody")
		.append( "<tr>"+ 
					"<td class='select'>"+
						populateIngredientes()+
					"</td>"+ 
					"<td>"+
						"<input type='text'/>"+
					"</td>"+ 
					"<td>"+
						"<input type='text'/>"+
					"</td>"+ 
					"<td>"+
						"<input type='text'/>"+
					"</td>"+ 
					"<td>"+
						"<img src='images/disk.png' class='btnSave'>"+
						"<img src='images/delete.png' class='btnDelete'/>"+
					"</td>"+ 
				"</tr>");
	
	//$(".btnSave").bind("click", Save);	
	//$(".btnDelete").bind("click", Delete); };
}