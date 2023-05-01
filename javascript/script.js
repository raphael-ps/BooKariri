// $(document).ready(function() {
//     $('.selectpicker').selectpicker().ajaxSelectPicker({
//         ajax: {
//             url: "http://localhost:8080/api/buscar/aeroportos",
//             dataType: 'json',
//             delay: 250,
//             data: function (params) {
//                 var query = {
//                     city: params.term
//                 }
//                 return query;
//             },
//             preprocessData: function (data) {
//                 var i, l = data.length, array = [];
//                 if (l) {
//                     for (i = 0; i < l; i++) {
//                         array.push($.extend(true, data[i], {
//                             text : data[i].Name,
//                             value: data[i].Email,
//                             data : {
//                                 subtext: data[i].Email
//                             }
//                         }));
//                     }
//                 }
//                 return array;
//             }
//         // minimumInputLength: 1,
//         // templateResult: formatOption,
//         // templateSelection: formatSelection
//         }
//     });
// });

// function formatOption(aeroporto) {
//     if (aeroporto.loading) {
//       return aeroporto.text;
//     }
//     var $container = $(
//         "<option value="+aeroporto+">"+aeroporto.city+" - "+aeroporto.iata+"</option>"
//     );
//     return $container;
// }
  
// function formatSelection(aeroporto) {
//     return aeroporto.city+" - "+aeroporto.iata;
// }

// async function logJSONData() {
//     const url = "http://localhost:8080/api/buscar/aeroportos"
//     const response = await fetch(url);
//     const jsonData = await response.json();
//     console.log(jsonData);
// }
