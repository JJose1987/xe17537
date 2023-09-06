/* JavaScript */
// Variables
var kwargs = {
    fe:{desc: [], copy: [], leng: [], vf: []}
  , fs:{desc: [], copy: [], leng: []}
};

var now = new Date().toISOString();
var [y, M, d, h, m, s, nm] = now.match(/\d+/g);
nm = nm + "000";
h  = parseInt(h) + 2;

var url = window.location.pathname;
var url = url.substr(1, url.indexOf('/index.html'));

var height = $(window).height();
var width  = $(window).width();

const __cobol = new COBOL(this.kwargs);

// Funciones
function main() {
    update();

    //

    $('#subjcl').css({'display': 'none'});
    $('#jcl').css({'display': 'none'});
    $('#table_r').css({'display': 'none'});
    $('div[class=body] div').height(height * 0.88);

    $('div[class=header] div').on('click', function() {setType(this);});
    $('[id=batch], [id=batchDB2], [id=nobatch]').on('click', function() {setSubType(this);});
    
    $('input[type=checkbox]').on('click', function() {set(this);});
    $('input[type=button]').on('click', function() {set(this);});

    $('input[type=text], input[type=number], textarea[name=desc], textarea[name=descjcl]')
        .change(function() {set(this);})
        .keydown(function() {set(this);})
        .focus(function() {set(this);})
        .blur(function() {set(this);});
        
    $('select')
        .change(function() {set(this);});
}
// Asignar valor del campo
function set(object) {
    var index = $(object).attr('name');
    
    if ($(object).attr('type') == 'button') {        
        if (rgb2hex($('[name=' + index + ']').css('background-color')) == '#043263') {
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

    update();
}
// Asignar subtipo del elemento
function setSubType(object) {
    this.kwargs[('batch|batchDB2|nobatch|'.indexOf($(object).attr('id')) >= 0?'subpgm':'subjcl')] = $(object).attr('id');

    $('#file').css({'display': ($(object).attr('id') != 'nobatch'? '':'none')});
    $('#table_r').css({'display': ($(object).attr('id') != 'batch'? '':'none')});

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
