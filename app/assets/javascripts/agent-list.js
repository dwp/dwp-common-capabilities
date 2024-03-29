var charArray = new Array(

  "Annabel Harrington (Staff Number: AH2829)",
  "Ashanti Melton (Staff Number: AM2383)",
  "Ali Munoz (Staff Number: AM2728)",
  "Darwin David (Staff Number: DD9229)",
  "Franklin Thornton (Staff Number: FT7282)",
  "Giana Conner (Staff Number: GC2474)",
  "Humberto Branch (Staff Number: HB728)",
  "Ibrahim Mcclain (Staff Number: IM1333)",
  "Janelle Pittman (Staff Number: JP7383)",
  "Jameson Montes (Staff Number: JM8282)",
  "Jillian Huerta (Staff Number: JH9292)",
  "Josephine Perkins (Staff Number: JP2928)",
  "Julian Mcclure (Staff Number: JM98292)",
  "Kayleigh Tyler (Staff Number: KT2292)",
  "Kelsey Weiss (Staff Number: KW7363)",
  "Kylee Gibson (Staff Number: KG922)",
  "Myah Hudson (Staff Number: MH5322)",
  "Milagros Powell (Staff Number: MP9292)",
  "Nick Gay (Staff Number: NG9292)",
  "Paxton Mejia (Staff Number: PM9289)",
  "Shyann Munoz (Staff Number: SM8191)",
  "Samson Vaughn (Staff Number: SV7282)",
  "Tobias Drake (Staff Number: TD7282)",
  "Virginia Vincent (Staff Number: VV92929)"

);


// Get dropdown element from DOM
var dropdown = document.getElementById("agent-selected");

// Loop through the array
for (var i = 0; i < charArray.length; ++i) {
    // Append the element to the end of Array list
    dropdown[dropdown.length] = new Option(charArray[i], charArray[i]);
}

// var opt = {
//     friendchat:[
//         {name:"somefriend1"},
//         {name:"somefriend2"}
//     ],
//     otherchat:[
//         {name:"someother1"},
//         {name:"someother2"}
//     ],
//     friendrequest:[
//         {name:"somerequest1"},
//         {name:"somerequest2"}
//     ],
//     sentrequest:[
//         {name:"somesent1"},
//         {name:"somesent2"}
//     ]
// };

// $(function(){
//     var $select = $('#selected-char');
//     $.each(opt, function(key, value){
//         var group = $('<optgroup label="' + key + '" />');
//         $.each(value, function(){
//             $('<option />').html(this.name).appendTo(group);
//         });
//         group.appendTo($select);
//     });
// });



function addRow() {
  var selectedChar = document.getElementById('agent-selected');
  var table = document.getElementById('agent-table');

  var rowCount = table.rows.length;
  var row = table.insertRow(rowCount);
  row.className = 'govuk-table__row';

  var valueCell = row.insertCell(0);
  valueCell.innerHTML = selectedChar.options[selectedChar.selectedIndex].text;
  valueCell.id = 'attribute-value-' + selectedChar.options[selectedChar.selectedIndex].text;
  valueCell.className = 'govuk-table__cell';

  var actionCell = row.insertCell(1);
  actionCell.innerHTML = '<a class="govuk-link" data-module="govuk-link" onclick="javascript:removeRow(' + rowCount + ');">Remove</a>';
  actionCell.className = 'govuk-table__cell';
}

function removeRow(index) {
  var table = document.getElementById('agent-table');
  table.deleteRow(index);
}
