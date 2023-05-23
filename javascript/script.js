$(document).ready(function() {
    var url = "http://localhost:8080/api/aeroportos/buscar"
    $('.selectpicker').selectpicker().ajaxSelectPicker({
        ajax: {
            url: url,
            type: "GET",
            data: function() {
                var params = {
                    city: '{{{q}}}'
                };
                return params
            }
        },
        locale: {
            emptyTitle: 'Nome da cidade...'
        },
        preprocessData: function(data){
            var array = [];
            for(var i = 0; i < data.length; i++) {
                var current = data[i];
                array.push(
                    {
                        'value': current.id,
                        'text': current.iata + ' - ' + current.city,
                        // 'data': {
                        //     'icon': 'icon-person',
                        //     'subtext': 'Internal'
                        // },
                        'disabled': false
                    }
                );
            }
            return array;
        },
        preserveSelected: false
    });
});

function ativarbotao(boo){
    document.getElementById("editaralerta").disabled = !boo;
    if(!boo){
        $('.modal').modal('toggle')
    }
}

function mostrarvalor(){
    document.getElementById("inputvalor").value = document.getElementById("alertavalor").dataset.valorAlert;
}