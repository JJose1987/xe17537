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

    $('#subjcl').css({'display': 'none'});
    $('#subrut').css({'display': 'none'});
    $('#jcl').css({'display': 'none'});
    $('#table_r').css({'display': 'none'});
    $('#copy').css({'display': 'none'});
    $('#c').css({'display': 'none'});
    $('input[name=restart]').css({'display': 'none'});
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

    $('#pgm').css({'display': ($(object).html() == 'programa'?'':'none')});
    $('#jcl').css({'display': ($(object).html() != 'programa'?'':'none')});
    $('#subrut').css({'display': (($(object).html() == 'programa' && this.kwargs['subpgm'] == 'nobatch') ? '': 'none')});

    update();
}
// Asignar subtipo del elemento
function setSubType(object) {
    this.kwargs['subrut'] = '';
    this.kwargs['subpgm'] = '';

    $('#p').css({'display': ''});
    $('#subrut').css({'display': 'none'});
    $('#file').css({'display': 'none'});
    $('#table_r').css({'display': 'none'});
    $('#c').css({'display': 'none'});
    $('input[name=restart]').css({'display': 'none'});

    if ($(object).attr('id') == 'nobatch' || $(object).attr('id') == 'rut' || $(object).attr('id') == 'trx' || $(object).attr('id') == 'cpy') {
        $('#subrut').css({'display': ''});

        if ($(object).attr('id') != 'cpy') {
            $('#table_r').css({'display': ''});
        } else {            
            $('#p').css({'display': 'none'});
            $('#c').css({'display': ''});
        }

        this.kwargs['subpgm'] = 'nobatch';
        this.kwargs['subrut'] = $('input[name=subrut]:checked').attr('id');
    }

    if ($(object).attr('id') == 'batch') {
        $('#file').css({'display': ''});

        this.kwargs['subpgm'] = $(object).attr('id');
    }

    if ($(object).attr('id') == 'batchDB2') {
        $('#file').css({'display': ''});
        $('#table_r').css({'display': ''});
        $('input[name=restart]').css({'display': ''});

        this.kwargs['subpgm'] = $(object).attr('id');
    }
    
    if ($(object).attr('name') == 'subjcl') {
        kwargs['subjcl'] = $(object).attr('id');
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
