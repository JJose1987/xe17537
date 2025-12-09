/* JavaScript */
// Variables
var kwargs = {
    fe:{desc: [], copy: [], leng: [], vf: []}
  , fs:{desc: [], copy: [], leng: []}
};

const __cobol = new COBOL(this.kwargs);

// Funciones
function main() {
    update();
    //
    $('div[class=body] div').height(height * 0.88);

    $('div[class=header] div').on('click', function() {setType(this);});
    $('input[type=radio]').on('click', function() {setSubType(this);});

    $('input[type=checkbox]').on('click', function() {set(this);});
    $('input[type=button]').on('click', function() {set(this);});

    $('input[type=text], input[type=number], textarea[name=desc], textarea[name=descjcl]')
        .change(function() {set(this);})
        .keydown(function() {set(this);})
        .focus(function() {set(this);})
        .blur(function() {set(this);});

    $('input[type=text], input[type=number], textarea')
        .attr('autocomplete', 'off');

    $('[name=uuaa]').on('paste', function(event) {
        // Prevenir el comportamiento por defecto
        event.preventDefault();
        // Obtener el texto del portapapeles
        const clipboardData = event.originalEvent.clipboardData || window.clipboardData;
        const textPaste = clipboardData.getData('Text');

        // Guardar el texto en una variable
        let uuaa = textPaste.substring(0,4);

        // Mostrar el texto pegado en un elemento
        $('[name=uuaa]').val(uuaa);

        if ($('input[name=subrut]:checked').attr('id') == 'cpy') {
            $('[name=ecpy]').val(textPaste.substring(5));
        } else {
            $('[name=ejcl]').val(textPaste.substring(5));
        }
    });

    $('select')
        .change(function() {set(this);});

    $('#TC').click(function() {$('[name=sendCT]').val('Envio de ficheros de TC a CR');});
    $('#CR').click(function() {$('[name=sendCT]').val('Envio de ficheros de CR a TC');});
    
    // Iniciar la vista
    $('#pgm').css({'display': 'none'});
    $('#p').css({'display': 'none'});
    $('#c').css({'display': 'none'});
    $('#jcl').css({'display': 'none'});

    $('#subrut').css({'display': 'none'});
    $('#subjcl').css({'display': 'none'});

    $('#file').css({'display': 'none'});
    $('#table_r').css({'display': 'none'});
    $('[name=restart]').css({'display': 'none'});
    
    $('#batch').trigger('click');
}
// Asignar valor del campo
function set(object) {
    var index = $(object).attr('name');

    if ($(object).attr('type') == 'button') {
        if (rgbToHex($('[name=' + index + ']').css('background-color')) == '#043263') {
            $('[name=' + index + ']').css({'background': '#5BBEFF'});
            this.kwargs[index] = true;
        } else {
            $('[name=' + index + ']').css({'background': '#043263'});
            this.kwargs[index] = false;
        }
    } else {
        if (index.split('_').length == 1) {
            this.kwargs[index] = $(object).val();
        } else if (index.split('_').length == 3) {
            if ($(object).attr('type') == 'checkbox') {
                if (index.split('_')[1] == 'vf') {
                    if ($(object).is(':checked')) {
                        this.kwargs[index.split('_')[0]][index.split('_')[1]][index.split('_')[2]] = 'on';
                    } else {
                        this.kwargs[index.split('_')[0]][index.split('_')[1]][index.split('_')[2]] = 'off';
                    }
                }
            } else {
                this.kwargs[index.split('_')[0]][index.split('_')[1]][index.split('_')[2]] = $(object).val();
            }
        }
    }

    update();
}
// Asignar tipo de elemento
function setType(object) {
    this.kwargs['type'] = ($(object).html()).toLowerCase();

    $('div[class=header] div').css({'text-decoration': ''});
    $(object).css({'text-decoration':'underline overline #5BBEFF'});

    $($(object).html() == 'programa'?'#subjcl':'#subpgm').css({'display': 'none'});
    $($(object).html() == 'programa'?'#subpgm':'#subjcl').css({'display': ''});
    //
    $('#pgm').css({'display': 'none'});
    $('#p').css({'display': 'none'});
    $('#c').css({'display': 'none'});
    $('#jcl').css({'display': 'none'});

    $('#subrut').css({'display': 'none'});
    $('#subjcl').css({'display': 'none'});

    $('#file').css({'display': 'none'});
    $('#table_r').css({'display': 'none'});
    $('[name=restart]').css({'display': 'none'});
    
    if ($(object).html() == 'programa') {
        $('#pgm').css({'display': ''});
        
        if (this.kwargs['subpgm'] == 'nobatch') {
            $('#subrut').css({'display': ''});
        }
    } else {
        $('#jcl').css({'display': ''});
        $('#subjcl').css({'display': ''});
    }

    update();
}
// Asignar subtipo del elemento
function setSubType(object) {
    this.kwargs['subrut'] = '';
    this.kwargs['subpgm'] = '';

    $('#pgm').css({'display': 'none'});
    $('#p').css({'display': 'none'});
    $('#c').css({'display': 'none'});
    $('#jcl').css({'display': 'none'});

    $('#subrut').css({'display': 'none'});
    $('#subjcl').css({'display': 'none'});

    $('#file').css({'display': 'none'});
    $('#table_r').css({'display': 'none'});
    $('[name=restart]').css({'display': 'none'});

    if ($(object).attr('name') == 'subjcl') {
        this.kwargs['subjcl'] = $(object).attr('id');
        
        $('#jcl').css({'display': ''});
    } else if (('subrut|subpgm|').indexOf($(object).attr('name')) >= 0) {
        $('#pgm').css({'display': ''});

        if (('batch|batchDB2|').indexOf($(object).attr('id')) >= 0) {
            this.kwargs['subpgm'] = $(object).attr('id');
            
            $('#subrut').css({'display': 'none'});
            
            $('#c').css({'display': 'none'});
            $('#p').css({'display': ''});
            
            $('#file').css({'display': ''});
            
            if ($(object).attr('id') == 'batchDB2') {
                $('#table_r').css({'display': ''});
                $('input[name=restart]').css({'display': ''});
            }
        } else {
            this.kwargs['subpgm'] = 'nobatch';
            this.kwargs['subrut'] = $('input[name=subrut]:checked').attr('id');

            $('#subrut').css({'display': ''});
            
            if ($('input[name=subrut]:checked').attr('id') == 'cpy') {
                $('#p').css({'display': 'none'});
                $('#c').css({'display': ''});
            } else {
                if ($(object).attr('id') == 'cpy') {
                    $('#c').css({'display': ''});
                } else {
                    $('#p').css({'display': ''});
                    
                    $('#table_r').css({'display': ''});
                }
            }
        }
    }

    update();
}
// Actualizar valores de la clase
function update() {
    this.kwargs['fe']['id'] = parseInt($('input[name=fe_id]').val());
    this.kwargs['fs']['id'] = parseInt($('input[name=fs_id]').val());

    this.__cobol = new COBOL(this.kwargs);
    $('textarea[name=str]').val(this.__cobol.str);

    // Ficheros de Entrada
    if (parseInt(this.__cobol.get('fe')['id']) > 0) {
        $('input[name=fe_id]').val(this.__cobol.get('fe')['id']);

        for (var i = 0; i < parseInt(this.__cobol.get('fe')['id']); i++) {
            if ($('#e' + i).length == 0) {
                $('#fe').append((''
                    + '<div id="e{i}">'
                    + '    <div><input type="text"     name="fe_desc_{i}" maxlength="22"                  onChange="set(this)" /></div>'
                    + '    <div><input type="text"     name="fe_copy_{i}" maxlength="8"                   onChange="set(this)" /></div>'
                    + '    <div><input type="number"   name="fe_leng_{i}" pattern="\d*" min="0" value="0" onChange="set(this)" /></div>'
                    + '    <div><input type="checkbox" name="fe_vf_{i}"                                   onChange="set(this)" /></div>'
                    + '</div>').replace(/{i}+/g  , i));
            }
        }
    }

    var i = parseInt(this.__cobol.get('fe')['id']);
    do {
        $('#e' + i++).remove();
    } while ($('#e' + i).length != 0);

    // Ficheros de Salida
    if (parseInt(this.__cobol.get('fs')['id']) > 0) {
        $('input[name=fs_id]').val(this.__cobol.get('fs')['id']);

        for (var i = 0; i < parseInt(this.__cobol.get('fs')['id']); i++) {
            if ($('#s' + i).length == 0) {
                $('#fs').append((''
                    + '<div id="s{i}">'
                    + '    <div><input type="text"     name="fs_desc_{i}" maxlength="22"                  onChange="set(this)" /></div>'
                    + '    <div><input type="text"     name="fs_copy_{i}" maxlength="8"                   onChange="set(this)" /></div>'
                    + '    <div><input type="number"   name="fs_leng_{i}" pattern="\d*" min="0" value="0" onChange="set(this)" /></div>'
                    + '</div>').replace(/{i}+/g  , i));
            }
        }
    }

    var i = parseInt(this.__cobol.get('fs')['id']);
    do {
        $('#s' + i++).remove();
    } while ($('#s' + i).length != 0);
}
