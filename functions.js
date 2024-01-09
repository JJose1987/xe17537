/* JavaScript */
/* https://www.degraeve.com/reference/urlencoding.php */
// Variables
const __eat = new EAT();

// Funciones
function main() {
    //Si es telefono girar la vista y las imagenes
    this.__eat = new EAT();
    this.__eat.sets();
    
    var days = this.__eat['days'];
    var ddays = this.__eat['ddays'];
    var indexs = this.__eat['Group'];
    
    for (var i0 = 0; i0 < days.length; i0++) {
        var auxKeys = Object.keys(indexs);

        $('<div />', {id: days[i0], appendTo: '[class=table]'});
        $('<div />', {text: ddays[i0].replaceAll('*', ' '), width: (99 / (auxKeys.length + 1)) + '%' , appendTo: '[id=' + days[i0] + ']'});

        for (var i1 = 0; i1 < auxKeys.length; i1++) {
            $('<div />', {id: days[i0] + '_' + auxKeys[i1]
                , width: (99 / (auxKeys.length + 1)) + '%'
                , appendTo: '[id=' + days[i0] + ']'
            });
            
            $('<select />', {name: days[i0] + '_' + auxKeys[i1]
               , appendTo: '[id=' + days[i0] + '_' + auxKeys[i1] + ']'
            });
            
            $.each(indexs[auxKeys[i1]], function(key, val) {$('[name=' + days[i0] + '_' + auxKeys[i1] + ']').append(new Option(val.capitalize(), val.replaceAll(' ', '_')));});
            
            if ((typeof this.__eat['menu'][days[i0]] != 'undefined') 
                    && (typeof this.__eat['menu'][days[i0]][auxKeys[i1]] != 'undefined') 
                    && (this.__eat['menu'][days[i0]][auxKeys[i1]] != ' ')) {
                $('[name=' + days[i0] + '_' + auxKeys[i1] + '] option[value=' + (this.__eat['menu'][days[i0]][auxKeys[i1]]).replaceAll(' ', '_') + ']').attr('selected','selected');
            }
        }
    }

    update();
    
    $('select').change(function() {set(this);});
    $('svg').click(function() {send();});
}
// Asignar valor del campo
function set(object) {
    var index = $(object).attr('name');
    this.__eat.set(index, $(object).val());
    update();
}
//
function send() {
    var out = this.__eat.str;
    console.log(out);
    
    location.href = 'whatsapp://send?text=' + ((out).replaceAll(' ', '%20')).replaceAll('\n', '%0A');    
}
// Actualizar valores de la clase
function update() {
    $('div[id=lack]').html((this.__eat.lack).replaceAll('\n', '<br />'));
}

