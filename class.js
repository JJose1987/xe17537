/* JavaScript */
// Clases
class COBOL {
    /* Constructor donde le pasamos los datos de entrada, para ello le pasamos el nombreparametro = VALUE */
    constructor(kwargs) {
        //********************************************************************************
        // Argumentos
        this.kwargs = {
            fe : {id: 0, desc: [], copy: [], leng: [], vf: []}
          , fs : {id: 0, desc: [], copy: [], leng: []}
        };
        // Random
        var letters = '1234567890QWERTYUIOPASDFGHJKLZXCVBNM';
        var p0 = Math.floor(Math.random() * (letters.length - 1));
        var p1 = Math.floor(Math.random() * (letters.length - 1));
        var p2 = Math.floor(Math.random() * (letters.length - 1));
        var rand = letters.substring(p0, p0 + 1)
                 + letters.substring(p1, p1 + 1)
                 + letters.substring(p2, p2 + 1);
        // Liberia de la tabla
        var lib_uuaa = {
              EYRG : 332
            , ERCV : 332
            , OORG : 332
            , OODN : 332
            , GRDR : 343
            , RIHC : 343
            , ADEX : 343
            , GCBS : 343
            , QPIP : 318
            , KEOS : 414
            , ADHR : 343
            , KGSN : 337
            , KDHN : 343
            , KYGL : 343
            , ENJF : 343
            , ENAR : 343
            , TGOF : 392
            , KITC : 337
            , KDHJ : 343
        };
        // Ordenacion por clave de las tablas
        var table_keygen = {
              TEYRGBIN : '2076,3,CH,A,2,10,CH,A,13,2,CH,A,17,4,CH,A,2015,60,CH,A,2079,1,CH,A'
            , TEYRGGGO : '1204,3,CH,A,1,10,CH,A,12,2,CH,A,16,4,CH,A,21,26,CH,A,47,34,CH,A,81,50,CH,A,160,26,CH,A,1142,60,CH,A'
            , TEYRGGOP : '1,4,CH,A,37,4,CH,A,43,26,CH,A,119,34,CH,A,11,26,CH,A,170,3,CH,A,7,4,CH,A,153,10,CH,A,41,2,CH,A,69,50,CH,A,5,2,CH,A'
            , TEYRGHOP : '1,3,CH,A,4,10,CH,A,14,2,CH,A,16,4,CH,A,20,26,CH,A,46,50,CH,A,96,34,CH,A'
            , TEYRGHTI : '1,3,CH,A,4,10,CH,A,14,2,CH,A,16,4,CH,A,20,26,CH,A'
            , TEYRGNBS : '1,3,CH,A,48,25,CH,A,16,4,CH,A,46,2,CH,A,84,4,CH,A,88,26,CH,A,164,34,CH,A,198,3,CH,A,4,10,CH,A,14,2,CH,A,20,26,CH,A,82,2,CH,A,114,50,CH,A'
            , TEYRGNSR : '508,1,CH,A,1,10,CH,A,11,4,CH,A,15,25,CH,A,42,4,CH,A,46,26,CH,A,122,34,CH,A,40,2,CH,A,72,50,CH,A'
            , TEYRGOAN : '1,3,CH,A,4,10,CH,A,14,2,CH,A,16,4,CH,A,20,26,CH,A,46,50,CH,A,96,34,CH,A'
            , TEYRGOEA : '1,10,CH,A,12,2,CH,A,16,4,CH,A,21,26,CH,A,81,50,CH,A,47,34,CH,A,188,60,CH,A,250,60,CH,A'
            , TEYRGOGE : '1,4,CH,A,5,2,CH,A,7,4,CH,A,87,10,CH,A,11,26,CH,A,37,50,CH,A'
            , TEYRGOSL : '1,4,CH,A,7,4,CH,A,11,26,CH,A,87,34,CH,A,121,10,CH,A,5,2,CH,A,37,50,CH,A'
            , TEYRGPER : '1,4,CH,A,17,26,CH,A,11,4,CH,A,7,2,CH,A,47,10,CH,A'
            , TEYRGVIN : '1,10,CH,A,13,4,CH,A,17,26,CH,A,93,34,CH,A,129,4,CH,A,133,26,CH,A,209,34,CH,A,11,2,CH,A,127,2,CH,A,43,50,CH,A,159,50,CH,A'
            , TEYRGORE : '1,4,CH,A,5,26,CH,A,31,34,CH,A,65,10,CH,A,75,1,CH,A,76,50,CH,A,126,2,CH,A,128,10,CH,A'
            , TENARDAS : '1,2,BI,A,3,2,BI,A,5,2,BI,A,7,4,BI,A,11,1,CH,A,16,4,BI,A,20,10,CH,D,12,4,BI,A'
        };

        // Indicamos tipo
        if (typeof kwargs['type'] != 'undefined') {
            this.kwargs['type'] = kwargs['type'];
        } else {
            this.kwargs['type'] = 'programa';
        }
        var type = (this.kwargs['type'] == 'programa'?this.control_UUAA(1)
                  :(this.kwargs['type'] == 'jcl'     ?'J'
                  :(this.kwargs['type'] == 'boleta'  ?'P'
                  :'#')));
        // Nombre elemento
        var name = 'UUAA' + this.control_UUAA(1) + rand;

        if (typeof kwargs['name'] != 'undefined') {
            this.kwargs['name'] = kwargs['name'];

            if (this.kwargs['name'].length < 8) {
                this.kwargs['name'] = kwargs['name'] + name.substring(this.kwargs['name'].length, 8);
            }
        } else {
            this.kwargs['name'] = name;
        }
        this.kwargs['name'] = this.kwargs['name'].toUpperCase();
        this.kwargs['uuaa'] = this.kwargs['name'].substring(0,4);
        // Valor de la UUAA
        if (typeof kwargs['uuaa'] != 'undefined') {
            this.kwargs['uuaa'] = kwargs['uuaa'];

            if (this.kwargs['uuaa'].length < 4) {
                this.kwargs['uuaa'] = kwargs['uuaa'] + 'uuaa'.substring(this.kwargs['uuaa'].length, 4);
            }
        }
        this.kwargs['uuaa'] = this.kwargs['uuaa'].toUpperCase();

        type = (this.kwargs['type'] == 'programa'?this.control_UUAA(1)
                  :(this.kwargs['type'] == 'jcl'     ?'J'
                  :(this.kwargs['type'] == 'boleta'  ?'P'
                  :'#')));
        this.kwargs['name'] = this.kwargs['name'].replaceAt(4, this.control_UUAA(1));
        this.kwargs['namerand'] = this.kwargs['uuaa'] + type + rand;
        this.kwargs['copy'] = (this.control_UUAA(5)).replace('UUAA', this.kwargs['uuaa']);
        // Final de la JCL
        if (typeof kwargs['ejcl'] != 'undefined') {
            this.kwargs['ejcl'] = kwargs['ejcl'];
        } else {
            this.kwargs['ejcl'] = '000';
        }

        this.kwargs['namerand'] = this.kwargs['namerand'].replaceAt(5, this.kwargs['ejcl']);
        // Descripcion del elemento
        if (typeof kwargs['desc'] != 'undefined') {
            this.kwargs['desc'] = this.adjust_text(kwargs['desc']);
        } else {
            this.kwargs['desc'] = '';
        }

        if (typeof kwargs['descjcl'] != 'undefined') {
            this.kwargs['descjcl'] = this.adjust_text(kwargs['descjcl']);
        } else {
            this.kwargs['descjcl'] = '';
        }
        // Subtipo de programa
        if (typeof kwargs['subpgm'] != 'undefined') {
            this.kwargs['subpgm'] = kwargs['subpgm'];
        } else {
            this.kwargs['subpgm'] = 'batch';
        }
        // Indica el circuito del programa
        var circuit = {'TC' : ['TC02', 'BLIJDS0E', 'DDNOONLE', 'DS0E']
            , 'CR' : ['CR01', 'BLIJDS0B', 'DDNOONLC', 'DS0B']};

        if (typeof kwargs['subjcl'] != 'undefined') {
            this.kwargs['subjcl'] = circuit[kwargs['subjcl']];
        } else {
            this.kwargs['subjcl'] = circuit['TC'];
        }
        // Subtipo de programas que no tengan ficheros
        if (typeof kwargs['subrut'] != 'undefined') {
            this.kwargs['subrut'] = kwargs['subrut'];
        } else {
            this.kwargs['subrut'] = '';
            if (this.kwargs['subpgm'] == 'nobatch') {
                this.kwargs['subrut'] = 'rut';
            }
        }
        // Final de la copy
        if (this.kwargs['subrut'] == 'cpy') {
            if (typeof kwargs['ecpy'] != 'undefined') {
                this.kwargs['ecpy'] = kwargs['ecpy'];
            } else {
                this.kwargs['ecpy'] = '000';
            }
        } else {
            this.kwargs['ecpy'] = '000';
        }

        this.kwargs['copy'] = this.kwargs['copy'].replaceAt(5, this.kwargs['ecpy']);
        // Fich. entrada
        if (typeof kwargs['fe']['id'] != 'undefined') {
            this.kwargs['fe']['id'] = parseInt(kwargs['fe']['id'], 10);
        } else {
            this.kwargs['fe']['id'] = 0;
        }

        // Tipo de cruce '', 'A', '11', 'N1', '1N', 'NM', 'MN', '111'
        if (typeof kwargs['join'] != 'undefined') {
            this.kwargs['join'] = kwargs['join'];

            if (this.kwargs['join'] != '') {
                if (('11|N1|1N|NM|MN|').indexOf(this.kwargs['join']) >= 0) {
                    if (this.kwargs['fe']['id'] < 2) {
                        this.kwargs['fe']['id'] = 2;
                    }
                } else if (('111|').indexOf(this.kwargs['join']) >= 0) {
                    if (this.kwargs['fe']['id'] < 3) {
                        this.kwargs['fe']['id'] = 3;
                    }
                } else if (('A|').indexOf(this.kwargs['join']) >= 0) {
                    if (this.kwargs['fe']['id'] < 1) {
                        this.kwargs['fe']['id'] = 1;
                    }
                }
            }
        } else {
             this.kwargs['join'] = '';
        }

        // Fich. entrada informacion
        for (var i = 0; i <= parseInt(this.kwargs['fe']['id']); i++) {

            if (typeof kwargs['fe']['desc'][i] != 'undefined') {
                this.kwargs['fe']['desc'][i] = kwargs['fe']['desc'][i];
            } else {
                this.kwargs['fe']['desc'][i] = '';
            }

            if (typeof kwargs['fe']['leng'][i] != 'undefined') {
                this.kwargs['fe']['leng'][i] = kwargs['fe']['leng'][i];
            } else {
                this.kwargs['fe']['leng'][i] = '0';
            }

            if (typeof kwargs['fe']['copy'][i] != 'undefined') {
                this.kwargs['fe']['copy'][i] = kwargs['fe']['copy'][i];

                if (this.kwargs['fe']['copy'][i] == '') {
                    this.kwargs['fe']['copy'][i] = this.control_UUAA(5);
                }
            } else {
                this.kwargs['fe']['copy'][i] = this.control_UUAA(5);
            }

            if (typeof kwargs['fe']['vf'][i] != 'undefined') {
                this.kwargs['fe']['vf'][i] = kwargs['fe']['vf'][i];
            } else {
                this.kwargs['fe']['vf'][i] = 'off';
            }
        }
        // Fich. salida
        if (typeof kwargs['fs']['id'] != 'undefined') {
            this.kwargs['fs']['id'] = parseInt(kwargs['fs']['id'], 10);
        } else {
            this.kwargs['fs']['id'] = 0;
        }

        for (var i = 0; i <= parseInt(this.kwargs['fs']['id']); i++) {

            if (typeof kwargs['fs']['desc'][i] != 'undefined') {
                this.kwargs['fs']['desc'][i] = kwargs['fs']['desc'][i];
            } else {
                this.kwargs['fs']['desc'][i] = '';
            }

            if (typeof kwargs['fs']['leng'][i] != 'undefined') {
                this.kwargs['fs']['leng'][i] = kwargs['fs']['leng'][i];
            } else {
                this.kwargs['fs']['leng'][i] = '0';
            }

            if (typeof kwargs['fs']['copy'][i] != 'undefined') {
                this.kwargs['fs']['copy'][i] = kwargs['fs']['copy'][i];
            } else {
                this.kwargs['fs']['copy'][i] = this.control_UUAA(5);
            }
        }
        // Tablas programa
        var table_r = 'T' + this.kwargs['uuaa'] + '###';

        if (typeof kwargs['nameTable'] != 'undefined') {
            this.kwargs['nameTable'] = kwargs['nameTable'];

            if (this.kwargs['nameTable'].length < 8) {
                this.kwargs['nameTable'] = kwargs['nameTable'] + table_r.substring(this.kwargs['nameTable'].length, 8);
            }
        } else {
            this.kwargs['nameTable'] = table_r;
        }
        this.kwargs['nameTable'] = this.kwargs['nameTable'].toUpperCase();

        if (this.kwargs['uuaa'] == 'UUAA') {
            this.kwargs['uuaa'] = this.kwargs['nameTable'].substring(1,5);
            this.kwargs['name'] = this.kwargs['nameTable'].substring(1,5) + name.substring(4, 8);
            type = (this.kwargs['type'] == 'programa'?this.control_UUAA(1)
                      :(this.kwargs['type'] == 'jcl'     ?'J'
                      :(this.kwargs['type'] == 'boleta'  ?'P'
                      :'#')));
            this.kwargs['name'] = this.kwargs['name'].replaceAt(4, this.control_UUAA(1));
            this.kwargs['namerand'] = this.kwargs['name'].substring(0,4) + type + rand;
        }

        // Tablas JCL
        var table_j = 'TUUAA000';
        if (typeof kwargs['unloadtable'] != 'undefined') {
            this.kwargs['unloadtable'] = kwargs['unloadtable'];

            if (this.kwargs['unloadtable'].length < 8) {
                this.kwargs['unloadtable'] = kwargs['unloadtable'] + table_j.substring(this.kwargs['unloadtable'].length, 8);
            }

            if (this.kwargs['unloadtable'] == table_j) {
                this.kwargs['unloadtable'] = '';
            }
        } else {
            this.kwargs['unloadtable'] = '';
        }
        this.kwargs['unloadtable'] = this.kwargs['unloadtable'].toUpperCase();
        this.kwargs['table_keygen'] = 'copy';
        if (typeof table_keygen[this.kwargs['unloadtable']] != 'undefined') {
            this.kwargs['table_keygen'] = table_keygen[this.kwargs['unloadtable']];

            var len_words = 0;
            var line = 40;
            var out = '';

            var out_array = this.kwargs['table_keygen'].split(',');

            if (out_array.length > 1) {
                out_array.forEach(function(word) {
                    var len_word = word.length;
                    len_words += (len_word + 1);

                    if (len_words >= line) {
                        out += '\n' + '               ';
                        len_words = len_word;
                        line = 40;
                    }

                    out += word + ',';
                }, this);
            } else {
                out = '';
            }

            this.kwargs['table_keygen'] = out.substring(0, out.length - 1);
        }

        this.kwargs['table_lib'] = '000';
        if (typeof lib_uuaa[this.kwargs['unloadtable'].substring(1, 5)] != 'undefined') {
            this.kwargs['table_lib'] = lib_uuaa[this.kwargs['unloadtable'].substring(1, 5)];
        }

        // Sistema de consulta
        var i = 0;
        this.kwargs['select'] = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];

        if (kwargs['select'] && this.kwargs['subpgm'] != 'batch') {
            this.kwargs['select'][i++] = '\n* 40 - BUSCAR UN REGISTRO'
            this.kwargs['select'][i++] = '\n    05 CTA-200004-S           PIC X(08) VALUE \'200004-S\'.';
            this.kwargs['select'][i++] = '\n    05 CTN-40                 PIC 9(02) VALUE 40.';
            this.kwargs['select'][i++] = ''
                + '\n          WHEN CTN-40'
                + '\n              PERFORM 200004-SELECT';
            this.kwargs['select'][i++] = ''
                + '\n*'
                + '\n******************************************************************'
                + '\n* 200004-SELECT'
                + '\n******************************************************************'
                + '\n 200004-SELECT.'
                + '\n*'
                + '\n     PERFORM 400000-INFORMAR-DCLGEN'
                + '\n*'
                + '\n     EXEC SQL'
                + '\n        SELECT COD_CAMP000'
                + '\n             , [...]'
                + '\n         INTO   :' + this.kwargs['nameTable'].substring(5,9) + '-COD-CAMP000'
                + '\n              , :[...]'
                + '\n          FROM ' + this.kwargs['nameTable']
                + '\n         WHERE {condicion de busqueda}'
                + '\n     END-EXEC'
                + '\n*'
                + '\n     EVALUATE SQLCODE'
                + '\n        WHEN CTN-DB2-OK'
                + '\n            PERFORM 500000-RETORNAR-CONSULTA'
                + '\n'
                + '\n        WHEN CTN-DB2-NO-EXISTE'
                + '\n            MOVE CTA-RUTINA-SIN-DATOS TO XTI-AVIERROR-QPIPCCAB'
                + '\n            MOVE CTN-01309200         TO WS-FILE-STATUS'
                + '\n            MOVE CTA-200004-S         TO WS-PARRAFO'
                + '\n            MOVE CTA-' + this.kwargs['nameTable'] + '         TO WS-TABLA'
                + '\n            MOVE CTA-SELECT           TO WS-ACCESO'
                + '\n            MOVE SQLCODE              TO QNU-SQLCODE-ERR-QPIPCCAB'
                + '\n'
                + '\n            PERFORM 999999-FIN-ERROR'
                + '\n        WHEN OTHER'
                + '\n            MOVE CTA-RUTINA-ERROR-GRAVE TO XTI-AVIERROR-QPIPCCAB'
                + '\n            MOVE CTN-01309201         TO WS-FILE-STATUS'
                + '\n            MOVE CTA-200004-S         TO WS-PARRAFO'
                + '\n            MOVE CTA-' + this.kwargs['nameTable'] + '         TO WS-TABLA'
                + '\n            MOVE CTA-SELECT           TO WS-ACCESO'
                + '\n            MOVE SQLCODE              TO QNU-SQLCODE-ERR-QPIPCCAB'
                + '\n'
                + '\n            PERFORM 999999-FIN-ERROR'
                + '\n     END-EVALUATE'
                + '\n     .';
        }
        // Sistema de insercion
        var i = 0;
        this.kwargs['insert'] = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];

        if (kwargs['insert'] && this.kwargs['subpgm'] != 'batch') {
            this.kwargs['insert'][i++] = '\n* 10 - ALTA DE REGISTROS';
            this.kwargs['insert'][i++] = '\n    05 CTA-200001-I           PIC X(08) VALUE \'200001-I\'.';
            this.kwargs['insert'][i++] = '\n    05 CTN-10                 PIC 9(02) VALUE 10.';
            this.kwargs['insert'][i++] = ''
                + '\n          WHEN CTN-10'
                + '\n              PERFORM 200001-INSERT';
            this.kwargs['insert'][i++] = ''
                + '\n*'
                + '\n******************************************************************'
                + '\n* 200001-INSERT'
                + '\n******************************************************************'
                + '\n 200001-INSERT.'
                + '\n*'
                + '\n     PERFORM 400000-INFORMAR-DCLGEN'
                + '\n*'
                + '\n     EXEC SQL'
                + '\n        INSERT INTO ' + this.kwargs['nameTable']
                + '\n            (  COD_CAMP000'
                + '\n            ,  AUD_USUARIO'
                + '\n            ,  AUD_TIMFMOD'
                + '\n            , [...])'
                + '\n      VALUE ( :' + this.kwargs['nameTable'].substring(5,9) + '-COD-CAMP000'
                + '\n            , :CTA-' + this.kwargs['name']
                + '\n            , CURRENT TIMESTAMP'
                + '\n            , :[...])'
                + '\n     END-EXEC'
                + '\n*'
                + '\n     EVALUATE SQLCODE'
                + '\n        WHEN CTN-DB2-OK'
                + '\n            CONTINUE'
                + '\n'
                + '\n        WHEN CTN-DB2-YA-EXISTE'
                + '\n            MOVE CTA-RUTINA-DUPLICADO TO XTI-AVIERROR-QPIPCCAB'
                + '\n            MOVE CTN-00022002         TO WS-FILE-STATUS'
                + '\n            MOVE CTA-200001-I         TO WS-PARRAFO'
                + '\n            MOVE CTA-' + this.kwargs['nameTable'] + '         TO WS-TABLA'
                + '\n            MOVE CTA-INSERT           TO WS-ACCESO'
                + '\n            MOVE SQLCODE              TO QNU-SQLCODE-ERR-QPIPCCAB'
                + '\n'
                + '\n            PERFORM 999999-FIN-ERROR'
                + '\n        WHEN OTHER'
                + '\n            MOVE CTA-RUTINA-ERROR-GRAVE TO XTI-AVIERROR-QPIPCCAB'
                + '\n            MOVE CTN-01309201         TO WS-FILE-STATUS'
                + '\n            MOVE CTA-200001-I         TO WS-PARRAFO'
                + '\n            MOVE CTA-' + this.kwargs['nameTable'] + '         TO WS-TABLA'
                + '\n            MOVE CTA-INSERT           TO WS-ACCESO'
                + '\n            MOVE SQLCODE              TO QNU-SQLCODE-ERR-QPIPCCAB'
                + '\n'
                + '\n            PERFORM 999999-FIN-ERROR'
                + '\n     END-EVALUATE'
                + '\n     .';

        }
        // Sistema de borrado
        var i = 0;
        this.kwargs['delete'] = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];

        if (kwargs['delete'] && this.kwargs['subpgm'] != 'batch') {
            this.kwargs['delete'][i++] = '\n* 20 - BAJA DE REGISTROS';
            this.kwargs['delete'][i++] = '\n    05 CTA-200002-D           PIC X(08) VALUE \'200002-D\'.';
            this.kwargs['delete'][i++] = '\n    05 CTN-20                 PIC 9(02) VALUE 20.';
            this.kwargs['delete'][i++] = ''
                + '\n          WHEN CTN-20'
                + '\n              PERFORM 200002-DELETE';
            this.kwargs['delete'][i++] = ''
                + '\n*'
                + '\n******************************************************************'
                + '\n* 200002-DELETE'
                + '\n******************************************************************'
                + '\n 200002-DELETE.'
                + '\n*'
                + '\n     PERFORM 400000-INFORMAR-DCLGEN'
                + '\n*'
                + '\n     EXEC SQL'
                + '\n        DELETE FROM ' + this.kwargs['nameTable']
                + '\n            WHERE {condicion de busqueda}'
                + '\n     END-EXEC'
                + '\n*'
                + '\n     EVALUATE SQLCODE'
                + '\n        WHEN CTN-DB2-OK'
                + '\n            CONTINUE'
                + '\n'
                + '\n        WHEN CTN-DB2-NO-EXISTE'
                + '\n            MOVE CTA-RUTINA-SIN-DATOS TO XTI-AVIERROR-QPIPCCAB'
                + '\n            MOVE CTN-01309200         TO WS-FILE-STATUS'
                + '\n            MOVE CTA-200002-D         TO WS-PARRAFO'
                + '\n            MOVE CTA-' + this.kwargs['nameTable'] + '         TO WS-TABLA'
                + '\n            MOVE CTA-DELETE           TO WS-ACCESO'
                + '\n            MOVE SQLCODE              TO QNU-SQLCODE-ERR-QPIPCCAB'
                + '\n'
                + '\n            PERFORM 999999-FIN-ERROR'
                + '\n        WHEN OTHER'
                + '\n            MOVE CTA-RUTINA-ERROR-GRAVE TO XTI-AVIERROR-QPIPCCAB'
                + '\n            MOVE CTN-01309201         TO WS-FILE-STATUS'
                + '\n            MOVE CTA-200002-D         TO WS-PARRAFO'
                + '\n            MOVE CTA-' + this.kwargs['nameTable'] + '         TO WS-TABLA'
                + '\n            MOVE CTA-DELETE           TO WS-ACCESO'
                + '\n            MOVE SQLCODE              TO QNU-SQLCODE-ERR-QPIPCCAB'
                + '\n'
                + '\n            PERFORM 999999-FIN-ERROR'
                + '\n     END-EVALUATE'
                + '\n     .';
        }
        // Sistema de actualizar
        var i = 0;
        this.kwargs['update'] = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];

        if (kwargs['update'] && this.kwargs['subpgm'] != 'batch') {
            this.kwargs['update'][i++] = '\n* 30 - MODIFICACION DE REGISTROS';
            this.kwargs['update'][i++] = '\n    05 CTA-200003-U           PIC X(08) VALUE \'200003-U\'.';
            this.kwargs['update'][i++] = '\n    05 CTN-30                 PIC 9(02) VALUE 30.';
            this.kwargs['update'][i++] = ''
                + '\n          WHEN CTN-30'
                + '\n              PERFORM 200003-UPDATE';
            this.kwargs['update'][i++] = ''
                + '\n*'
                + '\n******************************************************************'
                + '\n* 200003-UPDATE'
                + '\n******************************************************************'
                + '\n 200003-UPDATE.'
                + '\n*'
                + '\n     PERFORM 400000-INFORMAR-DCLGEN'
                + '\n*'
                + '\n     EXEC SQL'
                + '\n        UPDATE ' + this.kwargs['nameTable']
                + '\n           SET COD_CAMP000 = :' + this.kwargs['nameTable'].substring(5,9) + '-COD-CAMP000'
                + '\n             , AUD_USUARIO = :CTA-' + this.kwargs['name']
                + '\n             , AUD_TIMFMOD = CURRENT TIMESTAMP'
                + '\n             , [...] = :[...]'
                + '\n            WHERE {condicion de busqueda}'
                + '\n     END-EXEC'
                + '\n*'
                + '\n     EVALUATE SQLCODE'
                + '\n        WHEN CTN-DB2-OK'
                + '\n            CONTINUE'
                + '\n'
                + '\n        WHEN CTN-DB2-NO-EXISTE'
                + '\n            MOVE CTA-RUTINA-SIN-DATOS TO XTI-AVIERROR-QPIPCCAB'
                + '\n            MOVE CTN-01309200         TO WS-FILE-STATUS'
                + '\n            MOVE CTA-200003-U         TO WS-PARRAFO'
                + '\n            MOVE CTA-' + this.kwargs['nameTable'] + '         TO WS-TABLA'
                + '\n            MOVE CTA-UPDATE           TO WS-ACCESO'
                + '\n            MOVE SQLCODE              TO QNU-SQLCODE-ERR-QPIPCCAB'
                + '\n'
                + '\n            PERFORM 999999-FIN-ERROR'
                + '\n        WHEN OTHER'
                + '\n            MOVE CTA-RUTINA-ERROR-GRAVE TO XTI-AVIERROR-QPIPCCAB'
                + '\n            MOVE CTN-01309201         TO WS-FILE-STATUS'
                + '\n            MOVE CTA-200003-U         TO WS-PARRAFO'
                + '\n            MOVE CTA-' + this.kwargs['nameTable'] + '         TO WS-TABLA'
                + '\n            MOVE CTA-UPDATE           TO WS-ACCESO'
                + '\n            MOVE SQLCODE              TO QNU-SQLCODE-ERR-QPIPCCAB'
                + '\n'
                + '\n            PERFORM 999999-FIN-ERROR'
                + '\n     END-EVALUATE'
                + '\n     .';
        }
        // Sistema de cursor
        var i = 0;
        this.kwargs['cursor'] = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];

        if (kwargs['cursor'] && this.kwargs['subpgm'] != 'batch') {
            this.kwargs['cursor'][i++] = '\n* 41 - BUSCAR UN LISTADO DE REGISTROS';
            this.kwargs['cursor'][i++] = ''
                + '\n    05 CTA-204101-O           PIC X(08) VALUE \'204101-O\'.'
                + '\n    05 CTA-204102-F           PIC X(08) VALUE \'204102-F\'.'
                + '\n    05 CTA-204103-C           PIC X(08) VALUE \'204103-C\'.';
            this.kwargs['cursor'][i++] = ''
                + '\n    05 CTN-41                 PIC 9(02) VALUE 41.'
                + '\n    05 CTN-51                 PIC 9(02) VALUE 51.';
            this.kwargs['cursor'][i++] = ''
                + '\n          WHEN CTN-41'
                + '\n              PERFORM 204100-CURSOR';
            this.kwargs['cursor'][i++] = ''
                + '\n*'
                + '\n******************************************************************'
                + '\n* 204100-CURSOR'
                + '\n******************************************************************'
                + '\n 204100-CURSOR.'
                + '\n*'
                + '\n     PERFORM 400000-INFORMAR-DCLGEN'
                + '\n*'
                + '\n     SET NO-FIN-CURSOR TO TRUE'
                + '\n'
                + '\n     IF QNU-FILAS-QPIPCCAB EQUAL ZEROES OR'
                + '\n            QNU-FILAS-QPIPCCAB GREATER CTN-51'
                + '\n'
                + '\n        MOVE CTN-51    TO QNU-FILAS-QPIPCCAB'
                + '\n     END-IF'
                + '\n'
                + '\n     IF XSN-PRIMERO-QPIPCCAB EQUAL CTA-S'
                + '\n*--'
                + '\n        CONTINUE'
                + '\n*--'
                + '\n     END-IF'
                + '\n'
                + '\n     PERFORM 204101-OPEN-CURSOR'
                + '\n'
                + '\n     IF SQLCODE EQUAL CTN-DB2-OK'
                + '\n        PERFORM 204102-FETCH-CURSOR'
                + '\n          UNTIL WS-IND EQUAL QNU-FILAS-QPIPCCAB'
                + '\n             OR SI-FIN-CURSOR'
                + '\n     END-IF'
                + '\n'
                + '\n     PERFORM 204103-CLOSE-CURSOR'
                + '\n'
                + '\n     MOVE SW-FIN-CURSOR TO XSN-MASDATOS-QPIPCCAB'
                + '\n     MOVE WS-IND        TO QNU-FILENV-QPIPCCAB'
                + '\n*'
                + '\n     .'
                + '\n*'
                + '\n******************************************************************'
                + '\n* 204101-OPEN-CURSOR'
                + '\n******************************************************************'
                + '\n 204101-OPEN-CURSOR.'
                + '\n*'
                + '\n     EXEC SQL'
                + '\n         OPEN ########'
                + '\n     END-EXEC'
                + '\n*'
                + '\n     EVALUATE SQLCODE'
                + '\n        WHEN CTN-DB2-OK'
                + '\n            CONTINUE'
                + '\n'
                + '\n        WHEN OTHER'
                + '\n            MOVE CTA-RUTINA-ERROR-GRAVE TO XTI-AVIERROR-QPIPCCAB'
                + '\n            MOVE CTN-01309201         TO WS-FILE-STATUS'
                + '\n            MOVE CTA-204101-O         TO WS-PARRAFO'
                + '\n            MOVE CTA-' + this.kwargs['nameTable'] + '         TO WS-TABLA'
                + '\n            MOVE CTA-OPEN             TO WS-ACCESO'
                + '\n            MOVE SQLCODE              TO QNU-SQLCODE-ERR-QPIPCCAB'
                + '\n'
                + '\n            PERFORM 999999-FIN-ERROR'
                + '\n     END-EVALUATE'
                + '\n     .'
                + '\n*'
                + '\n******************************************************************'
                + '\n* 204102-FETCH-CURSOR'
                + '\n******************************************************************'
                + '\n 204102-FETCH-CURSOR.'
                + '\n*'
                + '\n     EXEC SQL'
                + '\n        FETCH ########'
                + '\n         INTO   :' + this.kwargs['nameTable'].substring(5,9) + '-COD-CAMP000'
                + '\n              , :[...]'
                + '\n     END-EXEC'
                + '\n*'
                + '\n     EVALUATE SQLCODE'
                + '\n        WHEN CTN-DB2-OK'
                + '\n            PERFORM 500000-RETORNAR-CONSULTA'
                + '\n'
                + '\n        WHEN CTN-DB2-NO-EXISTE'
                + '\n            SET SI-FIN-CURSOR TO TRUE'
                + '\n'
                + '\n            IF WS-IND EQUAL ZEROS'
                + '\n                MOVE CTA-RUTINA-SIN-DATOS TO XTI-AVIERROR-QPIPCCAB'
                + '\n                MOVE CTN-01309200     TO WS-FILE-STATUS'
                + '\n                MOVE CTA-204102-F     TO WS-PARRAFO'
                + '\n                MOVE CTA-' + this.kwargs['nameTable'] + '     TO WS-TABLA'
                + '\n                MOVE CTA-FETCH        TO WS-ACCESO'
                + '\n                MOVE SQLCODE          TO QNU-SQLCODE-ERR-QPIPCCAB'
                + '\n            END-IF'
                + '\n'
                + '\n        WHEN OTHER'
                + '\n            MOVE CTA-RUTINA-ERROR-GRAVE TO XTI-AVIERROR-QPIPCCAB'
                + '\n            MOVE CTN-01309201         TO WS-FILE-STATUS'
                + '\n            MOVE CTA-204102-F         TO WS-PARRAFO'
                + '\n            MOVE CTA-' + this.kwargs['nameTable'] + '         TO WS-TABLA'
                + '\n            MOVE CTA-FETCH            TO WS-ACCESO'
                + '\n            MOVE SQLCODE              TO QNU-SQLCODE-ERR-QPIPCCAB'
                + '\n'
                + '\n            PERFORM 999999-FIN-ERROR'
                + '\n     END-EVALUATE'
                + '\n     .'
                + '\n*'
                + '\n******************************************************************'
                + '\n* 204103-CLOSE-CURSOR'
                + '\n******************************************************************'
                + '\n 204103-CLOSE-CURSOR.'
                + '\n*'
                + '\n     EXEC SQL'
                + '\n         CLOSE ########'
                + '\n     END-EXEC'
                + '\n*'
                + '\n     EVALUATE SQLCODE'
                + '\n        WHEN CTN-DB2-OK'
                + '\n            CONTINUE'
                + '\n'
                + '\n        WHEN OTHER'
                + '\n            MOVE CTA-RUTINA-ERROR-GRAVE TO XTI-AVIERROR-QPIPCCAB'
                + '\n            MOVE CTN-01309201         TO WS-FILE-STATUS'
                + '\n            MOVE CTA-204103-C         TO WS-PARRAFO'
                + '\n            MOVE CTA-' + this.kwargs['nameTable'] + '         TO WS-TABLA'
                + '\n            MOVE CTA-CLOSE            TO WS-ACCESO'
                + '\n            MOVE SQLCODE              TO QNU-SQLCODE-ERR-QPIPCCAB'
                + '\n'
                + '\n            PERFORM 999999-FIN-ERROR'
                + '\n     END-EVALUATE'
                + '\n     .';
            this.kwargs['cursor'][i++] = ''
                + '\n'
                + '\n     EXEC SQL'
                + '\n        DECLARE ######## CURSOR FOR'
                + '\n        SELECT COD_CAMP000'
                + '\n             , [...]'
                + '\n          FROM ' + this.kwargs['nameTable']
                + '\n         WHERE {condicion de busqueda}'
                + '\n        FETCH FIRST 51 ROWS ONLY'
                + '\n     END-EXEC.';
        }

        // Control de rearranque
        var i = 0;
        this.kwargs['restart'] = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];

        if (kwargs['restart'] && this.kwargs['subpgm'] == 'batchDB2') {
            if (this.kwargs['fe']['id'] < 2) {
                this.kwargs['fe']['id'] = 2;
            }
            if (this.kwargs['fs']['id'] < 1) {
                this.kwargs['fs']['id'] = 1;
            }

            this.kwargs['fe']['desc'][1] = 'CONTROL ENTRADA';
            this.kwargs['fs']['desc'][0] = 'CONTROL SALIDA';

            this.kwargs['fe']['leng'][1] = 0;
            this.kwargs['fs']['leng'][0] = 0;

            this.kwargs['fe']['copy'][1] = this.control_UUAA(5);
            this.kwargs['fs']['copy'][0] = this.control_UUAA(5);

            this.kwargs['restart'][i++] = ''
                + '\n*'
                + '\n    05 C-REG-COMMIT           PIC S9(09).';
            this.kwargs['restart'][i++] = ''
                + '\n*'
                + '\n    05 CTN-MAX-COMMIT         PIC 9(09) VALUE 10.'
            this.kwargs['restart'][i++] = ''
                + '\n     PERFORM 500000-LEER-F{c1}{##e}02E'
                + '\n       UNTIL SI-FIN-F{c1}{##e}02E'
                + '\n     PERFORM 500000-LEER-F{c1}{##e}01E'
                + '\n       UNTIL WS-C02E LESS WS-C01E'
                + '\n         AND SI-FIN-F{c1}{##e}01E';

            this.kwargs['restart'][i++] = ''
                + '\n*'
                + '\n     ADD CTN-1          TO C-REG-COMMIT'
                + '\n'
                + '\n     IF C-REG-COMMIT EQUAL CTN-MAX-COMMIT'
                + '\n'
                + '\n        PERFORM 710000-COMMIT'
                + '\n'
                + '\n        PERFORM 600000-ESCRIBIR-F{c1}{##e}01S'
                + '\n        MOVE ZEROS      TO C-REG-COMMIT'
                + '\n     END-IF';
            this.kwargs['restart'][i++] = ''
                + '\n*'
                + '\n******************************************************************'
                + '\n* 700000-ROLLBACK'
                + '\n******************************************************************'
                + '\n 700000-ROLLBACK.'
                + '\n*'
                + '\n     EXEC SQL'
                + '\n        ROLLBACK'
                + '\n     END-EXEC'
                + '\n*'
                + '\n     EVALUATE SQLCODE'
                + '\n        WHEN CTN-DB2-OK'
                + '\n            CONTINUE'
                + '\n'
                + '\n        WHEN OTHER'
                + '\n            MOVE CTA-F                TO XTI-AVIERROR-QPIPCCAB'
                + '\n            MOVE CTN-00167026         TO WS-FILE-STATUS'
                + '\n            MOVE CTA-700000-R         TO WS-PARRAFO'
                + '\n            MOVE CTA-ROLLBACK         TO WS-TABLA'
                + '\n            MOVE CTA-ROLLBACK         TO WS-ACCESO'
                + '\n            MOVE SQLCODE              TO QNU-SQLCODE-ERR-QPIPCCAB'
                + '\n'
                + '\n            PERFORM 999999-FIN-ERROR'
                + '\n     END-EVALUATE'
                + '\n     .'
                + '\n*'
                + '\n******************************************************************'
                + '\n* 710000-COMMIT'
                + '\n******************************************************************'
                + '\n 710000-COMMIT.'
                + '\n*'
                + '\n     EXEC SQL'
                + '\n        COMMIT'
                + '\n     END-EXEC'
                + '\n*'
                + '\n     EVALUATE SQLCODE'
                + '\n        WHEN CTN-DB2-OK'
                + '\n            CONTINUE'
                + '\n'
                + '\n        WHEN OTHER'
                + '\n            MOVE CTA-F                TO XTI-AVIERROR-QPIPCCAB'
                + '\n            MOVE CTN-00167026         TO WS-FILE-STATUS'
                + '\n            MOVE CTA-710000-C         TO WS-PARRAFO'
                + '\n            MOVE CTA-COMMIT           TO WS-TABLA'
                + '\n            MOVE CTA-COMMIT           TO WS-ACCESO'
                + '\n            MOVE SQLCODE              TO QNU-SQLCODE-ERR-QPIPCCAB'
                + '\n'
                + '\n            PERFORM 999999-FIN-ERROR'
                + '\n     END-EVALUATE'
                + '\n     .';
        }

        this.common_functions_programa();
        this.common_functions_jcl();
        //********************************************************************************
        //********************************************************************************
    }
/* Funciones comunes de los programas */
    common_functions_programa() {
        // Pasar de cadena de numero y de numero a cadena
        var i = 0;
        this.kwargs['tonumber'] = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];

        if (kwargs['tonumber']) {
            this.kwargs['tonumber'][i++] = ''
                + '\n    05 WS-STRING                     PIC X(31) JUST RIGHT.'
                + '\n    05 WS-EDITED                     PIC -Z(19)9(01),9(09).'
                + '\n    05 WS-EDITEC REDEFINES WS-EDITED PIC X(31).'
                + '\n    05 WS-EDITEP REDEFINES WS-EDITEC PIC -Z(19)9(01).9(09).';
            this.kwargs['tonumber'][i++] = ''
                + '\n*'
                + '\n******************************************************************'
                + '\n* 899999-TO-NUMBER'
                + '\n******************************************************************'
                + '\n  899999-TO-NUMBER.'
                + '\n*'
                + '\n*    MOVE [....]                             TO WS-STRING'
                + '\n     MOVE CTN-1                              TO WS-NUMBER'
                + '\n     MOVE ZEROS                              TO WS-IND'
                + '\n*'
                + '\n     INSPECT WS-STRING TALLYING WS-IND FOR ALL \'-\''
                + '\n                       REPLACING FIRST \'-\'   BY ZERO'
                + '\n'
                + '\n     INSPECT WS-STRING CONVERTING SPACE      TO ZERO'
                + '\n     INSPECT WS-STRING CONVERTING LOW-VALUE  TO ZERO'
                + '\n     INSPECT WS-STRING CONVERTING HIGH-VALUE TO ZERO'
                + '\n     INSPECT WS-STRING CONVERTING \'.\'        TO \',\''
                + '\n     INSPECT WS-STRING(31:) CONVERTING \'{ABCDEFGHI}JKLMNOPQR\''
                + '\n                               TO \'01234567890123456789\''
                + '\n     IF WS-IND EQUAL CTN-1'
                + '\n        COMPUTE WS-NUMBER = CTN-N1'
                + '\n     END-IF'
                + '\n*'
                + '\n     COMPUTE WS-NUMBER = '
                + '\n         (WS-NUMBER * FUNCTION NUMVAL-C(WS-STRING))'
                + '\n*'
                + '\n     MOVE SPACES                         TO WS-STRING'
                + '\n*    MOVE WS-NUMBER                      TO [....]'
                + '\n     .'
                + '\n*'
                + '\n******************************************************************'
                + '\n* 899999-TO-STRING'
                + '\n*-----------------------------------------------------------------'
                + '\n* SE PUEDE PASAR A CUALQUIER FORMATO DE EDITADO SI SE JUEGA CON '
                + '\n* LAS SUBCADENAS DE COBOL, ES DECIR CON (#:#).'
                + '\n******************************************************************'
                + '\n 899999-TO-STRING.'
                + '\n*'
                + '\n*    MOVE [....]                         TO WS-EDITED'
                + '\n     INSPECT WS-EDITEC CONVERTING \',\'    TO \'.\''
                + '\n*    MOVE WS-EDITEP                      TO [....]'
                + '\n     .';
        }

        // Incluir llamada a la rutina
        var i = 0;
        this.kwargs['rutina'] = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];

        if (kwargs['rutina']) {
            this.kwargs['rutina'][i++] = ''
                + '\n*'
                + '\n******************************************************************'
                + '\n* 800000-rutina'
                + '\n******************************************************************'
                + '\n 800000-rutina.'
                + '\n*'
                + '\n     INITIALIZE RETORNO-QPIPCCAB'
                + '\n                C000-' + this.kwargs['copy']
                + '\n*'
                + '\n*    [...]'
                + '\n*'
                + '\n     CALL CTA-' + this.kwargs['uuaa'] + 'R000 USING R-QPIPCCAB C000-' + this.kwargs['copy']
                + '\n*'
                + '\n     IF XTI-AVIERROR-QPIPCCAB NOT EQUAL SPACES'
                + '\n        PERFORM 999999-FIN-ERROR'
                + '\n     END-IF'
                + '\n     .';
        }

        // Calcular la diferencia entre 2 fechas
        var i = 0;
        this.kwargs['qpiprx35'] = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];

        if (kwargs['qpiprx35']) {
            this.kwargs['qpiprx35'][i++] = ''
                + '\n    05 CTA-QPIPRX35           PIC X(08) VALUE \'QPIPRX35\'.';
            this.kwargs['qpiprx35'][i++] = ''
                + '\n    05 CTN-5                  PIC S9(1) VALUE 5.'
                + '\n    05 CTN-6                  PIC S9(1) VALUE 6.';
            this.kwargs['qpiprx35'][i++] = ''
                + '\n    05 WS-DE-DIFERENCIA.'
                + '\n        10 WS-AAAA            PIC 9(09).'
                + '\n        10 WS-MM              PIC 9(09).'
                + '\n        10 WS-DD              PIC 9(09).'
                + '\n    05 WS-X08-ENTRADA1.'
                + '\n        10 WS-AAAA            PIC 9(04).'
                + '\n        10 WS-MM              PIC 9(02).'
                + '\n        10 WS-DD              PIC 9(02).'
                + '\n    05 WS-X08-ENTRADA2.'
                + '\n        10 WS-AAAA            PIC 9(04).'
                + '\n        10 WS-MM              PIC 9(02).'
                + '\n        10 WS-DD              PIC 9(02).';
            this.kwargs['qpiprx35'][i++] = ''
                + '\n*'
                + '\n*-- COPY PARA LA DIFERENCIA ENTRE DOS FECHAS'
                + '\n COPY QPIPCX35.';
            this.kwargs['qpiprx35'][i++] = ''
                + '\n*'
                + '\n******************************************************************'
                + '\n* 800000-DIFERENCIA-FECHA'
                + '\n******************************************************************'
                + '\n 800000-DIFERENCIA-FECHA.'
                + '\n*'
                + '\n     INITIALIZE RETORNO-QPIPCCAB'
                + '\n                R-QPIPCX35'
                + '\n*'
                + '\n*    MOVE [...]                TO WS-X08-ENTRADA1'
                + '\n*    MOVE [...]                TO WS-X08-ENTRADA2'
                + '\n     MOVE WS-X08-ENTRADA1      TO FEC-ENTRADA1-QPIPCX35'
                + '\n     MOVE WS-X08-ENTRADA2      TO FEC-ENTRADA2-QPIPCX35'
                + '\n*'
                + '\n*-----'
                + '\n     MOVE CTN-4                TO COD-SERVICIO-QPIPCCAB'
                + '\n*'
                + '\n     CALL CTA-QPIPRX35 USING R-QPIPCCAB R-QPIPCX35'
                + '\n*'
                + '\n     IF XTI-AVIERROR-QPIPCCAB NOT EQUAL SPACES'
                + '\n        PERFORM 999999-FIN-ERROR'
                + '\n     END-IF'
                + '\n*'
                + '\n     MOVE QNU-ANIOS-QPIPCX35   TO WS-AAAA OF WS-DE-DIFERENCIA'
                + '\n*'
                + '\n*-----'
                + '\n     INITIALIZE RETORNO-QPIPCCAB'
                + '\n*'
                + '\n     MOVE CTN-5                TO COD-SERVICIO-QPIPCCAB'
                + '\n*'
                + '\n     CALL CTA-QPIPRX35 USING R-QPIPCCAB R-QPIPCX35'
                + '\n*'
                + '\n     IF XTI-AVIERROR-QPIPCCAB NOT EQUAL SPACES'
                + '\n        PERFORM 999999-FIN-ERROR'
                + '\n     END-IF'
                + '\n*'
                + '\n     MOVE QNU-DIAS-QPIPCX35    TO WS-DD   OF WS-DE-DIFERENCIA'
                + '\n*'
                + '\n*-----'
                + '\n     INITIALIZE RETORNO-QPIPCCAB'
                + '\n*'
                + '\n     MOVE CTN-6                TO COD-SERVICIO-QPIPCCAB'
                + '\n*'
                + '\n     CALL CTA-QPIPRX35 USING R-QPIPCCAB R-QPIPCX35'
                + '\n*'
                + '\n     IF XTI-AVIERROR-QPIPCCAB NOT EQUAL SPACES'
                + '\n        PERFORM 999999-FIN-ERROR'
                + '\n     END-IF'
                + '\n*'
                + '\n     MOVE QNU-MESES-QPIPCX35   TO WS-MM   OF WS-DE-DIFERENCIA'
                + '\n     .';
        }

        // Obtener la fecha de cierre de mes
        var i = 0;
        this.kwargs['qpiprx36'] = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];

        if (kwargs['qpiprx36']) {
            this.kwargs['qpiprx36'][i++] = ''
                + '\n    05 CTA-QPIPRX36           PIC X(08) VALUE \'QPIPRX36\'.';
            this.kwargs['qpiprx36'][i++] = ''
                + '\n    05 CTN-3                  PIC S9(1) VALUE 3.';
            this.kwargs['qpiprx36'][i++] = ''
                + '\n*'
                + '\n*-- COPY PARA EL CALCULO DE LA FECHA DE FIN DE MES'
                + '\n COPY QPIPCX36.';
            this.kwargs['qpiprx36'][i++] = ''
                + '\n*'
                + '\n******************************************************************'
                + '\n* 800000-FIN-MES-PREVIO'
                + '\n******************************************************************'
                + '\n 800000-FIN-MES-PREVIO.'
                + '\n*'
                + '\n     INITIALIZE RETORNO-QPIPCCAB'
                + '\n                R-QPIPCX36'
                + '\n*'
                + '\n*    MOVE [...]                        TO WS-X08-FECHA'
                + '\n     MOVE CTN-4                        TO COD-SERVICIO-QPIPCCAB'
                + '\n     MOVE WS-X08-FECHA                 TO FEC-ENTRADA-QPIPCX36'
                + '\n*'
                + '\n     CALL CTA-QPIPRX36 USING R-QPIPCCAB R-QPIPCX36'
                + '\n*'
                + '\n     IF XTI-AVIERROR-QPIPCCAB NOT EQUAL SPACES'
                + '\n        PERFORM 999999-FIN-ERROR'
                + '\n     END-IF'
                + '\n*'
                + '\n     MOVE FEC-MES-ANT-QPIPCX36         TO WS-X08-FECHA'
                + '\n     .'
                + '\n*'
                + '\n******************************************************************'
                + '\n* 800000-FIN-MES-ACTUAL'
                + '\n******************************************************************'
                + '\n 800000-FIN-MES-ACTUAL.'
                + '\n*'
                + '\n     INITIALIZE RETORNO-QPIPCCAB'
                + '\n                R-QPIPCX36'
                + '\n*'
                + '\n*    MOVE [...]                    TO WS-X08-FECHA'
                + '\n     MOVE CTN-3                    TO COD-SERVICIO-QPIPCCAB'
                + '\n     MOVE WS-X08-FECHA             TO FEC-ENTRADA-QPIPCX36'
                + '\n*'
                + '\n     CALL CTA-QPIPRX36 USING R-QPIPCCAB R-QPIPCX36'
                + '\n*'
                + '\n     IF XTI-AVIERROR-QPIPCCAB NOT EQUAL SPACES'
                + '\n        PERFORM 999999-FIN-ERROR'
                + '\n     END-IF'
                + '\n*'
                + '\n     MOVE QNU-DIAS-MES-QPIPCX36    TO WS-DD OF WS-X08-FECHA'
                + '\n     .';
        }

        // Sumar N a una fecha
        var i = 0;
        this.kwargs['qpiprx37'] = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];

        if (kwargs['qpiprx37']) {
            this.kwargs['qpiprx37'][i++] = ''
                + '\n    05 CTA-QPIPRX37           PIC X(08) VALUE \'QPIPRX37\'.';
            this.kwargs['qpiprx37'][i++] = ''
                + '\n    05 CTN-2                  PIC S9(1) VALUE 2.'
                + '\n    05 CTN-3                  PIC S9(1) VALUE 3.'
                + '\n    05 CTN-4                  PIC S9(1) VALUE 4.'
                + '\n    05 CTN-5                  PIC S9(1) VALUE 5.'
                + '\n    05 CTN-6                  PIC S9(1) VALUE 6.'
                + '\n    05 CTN-7                  PIC S9(1) VALUE 7.'
                + '\n    05 CTN-8                  PIC S9(1) VALUE 8.'
                + '\n    05 CTN-9                  PIC S9(1) VALUE 9.';
            this.kwargs['qpiprx37'][i++] = ''
                + '\n    05 WS-QNU-ANIOS           PIC S9(4).'
                + '\n    05 WS-QNU-MESES           PIC S9(9).'
                + '\n    05 WS-QNU-DIAS            PIC S9(9).';
            this.kwargs['qpiprx37'][i++] = ''
                + '\n*'
                + '\n*-- COPY PARA LA SUMAR A FECHAS'
                + '\n COPY QPIPCX37.';
            this.kwargs['qpiprx37'][i++] = ''
                + '\n*'
                + '\n******************************************************************'
                + '\n* 800000-SUMA-N-FECHA'
                + '\n*-----------------------------------------------------------------'
                + '\n* VALORES POSIBLES DE COD-SERVICIO'
                + '\n*'
                + '\n* 1 - SUMA/RESTA DE AÑOS'
                + '\n* 2 - SUMA/RESTA DE DÍAS'
                + '\n* 3 - SUMA/RESTA DE MESES'
                + '\n* 4 - SUMA/RESTA DE AÑOS  DEVOLVIENDO EL FIN DEL MES'
                + '\n* 5 - SUMA/RESTA DE AÑOS  DEVOLVIENDO EL DÍA 15 DEL MES'
                + '\n* 6 - SUMA/RESTA DE DÍAS  DEVOLVIENDO EL FIN DEL MES'
                + '\n* 7 - SUMA/RESTA DE DÍAS  DEVOLVIENDO EL DÍA 15 DEL MES'
                + '\n* 8 - SUMA/RESTA DE MESES DEVOLVIENDO EL FIN DEL MES'
                + '\n* 9 - SUMA/RESTA DE MESES DEVOLVIENDO EL DÍA 15 DEL MES'
                + '\n******************************************************************'
                + '\n 800000-SUMA-N-FECHA.'
                + '\n*'
                + '\n     INITIALIZE RETORNO-QPIPCCAB'
                + '\n                R-QPIPCX37'
                + '\n*'
                + '\n*    MOVE [...]                TO WS-X08-FECHA'
                + '\n*    MOVE [...]                TO WS-QNU-ANIOS'
                + '\n*    MOVE [...]                TO WS-QNU-MESES'
                + '\n*    MOVE [...]                TO WS-QNU-DIAS '
                + '\n     MOVE CTN-8                TO COD-SERVICIO-QPIPCCAB'
                + '\n     MOVE WS-X08-FECHA         TO FEC-ENTRADA-QPIPCX37'
                + '\n     MOVE WS-QNU-ANIOS         TO QNU-ANIOS-QPIPCX37'
                + '\n     MOVE WS-QNU-MESES         TO QNU-MESES-QPIPCX37'
                + '\n     MOVE WS-QNU-DIAS          TO QNU-DIAS-QPIPCX37'
                + '\n*'
                + '\n     CALL CTA-QPIPRX37 USING R-QPIPCCAB R-QPIPCX37'
                + '\n*'
                + '\n     IF XTI-AVIERROR-QPIPCCAB NOT EQUAL SPACES'
                + '\n        PERFORM 999999-FIN-ERROR'
                + '\n     END-IF'
                + '\n*'
                + '\n     MOVE FEC-SALIDA-QPIPCX37  TO WS-X08-FECHA'
                + '\n     .'
        }

        // Validar fechas
        var i = 0;
        this.kwargs['qpiprx38'] = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];

        if (kwargs['qpiprx38']) {
            this.kwargs['qpiprx38'][i++] = ''
                + '\n    05 CTA-QPIPRX38           PIC X(08) VALUE \'QPIPRX38\'.';
            this.kwargs['qpiprx38'][i++] = ''
                + '\n*'
                + '\n*-- COPY PARA LA VALIDACION DE LA FECHA'
                + '\n COPY QPIPCX38.';
            this.kwargs['qpiprx38'][i++] = ''
                + '\n*'
                + '\n******************************************************************'
                + '\n* 800000-VALIDA-FECHA'
                + '\n******************************************************************'
                + '\n 800000-VALIDA-FECHA.'
                + '\n*'
                + '\n     INITIALIZE RETORNO-QPIPCCAB'
                + '\n                R-QPIPCX38'
                + '\n*'
                + '\n*    MOVE [...]                        TO WS-X08-FECHA'
                + '\n     MOVE CTN-1                        TO COD-SERVICIO-QPIPCCAB'
                + '\n     MOVE WS-X08-FECHA                 TO FEC-ENTGREG-QPIPCX38'
                + '\n*'
                + '\n     CALL CTA-QPIPRX38 USING R-QPIPCCAB R-QPIPCX38'
                + '\n*'
                + '\n     IF XTI-AVIERROR-QPIPCCAB NOT EQUAL SPACES'
                + '\n*       PERFORM 999999-FIN-ERROR'
                + '\n     END-IF'
                + '\n     .';
        }

        // Cambiar la fechas a días
        var i = 0;
        this.kwargs['date_day'] = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];

        if (kwargs['date_day']) {
            this.kwargs['date_day'][i++] = ''
                + '\n*'
                + '\n    05 CTN-MAX-DD             PIC S9(20) VALUE 3067671.'
                + '\n    05 CTN-MAX-FEC            PIC 9(08)  VALUE 99991231.'
                + '\n    05 CTN-MIN-FEC            PIC 9(08)  VALUE 16001231.'
                + '\n    05 CTN-INI-FEC            PIC 9(08)  VALUE 00010101.'
                + '\n    05 CTN-11111111           PIC 9(08)  VALUE 11111111.'
                + '\n    05 CTN-11111112           PIC 9(08)  VALUE 11111112.';
            this.kwargs['date_day'][i++] = ''
                + '\n*'
                + '\n    05 WS-DIAS                PIC S9(20).'
                + '\n    05 WS-908-FECHA           PIC 9(08).';
            this.kwargs['date_day'][i++] = ''
                + '\n*'
                + '\n******************************************************************'
                + '\n* 800000-FECHA-DIAS'
                + '\n******************************************************************'
                + '\n 800000-FECHA-DIAS.'
                + '\n*'
                + '\n*    MOVE [...]                 TO WS-X10-FECHA'
                + '\n     MOVE ZEROS                 TO WS-DIAS'
                + '\n'
                + '\n     IF WS-X10-FECHA NOT EQUAL SPACES'
                + '\n        MOVE CORR WS-X10-FECHA  TO WS-X08-FECHA'
                + '\n'
                + '\n        IF (WS-X08-FECHA NOT EQUAL CTN-11111111 '
                + '\n                   AND CTN-11111112)'
                + '\n               AND (WS-X08-FECHA IS NUMERIC)'
                + '\n               AND (WS-X08-FECHA GREATER CTN-MIN-FEC)'
                + '\n'
                + '\n            MOVE WS-X08-FECHA   TO WS-908-FECHA'
                + '\n            COMPUTE WS-DIAS ='
                + '\n                         FUNCTION INTEGER-OF-DATE(WS-908-FECHA)'
                + '\n        END-IF'
                + '\n     END-IF'
                + '\n'
                + '\n*    MOVE WS-DIAS               TO [...]'
                + '\n     .'
                + '\n*'
                + '\n******************************************************************'
                + '\n* 800000-DIAS-FECHA'
                + '\n******************************************************************'
                + '\n 800000-DIAS-FECHA.'
                + '\n*'
                + '\n*    MOVE [...]                 TO WS-DIAS'
                + '\n'
                + '\n     IF WS-DIAS EQUAL ZEROS'
                + '\n        MOVE CTN-INI-FEC        TO WS-X08-FECHA'
                + '\n     ELSE'
                + '\n        IF WS-DIAS GREATER CTN-MAX-DD'
                + '\n            MOVE CTN-MAX-FEC    TO WS-X08-FECHA'
                + '\n        ELSE'
                + '\n            COMPUTE WS-908-FECHA ='
                + '\n                         FUNCTION DATE-OF-INTEGER(WS-DIAS)'
                + '\n            MOVE WS-908-FECHA   TO WS-X08-FECHA'
                + '\n        END-IF'
                + '\n     END-IF'
                + '\n'
                + '\n*    MOVE WS-X08-FECHA          TO [...]'
                + '\n     .';
        }

        // Troceador de cadenas de texto
        var i = 0;
        this.kwargs['chopped'] = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];

        if (kwargs['chopped']) {
            this.kwargs['chopped'][i++] = ''
                + '\n    05 WS-STARTING-POINT      PIC 9(0009).'
                + '\n    05 WS-LINEVALUE           PIC X(2500).'
                + '\n    05 WS-SET-CHAR            PIC X(0001).';
            this.kwargs['chopped'][i++] = ''
                + '\n 01 TABLA-TABLA.'
                + '\n*'
                + '\n    05 TB-TABLE-COPY.'
                + '\n        10 TB-TBCPY-LENGTH    PIC 9(07) VALUE ZEROS.'
                + '\n        10 TB-TBCPY    OCCURS 9999999 TIMES.'
                + '\n            15 CAUX-LINEVALUE PIC X(250).';
            this.kwargs['chopped'][i++] = ''
                + '\n*'
                + '\n******************************************************************'
                + '\n* 899999-TROCEADO'
                + '\n******************************************************************'
                + '\n 899999-TROCEADO.'
                + '\n*'
                + '\n*    MOVE [...]    TO WS-LINEVALUE'
                + '\n*    MOVE [...]    TO WS-SET-CHAR'
                + '\n     INITIALIZE TB-TABLE-COPY'
                + '\n'
                + '\n     MOVE CTN-1    TO WS-STARTING-POINT'
                + '\n'
                + '\n     INSPECT WS-LINEVALUE '
                + '\n                 TALLYING TB-TBCPY-LENGTH FOR ALL WS-SET-CHAR'
                + '\n'
                + '\n     PERFORM VARYING WS-IND FROM CTN-1 BY CTN-1'
                + '\n               UNTIL WS-IND GREATER TB-TBCPY-LENGTH'
                + '\n'
                + '\n        UNSTRING WS-LINEVALUE DELIMITED BY WS-SET-CHAR'
                + '\n            INTO TB-TBCPY(WS-IND)'
                + '\n            WITH POINTER WS-STARTING-POINT'
                + '\n        END-UNSTRING'
                + '\n     END-PERFORM'
                + '\n     .';
        }

        // Carga de parametros con fichero de entrada
        var i = 0;
        this.kwargs['lookfor'] = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];

        if (kwargs['lookfor']) {
            if (this.kwargs['fe']['id'] < 2) {
                this.kwargs['fe']['id'] = 2;
            }

            this.kwargs['lookfor'][i++] = ''
                + '\n 01 TABLA-TABCARGA.'
                + '\n*'
                + '\n    05 TB-TABCARGA-LENGTH   PIC 9(07) VALUE 9999999.'
                + '\n    05 TB-TABCARGA    OCCURS 9999999 TIMES.'
                + '\n        10 TB-KEY           PIC X(10).'
                + '\n        10 TB-VALUE         PIC X(10).';
            this.kwargs['lookfor'][i++] = ''
                + '\n     PERFORM 130000-CARGAR UNTIL SI-FIN-F{c1}{##e}02E';
            this.kwargs['lookfor'][i++] = ''
                + '\n*'
                + '\n******************************************************************'
                + '\n* 130000-CARGAR'
                + '\n******************************************************************'
                + '\n 130000-CARGAR.'
                + '\n*'
                + '\n     IF NO-FIN-F{c1}{##e}02E'
                + '\n        ADD  CTN-1       TO TB-TABCARGA-LENGTH'
                + '\n*'
                + '\n        MOVE C01E(:)     TO TB-KEY(TB-TABCARGA-LENGTH)'
                + '\n        MOVE C01E(:)     TO TB-VALUE(TB-TABCARGA-LENGTH)'
                + '\n     END-IF'
                + '\n*'
                + '\n     PERFORM 500000-LEER-F{c1}{##e}02E'
                + '\n     .';
            this.kwargs['lookfor'][i++] = ''
                + '\n*'
                + '\n******************************************************************'
                + '\n* 899999-BUSCAR'
                + '\n******************************************************************'
                + '\n 899999-BUSCAR.'
                + '\n*'
                + '\n     SET  NO-ENCONTRADO                TO TRUE'
                + '\n'
                + '\n     PERFORM VARYING WS-IND FROM CTN-1 BY CTN-1'
                + '\n               UNTIL WS-IND GREATER TB-TABCARGA-LENGTH'
                + '\n                  OR SI-ENCONTRADO'
                + '\n        IF TB-KEY(WS-IND) EQUAL [...]'
                + '\n            SET  SI-ENCONTRADO    TO TRUE'
                + '\n            MOVE TB-VALUE(WS-IND) TO [...]'
                + '\n        END-IF'
                + '\n     END-PERFORM'
                + '\n     .';
        }

        // Carga de parametros sin fichero de entrada
        var i = 0;
        this.kwargs['lookforoutfile'] = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];

        if (kwargs['lookforoutfile']) {
            this.kwargs['lookforoutfile'][i++] = ''
                + '\n 01 TABLA-TABCARGA.'
                + '\n*'
                + '\n    05 VALUE-TABLES.'
                + '\n        10 FILLER         PIC X(04) VALUE \'0001\'.'
                + '\n'
                + '\n    05 TB-TABCARGA REDEFINES VALUE-TABLES OCCURS 1 TIMES.'
                + '\n        10 TB-KEY         PIC X(02).'
                + '\n        10 TB-VALUE       PIC X(02).'
                + '\n'
                + '\n    05 TB-TABCARGA-LENGTH PIC 9(07) VALUE 1.';
            this.kwargs['lookforoutfile'][i++] = ''
                + '\n*'
                + '\n******************************************************************'
                + '\n* 899999-BUSCAR-SINTB'
                + '\n******************************************************************'
                + '\n 899999-BUSCAR-SINTB.'
                + '\n*'
                + '\n     SET  NO-ENCONTRADO           TO TRUE'
                + '\n'
                + '\n     PERFORM VARYING WS-IND FROM CTN-1 BY CTN-1'
                + '\n               UNTIL WS-IND GREATER TB-TABCARGA-LENGTH'
                + '\n                  OR SI-ENCONTRADO'
                + '\n        IF TB-KEY(WS-IND) EQUAL [...]'
                + '\n            SET  SI-ENCONTRADO    TO TRUE'
                + '\n            MOVE TB-VALUE(WS-IND) TO [...]'
                + '\n        END-IF'
                + '\n     END-PERFORM'
                + '\n     .';
        }

        // Rutina de tabla SGAT
        var i = 0;
        this.kwargs['qpiprx80'] = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];

        if (kwargs['qpiprx80'] && this.kwargs['subpgm'] != 'batch') {

            this.kwargs['qpiprx80'][i++]= ''
                + '\n    05 CTA-QPIPRX80           PIC X(08) VALUE \'QPIPRX80\'.';
            this.kwargs['qpiprx80'][i++]= ''
                + '\n    05 CTN-5                  PIC 9(02) VALUE 5.'
                + '\n    05 CTN-44                 PIC 9(02) VALUE 44.'
                + '\n    05 CTN-55                 PIC 9(02) VALUE 55.';
            this.kwargs['qpiprx80'][i++] = ''
                + '\n 01 TABLA-SGAT.'
                + '\n*'
                + '\n    05 TB-SGAT-LENGTH       PIC 9(07) VALUE #.'
                + '\n    05 VALUE-TABLES         PIC X(3797).'
                + '\n'
                + '\n    05 TB-SGAT REDEFINES VALUE-TABLES OCCURS # TIMES.'
                + '\n        10 TB-KEY           PIC X(01).'
                + '\n        10 TB-VALUE         PIC X(01).';
            this.kwargs['qpiprx80'][i++] = ''
                + '\n*'
                + '\n*-- COPY PARA LA VALIDACION DE LA TABLA SGAT'
                + '\n COPY QPIPC080.';
            this.kwargs['qpiprx80'][i++] = ''
                + '\n     PERFORM 800000-TABLA-SGAT';
            this.kwargs['qpiprx80'][i++] = ''
                + '\n';
            this.kwargs['qpiprx80'][i++] = ''
                + '\n*'
                + '\n******************************************************************'
                + '\n* 800000-TABLA-SGAT'
                + '\n******************************************************************'
                + '\n 800000-TABLA-SGAT.'
                + '\n*'
                + '\n     INITIALIZE RETORNO-QPIPCCAB'
                + '\n                R-QPIPC080'
                + '\n*'
                + '\n     MOVE [...]       TO COD-CSGAT-QPIPC080'
                + '\n     MOVE [...]       TO COD-PAIS-QPIPC080'
                + '\n     MOVE [...]       TO COD-BANCO-QPIPC080'
                + '\n     MOVE LOW-VALUES  TO COD-CLAVE-QPIPC080'
                + '\n     MOVE [...]       TO COD-IDIOMA-QPIPC080'
                + '\n     MOVE HIGH-VALUES TO COD-CLAVE-HASTA-QPIPC080'
                + '\n'
                + '\n     MOVE CTN-1       TO COD-VERSION-QPIPCCAB'
                + '\n     MOVE CTN-1       TO QNU-BLOQUE-QPIPCCAB'
                + '\n     MOVE CTN-5       TO COD-SERVICIO-QPIPCCAB'
                + '\n     MOVE CTN-55      TO QNU-FILAS-QPIPCCAB'
                + '\n*'
                + '\n     CALL CTA-QPIPRX80 USING R-QPIPCCAB R-QPIPC080'
                + '\n*'
                + '\n     IF XTI-AVIERROR-QPIPCCAB NOT EQUAL SPACES'
                + '\n        PERFORM 999999-FIN-ERROR'
                + '\n     END-IF'
                + '\n'
                + '\n     MOVE DATOS-SALIDA-QPIPC080 TO VALUE-TABLES'
                + '\n     .'
                + '\n*'
                + '\n******************************************************************'
                + '\n* 899999-BUSCAR-SGAT'
                + '\n******************************************************************'
                + '\n 899999-BUSCAR-SGAT.'
                + '\n*'
                + '\n     SET  NO-ENCONTRADO           TO TRUE'
                + '\n'
                + '\n     PERFORM VARYING WS-IND FROM CTN-1 BY CTN-1'
                + '\n               UNTIL WS-IND GREATER TB-SGAT-LENGTH'
                + '\n                  OR SI-ENCONTRADO'
                + '\n        IF TB-KEY(WS-IND) EQUAL [...]'
                + '\n            SET  SI-ENCONTRADO    TO TRUE'
                + '\n            MOVE TB-VALUE(WS-IND) TO [...]'
                + '\n        END-IF'
                + '\n     END-PERFORM'
                + '\n     .';
        }

        // Infomar los campos de la rutina o de la transancion
        var i = 0;
        this.kwargs['trx'] = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];

        if (this.kwargs['subrut'] == 'trx') {
            this.kwargs['trx'][i++] = ''
                + '\n*     ENTORNO     : TRANSACCIÓN';
            this.kwargs['trx'][i++] = ''
                + '\n*'
                + '\n*-- COPY DE ENTRADA/SALIDA'
                + '\n COPY QPIPCCAB.';
            this.kwargs['trx'][i++] = ''
                + '\n*-- COPY DE ENTRADA/SALIDA'
                + '\n COPY QPEJCAQA.'
                + '\n*'
                + '\n*-- COPY DE ENTRADA/SALIDA DE DATOS'
                + '\n COPY ' + this.kwargs['copy'] + '.'
                + '\n*'
                + '\n******************************************************************'
                + '\n* PROCEDURE DIVISION'
                + '\n***********x*******************************************************'
                + '\n PROCEDURE DIVISION USING R-QPEJCAQA C000-' + this.kwargs['copy'] + '.';
            this.kwargs['trx'][i++] = ''
                + '\n     DISPLAY \'*************************************************\''
                + '\n     DISPLAY \'* INI - PROGRAMA: '+ this.kwargs['name'] + ' TRANSACCION: ' + this.kwargs['name'].replaceAt(4, 'T') + '\''
                + '\n     DISPLAY \'*************************************************\''
                + '\n*'
                + '\n     INITIALIZE RETORNOS-APLICACION-QPEJCAQA'
                + '\n                WS-VARIABLES';
            this.kwargs['trx'][i++] = '';
            this.kwargs['trx'][i++] = ''
                + '\n     DISPLAY \'*************************************************\''
                + '\n     DISPLAY \'* FIN - PROGRAMA: ' + this.kwargs['name'] + ' TRANSACCION: ' + this.kwargs['name'].replaceAt(4, 'T') + '\''
                + '\n     DISPLAY \'*************************************************\''
                + '\n*';
            this.kwargs['trx'][i++] = ''
                + '\n     IF COD-RETORNO-QPEJCAQA EQUAL ZEROS'
                + '\n         MOVE CTN-8                   TO COD-RETORNO-QPEJCAQA'
                + '\n         MOVE COD-AVIERROR-QPIPCCAB   TO COD-AVIERROR-QPEJCAQA'
                + '\n         MOVE COD-MODULO-ERR-QPIPCCAB TO COD-MODULO-ERR-QPEJCAQA'
                + '\n         MOVE COD-PARRAFO-ERR-QPIPCCAB'
                + '\n                                      TO COD-PARRAFO-ERR-QPEJCAQA'
                + '\n         MOVE COD-TABLA-ERR-QPIPCCAB  TO COD-TABLA-ERR-QPEJCAQA'
                + '\n         MOVE COD-ACCESO-ERR-QPIPCCAB TO COD-ACCESO-ERR-QPEJCAQA'
                + '\n         MOVE QNU-SQLCODE-ERR-QPIPCCAB'
                + '\n                                      TO QNU-SQLCODE-ERR-QPEJCAQA'
                + '\n         MOVE DES-SQLCA-ERR-QPIPCCAB  TO DES-SQLCA-ERR-QPEJCAQA'
                + '\n         MOVE MULTIERROR-QPIPCCAB     TO MULTIERROR-QPEJCAQA'
                + '\n         MOVE DES-ERRORVAR1-QPIPCCAB  TO DES-ERRORVAR1-QPEJCAQA'
                + '\n         MOVE DES-ERRORVAR2-QPIPCCAB  TO DES-ERRORVAR2-QPEJCAQA'
                + '\n     END-IF'
                + '\n'
                + '\n     DISPLAY \'*************************************************\''
                + '\n     DISPLAY \'* ERROR EN LA EJECUCION DEL PROGRAMA ON-LINE\''
                + '\n     DISPLAY \'*************************************************\''
                + '\n     DISPLAY \'* PROGRAMA      \' CTA-' + this.kwargs['name']
                + '\n     DISPLAY \'*************************************************\''
                + '\n     DISPLAY \'COD-RETORNO     \' COD-RETORNO-QPEJCAQA'
                + '\n     DISPLAY \'COD-AVIERROR    \' COD-AVIERROR-QPEJCAQA'
                + '\n     DISPLAY \'COD-MODULO-ERR  \' COD-MODULO-ERR-QPEJCAQA'
                + '\n     DISPLAY \'COD-PARRAFO-ERR \' COD-PARRAFO-ERR-QPEJCAQA'
                + '\n     DISPLAY \'COD-TABLA-ERR   \' COD-TABLA-ERR-QPEJCAQA'
                + '\n     DISPLAY \'COD-ACCESO-ERR  \' COD-ACCESO-ERR-QPEJCAQA'
                + '\n     MOVE QNU-SQLCODE-ERR-QPEJCAQA TO WS-NUMBER'
                + '\n     DISPLAY \'QNU-SQLCODE-ERR \' WS-NUMBER'
                + '\n     DISPLAY \'DES-SQLCA-ERR   \' DES-SQLCA-ERR-QPEJCAQA'
                + '\n     MOVE QNU-SQLCODE-ERR-QPEJCAQA TO WS-NUMBER'
                + '\n     DISPLAY \'QNU-ERRORES     \' WS-NUMBER'
                + '\n     DISPLAY \'DES-ERRORVAR1   \' DES-ERRORVAR1-QPEJCAQA'
                + '\n     DISPLAY \'DES-ERRORVAR2   \' DES-ERRORVAR2-QPEJCAQA'
                + '\n     DISPLAY \'**--\''
                + '\n     PERFORM VARYING WS-IND FROM 1 BY 1'
                + '\n               UNTIL WS-IND GREATER 10'
                + '\n         DISPLAY \'*- WS-IND    \' WS-IND'
                + '\n         DISPLAY \'*- COD-ERROR \' COD-ERROR-QPEJCAQA(WS-IND)'
                + '\n     END-PERFORM'
                + '\n     DISPLAY \'*************************************************\'';
        } else if (this.kwargs['subrut'] == 'rut') {
            this.kwargs['trx'][i++] = ''
                + '\n*     ENTORNO     : RUTINA';
            this.kwargs['trx'][i++] = '';
            this.kwargs['trx'][i++] = ''
                + '\n*-- COPY DE ENTRADA/SALIDA'
                + '\n COPY QPIPCCAB.'
                + '\n*'
                + '\n*-- COPY DE ENTRADA/SALIDA DE DATOS'
                + '\n COPY ' + this.kwargs['copy'] + '.'
                + '\n*'
                + '\n******************************************************************'
                + '\n* PROCEDURE DIVISION'
                + '\n******************************************************************'
                + '\n PROCEDURE DIVISION USING R-QPIPCCAB C000-' + this.kwargs['copy'] + '.';
            this.kwargs['trx'][i++] = ''
                + '\n     INITIALIZE RETORNO-QPIPCCAB'
                + '\n                WS-VARIABLES'
                + '\n*'
                + '\n     PERFORM 110100-RECUPERAR-CONTEXTO'
                + '\n     PERFORM 110200-MOVER-DATOS-ESTRUCTURA';
            this.kwargs['trx'][i++] = ''
                + '\n*'
                + '\n******************************************************************'
                + '\n* 110100-RECUPERAR-CONTEXTO'
                + '\n******************************************************************'
                + '\n 110100-RECUPERAR-CONTEXTO.'
                + '\n*'
                + '\n     INITIALIZE RETORNO-QPIPCCAB'
                + '\n                R-QPIPCX28'
                + '\n*'
                + '\n     MOVE CTN-1                    TO COD-SERVICIO-QPIPCCAB'
                + '\n*'
                + '\n     CALL CTA-QPIPRX28 USING R-QPIPCCAB R-QPIPCX28'
                + '\n*'
                + '\n     IF XTI-AVIERROR-QPIPCCAB NOT EQUAL SPACES'
                + '\n        PERFORM 999999-FIN-ERROR'
                + '\n     END-IF'
                + '\n     .'
                + '\n*'
                + '\n******************************************************************'
                + '\n* 110200-MOVER-DATOS-ESTRUCTURA'
                + '\n******************************************************************'
                + '\n 110200-MOVER-DATOS-ESTRUCTURA.'
                + '\n*'
                + '\n     INITIALIZE RETORNO-QPIPCCAB'
                + '\n                R-QPBTCXTA'
                + '\n*'
                + '\n     MOVE COD-PGMBATCH-QPIPCX28    TO COD-PROGRAMA-QPIPCCAB'
                + '\n     MOVE COD-PGMBATCH-QPIPCX28    TO COD-APLICACI-QPIPCCAB'
                + '\n     MOVE WS-X08-FECHA             TO FEC-CONTABLE-QPIPCCAB'
                + '\n     MOVE WS-X08-FECHA             TO FEC-PROCESO-QPIPCCAB'
                + '\n     MOVE WS-X10-HORA              TO HMS-PROCESO-QPIPCCAB'
                + '\n     MOVE COD-PAISOALF-QPIPCX28    TO COD-PAIS-QPIPCCAB'
                + '\n     MOVE COD-ENTIALFA-QPIPCX28    TO COD-BANCO-QPIPCCAB'
                + '\n     MOVE COD-MAQUINA-QPIPCX28     TO COD-PUESTO-QPIPCCAB'
                + '\n     MOVE COD-IDISOALF-QPIPCX28    TO COD-IDIOMA-QPIPCCAB'
                + '\n     MOVE COD-JOBNAME-QPIPCX28     TO COD-USUARIO-QPIPCCAB'
                + '\n     MOVE COD-ENTIALFA-QPIPCX28    TO COD-BANCO-OPER-QPIPCCAB'
                + '\n     MOVE CTA-N                    TO XSN-BATCH-QPIPCCAB'
                + '\n     .';
            this.kwargs['trx'][i++] = '';
            this.kwargs['trx'][i++] = ''
                + '\n     IF WS-PARRAFO NOT EQUAL SPACES'
                + '\n        MOVE WS-FILE-STATUS TO COD-AVIERROR-QPIPCCAB'
                + '\n        MOVE CTA-' + this.kwargs['name'] + '   TO COD-MODULO-ERR-QPIPCCAB'
                + '\n        MOVE WS-PARRAFO     TO COD-PARRAFO-ERR-QPIPCCAB'
                + '\n        MOVE WS-TABLA       TO COD-TABLA-ERR-QPIPCCAB'
                + '\n        MOVE WS-ACCESO      TO COD-ACCESO-ERR-QPIPCCAB'
                + '\n        MOVE WS-DES-SQLCA   TO DES-SQLCA-ERR-QPIPCCAB'
                + '\n     END-IF';
        }
    }
/* Funciones comunes de los jcls y boletas */
    common_functions_jcl() {
        // Incluir validacion de si el fichero existe
        var i = 0;
        this.kwargs['file_exist'] = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];

        if (kwargs['file_exist']) {
            this.kwargs['file_exist'][i++] = ''
                + '\n//**********************************************************************'
                + '\n//* COMPRUEBA SI EL FICHERO EXISTE'
                + '\n//**********************************************************************'
                + '\n//IFEXISTS EXEC PGM=IDCAMS'
                + '\n//SYSPRINT DD SYSOUT=*'
                + '\n//SYSIN    DD *'
                + '\n     LISTCAT ENTRIES ({c2}' + this.kwargs['namerand'] + '.########) ALL'
                + '\n/*'
                + '\n//**********************************************************************'
                + '\n//* SI 4 NO EXISTE EL FICHERO'
                + '\n//**********************************************************************'
                + '\n//VALEXIST IF (IFEXISTS.RC > 0) THEN'
                + '\n//**********************************************************************'
                + '\n//*---------------------------------------------------------------------'
                + '\n//*---------------------------------------------------------------------'
                + '\n//**********************************************************************'
                + '\n//VALEXIST ELSE'
                + '\n//**********************************************************************'
                + '\n//*---------------------------------------------------------------------'
                + '\n//*---------------------------------------------------------------------'
                + '\n//**********************************************************************'
                + '\n//VALEXIST ENDIF'
                + '\n//**********************************************************************'
                + '\n/*';
        }

        // Incluir validar si el fichero esta vacio
        var i = 0;
        this.kwargs['file_empty'] = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];

        if (kwargs['file_empty']) {
            this.kwargs['file_empty'][i++] = ''
                + '\n//**********************************************************************'
                + '\n//* COMPRUEBA SI EL FICHERO INDICADO ESTA VACIO'
                + '\n//**********************************************************************'
                + '\n//IFEMPTY  EXEC PROC=EXPRP20P'
                + '\n//IN       DD DSN={c2}' + this.kwargs['namerand'] + '.########,DISP=SHR'
                + '\n//P20.SYSIN DD *'
                + '\n PRINT INFILE(IN) CHARACTER COUNT(1)'
                + '\n IF LASTCC = 0  THEN SET MAXCC = 0'
                + '\n/*'
                + '\n//**********************************************************************'
                + '\n//VALEMPTY IF (IFEMPTY.P20.RC = 0) THEN'
                + '\n//**********************************************************************'
                + '\n//*---------------------------------------------------------------------'
                + '\n//*---------------------------------------------------------------------'
                + '\n//**********************************************************************'
                + '\n//VALEMPTY ELSE'
                + '\n//**********************************************************************'
                + '\n//*---------------------------------------------------------------------'
                + '\n//*---------------------------------------------------------------------'
                + '\n//**********************************************************************'
                + '\n//VALEMPTY ENDIF'
                + '\n//**********************************************************************'
                + '\n/*';
        }

        // Incluir cruce de ficheros
        var i = 0;
        this.kwargs['add_join'] = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];

        if (kwargs['add_join']) {
            this.kwargs['add_join'][i++] = ''
                + '\n  DELETE {c2}' + this.kwargs['namerand'] + '.JOIN000B'
                + '\n  DELETE {c2}' + this.kwargs['namerand'] + '.JOIN0001'
                + '\n  DELETE {c2}' + this.kwargs['namerand'] + '.JOIN0002';

            this.kwargs['add_join'][i++] = ''
                + '\n//**********************************************************************'
                + '\n//* CRUCE DE FICHEROS'
                + '\n//**********************************************************************'
                + '\n//JOIN000  EXEC PROC=EXPRP23P,EQUAL=\'EQUALS\',SYNCSORT=S'
                + '\n//SORTJNF1 DD DSN={c2}' + this.kwargs['namerand'] + '.########,DISP=SHR'
                + '\n//SORTJNF2 DD DSN={c2}' + this.kwargs['namerand'] + '.########,DISP=SHR'
                + '\n//*JNF1CNTL DD *'
                + '\n//*JNF2CNTL DD *'
                + '\n//FB0BBOTH DD DSN={c2}' + this.kwargs['namerand'] + '.JOIN000B,'
                + '\n//            DISP=(,CATLG,DELETE),SPACE=(CYL,(1500,500),RLSE),'
                + '\n//            DATACLAS=EXTCOMPS,DCB=(RECFM=FB,BLKSIZE=0,DSORG=PS,'
                + '\n//            LRECL=0)'
                + '\n//FB01ONLY DD DSN={c2}' + this.kwargs['namerand'] + '.JOIN0001,'
                + '\n//            DISP=(,CATLG,DELETE),SPACE=(CYL,(1500,500),RLSE),'
                + '\n//            DATACLAS=EXTCOMPS,DCB=(RECFM=FB,BLKSIZE=0,DSORG=PS,'
                + '\n//            LRECL=0)'
                + '\n//FB02ONLY DD DSN={c2}' + this.kwargs['namerand'] + '.JOIN0002,'
                + '\n//            DISP=(,CATLG,DELETE),SPACE=(CYL,(1500,500),RLSE),'
                + '\n//            DATACLAS=EXTCOMPS,DCB=(RECFM=FB,BLKSIZE=0,DSORG=PS,'
                + '\n//            LRECL=0)'
                + '\n//SYSPRINT DD SYSOUT=*'
                + '\n//SYSOUT   DD SYSOUT=*'
                + '\n//SYSIN    DD *'
                + '\n  JOINKEYS FILES=F1,FIELDS=(01,02,A) -- CLAVE 1'
                + '\n  JOINKEYS FILES=F2,FIELDS=(01,02,A) -- CLAVE 2'
                + '\n  JOIN UNPAIRED,F1,F2'
                + '\n  REFORMAT FIELDS=(F1:POS-INI,LENGHT,F2:POS-INI,LENGHT,?)'
                + '\n  OPTION COPY'
                + '\n  OUTFIL FNAMES=FB0BBOTH,INCLUDE=(L1+L2+1,1,CH,EQ,C\'B\'),BUILD=(1,L1+L2)'
                + '\n  OUTFIL FNAMES=FB01ONLY,INCLUDE=(L1+L2+1,1,CH,EQ,C\'1\'),BUILD=(1,L1)'
                + '\n  OUTFIL FNAMES=FB02ONLY,INCLUDE=(L1+L2+1,1,CH,EQ,C\'2\'),BUILD=(L1+1,L2)'
                + '\n/*';
        }

        // Incluir copia de ficheros no GdG
        var i = 0;
        this.kwargs['sort'] = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];

        if (kwargs['sort']) {
            this.kwargs['sort'][i++] = ''
                + '\n  DELETE {c2}' + this.kwargs['namerand'] + '.SORT000S';

            this.kwargs['sort'][i++] = ''
                + '\n//**********************************************************************'
                + '\n//* ORDENACION O COPIA DEL FICHERO'
                + '\n//**********************************************************************'
                + '\n//SORT000  EXEC PROC=EXPRP23P,VAR=\'256\',EQUAL=\'EQUALS\',SYNCSORT=S'
                + '\n//SORTIN   DD DSN={c2}' + this.kwargs['namerand'] + '.########,DISP=SHR'
                + '\n//SORTOUT  DD DSN={c2}' + this.kwargs['namerand'] + '.SORT000S,'
                + '\n//            DISP=(,CATLG,DELETE),SPACE=(CYL,(1500,500),RLSE),'
                + '\n//            DATACLAS=EXTCOMPS,DCB=(RECFM=FB,BLKSIZE=0,DSORG=PS,'
                + '\n//            LRECL=0)'
                + '\n//SYSOUT   DD SYSOUT=*'
                + '\n//SYSIN    DD *'
                + '\n  SORT FIELDS=COPY'
                + '\n/*';
        }

        // Incluir fichero nuevo
        var i = 0;
        this.kwargs['file_new'] = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];

        if (kwargs['file_new']) {
            this.kwargs['file_new'][i++] = ''
                + '\n  DELETE {c2}' + this.kwargs['namerand'] + '.SORT001S';

            this.kwargs['file_new'][i++] = ''
                + '\n//**********************************************************************'
                + '\n//* CREAR FICHERO VACIO'
                + '\n//**********************************************************************'
                + '\n//SORT000  EXEC PROC=EXPRP27P'
                + '\n//SORTOUT  DD DSN={c2}' + this.kwargs['namerand'] + '.SORT001S,'
                + '\n//            DISP=(,CATLG,DELETE),SPACE=(CYL,(1500,500),RLSE),'
                + '\n//            DATACLAS=EXTCOMPS,DCB=(RECFM=FB,BLKSIZE=0,DSORG=PS,'
                + '\n//            LRECL=0)'
                + '\n//SYSOUT   DD SYSOUT=*'
                + '\n//SYSIN    DD *'
                + '\n/*';
        }
        // Incluir filtrado de ficheros
        var i = 0;
        this.kwargs['file_filter'] = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];

        if (kwargs['file_filter']) {
            this.kwargs['file_filter'][i++] = ''
                + '\n  DELETE {c2}' + this.kwargs['namerand'] + '.SOR0001E'
                + '\n  DELETE {c2}' + this.kwargs['namerand'] + '.SOR0002E';

            this.kwargs['file_filter'][i++] = ''
                + '\n//**********************************************************************'
                + '\n//* FILTRA O DIVIDE UN FICHERO EN VARIOS FICHEROS'
                + '\n//**********************************************************************'
                + '\n//SORT000  EXEC PROC=EXPRP23P,VAR=\'256\',EQUAL=\'EQUALS\',SYNCSORT=S'
                + '\n//SORTIN   DD DSN={c2}' + this.kwargs['namerand'] + '.########,DISP=SHR'
                + '\n//SORTO01  DD DSN={c2}' + this.kwargs['namerand'] + '.SOR0001E,'
                + '\n//            DISP=(,CATLG,DELETE),SPACE=(CYL,(1500,500),RLSE),'
                + '\n//            DATACLAS=EXTCOMPS,DCB=(RECFM=FB,BLKSIZE=0,DSORG=PS,'
                + '\n//            LRECL=0)'
                + '\n//SORTO02  DD DSN={c2}' + this.kwargs['namerand'] + '.SOR0002E,'
                + '\n//            DISP=(,CATLG,DELETE),SPACE=(CYL,(1500,500),RLSE),'
                + '\n//            DATACLAS=EXTCOMPS,DCB=(RECFM=FB,BLKSIZE=0,DSORG=PS,'
                + '\n//            LRECL=0)'
                + '\n//**'
                + '\n//SYSOUT   DD SYSOUT=*'
                + '\n//SYSIN    DD *'
                + '\n  SORT FIELDS=COPY'
                + '\n  OUTFIL FNAMES=SORTO01,...'
                + '\n  OUTFIL FNAMES=SORTO02,...'
                + '\n//**'
                + '\n/*';
        }
        // Incluir estadística de registros
        var i = 0;
        this.kwargs['file_statistics'] = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];

        if (kwargs['file_statistics']) {
            this.kwargs['file_statistics'][i++] = ''
                + '\n  DELETE {c2}' + this.kwargs['namerand'] + '.ESTADIST';

            this.kwargs['file_statistics'][i++] = ''
                + '\n//**********************************************************************'
                + '\n//* ESTADISTICA DEL CAMPO QUE LE INDIQUEMOS'
                + '\n//**********************************************************************'
                + '\n//SORT001  EXEC PROC=EXPRP23P,VAR=\'256\',EQUAL=\'EQUALS\',SYNCSORT=S'
                + '\n//SORTIN   DD DSN={c2}' + this.kwargs['namerand'] + '.########,DISP=SHR'
                + '\n//SORTOF01 DD DSN={c2}' + this.kwargs['namerand'] + '.ESTADIST,'
                + '\n//            DISP=(,CATLG,DELETE),SPACE=(CYL,(1500,500),RLSE),'
                + '\n//            DATACLAS=EXTCOMPS,DCB=(RECFM=FB,BLKSIZE=0,DSORG=PS)'
                + '\n//SYSOUT   DD SYSOUT=*'
                + '\n//SYSIN    DD *'
                + '\n  SORT FIELDS=(0001,001,CH,A)'
                + '\n  OUTREC BUILD=(C\'00000000001 \',0001,001)'
                + '\n  OUTFIL FILES=01,REMOVECC,NODETAIL,BUILD=(1,11,13,001),'
                + '\n  SECTIONS=(13,001,TRAILER3=(TOT=(1,11,SFF,EDIT=(TTTTTTTTTTT)),13,001))'
                + '\n/*';
        }
        // Incluir arrancador de Filespeed
        var i = 0;
        this.kwargs['run_jcls'] = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];

        if (kwargs['run_jcls']) {
            this.kwargs['run_jcls'][i++] = ''
                + '\n//**********************************************************************'
                + '\n//* ARRANCADOR DEL ' + this.kwargs['uuaa'] + 'K000'
                + '\n//**********************************************************************'
                + '\n//ARRAN000 EXEC PROC=EXPRP01P,PRG=STARTJOB,PARM=\'' + this.kwargs['uuaa'] + 'X000\''
                + '\n//PDS      DD DSN={c4},DISP=SHR'
                + '\n//INTRDR   DD SYSOUT=(A,INTRDR),DCB=BLKSIZE=80'
                + '\n//INTER    DD DUMMY'
                + '\n//DATOSGDG DD DUMMY'
                + '\n//SYSPRINT DD SYSOUT=*'
                + '\n//SYSUDUMP DD SYSOUT=4,DEST=JESTC3'
                + '\n/*';
        }
        // Incluir paso con un IFTHEN
        var i = 0;
        this.kwargs['ifthen'] = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];

        if (kwargs['ifthen']) {
            this.kwargs['ifthen'][i++] = ''
                + '\n  DELETE {c2}' + this.kwargs['namerand'] + '.SORT004S';

            this.kwargs['ifthen'][i++] = ''
                + '\n//**********************************************************************'
                + '\n//* EJEMPLO DE IFTHEN'
                + '\n//**********************************************************************'
                + '\n//SORT000  EXEC PROC=EXPRP23P,VAR=\'256\',EQUAL=\'EQUALS\',SYNCSORT=S'
                + '\n//SORTIN   DD DSN={c2}' + this.kwargs['namerand'] + '.########,DISP=SHR'
                + '\n//SORTOUT  DD DSN={c2}' + this.kwargs['namerand'] + '.SORT004S,'
                + '\n//            DISP=(,CATLG,DELETE),SPACE=(CYL,(1500,500),RLSE),'
                + '\n//            DATACLAS=EXTCOMPS,DCB=(RECFM=FB,BLKSIZE=0,DSORG=PS,'
                + '\n//            LRECL=0)'
                + '\n//SYSOUT   DD SYSOUT=*'
                + '\n//SYSIN    DD *'
                + '\n  SORT FIELDS=COPY'
                + '\n  OUTREC IFTHEN=(WHEN=([CONDICION]),BUILD=(),HIT=NEXT),'
                + '\n         IFTHEN=(WHEN=([CONDICION]),OVERLAY=(),HIT=NEXT)'
                + '\n/*';
        }

        // Incluir paso con cabezera y pie de fichero y de página
        var i = 0;
        this.kwargs['header1'] = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];

        if (kwargs['header1']) {
            this.kwargs['header1'][i++] = ''
                + '\n  DELETE {c2}' + this.kwargs['namerand'] + '.SORT006S';

            this.kwargs['header1'][i++] = ''
                + '\n//**********************************************************************'
                + '\n//* EJEMPLO DE HEADER, TRAILER EN UN PASO'
                + '\n//**********************************************************************'
                + '\n//SORT000  EXEC PROC=EXPRP23P,VAR=\'256\',EQUAL=\'EQUALS\',SYNCSORT=S'
                + '\n//SORTIN   DD DSN={c2}' + this.kwargs['namerand'] + '.########,DISP=SHR'
                + '\n//SORTOUT  DD DSN={c2}' + this.kwargs['namerand'] + '.SORT006S,'
                + '\n//            DISP=(,CATLG,DELETE),SPACE=(CYL,(1500,500),RLSE),'
                + '\n//            DATACLAS=EXTCOMPS,DCB=(RECFM=FB,BLKSIZE=0,DSORG=PS,'
                + '\n//            LRECL=0)'
                + '\n//SYSOUT   DD SYSOUT=*'
                + '\n//SYSIN    DD *'
                + '\n  SORT FIELDS=COPY'
                + '\n  OUTFIL FNAMES=SORTOUT,REMOVECC,'
                + '\n           HEADER1=(C\'CABECERA DE FICHERO\'),'
                + '\n           TRAILER1=(C\'PIE DE FICHERO\'),'
                + '\n           SECTIONS=(01,01, -- CLAVE'
                + '\n               HEADER3=(C\'CABECERA DE SECCION\'),'
                + '\n               TRAILER3=(C\'PIE DE SECCION\'))'
                + '\n/*';
        }

        // Incluir proceso de las tablas
        if (this.kwargs['unloadtable'] != '') {
            var i = 0;
            this.kwargs['unload'] = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];

            this.kwargs['unload'][i++] = ''
                + '\n  DELETE {c2}' + this.kwargs['namerand'] + '.' + this.kwargs['unloadtable'].replaceAt(0, 'U');

            this.kwargs['unload'][i++] = ''
                + '\n//**********************************************************************'
                + '\n//* DESCARGA LA TABLA ' + this.kwargs['unloadtable']
                + '\n//**********************************************************************'
                + '\n//UNLOAD   EXEC PROC=EXPRP42P,JOB=\'' + this.kwargs['namerand'] + '\',QUIESCE=Y,SSID=\'' + this.kwargs['subjcl'][3] + '\''
                + '\n//SYSREC   DD DSN={c2}' + this.kwargs['namerand'] + '.' + this.kwargs['unloadtable'].replaceAt(0, 'U') + ','
                + '\n//            DISP=(,CATLG,DELETE),SPACE=(CYL,(1500,500),RLSE),'
                + '\n//            DATACLAS=EXTCOMPS,DCB=(RECFM=FB,BLKSIZE=0,DSORG=PS)'
                + '\n//SYSIN1   DD *'
                + '\n  SELECT * FROM P' + this.kwargs['table_lib'] + '.' + this.kwargs['unloadtable']
                + '\n/*';

            var i = 0;
            this.kwargs['load'] = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];

            if (kwargs['load']) {
                this.kwargs['load'][i++] = ''
                    + '\n  DELETE {c2}' + this.kwargs['namerand'] + '.' + this.kwargs['unloadtable'].replaceAt(0, 'L');

                this.kwargs['load'][i++] = ''
                    + '\n//**********************************************************************'
                    + '\n//* FUSIONA LOS REGISTROS GENERADOS'
                    + '\n//**********************************************************************'
                    + '\n//SORT001  EXEC PROC=EXPRP23P,EQUAL=\'EQUALS\',VAR=\'256\',SYNCSORT=S'
                    + '\n//SORTIN   DD DSN={c2}' + this.kwargs['namerand'] + '.########,DISP=SHR'
                    + '\n//         DD DSN={c2}' + this.kwargs['namerand'] + '.' + this.kwargs['unloadtable'].replaceAt(0, 'U') + ',DISP=SHR'
                    + '\n//SORTOUT  DD DSN={c2}' + this.kwargs['namerand'] + '.' + this.kwargs['unloadtable'].replaceAt(0, 'L') + ','
                    + '\n//            DISP=(,CATLG,DELETE),SPACE=(CYL,(1500,500),RLSE),'
                    + '\n//            DATACLAS=EXTCOMPS,DCB=(RECFM=FB,BLKSIZE=0,DSORG=PS)'
                    + '\n//SYSOUT   DD SYSOUT=*'
                    + '\n//SYSIN    DD *'
                    + '\n  SORT FIELDS=(' + this.kwargs['table_keygen'] + ')'
                    + '\n  SUM FIELDS=NONE'
                    + '\n/*'
                    + '\n//**********************************************************************'
                    + '\n//* COMPRUEBA SI EL FICHERO INDICADO ESTA VACIO'
                    + '\n//**********************************************************************'
                    + '\n//IFEMPTY  EXEC PROC=EXPRP20P'
                    + '\n//IN       DD DSN={c2}' + this.kwargs['namerand'] + '.' + this.kwargs['unloadtable'].replaceAt(0, 'L') + ',DISP=SHR'
                    + '\n//SYSIN    DD *'
                    + '\n PRINT INFILE(IN) CHARACTER COUNT(1)'
                    + '\n IF LASTCC = 0  THEN SET MAXCC = 0'
                    + '\n/*'
                    + '\n//**********************************************************************'
                    + '\n//VALEMPTY IF (IFEMPTY.P20.RC = 0) THEN'
                    + '\n//**********************************************************************'
                    + '\n//*---------------------------------------------------------------------'
                    + '\n//**********************************************************************'
                    + '\n//* CARGA DE LA TABLA ' + this.kwargs['unloadtable']
                    + '\n//**********************************************************************'
                    + '\n//LOAD       EXEC PROC=EXPRP43P,SSID=\'' + this.kwargs['subjcl'][3] + '\',JOB=\'' + this.kwargs['namerand'] + '\',TB=\'' + this.kwargs['unloadtable'] + '\''
                    + '\n//P43.SYSREC DD DSN={c2}' + this.kwargs['namerand'] + '.' + this.kwargs['unloadtable'].replaceAt(0, 'L') + ',DISP=SHR'
                    + '\n/*'
                    + '\n//*---------------------------------------------------------------------'
                    + '\n//**********************************************************************'
                    + '\n//VALEMPTY ENDIF'
                    + '\n//**********************************************************************';
            }

        } else {
            this.kwargs['unload'] = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
            this.kwargs['load'] = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
        }

        // Incluir paso para reemplazar un texto dentro un fichero
        var i = 0;
        this.kwargs['replace'] = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];

        if (kwargs['replace']) {
            this.kwargs['replace'][i++] = ''
                + '\n  DELETE {c2}' + this.kwargs['namerand'] + '.SORT007S';

            this.kwargs['replace'][i++] = ''
                + '\n//**********************************************************************'
                + '\n//* ORDENACION O COPIA DEL FICHERO'
                + '\n//**********************************************************************'
                + '\n//SORT000  EXEC PROC=EXPRP23P,VAR=\'256\',EQUAL=\'EQUALS\',SYNCSORT=S'
                + '\n//SORTIN   DD DSN={c2}' + this.kwargs['namerand'] + '.########,DISP=SHR'
                + '\n//SORTOUT  DD DSN={c2}' + this.kwargs['namerand'] + '.SORT007S,'
                + '\n//            DISP=(,CATLG,DELETE),SPACE=(CYL,(1500,500),RLSE),'
                + '\n//            DATACLAS=EXTCOMPS,DCB=(RECFM=FB,BLKSIZE=0,DSORG=PS,'
                + '\n//            LRECL=0)'
                + '\n//SYSOUT   DD SYSOUT=*'
                + '\n//SYSIN    DD *'
                + '\n  SORT FIELDS=COPY'
                + '\n  OUTREC FINDREP=(INOUT=(C\'in\',C\'out\'))'
                + '\n/*';
        }

        // Incluir paso de fichero variable a fijo
        var i = 0;
        this.kwargs['variable'] = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];

        if (kwargs['variable']) {
            this.kwargs['variable'][i++] = ''
                + '\n  DELETE {c2}' + this.kwargs['namerand'] + '.SORT008S';

            this.kwargs['variable'][i++] = ''
                + '\n//**********************************************************************'
                + '\n//* PASAR DE FICHERO VARIABLE A FIJO'
                + '\n//**********************************************************************'
                + '\n//SORT000  EXEC PROC=EXPRP23P,VAR=\'256\',EQUAL=\'EQUALS\',SYNCSORT=S'
                + '\n//SORTIN   DD DSN={c2}' + this.kwargs['namerand'] + '.########,DISP=SHR'
                + '\n//SORTOUT  DD DSN={c2}' + this.kwargs['namerand'] + '.SORT008lS,'
                + '\n//            DISP=(,CATLG,DELETE),SPACE=(CYL,(1500,500),RLSE),'
                + '\n//            DATACLAS=EXTCOMPS,DCB=(RECFM=FB,BLKSIZE=0,DSORG=PS,'
                + '\n//            LRECL=80)'
                + '\n//SYSOUT   DD SYSOUT=*'
                + '\n//SYSIN    DD *'
                + '\n  SORT FIELDS=COPY'
                + '\n  OUTFIL FILES=OUT,VTOF,BUILD=(00005,00080)'
                + '\n/*';
        }

    }
/* Devolver el valor solicitado en base a la UUAA */
    control_UUAA(ind) {
        var out = ['3'
            , 'B'
            , 'EBP' + this.kwargs['uuaa'] + '.INPXD05X.'
            , this.kwargs['uuaa'] + 'B000'
            , '[revisar]'
            , 'UUAAC000'];

        var ctrl_UUAA = {
              EBEF : ['3'
                    , 'B'
                    , 'EBPEBEF.INPXD05X.'
                    , 'EBEFBDIV'
                    , 'EBPEXPR.PDSB111Z.TRN.AC'
                    , 'UUAAC000']
            , ERCV : ['3'
                    , 'B'
                    , 'EBPERCV.INPXD05X.'
                    , 'ERCVR000'
                    , 'EBPEXPR.PDSB111Z.TRN.PS'
                    , 'UUAAC000']
            , EYRG : ['3'
                    , 'B'
                    , 'EBPEYRG.INPXD05X.'
                    , 'EYRGB001'
                    , 'EBPEXPR.PDSB111Z.TRN.TZ'
                    , 'UUAAC000']
            , GRDR : ['3'
                    , 'U'
                    , 'GR.DRINP100.'
                    , 'GRDRU101'
                    , 'EX.EXPDS111.TRN.GR'
                    , 'UUAAC000']
            , OODN : ['Y'
                    , 'U'
                    , 'OO.DNAPL110.'
                    , 'OODNO000'
                    , 'EX.EXPDS111.TRN.OO'
                    , 'UUAAC000']
            , OORG : ['1'
                    , 'U'
                    , 'OO.RGINP100.'
                    , 'OORGU600'
                    , 'EX.EXPDS111.TRN.OO'
                    , 'CUUAA000']
            , RIHC : ['3'
                    , 'U'
                    , 'RI.HCAPL100.'
                    , 'RIHCU400'
                    , 'EX.EXPDS111.TRN.RI'
                    , 'CUUAA000']
            , ADEX : ['3'
                    , 'U'
                    , 'AD.EXINP100.'
                    , 'ADEXU402'
                    , 'EX.EXPDS111.TRN.AD'
                    , 'CUUAA000']
            , GCBS : ['3'
                    , 'U'
                    , 'GC.BSINP100.'
                    , 'CGBSU050'
                    , 'EX.EXPDS111.TRN.GC'
                    , 'CUUAA000']
            , KEOS : ['3'
                    , 'B'
                    , 'EBPKEOS.INPXD05X.'
                    , 'KEOSB001'
                    , 'EX.EXPDS111.TRN.KE'
                    , 'UUAAC000']
            , ADHR : ['4'
                    , 'U'
                    , 'AD.HRINP100.'
                    , 'ADHRUZZZ'
                    , 'EX.EXPDS111.TRN.AD'
                    , 'CUUAA000']
            , ENAR : ['3'
                    , 'B'
                    , 'EN.ARAPL100.'
                    , 'ENARB001'
                    , 'EX.EXPDS111.TRN.EN'
                    , 'UUAAC000']
            , RIHT : ['3'
                    , 'U'
                    , 'RI.HTINP109.'
                    , 'RIHTU020'
                    , 'EX.EXPDS111.TRN.RI'
                    , 'CUUAA000']
            , GRAL : ['3'
                    , 'J'
                    , 'GR.ALINP100'
                    , 'GRALM240'
                    , 'EX.EXPDS111.TRN.GR'
                    , 'CUUAA000']
        };

        if (typeof ctrl_UUAA[this.kwargs['uuaa']] != 'undefined') {
            out = ctrl_UUAA[this.kwargs['uuaa']];
        }

        return out[ind];
    }
/* Ajustar el texto en la descripcion */
    adjust_text(value) {
        var type = (this.kwargs['type'] == 'programa'?this.control_UUAA(1)
                  :(this.kwargs['type'] == 'jcl'     ?'J'
                  :(this.kwargs['type'] == 'boleta'  ?'P'
                  :'#')));

        var len_words = 0;
        var line = 45;
        var out = '';

        var out_array = value.split(' ');

        if (out_array.length > 1) {
            out_array.forEach(function(word) {
                var len_word = word.length;
                len_words += (len_word + 1);

                if (len_words >= line) {
                    out += ((this.kwargs['type'] == 'jcl') || (this.kwargs['type'] == 'boleta')?'\n//* ':'\n* ');

                    len_words = len_word;
                    line = 64;
                }

                out += word + ' ';
            }, this);
        } else {
            out = '';
        }

        return out;
    }
/* Repetir un texto indicado tantas veces como nos haga falta */
    repeat_text(value, times) {
        var out = '';
        var end = times - 1;

        var v1 = false;
        var v2 = false;
        var v3 = false;

        if (times > 0) {
            for (var i = 0; i < times; i++) {
                out += value;

                if (v1 == false) {
                    out = out.replace(/{open}+/g     , 'OPEN');
                    out = out.replace(/{close}+/g    , 'CLOSE');
                    out = out.replace(/{input}+/g    , 'INPUT');
                    out = out.replace(/{output}+/g   , 'OUTPUT');
                    out = out.replace(/{until}+/g    , 'UNTIL');

                    if (this.kwargs['join'] == 'A') {
                        out = out.replace(/{hv}+/g   , '\n            MOVE HIGH-VALUES         TO WS-C{n}E');
                        out = out.replace(/{corr}+/g , ''
                            + '\n                MOVE CORR WS-C{n}E    TO WS-C{n2}E'
                            + '\n                MOVE CORR C{n}E       TO WS-C{n}E'
                            + '\n                IF C-REG-F{c1}{###}{n}E EQUAL ZEROS'
                            + '\n                    MOVE CORR WS-C{n}E    TO WS-C{n2}E'
                            + '\n                END-IF');
                    }

                    v1 = true;
                } else {
                    out = out.replace(/{open}+/g     , '    ');
                    out = out.replace(/{close}+/g    , '     ');
                    out = out.replace(/{input}+/g    , '     ');
                    out = out.replace(/{output}+/g   , '      ');
                    out = out.replace(/{until}+/g    , '  AND');

                    if (this.kwargs['join'] == 'A') {
                        out = out.replace(/{hv}+/g   , '');
                        out = out.replace(/{corr}+/g , '');
                    }
                }

                switch (this.kwargs['join']) {
                    case '111':
                        if (v3 == false) {
                            out = out.replace(/{hv}+/g  , '\n            MOVE HIGH-VALUES         TO WS-C{n}E');
                            out = out.replace(/{corr}+/g, '\n                MOVE CORR C{n}E       TO WS-C{n}E');

                            v3 = (i == 2);
                        } else {
                            out = out.replace(/{hv}+/g  , '');
                            out = out.replace(/{corr}+/g, '');
                        }
                        break;
                    case 'A':
                        break;
                    case '11':
                    case 'N1':
                    case '1N':
                    case 'NM':
                    case 'MN':
                        if (v2 == false) {
                            out = out.replace(/{hv}+/g  , '\n            MOVE HIGH-VALUES         TO WS-C{n}E');
                            out = out.replace(/{corr}+/g, '\n                MOVE CORR C{n}E       TO WS-C{n}E');

                            v2 = (i == 1);
                        } else {
                            out = out.replace(/{hv}+/g  , '');
                            out = out.replace(/{corr}+/g, '');
                        }
                        break;
                    default:
                        out = out.replace(/{hv}+/g  , '');
                        out = out.replace(/{corr}+/g, '');
                        break;
                }

                if (times < 100) {
                    out = out.replace(/{###}+/g, this.kwargs['name'].substring(5));
                    out = out.replace(/{n}+/g  , ((i + 1) + '').padStart(2, '0'));
                    out = out.replace(/{n2}+/g , ((i + 2) + '').padStart(2, '0'));
                } else {
                    out = out.replace(/{###}+/g, '');
                    out = out.replace(/{n}+/g  , ((i + 1) + '').padStart(5, '0'));
                    out = out.replace(/{n2}+/g , ((i + 2) + '').padStart(5, '0'));
                }

                out = out.replace(/{fe_desc_n}+/g, (this.kwargs['fe']['desc'][i] != 'undefined'?this.kwargs['fe']['desc'][i]:''));
                out = out.replace(/{fs_desc_n}+/g, (this.kwargs['fs']['desc'][i] != 'undefined'?this.kwargs['fs']['desc'][i]:''));
                out = out.replace(/{fe_copy_n}+/g, (this.kwargs['fe']['copy'][i] != 'undefined'?this.kwargs['fe']['copy'][i]:''));
                out = out.replace(/{fs_copy_n}+/g, (this.kwargs['fs']['copy'][i] != 'undefined'?this.kwargs['fs']['copy'][i]:''));
                out = out.replace(/{fe_leng_n}+/g, (this.kwargs['fe']['leng'][i] != 'undefined'?this.kwargs['fe']['leng'][i]:'0'));
                out = out.replace(/{fs_leng_n}+/g, (this.kwargs['fs']['leng'][i] != 'undefined'?this.kwargs['fs']['leng'][i]:'0'));

                if (this.kwargs['fe']['vf'][i] == 'on') {
                    out = out.replace(/{fe_vf_n}+/g, '\n     RECORD CONTAINS 0 CHARACTERS');
                } else {
                    out = out.replace(/{fe_vf_n}+/g, '');
                }

                out = out.replace(/{in}+/g       , 'ENTRADA');
                out = out.replace(/{out}+/g      , 'SALIDA ');

                //out = out.replace(/{}+/g, '');
            }
        }

        return out;
    }
/* Genera el programa */
    batch() {
        var out = '******************************************************************';
        //*
        out += '\n*                   DESCRIPCION DEL PROGRAMA'
            + '\n*                   ------------------------'
            + '\n*     NOMBRE      : ' + this.kwargs['name']
            + '\n*     FECHA       : ' + d + '-' + M + '-' + y
            + '\n*     AUTOR       : ACCENTURE'
            + '\n*     ENTORNO     : ' + this.kwargs['subpgm'].toUpperCase()
            + '\n*     LENGUAJE    : ENTERPRISE COBOL'
            + '\n*     DESCRIPCION : ' + this.kwargs['desc']
            + '{batchDB2}'
            + '{select_0}'
            + '{insert_0}'
            + '{delete_0}'
            + '{cursor_0}'
            + '{update_0}'
            + '\n******************************************************************'
            + '\n* LOG DE MODIFICACIONES DE SOFTWARE'
            + '\n******************************************************************'
            + '\n* L-0001 USUARIO:AXXXXXX FECHA: dd-mm-aaaa'
            + '\n* (Descripcion de la modificacion. En el programa se debe marcar'
            + '\n* aquello que se ha modificado entre L-0001-INI y L-0001-FIN)'
            + '\n*'
            + '\n* (0001 es el numero de incidencia asociado a la modificacion)'
            + '\n*'
            + '\n* (Para programas nuevos se marcar  como L-0000 y su descripcion'
            + '\n* ser  NUEVO PROGRAMA)'
            + '\n* L-0000 USUARIO:A000000 FECHA: ' + d + '-' + M + '-' + y
            + '\n* PROGRAMA NUEVO '
            + '\n*----'
            + '\n******************************************************************'
            + '\n* IDENTIFICATION DIVISION'
            + '\n******************************************************************'
            + '\n IDENTIFICATION DIVISION.'
            + '\n PROGRAM-ID. ' + this.kwargs['name']
            + '\n AUTHOR.     ACCENTURE.'
            + '\n DATE-WRITTEN.  ' + d + '-' + M + '-' + y
            + '\n******************************************************************'
            + '\n* ENVIRONMENT DIVISION'
            + '\n******************************************************************'
            + '\n ENVIRONMENT DIVISION.'
            + '\n CONFIGURATION  SECTION.'
            + '\n******************************************************************'
            + '\n SPECIAL-NAMES.'
            + '\n     DECIMAL-POINT IS COMMA.'
            + '\n SOURCE-COMPUTER.     IBM-3090.'
            + '\n OBJECT-COMPUTER.     IBM-3090.'
            + '\n INPUT-OUTPUT SECTION.'
            + '\n******************************************************************'
            + '\n FILE-CONTROL.'
            + this.repeat_text('\n*'
                + '\n*-- FICHERO CON FORMATO DE {fe_desc_n}'
                + '\n     SELECT F{c1}{###}{n}E'
                + '\n            ASSIGN TO F{c1}{###}{n}E'
                + '\n            ORGANIZATION IS SEQUENTIAL'
                + '\n            ACCESS MODE IS SEQUENTIAL'
                + '\n       FILE STATUS IS FS-F{c1}{###}{n}E.'
                , this.kwargs['fe']['id'])
            + this.repeat_text('\n*'
                + '\n*-- FICHERO CON FORMATO DE {fs_desc_n}'
                + '\n     SELECT F{c1}{###}{n}S'
                + '\n            ASSIGN TO F{c1}{###}{n}S'
                + '\n            ORGANIZATION IS SEQUENTIAL'
                + '\n            ACCESS MODE IS SEQUENTIAL'
                + '\n       FILE STATUS IS FS-F{c1}{###}{n}S.'
                , this.kwargs['fs']['id'])
            + '\n*'
            + '\n******************************************************************'
            + '\n* DATA DIVISION'
            + '\n******************************************************************'
            + '\n DATA DIVISION.'
            + '\n FILE SECTION.'
            + '\n******************************************************************'
            + this.repeat_text('\n*'
                + '\n*-- FICHERO DE {in} F{c1}{###}{n}E'
                + '\n FD F{c1}{###}{n}E'
                + '\n     RECORDING F'
                + '{fe_vf_n}'
                + '\n     BLOCK CONTAINS 0 RECORDS'
                + '\n     LABEL RECORDS STANDARD.'
                + '\n 01 RG-F{c1}{###}{n}E            PIC X({fe_leng_n}).'
                , this.kwargs['fe']['id'])
            + this.repeat_text('\n*'
                + '\n*-- FICHERO DE {out} F{c1}{###}{n}S'
                + '\n FD F{c1}{###}{n}S'
                + '\n     RECORDING F'
                + '\n     BLOCK CONTAINS 0 RECORDS'
                + '\n     LABEL RECORDS STANDARD.'
                + '\n 01 RG-F{c1}{###}{n}S            PIC X({fs_leng_n}).'
                , this.kwargs['fs']['id'])
            + '\n*'
            + '\n******************************************************************'
            + '\n* WORKING-STORAGE SECTION'
            + '\n******************************************************************'
            + '\n  WORKING-STORAGE SECTION.'
            + '\n*INC AUDIT. NO BORRAR DESDE AQUI HASTA FIN INCLUDE'
            + '\n 77 AUDIT-TRAIL PIC X(60) VALUE'
            + '\n     \'[** AUDIT ** ' + this.kwargs['name'] + '-A000000-' + y + M + d + '-' + h + m + s + '-           ]\'.'
            + '\n*FIN INC AUDIT.'
            + '\n******************************************************************'
            + '\n******************************************************************'
            + '\n* CONTROL DE FICHEROS'
            + '\n******************************************************************'
            + '\n 01 FS-FILESTATUS.'
            + '\n*'
            + '\n    05 FILLER                 PIC X(1).'
            + '\n*'
            + this.repeat_text(''
                + '\n    05 FS-F{c1}{###}{n}E            PIC X(02) VALUE SPACES.'
                , this.kwargs['fe']['id'])
            + '\n*'
            + this.repeat_text(''
                + '\n    05 FS-F{c1}{###}{n}S            PIC X(02) VALUE SPACES.'
                , this.kwargs['fs']['id'])
            + '\n*'
            + '\n******************************************************************'
            + '\n* SWITCHES'
            + '\n******************************************************************'
            + '\n 01 SWITCHES.'
            + '\n*'
            + '\n    05 SW-FIN-CURSOR          PIC X(01).'
            + '\n        88 SI-FIN-CURSOR                 VALUE \'S\'.'
            + '\n        88 NO-FIN-CURSOR                 VALUE \'N\'.'
            + '\n*'
            + '\n    05 SW-ENCONTRADO          PIC X(01).'
            + '\n        88 SI-ENCONTRADO                 VALUE \'S\'.'
            + '\n        88 NO-ENCONTRADO                 VALUE \'N\'.'
            + this.repeat_text('\n*'
                + '\n    05 SW-FIN-F{c1}{###}{n}E        PIC X(01).'
                + '\n        88 SI-FIN-F{c1}{###}{n}E               VALUE \'S\'.'
                + '\n        88 NO-FIN-F{c1}{###}{n}E               VALUE \'N\'.'
                , this.kwargs['fe']['id'])
            + '\n*'
            + '\n******************************************************************'
            + '\n* CONTADORES'
            + '\n******************************************************************'
            + '\n 01 CONTADORES.'
            + '\n*'
            + '\n    05 C-CONT                 PIC S9(09).'
            + '\n*'
            + this.repeat_text('\n    05 C-REG-F{c1}{###}{n}E         PIC S9(09).'
                , this.kwargs['fe']['id'])
            + '\n*'
            + this.repeat_text('\n    05 C-REG-F{c1}{###}{n}S         PIC S9(09).'
                , this.kwargs['fs']['id'])
            + this.kwargs['restart'][0]
            + '\n*'
            + '\n******************************************************************'
            + '\n* CONSTANTES'
            + '\n******************************************************************'
            + '\n 01 CTA-CONSTANTES.'
            + '\n* ALFANUMERICAS.'
            + '\n    05 CTA-ASTERISK           PIC X(80) VALUE ALL \'*\'.'
            + '\n    05 CTA-F                  PIC X(01) VALUE \'F\'.'
            + '\n    05 CTA-S                  PIC X(01) VALUE \'S\'.'
            + '\n    05 CTA-ES                 PIC X(02) VALUE \'ES\'.'
            + '\n    05 CTA-' + this.kwargs['uuaa'] + '               PIC X(04) VALUE \'' + this.kwargs['uuaa'] + '\'.'
            + '\n    05 CTA-' + this.kwargs['name'] + '           PIC X(08) VALUE \'' + this.kwargs['name'] + '\'.'
            + '\n    05 CTA-' + this.kwargs['nameTable'] + '           PIC X(08) VALUE \'' + this.kwargs['nameTable'] + '\'.'
            + '\n    05 CTA-VALIDA             PIC X(06) VALUE \'VALIDA\'.'
            + '\n    05 CTA-INSERT             PIC X(06) VALUE \'INSERT\'.'
            + '\n    05 CTA-UPDATE             PIC X(06) VALUE \'UPDATE\'.'
            + '\n    05 CTA-SELECT             PIC X(06) VALUE \'SELECT\'.'
            + '\n    05 CTA-DELETE             PIC X(06) VALUE \'DELETE\'.'
            + '\n    05 CTA-FETCH              PIC X(06) VALUE \'FETCH\'.'
            + '\n    05 CTA-OPEN               PIC X(06) VALUE \'OPEN\'.'
            + '\n    05 CTA-READ               PIC X(06) VALUE \'READ\'.'
            + '\n    05 CTA-WRITE              PIC X(06) VALUE \'WRITE\'.'
            + '\n    05 CTA-CLOSE              PIC X(06) VALUE \'CLOSE\'.'
            + '\n    05 CTA-CALL               PIC X(06) VALUE \'CALL\'.'
            + '\n    05 CTA-EMPTY              PIC X(06) VALUE \'EMPTY\'.'
            + '\n    05 CTA-COMMIT             PIC X(06) VALUE \'COMMIT\'.'
            + '\n    05 CTA-ROLLBACK           PIC X(08) VALUE \'ROLLBACK\'.'
            + '\n*'
            + '\n    05 CTA-QPIPRX28           PIC X(08) VALUE \'QPIPRX28\'.'
            + '\n    05 CTA-QPIPRX30           PIC X(08) VALUE \'QPIPRX30\'.'
            + '\n    05 CTA-QPBTRXRR           PIC X(08) VALUE \'QPBTRXRR\'.'
            + '\n    05 CTA-QPBTRXTA           PIC X(08) VALUE \'QPBTRXTA\'.'
            + this.kwargs['qpiprx35'][0]
            + this.kwargs['qpiprx36'][0]
            + this.kwargs['qpiprx37'][0]
            + this.kwargs['qpiprx38'][0]
            + this.kwargs['qpiprx80'][0]
            + '\n*'
            + '\n    05 CTA-120000-A           PIC X(08) VALUE \'120000-A\'.'
            + '\n    05 CTA-320000-C           PIC X(08) VALUE \'320000-C\'.'
            + '\n    05 CTA-500000-L           PIC X(08) VALUE \'500000-L\'.'
            + '\n    05 CTA-600000-E           PIC X(08) VALUE \'600000-E\'.'
            + '{select_1}'
            + '{insert_1}'
            + '{delete_1}'
            + '{cursor_1}'
            + '{update_1}'
            + '\n*'
            + this.repeat_text('\n    05 CTA-F{c1}{###}{n}E           PIC X(08) VALUE \'F{c1}{###}{n}E\'.'
                , this.kwargs['fe']['id'])
            + this.repeat_text('\n    05 CTA-F{c1}{###}{n}S           PIC X(08) VALUE \'F{c1}{###}{n}S\'.'
                , this.kwargs['fs']['id'])
            + '\n*'
            + this.repeat_text('\n    05 CTA-DES-F{c1}{###}{n}E       PIC X(30) VALUE'
                + '\n       \'FICH DE {fe_desc_n}\'.'
                , this.kwargs['fe']['id'])
            + this.repeat_text('\n    05 CTA-DES-F{c1}{###}{n}S       PIC X(30) VALUE'
                + '\n       \'FICH DE {fs_desc_n}\'.'
                , this.kwargs['fs']['id'])
            + '\n*'
            + '\n*----- [CONSTANTES ALFANUMERICAS NUEVAS]'
            + '\n*-'
            + '\n* NUMERICAS.'
            + '\n    05 CTN-N1                 PIC S9(1) VALUE -1.'
            + '\n    05 CTN-4                  PIC 9(01) VALUE 4.'
            + '\n    05 CTN-10                 PIC 9(02) VALUE 10.'
            + '\n*'
            + '\n*----- [CONSTANTES NUMERICAS DE ERROR]'
            + '\n* -> ERROR VALIDAR COD-FUNCION'
            + '\n    05 CTN-01309051           PIC 9(08) VALUE 01309051.'
            + '\n* -> ERROR VALIDAR FECHA'
            + '\n    05 CTN-01309049           PIC 9(08) VALUE 01309049.'
            + '\n* -> ERROR DB2'
            + '\n    05 CTN-01309201           PIC 9(08) VALUE 01309201.'
            + '\n    05 CTN-01309200           PIC 9(08) VALUE 01309200.'
            + '\n    05 CTN-00022002           PIC 9(08) VALUE 00022002.'
            + '\n    05 CTN-00167026           PIC 9(08) VALUE 00167026.'
            + '\n*'
            + '\n*----- [CONSTANTES NUMERICAS NUEVAS]'
            + this.kwargs['qpiprx35'][1]
            + this.kwargs['qpiprx36'][1]
            + this.kwargs['qpiprx37'][1]
            + this.kwargs['qpiprx80'][1]
            + this.kwargs['date_day'][0]
            + this.kwargs['restart'][1]
            + '\n*'
            + '\n******************************************************************'
            + '\n* VARIABLES'
            + '\n******************************************************************'
            + '\n 01 WS-VARIABLES.'
            + '\n*'
            + '\n    05 WS-PARRAFO             PIC X(08).'
            + '\n    05 WS-DES-SQLCA.'
            + '\n        10 FILLER             PIC X(12) VALUE \'ERROR EN EL \'.'
            + '\n        10 WS-ACCESO          PIC X(08).'
            + '\n        10 FILLER             PIC X(04) VALUE \' DE \'.'
            + '\n        10 WS-TABLA           PIC X(08).'
            + '\n        10 FILLER             PIC X(11) VALUE \'. ESTADO : \'.'
            + '\n        10 WS-FILE-STATUS     PIC 9(08).'
            + '\n*'
            + '\n    05 WS-IND                 PIC 9(09).'
            + '\n    05 WS-NUMBER              PIC S9(20)V9(9).'
            + '\n    05 WS-SYSIN               PIC X(80).'
            + '\n*'
            + '\n    05 WS-X08-FECHA.'
            + '\n        10 WS-AAAA            PIC 9(04).'
            + '\n        10 WS-MM              PIC 9(02).'
            + '\n        10 WS-DD              PIC 9(02).'
            + '\n*'
            + '\n    05 WS-X10-HORA.'
            + '\n        10 WS-HH              PIC 9(02).'
            + '\n        10 WS-MIN             PIC 9(02).'
            + '\n        10 WS-SS              PIC 9(02).'
            + '\n        10 WS-MMMM            PIC 9(06).'
            + '\n*'
            + '\n    05 WS-X26-FECHAHORA.'
            + '\n        10 WS-X10-FECHA.'
            + '\n            15 WS-AAAA        PIC 9(04).'
            + '\n            15 FILLER         PIC X(01) VALUE \'-\'.'
            + '\n            15 WS-MM          PIC 9(02).'
            + '\n            15 FILLER         PIC X(01) VALUE \'-\'.'
            + '\n            15 WS-DD          PIC 9(02).'
            + '\n        10 FILLER             PIC X(01) VALUE \'-\'.'
            + '\n        10 WS-X13-HORA.'
            + '\n            15 WS-HH          PIC 9(02).'
            + '\n            15 FILLER         PIC X(01) VALUE \'.\'.'
            + '\n            15 WS-MIN         PIC 9(02).'
            + '\n            15 FILLER         PIC X(01) VALUE \'.\'.'
            + '\n            15 WS-SS          PIC 9(02).'
            + '\n            15 FILLER         PIC X(01) VALUE \'.\'.'
            + '\n            15 WS-MMMM        PIC 9(06).'
            + '\n*'
            + '\n    05 WS-ACTUAL-FECHAHORA    PIC X(26).'
            + '\n*'
            + '\n*----- [VARIABLES NUEVAS]'
            + '{p_clv}'
            + this.kwargs['tonumber'][0]
            + this.kwargs['qpiprx35'][2]
            + this.kwargs['qpiprx37'][2]
            + this.kwargs['date_day'][1]
            + this.kwargs['chopped'][0]
            + '\n*-'
            + '\n******************************************************************'
            + '\n* TABLAS AUXILIAR'
            + '\n******************************************************************'
            + '\n*'
            + this.kwargs['chopped'][1]
            + this.kwargs['lookfor'][0]
            + this.kwargs['lookforoutfile'][0]
            + this.kwargs['qpiprx80'][2]
            + '{p_mn0}'
            + '\n*'
            + '\n******************************************************************'
            + '\n* COPYS'
            + '\n******************************************************************'
            + '\n*-- COPY DE CONSTANTES'
            + '\n COPY QPIPCCTE.'
            + '\n*'
            + '\n*-- COPY DE ENTRADA/SALIDA'
            + '\n COPY QPIPCCAB.'
            + '\n*'
            + '\n*-- COPY QUE UTILIZA EL MODULO DE ERRORES'
            + '\n COPY QPBTCXRR.'
            + '\n*'
            + '\n*-- COPY QUE UTILIZA EL MODULO DE ESTADISTICAS'
            + '\n COPY QPBTCXTA.'
            + '\n*'
            + '\n*-- COPY QUE UTILIZA EL MODULO DE FECHAS ESTANDAR'
            + '\n COPY QPIPCX30.'
            + '\n*'
            + '\n*-- COPY DEL MODULO QUE OBTIENE EL CONTEXTO BATCH'
            + '\n COPY QPIPCX28.'
            + this.kwargs['qpiprx35'][3]
            + this.kwargs['qpiprx36'][2]
            + this.kwargs['qpiprx37'][3]
            + this.kwargs['qpiprx38'][1]
            + this.kwargs['qpiprx80'][3]
            + this.repeat_text('\n*'
                + '\n*-- COPY DEL FICHERO DE {in} F{c1}{###}{n}E'
                + '\n*01 C{n}E                      PIC X({fe_leng_n}) VALUE SPACES.'
                + '\n COPY {fe_copy_n} REPLACING C000-{fe_copy_n} BY C{n}E.'
                + '\n*    ==(01)== BY ==(01)==    == 01 == BY == 02 ==.'
                , this.kwargs['fe']['id'])
            + this.repeat_text('\n*'
                + '\n*-- COPY DEL FICHERO DE {out} F{c1}{###}{n}S'
                + '\n*01 C{n}S                      PIC X({fs_leng_n}) VALUE SPACES.'
                + '\n COPY {fs_copy_n} REPLACING C000-{fs_copy_n} BY C{n}S.'
                + '\n*    ==(01)== BY ==(01)==    == 01 == BY == 02 ==.'
                , this.kwargs['fs']['id'])
            + '\n*'
            + '\n******************************************************************'
            + '\n* INCLUDES DE TABLAS'
            + '\n******************************************************************'
            + '\n*'
            + '{nameTable}'
            + '{cursor_5}'
            + '\n*'
            + '\n******************************************************************'
            + '\n* PROCEDURE DIVISION'
            + '\n******************************************************************'
            + '\n PROCEDURE DIVISION.'
            + '\n*'
            + '\n     PERFORM 100000-INICIO'
            + '\n*'
            + '\n     PERFORM 200000-PROCESO'
            + '{p_until}'
            + '\n*'
            + '\n     PERFORM 300000-FIN'
            + '\n     .'
            + '\n*'
            + '\n******************************************************************'
            + '\n* 100000-INICIO'
            + '\n******************************************************************'
            + '\n 100000-INICIO.'
            + '\n*'
            + '\n     INITIALIZE RETORNO-QPIPCCAB'
            + '\n                R-QPBTCXRR'
            + '\n                R-QPBTCXTA'
            + '\n                WS-VARIABLES'
            + '\n                CONTADORES'
            + this.repeat_text('\n                C{n}E'
                , this.kwargs['fe']['id'])
            + this.repeat_text('\n                C{n}S'
                , this.kwargs['fs']['id'])
            + '\n*'
            + '\n     MOVE ZEROES              TO WS-IND'
            + '\n*'
            + this.repeat_text('\n     SET NO-FIN-F{c1}{###}{n}E      TO TRUE'
                , this.kwargs['fe']['id'])
            + '\n*'
            + '\n     PERFORM 110000-DATOS-CONTEXTO-BATCH'
            + '\n     PERFORM 120000-ABRIR-FICHEROS'
            + '\n*'
            + '\n     ACCEPT WS-SYSIN          FROM SYSIN'
            + '\n*'
            + this.repeat_text('\n     PERFORM 500000-LEER-F{c1}{###}{n}E'
                , this.kwargs['fe']['id'])
            + '\n*'
            + this.kwargs['lookfor'][1]
            + '{p_mn1}'
            + this.kwargs['qpiprx80'][4]
            + this.kwargs['restart'][2]
            + '\n     .'
            + '\n*'
            + '\n******************************************************************'
            + '\n* 110000-DATOS-CONTEXTO-BATCH'
            + '\n******************************************************************'
            + '\n  110000-DATOS-CONTEXTO-BATCH.'
            + '\n*'
            + '\n     PERFORM 110100-RECUPERAR-CONTEXTO'
            + '\n     PERFORM 800000-FECHA-SISTEMA'
            + '\n     MOVE WS-X26-FECHAHORA    TO WS-ACTUAL-FECHAHORA'
            + '\n     PERFORM 110200-MOVER-DATOS-ESTRUCTURA'
            + '\n     .'
            + '\n*'
            + '\n******************************************************************'
            + '\n* 110100-RECUPERAR-CONTEXTO'
            + '\n******************************************************************'
            + '\n 110100-RECUPERAR-CONTEXTO.'
            + '\n*'
            + '\n     INITIALIZE RETORNO-QPIPCCAB'
            + '\n                R-QPIPCX28'
            + '\n*'
            + '\n     MOVE CTN-1                    TO COD-SERVICIO-QPIPCCAB'
            + '\n*'
            + '\n     CALL CTA-QPIPRX28 USING R-QPIPCCAB R-QPIPCX28'
            + '\n*'
            + '\n     IF XTI-AVIERROR-QPIPCCAB NOT EQUAL SPACES'
            + '\n        PERFORM 999999-FIN-ERROR'
            + '\n     END-IF'
            + '\n     .'
            + '\n*'
            + '\n******************************************************************'
            + '\n* 110200-MOVER-DATOS-ESTRUCTURA'
            + '\n******************************************************************'
            + '\n 110200-MOVER-DATOS-ESTRUCTURA.'
            + '\n*'
            + '\n     INITIALIZE RETORNO-QPIPCCAB'
            + '\n                R-QPBTCXTA'
            + '\n*'
            + '\n     MOVE COD-PGMBATCH-QPIPCX28    TO COD-PROGRAMA-QPIPCCAB'
            + '\n     MOVE COD-PGMBATCH-QPIPCX28    TO COD-APLICACI-QPIPCCAB'
            + '\n     MOVE WS-X08-FECHA             TO FEC-CONTABLE-QPIPCCAB'
            + '\n     MOVE WS-X08-FECHA             TO FEC-PROCESO-QPIPCCAB'
            + '\n     MOVE WS-X10-HORA              TO HMS-PROCESO-QPIPCCAB'
            + '\n     MOVE COD-PAISOALF-QPIPCX28    TO COD-PAIS-QPIPCCAB'
            + '\n     MOVE COD-ENTIALFA-QPIPCX28    TO COD-BANCO-QPIPCCAB'
            + '\n     MOVE COD-MAQUINA-QPIPCX28     TO COD-PUESTO-QPIPCCAB'
            + '\n     MOVE COD-IDISOALF-QPIPCX28    TO COD-IDIOMA-QPIPCCAB'
            + '\n     MOVE COD-JOBNAME-QPIPCX28     TO COD-USUARIO-QPIPCCAB'
            + '\n     MOVE COD-ENTIALFA-QPIPCX28    TO COD-BANCO-OPER-QPIPCCAB'
            + '\n     MOVE CTA-S                    TO XSN-BATCH-QPIPCCAB'
            + '\n*'
            + '\n     MOVE COD-PAISOALF-QPIPCX28    TO COD-PAIS-QPBTCXTA'
            + '\n     MOVE COD-ENTIALFA-QPIPCX28    TO COD-ENTIDAD-QPBTCXTA'
            + '\n     MOVE COD-PGMBATCH-QPIPCX28    TO COD-APLICACI-QPBTCXTA'
            + '\n     MOVE COD-JOBNAME-QPIPCX28     TO COD-JOBNAME-QPBTCXTA'
            + '\n     MOVE COD-PGMBATCH-QPIPCX28    TO COD-PROGRAMA-QPBTCXTA'
            + '\n     MOVE WS-X10-HORA              TO HMS-HORAINI-QPBTCXTA'
            + '\n     MOVE WS-X08-FECHA             TO FEC-FECHAINI-QPBTCXTA'
            + '\n*'
            + '\n     MOVE ZEROS                    TO WS-IND'
            + this.repeat_text('\n*'
                + '\n     ADD  CTN-1            TO WS-IND'
                + '\n     MOVE CTA-{in}      TO XTI-ENTSAL-QPBTCXTA(WS-IND)'
                + '\n     MOVE CTA-F{c1}{###}{n}E     TO COD-ORIGEN-QPBTCXTA(WS-IND)'
                + '\n     MOVE CTA-DES-F{c1}{###}{n}E TO DES-ORIGEN-QPBTCXTA(WS-IND)'
                , (this.kwargs['fe']['id'] >= 10?10:this.kwargs['fe']['id']))
            + this.repeat_text('\n*'
                + '\n     ADD  CTN-1            TO WS-IND'
                + '\n     MOVE CTA-{out}      TO XTI-ENTSAL-QPBTCXTA(WS-IND)'
                + '\n     MOVE CTA-F{c1}{###}{n}S     TO COD-ORIGEN-QPBTCXTA(WS-IND)'
                + '\n     MOVE CTA-DES-F{c1}{###}{n}S TO DES-ORIGEN-QPBTCXTA(WS-IND)'
                , (((this.kwargs['fe']['id'] < 10) && ((this.kwargs['fe']['id'] + this.kwargs['fs']['id']) >= 10))?10 - (this.kwargs['fe']['id'] >= 10?10:this.kwargs['fe']['id']):this.kwargs['fs']['id']))
            + '\n     .'
            + '\n*'
            + '\n******************************************************************'
            + '\n* 120000-ABRIR-FICHEROS'
            + '\n******************************************************************'
            + '\n 120000-ABRIR-FICHEROS.'
            + '\n*'
            + this.repeat_text('\n     {open} {input}  F{c1}{###}{n}E'
                , this.kwargs['fe']['id'])
            + this.repeat_text('\n     ' + (this.kwargs['fe']['id'] > 0?'    ':'{open}') + ' {output} F{c1}{###}{n}S'
                , this.kwargs['fs']['id'])
            + this.repeat_text('\n*'
                + '\n     IF FS-F{c1}{###}{n}E NOT EQUAL ZEROS'
                + '\n        MOVE CTA-F                   TO XTI-AVIERROR-QPIPCCAB'
                + '\n        MOVE CTA-120000-A            TO WS-PARRAFO'
                + '\n        MOVE CTA-OPEN                TO WS-ACCESO'
                + '\n        MOVE CTA-F{c1}{###}{n}E            TO WS-TABLA'
                + '\n        MOVE FS-F{c1}{###}{n}E             TO WS-FILE-STATUS'
                + '\n*'
                + '\n        PERFORM 999999-FIN-ERROR'
                + '\n     END-IF'
                , this.kwargs['fe']['id'])
            + this.repeat_text('\n*'
                + '\n     IF FS-F{c1}{###}{n}S NOT EQUAL ZEROS'
                + '\n        MOVE CTA-F                   TO XTI-AVIERROR-QPIPCCAB'
                + '\n        MOVE CTA-120000-A            TO WS-PARRAFO'
                + '\n        MOVE CTA-OPEN                TO WS-ACCESO'
                + '\n        MOVE CTA-F{c1}{###}{n}S            TO WS-TABLA'
                + '\n        MOVE FS-F{c1}{###}{n}S             TO WS-FILE-STATUS'
                + '\n*'
                + '\n        PERFORM 999999-FIN-ERROR'
                + '\n     END-IF'
                , this.kwargs['fs']['id'])
            + '\n     .'
            + this.kwargs['lookfor'][2]
            + '\n*'
            + '\n******************************************************************'
            + '\n* 200000-PROCESO'
            + '\n******************************************************************'
            + '\n 200000-PROCESO.'
            + '\n*'
            + this.kwargs['qpiprx80'][5]
            + this.kwargs['restart'][3]
            + '{p_join}'
            + '\n     .'
            + '{select_4}'
            + '{insert_4}'
            + '{delete_4}'
            + '{cursor_4}'
            + '{update_4}'
            + '\n*'
            + '\n******************************************************************'
            + '\n* 400000-INFORMAR-DCLGEN'
            + '\n******************************************************************'
            + '\n 400000-INFORMAR-DCLGEN.'
            + '\n*'
            + '\n     .'
            + '\n*'
            + '\n******************************************************************'
            + '\n* 300000-FIN'
            + '\n******************************************************************'
            + '\n 300000-FIN.'
            + '\n*'
            + '\n     PERFORM 310000-ESTADISTICAS'
            + '\n     PERFORM 320000-CERRAR-FICHEROS'
            + '\n*'
            + '\n     STOP RUN'
            + '\n     .'
            + '\n*'
            + '\n******************************************************************'
            + '\n* 310000-ESTADISTICAS'
            + '\n******************************************************************'
            + '\n 310000-ESTADISTICAS.'
            + '\n*'
            + '\n     PERFORM 800000-FECHA-SISTEMA'
            + '\n*'
            + '\n     MOVE WS-X10-HORA      TO HMS-HORAFIN-QPBTCXTA'
            + '\n     MOVE WS-X08-FECHA     TO FEC-FECHAFIN-QPBTCXTA'
            + '\n*'
            + '\n     MOVE ZEROS            TO WS-IND'
            + this.repeat_text('\n*'
                + '\n     ADD  CTN-1            TO WS-IND'
                + '\n     MOVE C-REG-F{c1}{###}{n}E   TO QNU-PROCES-QPBTCXTA(WS-IND)'
                , (this.kwargs['fe']['id'] >= 10?10:this.kwargs['fe']['id']))
            + this.repeat_text('\n*'
                + '\n     ADD  CTN-1            TO WS-IND'
                + '\n     MOVE C-REG-F{c1}{###}{n}S   TO QNU-PROCES-QPBTCXTA(WS-IND)'
                , (((this.kwargs['fe']['id'] < 10) && ((this.kwargs['fe']['id'] + this.kwargs['fs']['id']) >= 10))?10 - (this.kwargs['fe']['id'] >= 10?10:this.kwargs['fe']['id']):this.kwargs['fs']['id']))
            + '\n*'
            + '\n     CALL CTA-QPBTRXTA USING R-QPIPCCAB R-QPBTCXTA'
            + '\n     .'
            + '\n*'
            + '\n******************************************************************'
            + '\n* 320000-CERRAR-FICHEROS'
            + '\n******************************************************************'
            + '\n 320000-CERRAR-FICHEROS.'
            + '\n*'
            + this.repeat_text('\n     {close} F{c1}{###}{n}E'
                , this.kwargs['fe']['id'])
            + this.repeat_text('\n     ' + (this.kwargs['fe']['id'] > 0?'     ':'{close}') + ' F{c1}{###}{n}S'
                , this.kwargs['fs']['id'])
            + this.repeat_text('\n*'
                + '\n     IF FS-F{c1}{###}{n}E NOT EQUAL ZEROS'
                + '\n        MOVE CTA-F                   TO XTI-AVIERROR-QPIPCCAB'
                + '\n        MOVE CTA-320000-C            TO WS-PARRAFO'
                + '\n        MOVE CTA-CLOSE               TO WS-ACCESO'
                + '\n        MOVE CTA-F{c1}{###}{n}E            TO WS-TABLA'
                + '\n        MOVE FS-F{c1}{###}{n}E             TO WS-FILE-STATUS'
                + '\n*'
                + '\n        PERFORM 999999-FIN-ERROR'
                + '\n     END-IF'
                , this.kwargs['fe']['id'])
            + this.repeat_text('\n*'
                + '\n     IF FS-F{c1}{###}{n}S NOT EQUAL ZEROS'
                + '\n        MOVE CTA-F                   TO XTI-AVIERROR-QPIPCCAB'
                + '\n        MOVE CTA-320000-C            TO WS-PARRAFO'
                + '\n        MOVE CTA-CLOSE               TO WS-ACCESO'
                + '\n        MOVE CTA-F{c1}{###}{n}S            TO WS-TABLA'
                + '\n        MOVE FS-F{c1}{###}{n}S             TO WS-FILE-STATUS'
                + '\n*'
                + '\n        PERFORM 999999-FIN-ERROR'
                + '\n     END-IF'
                , this.kwargs['fs']['id'])
            + '\n     .'
            + this.repeat_text('\n*'
                + '\n******************************************************************'
                + '\n* 500000-LEER-F{c1}{###}{n}E'
                + '\n******************************************************************'
                + '\n 500000-LEER-F{c1}{###}{n}E.'
                + '\n*'
                + '\n     INITIALIZE C{n}E'
                + '\n*'
                + '\n     READ F{c1}{###}{n}E INTO C{n}E'
                + '\n        AT END'
                + '\n            SET SI-FIN-F{c1}{###}{n}E      TO TRUE'
                + '{hv}'
                + '\n        NOT AT END'
                + '\n            IF FS-F{c1}{###}{n}E EQUAL ZEROS'
                + '\n                ADD CTN-1            TO C-REG-F{c1}{###}{n}E'
                + '{corr}'
                + '\n            END-IF'
                + '\n     END-READ'
                + '\n'
                + '\n     IF FS-F{c1}{###}{n}E NOT EQUAL ZEROS AND CTA-FS-FIN-FICHERO'
                + '\n        MOVE CTA-F           TO XTI-AVIERROR-QPIPCCAB'
                + '\n        MOVE CTA-500000-L    TO WS-PARRAFO'
                + '\n        MOVE CTA-READ        TO WS-ACCESO'
                + '\n        MOVE CTA-F{c1}{###}{n}E    TO WS-TABLA'
                + '\n        MOVE FS-F{c1}{###}{n}E     TO WS-FILE-STATUS'
                + '\n*'
                + '\n        PERFORM 999999-FIN-ERROR'
                + '\n     END-IF'
                + '\n     .'
                , this.kwargs['fe']['id'])
            + this.repeat_text('\n*'
                + '\n******************************************************************'
                + '\n* 600000-ESCRIBIR-F{c1}{###}{n}S'
                + '\n******************************************************************'
                + '\n 600000-ESCRIBIR-F{c1}{###}{n}S.'
                + '\n*'
                + '\n     WRITE RG-F{c1}{###}{n}S FROM C{n}S'
                + '\n*'
                + '\n     IF FS-F{c1}{###}{n}S EQUAL ZEROS'
                + '\n        ADD CTN-1                    TO C-REG-F{c1}{###}{n}S'
                + '\n        INITIALIZE C{n}S'
                + '\n*'
                + '\n     ELSE'
                + '\n        MOVE CTA-F                   TO XTI-AVIERROR-QPIPCCAB'
                + '\n        MOVE CTA-600000-E            TO WS-PARRAFO'
                + '\n        MOVE CTA-WRITE               TO WS-ACCESO'
                + '\n        MOVE CTA-F{c1}{###}{n}S            TO WS-TABLA'
                + '\n        MOVE FS-F{c1}{###}{n}S             TO WS-FILE-STATUS'
                + '\n*'
                + '\n        PERFORM 999999-FIN-ERROR'
                + '\n     END-IF'
                + '\n     .'
                , this.kwargs['fs']['id'])
            + '\n*'
            + '\n******************************************************************'
            + '\n* 800000-FECHA-SISTEMA'
            + '\n******************************************************************'
            + '\n 800000-FECHA-SISTEMA.'
            + '\n*'
            + '\n     INITIALIZE RETORNO-QPIPCCAB'
            + '\n                R-QPIPCX30'
            + '\n*'
            + '\n     MOVE CTN-4                     TO COD-SERVICIO-QPIPCCAB'
            + '\n*'
            + '\n     CALL CTA-QPIPRX30 USING R-QPIPCCAB R-QPIPCX30'
            + '\n*'
            + '\n     IF XTI-AVIERROR-QPIPCCAB NOT EQUAL SPACES'
            + '\n        PERFORM 999999-FIN-ERROR'
            + '\n     END-IF'
            + '\n'
            + '\n     MOVE FEC-SIS4-QPIPCX30         TO WS-X26-FECHAHORA'
            + '\n     MOVE CORR WS-X10-FECHA         TO WS-X08-FECHA'
            + '\n     MOVE CORR WS-X13-HORA          TO WS-X10-HORA'
            + '\n     .'
            + this.kwargs['rutina'][0]
            + this.kwargs['tonumber'][1]
            + this.kwargs['qpiprx35'][4]
            + this.kwargs['qpiprx36'][3]
            + this.kwargs['qpiprx37'][4]
            + this.kwargs['qpiprx38'][2]
            + this.kwargs['qpiprx80'][6]
            + this.kwargs['date_day'][2]
            + this.kwargs['chopped'][2]
            + this.kwargs['lookfor'][3]
            + this.kwargs['lookforoutfile'][1]
            + this.kwargs['restart'][4]
            + '\n*'
            + '\n******************************************************************'
            + '\n* 910000-INFORMAR-ERROR'
            + '\n******************************************************************'
            + '\n 910000-INFORMAR-ERROR.'
            + '\n*'
            + ((kwargs['restart'] && this.kwargs['subpgm'] == 'batchDB2')?''
                + '\n     IF WS-FILE-STATUS EQUAL CTN-01309201'
                + '\n        PERFORM 700000-ROLLBACK'
                + '\n     END-IF'
                + '\n*'
            :'')
            + '\n     PERFORM VARYING WS-IND FROM CTN-1 BY CTN-1'
            + '\n               UNTIL WS-IND GREATER CTN-10'
            + '\n                  OR XTI-ENTSAL-QPBTCXRR(WS-IND) EQUAL SPACES'
            + '\n        MOVE DATOS-QPBTCXTA(WS-IND) TO ESTADO-QPBTCXRR(WS-IND)'
            + '\n     END-PERFORM'
            + '\n*'
            + '\n     MOVE ZEROS            TO WS-IND'
            + this.repeat_text('\n*'
                + '\n     ADD  CTN-1            TO WS-IND'
                + '\n     MOVE C-REG-F{c1}{###}{n}E   TO QNU-PROCES-QPBTCXRR(WS-IND)'
                , (this.kwargs['fe']['id'] >= 10?10:this.kwargs['fe']['id']))
            + this.repeat_text('\n*'
                + '\n     ADD  CTN-1            TO WS-IND'
                + '\n     MOVE C-REG-F{c1}{###}{n}S   TO QNU-PROCES-QPBTCXRR(WS-IND)'
                , (((this.kwargs['fe']['id'] < 10) && ((this.kwargs['fe']['id'] + this.kwargs['fs']['id']) >= 10))?10 - (this.kwargs['fe']['id'] >= 10?10:this.kwargs['fe']['id']):this.kwargs['fs']['id']))
            + '\n     .'
            + '\n*'
            + '\n******************************************************************'
            + '\n* 999999-FIN-ERROR'
            + '\n******************************************************************'
            + '\n 999999-FIN-ERROR.'
            + '\n*'
            + '\n     INITIALIZE R-QPBTCXRR'
            + '\n*'
            + '\n     MOVE CTA-' + this.kwargs['name'] + ' TO COD-PROGRAMA-QPIPCCAB'
            + '\n     MOVE CTA-' + this.kwargs['uuaa'] + '     TO COD-APLICACI-QPIPCCAB'
            + '\n*'
            + '\n     IF WS-PARRAFO NOT EQUAL SPACES'
            + '\n        MOVE WS-FILE-STATUS TO COD-AVIERROR-QPIPCCAB'
            + '\n        MOVE CTA-' + this.kwargs['name'] + '   TO COD-MODULO-ERR-QPIPCCAB'
            + '\n        MOVE WS-PARRAFO     TO COD-PARRAFO-ERR-QPIPCCAB'
            + '\n        MOVE WS-TABLA       TO COD-TABLA-ERR-QPIPCCAB'
            + '\n        MOVE WS-ACCESO      TO COD-ACCESO-ERR-QPIPCCAB'
            + '\n        MOVE WS-DES-SQLCA   TO DES-SQLCA-ERR-QPIPCCAB'
            + '\n     END-IF'
            + '\n*'
            + '\n     PERFORM 910000-INFORMAR-ERROR'
            + '\n*'
            + '\n     CALL CTA-QPBTRXRR USING R-QPIPCCAB R-QPBTCXRR'
            + '\n     .'
            + '\n*'
            + '\n******************************************************************'
            + '\n*                       FIN DEL PROGRAMA'
            + '\n******************************************************************'
            + '';
        //*
        var p_clv   = '';
        var p_join  = '';
        var p_until = '';
        var p_mn0   = '';
        var p_mn1   = '';

        switch (this.kwargs['join']) {
            case '':
                p_join  = '\n*'
                    + this.repeat_text('\n     PERFORM 500000-LEER-F{c1}{##e}{n}E', this.kwargs['fe']['id']);
                p_until = ''
                    + this.repeat_text('\n       {until} SI-FIN-F{c1}{##e}{n}E', this.kwargs['fe']['id']);

                if (kwargs['restart'] && this.kwargs['subpgm'] == 'batchDB2') {
                    p_clv   = ''
                        + '\n    05 WS-C{##n}01E.'
                        + '\n        10 FILLER             PIC X(80).'
                        + '\n*'
                        + '\n    05 WS-C{##n}02E.'
                        + '\n        10 FILLER             PIC X(80).'
                        + '\n*';
                    p_until = ''
                        + this.repeat_text('\n       {until} SI-FIN-F{c1}{##e}{n}E', 1);
                    p_join  = '\n*'
                        + this.repeat_text('\n     PERFORM 500000-LEER-F{c1}{##e}{n}E', 1);
                }        

                break;
            case 'A':
                p_clv   = ''
                    + '\n    05 WS-C{##n}01E.'
                    + '\n        10 FILLER             PIC X(80).'
                    + '\n*'
                    + '\n    05 WS-C{##n}02E.'
                    + '\n        10 FILLER             PIC X(80).'
                    + '\n*'
                    + '\n    05 WS-ACUM.'
                    + '\n        10 WS-[...]           PIC S9(20)V9(09).'
                    + '\n*';
                p_join  = ''
                    + '\n     ADD [...] OF C{##n}01E        TO [...] OF WS-ACUM'
                    + '\n*'
                    + this.repeat_text('\n     PERFORM 500000-LEER-F{c1}{##e}{n}E', 1)
                    + '\n*'
                    + '\n     IF WS-C{##n}01E EQUAL WS-C{##n}02E'
                    + '\n*'
                    + '\n     END-IF';
                p_until = ''
                    + this.repeat_text('\n       {until} SI-FIN-F{c1}{##e}{n}E', 1);
                p_mn1   = ''
                    + '\n     MOVE WS-C{##n}01E             TO WS-C{##n}02E';
                break;
            case '11':
                p_clv   = ''
                    + '\n    05 WS-C{##n}01E.'
                    + '\n        10 FILLER             PIC X(80).'
                    + '\n*'
                    + '\n    05 WS-C{##n}02E.'
                    + '\n        10 FILLER             PIC X(80).'
                    + '\n*';
                p_join  = ''
                    + '\n     IF WS-C{##n}01E EQUAL WS-C{##n}02E'
                    + '\n*'
                    + this.repeat_text('\n        PERFORM 500000-LEER-F{c1}{##e}{n}E', 2)
                    + '\n     ELSE'
                    + '\n        IF WS-C{##n}01E LESS WS-C{##n}02E'
                    + '\n*'
                    + '\n            PERFORM 500000-LEER-F{c1}{##e}01E'
                    + '\n        ELSE'
                    + '\n*'
                    + '\n            PERFORM 500000-LEER-F{c1}{##e}02E'
                    + '\n        END-IF'
                    + '\n     END-IF';
                p_until = ''
                    + this.repeat_text('\n       {until} SI-FIN-F{c1}{##e}{n}E', 2);
                break;
            case 'N1':
                p_clv   = ''
                    + '\n    05 WS-C{##n}01E.'
                    + '\n        10 FILLER             PIC X(80).'
                    + '\n*'
                    + '\n    05 WS-C{##n}02E.'
                    + '\n        10 FILLER             PIC X(80).'
                    + '\n*';
                p_join  = ''
                    + '\n     IF WS-C{##n}01E EQUAL WS-C{##n}02E'
                    + '\n        PERFORM UNTIL (WS-C{##n}01E NOT EQUAL WS-C{##n}02E)'
                    + '\n                  OR (SI-FIN-F{c1}{##e}01E)'
                    + '\n*'
                    + '\n           PERFORM 500000-LEER-F{c1}{##e}01E'
                    + '\n        END-PERFORM'
                    + '\n*'
                    + '\n        PERFORM 500000-LEER-F{c1}{##e}02E'
                    + '\n     ELSE'
                    + '\n        IF WS-C{##n}01E LESS WS-C{##n}02E'
                    + '\n*'
                    + '\n            PERFORM 500000-LEER-F{c1}{##e}01E'
                    + '\n        ELSE'
                    + '\n*'
                    + '\n            PERFORM 500000-LEER-F{c1}{##e}02E'
                    + '\n        END-IF'
                    + '\n     END-IF';
                p_until = ''
                    + this.repeat_text('\n       {until} SI-FIN-F{c1}{##e}{n}E', 2);
                break;
            case '1N':
                p_clv   = ''
                    + '\n    05 WS-C{##n}01E.'
                    + '\n        10 FILLER             PIC X(80).'
                    + '\n*'
                    + '\n    05 WS-C{##n}02E.'
                    + '\n        10 FILLER             PIC X(80).'
                    + '\n*';
                p_join  = ''
                    + '\n     IF WS-C{##n}01E EQUAL WS-C{##n}02E'
                    + '\n        PERFORM UNTIL (WS-C{##n}01E NOT EQUAL WS-C{##n}02E)'
                    + '\n                  OR (SI-FIN-F{c1}{##e}02E)'
                    + '\n*'
                    + '\n           PERFORM 500000-LEER-F{c1}{##e}02E'
                    + '\n        END-PERFORM'
                    + '\n*'
                    + '\n        PERFORM 500000-LEER-F{c1}{##e}01E'
                    + '\n     ELSE'
                    + '\n        IF WS-C{##n}01E LESS WS-C{##n}02E'
                    + '\n*'
                    + '\n            PERFORM 500000-LEER-F{c1}{##e}01E'
                    + '\n        ELSE'
                    + '\n*'
                    + '\n            PERFORM 500000-LEER-F{c1}{##e}02E'
                    + '\n        END-IF'
                    + '\n     END-IF';
                p_until = ''
                    + this.repeat_text('\n       {until} SI-FIN-F{c1}{##e}{n}E', 2);
                break;
            case 'NM':
                p_clv   = ''
                    + '\n    05 WS-C{##n}01E.'
                    + '\n        10 FILLER             PIC X(80).'
                    + '\n*'
                    + '\n    05 WS-C{##n}02E.'
                    + '\n        10 FILLER             PIC X(80).'
                    + '\n*'
                    + '\n    05 WS-C{##n}02T.'
                    + '\n        10 FILLER             PIC X(80).'
                    + '\n*'
                    + '\n    05 WS-C{##n}02A.'
                    + '\n        10 FILLER             PIC X(80).'
                    + '\n*';
                p_join  = ''
                    + '\n     IF WS-C{##n}01E EQUAL WS-C{##n}02E'
                    + '\n        PERFORM UNTIL (WS-C{##n}02E NOT EQUAL WS-C{##n}02A)'
                    + '\n                  OR (SI-FIN-F{c1}{##e}02E)'
                    + '\n*'
                    + '\n           ADD  CTN-1     TO TB-F{c1}{##e}02E-LENGTH'
                    + '\n           MOVE C{##n}02E TO T{##n}02E(TB-F{c1}{##e}02E-LENGTH)'
                    + '\n           PERFORM 500000-LEER-F{c1}{##e}02E'
                    + '\n        END-PERFORM'
                    + '\n'
                    + '\n        MOVE CORR T{##n}02E(CTN-1) TO WS-C{##n}02T'
                    + '\n'
                    + '\n        PERFORM UNTIL (WS-C{##n}01E NOT EQUAL WS-C{##n}02T)'
                    + '\n                OR (SI-FIN-F{c1}{##e}01E)'
                    + '\n            PERFORM VARYING WS-IND FROM CTN-1 BY CTN-1'
                    + '\n                      UNTIL WS-IND GREATER TB-F{c1}{##e}02E-LENGTH'
                    + '\n                MOVE CORR T{##n}02E(WS-IND)  TO WS-C{##n}02T'
                    + '\n            END-PERFORM'
                    + '\n*'
                    + '\n            PERFORM 500000-LEER-F{c1}{##e}01E'
                    + '\n        END-PERFORM'
                    + '\n*'
                    + '\n        INITIALIZE TABLA-F{c1}{##e}02E'
                    + '\n        MOVE WS-C{##n}02E          TO WS-C{##n}02A'
                    + '\n     ELSE'
                    + '\n        IF WS-C{##n}01E LESS WS-C{##n}02E'
                    + '\n*'
                    + '\n            PERFORM 500000-LEER-F{c1}{##e}01E'
                    + '\n        ELSE'
                    + '\n*'
                    + '\n            PERFORM 500000-LEER-F{c1}{##e}02E'
                    + '\n            MOVE WS-C{##n}02E      TO WS-C{##n}02A'
                    + '\n        END-IF'
                    + '\n     END-IF';
                p_until = ''
                    + this.repeat_text('\n       {until} SI-FIN-F{c1}{##e}{n}E', 2);
                p_mn0   = ''
                    + '\n 01 TABLA-F{c1}{##e}02E.'
                    + '\n*'
                    + '\n    02 TB-F{c1}{##e}02E-LENGTH     PIC 9(07) VALUE ZEROS.'
                    + '\n    02 TB-F{c1}{##e}02E    OCCURS 9999999 TIMES.'
                    + '\n*-- COPY DEL FICHERO DE ENTRADA F{c1}{##e}02E'
                    + '\n*       03 T{##n}02E               PIC X({fe_leng_02}) VALUE SPACES.'
                    + '\n COPY {fe_copy_02} REPLACING C000-{fe_copy_02} BY T{##n}02E.'
                    + '\n*    ==(##)== BY ==(##)==    == ## == BY == 04 ==.'
                    + '\n*    ==(01)== BY ==(01)==    == 01 == BY == 03 ==.';
                p_mn1   = ''
                    + '\n     MOVE WS-C{##n}02E             TO WS-C{##n}02A';
                break;
            case 'MN':
                p_clv   = ''
                    + '\n    05 WS-C{##n}01E.'
                    + '\n        10 FILLER             PIC X(80).'
                    + '\n*'
                    + '\n    05 WS-C{##n}02E.'
                    + '\n        10 FILLER             PIC X(80).'
                    + '\n*'
                    + '\n    05 WS-C{##n}01T.'
                    + '\n        10 FILLER             PIC X(80).'
                    + '\n*'
                    + '\n    05 WS-C{##n}01A.'
                    + '\n        10 FILLER             PIC X(80).'
                    + '\n*';
                p_join  = ''
                    + '\n     IF WS-C{##n}01E EQUAL WS-C{##n}02E'
                    + '\n        PERFORM UNTIL (WS-C{##n}01E NOT EQUAL WS-C{##n}01A)'
                    + '\n                  OR (SI-FIN-F{c1}{##e}01E)'
                    + '\n*'
                    + '\n           ADD  CTN-1     TO TB-F{c1}{##e}01E-LENGTH'
                    + '\n           MOVE C{##n}01E TO T{##n}01E(TB-F{c1}{##e}01E-LENGTH)'
                    + '\n           PERFORM 500000-LEER-F{c1}{##e}01E'
                    + '\n        END-PERFORM'
                    + '\n'
                    + '\n        MOVE CORR T{##n}01E(CTN-1) TO WS-C{##n}01T'
                    + '\n'
                    + '\n        PERFORM UNTIL (WS-C{##n}01E NOT EQUAL WS-C{##n}01T)'
                    + '\n                OR (SI-FIN-F{c1}{##e}01E)'
                    + '\n            PERFORM VARYING WS-IND FROM CTN-1 BY CTN-1'
                    + '\n                      UNTIL WS-IND GREATER TB-F{c1}{##e}01E-LENGTH'
                    + '\n                MOVE CORR T{##n}01E(WS-IND)  TO WS-C{##n}01T'
                    + '\n            END-PERFORM'
                    + '\n*'
                    + '\n            PERFORM 500000-LEER-F{c1}{##e}02E'
                    + '\n        END-PERFORM'
                    + '\n*'
                    + '\n        INITIALIZE TABLA-F{c1}{##e}01E'
                    + '\n        MOVE WS-C{##n}01E          TO WS-C{##n}01A'
                    + '\n     ELSE'
                    + '\n        IF WS-C{##n}01E LESS WS-C{##n}02E'
                    + '\n*'
                    + '\n            PERFORM 500000-LEER-F{c1}{##e}01E'
                    + '\n            MOVE WS-C{##n}01E      TO WS-C{##n}01A'
                    + '\n        ELSE'
                    + '\n*'
                    + '\n            PERFORM 500000-LEER-F{c1}{##e}02E'
                    + '\n        END-IF'
                    + '\n     END-IF';
                p_until = ''
                    + this.repeat_text('\n       {until} SI-FIN-F{c1}{##e}{n}E', 2);
                p_mn0   = ''
                    + '\n 01 TABLA-F{c1}{##e}01E.'
                    + '\n*'
                    + '\n    02 TB-F{c1}{##e}01E-LENGTH     PIC 9(07) VALUE ZEROS.'
                    + '\n    02 TB-F{c1}{##e}01E    OCCURS 9999999 TIMES.'
                    + '\n*-- COPY DEL FICHERO DE ENTRADA F{c1}{##e}01E'
                    + '\n*       03 T{##n}01E               PIC X({fe_leng_01}) VALUE SPACES.'
                    + '\n COPY {fe_copy_01} REPLACING C000-{fe_copy_01} BY T{##n}01E.'
                    + '\n*    ==(##)== BY ==(##)==    == ## == BY == 04 ==.'
                    + '\n*    ==(01)== BY ==(01)==    == 01 == BY == 03 ==.';
                p_mn1   = ''
                    + '\n     MOVE WS-C{##n}01E             TO WS-C{##n}01A';
                break;
            case '111':
                p_clv   = ''
                    + '\n    05 WS-C{##n}01E.'
                    + '\n        10 FILLER             PIC X(80).'
                    + '\n*'
                    + '\n    05 WS-C{##n}02E.'
                    + '\n        10 FILLER             PIC X(80).'
                    + '\n*'
                    + '\n    05 WS-C{##n}03E.'
                    + '\n        10 FILLER             PIC X(80).'
                    + '\n*';
                p_join  = ''
                    + '\n     EVALUATE TRUE'
                    + '\n         WHEN (WS-C{##n}01E EQUAL WS-C{##n}02E)'
                    + '\n          AND (WS-C{##n}02E EQUAL WS-C{##n}03E)'
                    + '\n*'
                    + '\n             PERFORM 500000-LEER-F{c1}{##e}01E'
                    + '\n             PERFORM 500000-LEER-F{c1}{##e}02E'
                    + '\n             PERFORM 500000-LEER-F{c1}{##e}03E'
                    + '\n         WHEN WS-C{##n}01E LESS WS-C{##n}02E'
                    + '\n*'
                    + '\n             PERFORM 500000-LEER-F{c1}{##e}01E'
                    + '\n         WHEN WS-C{##n}03E LESS WS-C{##n}02E'
                    + '\n*'
                    + '\n             PERFORM 500000-LEER-F{c1}{##e}03E'
                    + '\n         WHEN WS-C{##n}01E GREATER WS-C{##n}02E'
                    + '\n*'
                    + '\n             PERFORM 500000-LEER-F{c1}{##e}01E'
                    + '\n             PERFORM 500000-LEER-F{c1}{##e}02E'
                    + '\n         WHEN WS-C{##n}03E GREATER WS-C{##n}02E'
                    + '\n*'
                    + '\n             PERFORM 500000-LEER-F{c1}{##e}02E'
                    + '\n             PERFORM 500000-LEER-F{c1}{##e}03E'
                    + '\n     END-EVALUATE';
                p_until = ''
                    + this.repeat_text('\n       {until} SI-FIN-F{c1}{##e}{n}E', 3);
                break;
            default:
                p_join = '';
                p_until  = '';
                break;
        }

        out = out.replace(/{p_clv}+/g  , p_clv);
        out = out.replace(/{p_join}+/g , p_join);
        out = out.replace(/{p_until}+/g, p_until);
        out = out.replace(/{p_mn0}+/g, p_mn0);
        out = out.replace(/{p_mn1}+/g, p_mn1);

        if (p_mn0 != '') {
            out = out.replace(/{fe_copy_01}+/g, this.kwargs['fe']['copy'][0]);
            out = out.replace(/{fe_leng_01}+/g, this.kwargs['fe']['leng'][0]);
            out = out.replace(/{fe_copy_02}+/g, this.kwargs['fe']['copy'][1]);
            out = out.replace(/{fe_leng_02}+/g, this.kwargs['fe']['leng'][1]);
        }

        return out;
    }
/* Genera una rutina */
    nobatch() {
        var out = '******************************************************************';

        out += '\n*                   DESCRIPCION DEL PROGRAMA'
            + '\n*                   ------------------------'
            + '\n*     NOMBRE      : ' + this.kwargs['name']
            + '\n*     FECHA       : ' + d + '-' + M + '-' + y
            + '\n*     AUTOR       : ACCENTURE'
            + this.kwargs['trx'][0]
            + '\n*     LENGUAJE    : ENTERPRISE COBOL'
            + '\n*     DESCRIPCION : ' + this.kwargs['desc']
            + '{batchDB2}'
            + '{select_0}'
            + '{insert_0}'
            + '{delete_0}'
            + '{cursor_0}'
            + '{update_0}'
            + '\n******************************************************************'
            + '\n* LOG DE MODIFICACIONES DE SOFTWARE'
            + '\n******************************************************************'
            + '\n* L-0001 USUARIO:AXXXXXX FECHA: dd-mm-aaaa'
            + '\n* (Descripcion de la modificacion. En el programa se debe marcar'
            + '\n* aquello que se ha modificado entre L-0001-INI y L-0001-FIN)'
            + '\n*'
            + '\n* (0001 es el numero de incidencia asociado a la modificacion)'
            + '\n*'
            + '\n* (Para programas nuevos se marcar  como L-0000 y su descripcion'
            + '\n* ser  NUEVO PROGRAMA)'
            + '\n* L-0000 USUARIO:A000000 FECHA: ' + d + '-' + M + '-' + y
            + '\n* PROGRAMA NUEVO '
            + '\n*----'
            + '\n******************************************************************'
            + '\n* IDENTIFICATION DIVISION'
            + '\n******************************************************************'
            + '\n IDENTIFICATION DIVISION.'
            + '\n PROGRAM-ID. ' + this.kwargs['name']
            + '\n AUTHOR.     ACCENTURE.'
            + '\n DATE-WRITTEN.  ' + d + '-' + M + '-' + y
            + '\n******************************************************************'
            + '\n* ENVIRONMENT DIVISION'
            + '\n******************************************************************'
            + '\n ENVIRONMENT DIVISION.'
            + '\n CONFIGURATION  SECTION.'
            + '\n******************************************************************'
            + '\n SPECIAL-NAMES.'
            + '\n     DECIMAL-POINT IS COMMA.'
            + '\n SOURCE-COMPUTER.     IBM-3090.'
            + '\n OBJECT-COMPUTER.     IBM-3090.'
            + '\n*'
            + '\n******************************************************************'
            + '\n* DATA DIVISION'
            + '\n******************************************************************'
            + '\n DATA DIVISION.'
            + '\n*'
            + '\n******************************************************************'
            + '\n* WORKING-STORAGE SECTION'
            + '\n******************************************************************'
            + '\n  WORKING-STORAGE SECTION.'
            + '\n*INC AUDIT. NO BORRAR DESDE AQUI HASTA FIN INCLUDE'
            + '\n 77 AUDIT-TRAIL PIC X(60) VALUE'
            + '\n     \'[** AUDIT ** ' + this.kwargs['name'] + '-A000000-' + y + M + d + '-' + h + m + s + '-           ]\'.'
            + '\n*FIN INC AUDIT.'
            + '\n*'
            + '\n******************************************************************'
            + '\n* SWITCHES'
            + '\n******************************************************************'
            + '\n 01 SWITCHES.'
            + '\n*'
            + '\n    05 SW-FIN-CURSOR          PIC X(01).'
            + '\n        88 SI-FIN-CURSOR                 VALUE \'S\'.'
            + '\n        88 NO-FIN-CURSOR                 VALUE \'N\'.'
            + '\n*'
            + '\n******************************************************************'
            + '\n* CONSTANTES'
            + '\n******************************************************************'
            + '\n 01 CTA-CONSTANTES.'
            + '\n* ALFANUMERICAS.'
            + '\n    05 CTA-ASTERISK           PIC X(80) VALUE ALL \'*\'.'
            + '\n    05 CTA-S                  PIC X(01) VALUE \'S\'.'
            + '\n    05 CTA-N                  PIC X(01) VALUE \'N\'.'
            + '\n    05 CTA-ES                 PIC X(02) VALUE \'ES\'.'
            + '\n    05 CTA-' + this.kwargs['uuaa'] + '               PIC X(04) VALUE \'' + this.kwargs['uuaa'] + '\'.'
            + '\n    05 CTA-' + this.kwargs['name'] + '           PIC X(08) VALUE \'' + this.kwargs['name'] + '\'.'
            + '\n    05 CTA-' + this.kwargs['nameTable'] + '           PIC X(08) VALUE \'' + this.kwargs['nameTable'] + '\'.'
            + '\n    05 CTA-VALIDA             PIC X(06) VALUE \'VALIDA\'.'
            + '\n    05 CTA-INSERT             PIC X(06) VALUE \'INSERT\'.'
            + '\n    05 CTA-UPDATE             PIC X(06) VALUE \'UPDATE\'.'
            + '\n    05 CTA-SELECT             PIC X(06) VALUE \'SELECT\'.'
            + '\n    05 CTA-DELETE             PIC X(06) VALUE \'DELETE\'.'
            + '\n    05 CTA-FETCH              PIC X(06) VALUE \'FETCH\'.'
            + '\n    05 CTA-OPEN               PIC X(06) VALUE \'OPEN\'.'
            + '\n    05 CTA-CLOSE              PIC X(06) VALUE \'CLOSE\'.'
            + '\n    05 CTA-CALL               PIC X(06) VALUE \'CALL\'.'
            + '\n    05 CTA-EMPTY              PIC X(06) VALUE \'EMPTY\'.'
            + '\n    05 CTA-COMMIT             PIC X(06) VALUE \'COMMIT\'.'
            + '\n    05 CTA-ROLLBACK           PIC X(08) VALUE \'ROLLBACK\'.'
            + '\n*'
            + '\n    05 CTA-QPIPRX28           PIC X(08) VALUE \'QPIPRX28\'.'
            + '\n    05 CTA-QPIPRX30           PIC X(08) VALUE \'QPIPRX30\'.'
            + this.kwargs['qpiprx35'][0]
            + this.kwargs['qpiprx36'][0]
            + this.kwargs['qpiprx37'][0]
            + this.kwargs['qpiprx38'][0]
            + this.kwargs['qpiprx80'][0]
            + '\n*'
            + '\n    05 CTA-200001-V           PIC X(08) VALUE \'200001-V\'.'
            + '{select_1}'
            + '{insert_1}'
            + '{delete_1}'
            + '{cursor_1}'
            + '{update_1}'
            + '\n*'
            + '\n*----- [CONSTANTES ALFANUMERICAS NUEVAS]'
            + '\n*-'
            + '\n    05 CTA-COD-FUNCION      PIC X(30) VALUE'
            + '\n       \'COD-FUNCION\'.'
            + '\n    05 CTA-DES-FUNCION      PIC X(50) VALUE'
            + '\n       \'ACCESO A LA OPERACION INDICADA POR LA FUNCION\'.'
            + '\n*-'
            + '\n* NUMERICAS.'
            + '\n    05 CTN-N1                 PIC S9(1) VALUE -1.'
            + '\n    05 CTN-4                  PIC 9(01) VALUE 4.'
            + '\n    05 CTN-8                  PIC 9(01) VALUE 8.'
            + '\n    05 CTN-10                 PIC 9(02) VALUE 10.'
            + '\n*'
            + '\n*----- [CONSTANTES NUMERICAS DE ERROR]'
            + '\n* -> ERROR VALIDAR COD-FUNCION'
            + '\n    05 CTN-01309051           PIC 9(08) VALUE 01309051.'
            + '\n* -> ERROR VALIDAR FECHA'
            + '\n    05 CTN-01309049           PIC 9(08) VALUE 01309049.'
            + '\n* -> ERROR DB2'
            + '\n    05 CTN-01309201           PIC 9(08) VALUE 01309201.'
            + '\n    05 CTN-01309200           PIC 9(08) VALUE 01309200.'
            + '\n    05 CTN-00022002           PIC 9(08) VALUE 00022002.'
            + '\n    05 CTN-00167026           PIC 9(08) VALUE 00167026.'
            + '\n*'
            + '\n*----- [CONSTANTES NUMERICAS NUEVAS]'
            + '{select_2}'
            + '{insert_2}'
            + '{delete_2}'
            + '{cursor_2}'
            + '{update_2}'
            + this.kwargs['qpiprx35'][1]
            + this.kwargs['qpiprx36'][1]
            + this.kwargs['qpiprx37'][1]
            + this.kwargs['date_day'][0]
            + this.kwargs['qpiprx80'][1]
            + '\n*'
            + '\n******************************************************************'
            + '\n* VARIABLES'
            + '\n******************************************************************'
            + '\n 01 WS-VARIABLES.'
            + '\n*'
            + '\n    05 WS-PROGRAMA            PIC X(08).'
            + '\n    05 WS-DES-SQLCA.'
            + '\n        10 FILLER             PIC X(12) VALUE \'ERROR EN EL \'.'
            + '\n        10 WS-ACCESO          PIC X(08).'
            + '\n        10 FILLER             PIC X(04) VALUE \' DE \'.'
            + '\n        10 WS-TABLA           PIC X(08).'
            + '\n        10 FILLER             PIC X(11) VALUE \'. ESTADO : \'.'
            + '\n        10 WS-FILE-STATUS     PIC 9(08).'
            + '\n*'
            + '\n    05 WS-IND                 PIC 9(09).'
            + '\n    05 WS-NUMBER              PIC S9(20)V9(9).'
            + '\n*'
            + '\n    05 WS-X08-FECHA.'
            + '\n        10 WS-AAAA            PIC 9(04).'
            + '\n        10 WS-MM              PIC 9(02).'
            + '\n        10 WS-DD              PIC 9(02).'
            + '\n*'
            + '\n    05 WS-X10-HORA.'
            + '\n        10 WS-HH              PIC 9(02).'
            + '\n        10 WS-MIN             PIC 9(02).'
            + '\n        10 WS-SS              PIC 9(02).'
            + '\n        10 WS-MMMM            PIC 9(06).'
            + '\n*'
            + '\n    05 WS-X26-FECHAHORA.'
            + '\n        10 WS-X10-FECHA.'
            + '\n            15 WS-AAAA        PIC 9(04).'
            + '\n            15 FILLER         PIC X(01) VALUE \'-\'.'
            + '\n            15 WS-MM          PIC 9(02).'
            + '\n            15 FILLER         PIC X(01) VALUE \'-\'.'
            + '\n            15 WS-DD          PIC 9(02).'
            + '\n        10 FILLER             PIC X(01) VALUE \'-\'.'
            + '\n        10 WS-X13-HORA.'
            + '\n            15 WS-HH          PIC 9(02).'
            + '\n            15 FILLER         PIC X(01) VALUE \'.\'.'
            + '\n            15 WS-MIN         PIC 9(02).'
            + '\n            15 FILLER         PIC X(01) VALUE \'.\'.'
            + '\n            15 WS-SS          PIC 9(02).'
            + '\n            15 FILLER         PIC X(01) VALUE \'.\'.'
            + '\n            15 WS-MMMM        PIC 9(06).'
            + '\n*'
            + '\n    05 WS-ACTUAL-FECHAHORA    PIC X(26).'
            + '\n*'
            + '\n*----- [VARIABLES NUEVAS]'
            + this.kwargs['tonumber'][0]
            + this.kwargs['qpiprx35'][2]
            + this.kwargs['qpiprx37'][2]
            + this.kwargs['date_day'][1]
            + this.kwargs['chopped'][0]
            + '\n*-'
            + '\n******************************************************************'
            + '\n* TABLAS AUXILIAR'
            + '\n******************************************************************'
            + '\n*'
            + this.kwargs['chopped'][1]
            + this.kwargs['lookforoutfile'][0]
            + this.kwargs['qpiprx80'][2]
            + '\n*'
            + '\n******************************************************************'
            + '\n* COPYS'
            + '\n******************************************************************'
            + '\n*-- COPY DE CONSTANTES'
            + '\n COPY QPIPCCTE.'
            + this.kwargs['trx'][1]
            + '\n*'
            + '\n*-- COPY QUE UTILIZA EL MODULO DE ERRORES'
            + '\n COPY QPBTCXRR.'
            + '\n*'
            + '\n*-- COPY QUE UTILIZA EL MODULO DE ESTADISTICAS'
            + '\n COPY QPBTCXTA.'
            + '\n*'
            + '\n*-- COPY QUE UTILIZA EL MODULO DE FECHAS ESTANDAR'
            + '\n COPY QPIPCX30.'
            + '\n*'
            + '\n*-- COPY DEL MODULO QUE OBTIENE EL CONTEXTO BATCH.'
            + '\n COPY QPIPCX28.'
            + this.kwargs['qpiprx35'][3]
            + this.kwargs['qpiprx36'][2]
            + this.kwargs['qpiprx37'][3]
            + this.kwargs['qpiprx38'][1]
            + this.kwargs['qpiprx80'][3]
            + '\n*'
            + '\n******************************************************************'
            + '\n* INCLUDES DE TABLAS'
            + '\n******************************************************************'
            + '\n*'
            + '{nameTable}'
            + '{cursor_5}'
            + '\n*'
            + '\n*'
            + '\n******************************************************************'
            + '\n* LINKAGE SECTION'
            + '\n******************************************************************'
            + '\n LINKAGE SECTION.'
            + '\n*'
            + this.kwargs['trx'][2]
            + '\n*'
            + '\n     PERFORM 100000-INICIO'
            + '\n*'
            + '\n     PERFORM 200000-PROCESO'
            + '\n*'
            + '\n     PERFORM 300000-FIN'
            + '\n     .'
            + '\n*'
            + '\n******************************************************************'
            + '\n* 100000-INICIO'
            + '\n******************************************************************'
            + '\n 100000-INICIO.'
            + '\n*'
            + this.kwargs['trx'][3]
            + '\n*'
            + '\n     SET NO-FIN-CURSOR      TO TRUE'
            + '\n     PERFORM 800000-FECHA-SISTEMA'
            + '\n     MOVE WS-X26-FECHAHORA  TO WS-ACTUAL-FECHAHORA'
            + '\n*'
            + this.kwargs['qpiprx80'][4]
            + '\n     .'
            + this.kwargs['trx'][4]
            + '\n*'
            + '\n******************************************************************'
            + '\n* 200000-PROCESO'
            + '\n******************************************************************'
            + '\n 200000-PROCESO.'
            + '\n*'
            + this.kwargs['qpiprx80'][5]
            + '\n     PERFORM 200001-VALIDAR'
            + '{nobatch_evaluate}'
            + '\n     .'
            + '\n*'
            + '\n******************************************************************'
            + '\n* 200001-VALIDAR'
            + '\n******************************************************************'
            + '\n 200001-VALIDAR.'
            + '\n*'
            + '\n     .'
            + '{select_4}'
            + '{insert_4}'
            + '{delete_4}'
            + '{cursor_4}'
            + '{update_4}'
            + '\n*'
            + '\n******************************************************************'
            + '\n* 300000-FIN'
            + '\n******************************************************************'
            + '\n 300000-FIN.'
            + '\n*'
            + this.kwargs['trx'][5]
            + '\n*'
            + '\n     GOBACK'
            + '\n     .'
            + '\n*'
            + '\n******************************************************************'
            + '\n* 400000-INFORMAR-DCLGEN'
            + '\n******************************************************************'
            + '\n 400000-INFORMAR-DCLGEN.'
            + '\n*'
            + '\n     .'
            + '\n*'
            + '\n******************************************************************'
            + '\n* 500000-RETORNAR-CONSULTA'
            + '\n******************************************************************'
            + '\n 500000-RETORNAR-CONSULTA.'
            + '\n*'
            + '\n     ADD  CTN-1                        TO WS-IND'
            + '\n*'
            + '\n     .'
            + '\n*'
            + '\n******************************************************************'
            + '\n* 800000-FECHA-SISTEMA'
            + '\n******************************************************************'
            + '\n 800000-FECHA-SISTEMA.'
            + '\n*'
            + '\n     INITIALIZE RETORNO-QPIPCCAB'
            + '\n                R-QPIPCX30'
            + '\n*'
            + '\n     MOVE CTN-4                     TO COD-SERVICIO-QPIPCCAB'
            + '\n*'
            + '\n     CALL CTA-QPIPRX30 USING R-QPIPCCAB R-QPIPCX30'
            + '\n*'
            + '\n     IF XTI-AVIERROR-QPIPCCAB NOT EQUAL SPACES'
            + '\n        PERFORM 999999-FIN-ERROR'
            + '\n     END-IF'
            + '\n'
            + '\n     MOVE FEC-SIS4-QPIPCX30         TO WS-X26-FECHAHORA'
            + '\n     MOVE CORR WS-X10-FECHA         TO WS-X08-FECHA'
            + '\n     MOVE CORR WS-X13-HORA          TO WS-X10-HORA'
            + '\n     .'
            + this.kwargs['tonumber'][1]
            + this.kwargs['qpiprx35'][4]
            + this.kwargs['qpiprx36'][3]
            + this.kwargs['qpiprx37'][4]
            + this.kwargs['qpiprx38'][2]
            + this.kwargs['qpiprx80'][6]
            + this.kwargs['date_day'][2]
            + this.kwargs['chopped'][2]
            + this.kwargs['lookforoutfile'][1]
            + '\n*'
            + '\n******************************************************************'
            + '\n* 999999-FIN-ERROR'
            + '\n******************************************************************'
            + '\n 999999-FIN-ERROR.'
            + '\n*'
            + this.kwargs['trx'][6]
            + '\n*'
            + '\n     PERFORM 300000-FIN'
            + '\n     .'
            + '\n*'
            + '\n******************************************************************'
            + '\n*                       FIN DEL PROGRAMA'
            + '\n******************************************************************'
            + '';
        //*

        return out;
    }
/* Genera una copy registro */
    copy() {
        var out = '******************************************************************';

        out += '\n*                   DESCRIPCION DE LA COPY'
            + '\n*                   ------------------------'
            + '\n*     NOMBRE      : ' + this.kwargs['copy']
            + '\n*     FECHA       : ' + d + '-' + M + '-' + y
            + '\n*     AUTOR       : ACCENTURE'
            + '\n*     ENTORNO     : COPY'
            + '\n*     LENGUAJE    : ENTERPRISE COBOL'
            + '\n******************************************************************'
            + '\n*----'
            + '\n 01 C' + '000'.replaceAt(0, this.kwargs['ecpy']) + '-' + this.kwargs['copy'] + '.'
            + '\n*'
            + '\n    05 C' + '000'.replaceAt(0, this.kwargs['ecpy']) + '-' + '[...]              PIC X(0000).'
            + '\n*'
            + '\n    02 FILLER                     PIC X(0000).'
            + '\n*'
            + '\n******************************************************************'
            + '\n*                       FIN DE LA COPY'
            + '\n******************************************************************'
            + '';
        //*

        return out;
    }
/* Genera el jcl */
    jcl() {
        var out = '';

        out += '//' + this.kwargs['namerand'] + ' JOB (OPC0,001),\'' + this.kwargs['namerand'] + '\',REGION=0M,TIME=1440,'
            + '\n//         CLASS={c0},MSGCLASS=J,MSGLEVEL=(1,1),COND=(4,LT),'
            + '\n//         PERFORM=11'
            + '\n//*PROJCL [' + d + '/' + M + '/' + y + ' - ' + h + ':' + m + ':' + s + ' - A000000]'
            + '\n//*PAQUETE ZMF ' + this.kwargs['uuaa'] + '000000'
            + '\n//*OBPARM S=' + this.kwargs['subjcl'][0]
            + '\n//*'
            + '\n//LIBPROC  JCLLIB ORDER=(\'EBPEXPR.PDSB111Z.PROCLIB\',\'EX.PROCLIB\','
            + '\n//            \'EX.EXPDS111.PROCLIB\')'
            + '\n//*'
            + '\n//*%OPC SCAN'
            + '\n//*%OPC SETFORM OCFRSTC=(CCYYMMDD)'
            + '\n//*%OPC SETFORM CTIME=(HHMM00)'
            + '\n//*%OPC SETVAR TFECHA=(OCFRSTC - 1CD),PHASE=SETUP'
            + '\n//*%OPC SETFORM OCDATE=(CCYYMMDD)'
            + '\n//*'
            + '\n//INCLUDE1 INCLUDE MEMBER=' + this.kwargs['subjcl'][1]
            + '\n//INCLUDE1 INCLUDE MEMBER=' + this.kwargs['subjcl'][2]
            + '\n//*---------------------------------------------------------------------'
            + '\n//**********************************************************************'
            + '\n//*               DESCRIPCION DEL JCL'
            + '\n//*               -------------------'
            + '\n//*     JCL         : ' + this.kwargs['namerand']
            + '\n//*     FECHA       : ' + d + '-' + M + '-' + y
            + '\n//*     AUTOR       : ACCENTURE'
            + '\n//*     LENGUAJE    : ENTERPRISE COBOL'
            + '\n//*     DESCRIPCION : ' + this.kwargs['descjcl']
            + '\n//**********************************************************************'
            + '\n//**********************************************************************'
            + '\n//* BORRAR FICHEROS DEL PROCESO'
            + '\n//**********************************************************************'
            + '\n//BORRAR   EXEC PROC=EXPRP21P'
            + '\n//SYSPRINT DD SYSOUT=*'
            + '\n//SYSIN    DD *'
            + '\n'
            + '{j_join_delete}'
            + this.repeat_text('\n  DELETE {c2}' + this.kwargs['namerand'] + '.F{c1}{###}{n}S', this.kwargs['fs']['id'])
            + this.kwargs['add_join'][0]
            + this.kwargs['sort'][0]
            + this.kwargs['file_new'][0]
            + this.kwargs['file_filter'][0]
            + this.kwargs['file_statistics'][0]
            + this.kwargs['ifthen'][0]
            + this.kwargs['header1'][0]
            + this.kwargs['replace'][0]
            + this.kwargs['variable'][0]
            + this.kwargs['unload'][0]
            + this.kwargs['load'][0]
            + '\n'
            + '\n  SET MAXCC = 0'
            + '\n/*'
            + '\n//**********************************************************************'
            + '{j_join_sort}'
            + '{j_pgm}'
            + this.kwargs['file_exist'][0]
            + this.kwargs['file_empty'][0]
            + this.kwargs['add_join'][1]
            + this.kwargs['sort'][1]
            + this.kwargs['file_new'][1]
            + this.kwargs['file_filter'][1]
            + this.kwargs['file_statistics'][1]
            + this.kwargs['run_jcls'][0]
            + this.kwargs['ifthen'][1]
            + this.kwargs['header1'][1]
            + this.kwargs['replace'][1]
            + this.kwargs['variable'][1]
            + this.kwargs['unload'][1]
            + this.kwargs['load'][1]
            + '\n//**********************************************************************'
            + '';
        //*
        var j_join_delete = '';
        var j_join_sort   = '';

        switch (this.kwargs['join']) {
            case '':
                j_join_delete = '';
                j_join_sort   = '';
                break;
            case 'A':
                j_join_delete = ''
                    + this.repeat_text('\n  DELETE {c2}' + this.kwargs['namerand'] + '.F{c1}{##e}{n}E', 1);
                j_join_sort   = ''
                    + this.repeat_text('\n//**********************************************************************'
                        + '\n//* ORDENACION DE {fe_desc_n}. PGM: ' + this.kwargs['name'] + ', COPY: {fe_copy_n}'
                        + '\n//**********************************************************************'
                        + '\n//SORT000  EXEC PROC=EXPRP23P,VAR=\'256\',EQUAL=\'EQUALS\',SYNCSORT=S'
                        + '\n//SORTIN   DD DSN=########,DISP=SHR'
                        + '\n//SORTOUT  DD DSN={c2}' + this.kwargs['namerand'] + '.F{c1}{##e}{n}E,'
                        + '\n//            DISP=(,CATLG,DELETE),SPACE=(CYL,(1500,500),RLSE),'
                        + '\n//            DATACLAS=EXTCOMPS,DCB=(RECFM=FB,BLKSIZE=0,DSORG=PS,'
                        + '\n//            LRECL={fe_leng_n})'
                        + '\n//SYSOUT   DD SYSOUT=*'
                        + '\n//SYSIN    DD *'
                        + '\n  SORT FIELDS=(0,0,CH,A)'
                        + '\n/*', 1);
                break;
            case '11':
            case 'N1':
            case '1N':
            case 'NM':
            case 'MN':
                j_join_delete = ''
                    + this.repeat_text('\n  DELETE {c2}' + this.kwargs['namerand'] + '.F{c1}{##e}{n}E', 2);
                j_join_sort   = ''
                    + this.repeat_text('\n//**********************************************************************'
                        + '\n//* ORDENACION DE {fe_desc_n}. PGM: ' + this.kwargs['name'] + ', COPY: {fe_copy_n}'
                        + '\n//**********************************************************************'
                        + '\n//SORT000  EXEC PROC=EXPRP23P,VAR=\'256\',EQUAL=\'EQUALS\',SYNCSORT=S'
                        + '\n//SORTIN   DD DSN=########,DISP=SHR'
                        + '\n//SORTOUT  DD DSN={c2}' + this.kwargs['namerand'] + '.F{c1}{##e}{n}E,'
                        + '\n//            DISP=(,CATLG,DELETE),SPACE=(CYL,(1500,500),RLSE),'
                        + '\n//            DATACLAS=EXTCOMPS,DCB=(RECFM=FB,BLKSIZE=0,DSORG=PS,'
                        + '\n//            LRECL={fe_leng_n})'
                        + '\n//SYSOUT   DD SYSOUT=*'
                        + '\n//SYSIN    DD *'
                        + '\n  SORT FIELDS=(0,0,CH,A)'
                        + '\n/*', 2);
                break;
            case '111':
                j_join_delete = ''
                    + this.repeat_text('\n  DELETE {c2}' + this.kwargs['namerand'] + '.F{c1}{##e}{n}E', 3);
                j_join_sort   = ''
                    + this.repeat_text('\n//**********************************************************************'
                        + '\n//* ORDENACION DE {fe_desc_n}. PGM: ' + this.kwargs['name'] + ', COPY: {fe_copy_n}'
                        + '\n//**********************************************************************'
                        + '\n//SORT000  EXEC PROC=EXPRP23P,VAR=\'256\',EQUAL=\'EQUALS\',SYNCSORT=S'
                        + '\n//SORTIN   DD DSN=########,DISP=SHR'
                        + '\n//SORTOUT  DD DSN={c2}' + this.kwargs['namerand'] + '.F{c1}{##e}{n}E,'
                        + '\n//            DISP=(,CATLG,DELETE),SPACE=(CYL,(1500,500),RLSE),'
                        + '\n//            DATACLAS=EXTCOMPS,DCB=(RECFM=FB,BLKSIZE=0,DSORG=PS,'
                        + '\n//            LRECL={fe_leng_n})'
                        + '\n//SYSOUT   DD SYSOUT=*'
                        + '\n//SYSIN    DD *'
                        + '\n  SORT FIELDS=(0,0,CH,A)'
                        + '\n/*', 3);
                break;
            default:
                j_join_delete = '';
                j_join_sort   = '';
                break;
        }

        if ((this.kwargs['fe']['id'] > 0) || (this.kwargs['fs']['id'] > 0)) {
            out = out.replace(/{j_pgm}+/g    , ''
                + '\n//**********************************************************************'
                + '\n//* ' + this.kwargs['desc']
                + '\n//**********************************************************************'
                + '\n//' + this.kwargs['name'] + ' EXEC PROC=EXPRP0{subpgm0}'
                + this.repeat_text('\n//F{c1}{###}{n}E DD DSN={c2}' + this.kwargs['namerand'] + '.F{c1}{###}{n}E,DISP=SHR', this.kwargs['fe']['id'])
                + this.repeat_text('\n//F{c1}{###}{n}S DD DSN={c2}' + this.kwargs['namerand'] + '.F{c1}{###}{n}S,'
                    + '\n//            DISP=(,CATLG,DELETE),SPACE=(CYL,(1500,500),RLSE),'
                    + '\n//            DATACLAS=EXTCOMPS,DCB=(RECFM=F{c1},BLKSIZE=0,DSORG=PS,'
                    + '\n//            LRECL={fs_leng_n})', this.kwargs['fs']['id'])
                + '\n//SYSPRINT DD SYSOUT=*'
                + '\n//SYSOUT   DD SYSOUT=*'
                + '\n//SYSABOUT DD SYSOUT=4,DEST=JESTC3'
                + '\n//SYSDBOUT DD SYSOUT=4,DEST=JESTC3'
                + '\n//CEEDUMP  DD SYSOUT=4,DEST=JESTC3'
                + '\n//SYSTSPRT DD SYSOUT=*'
                + '\n//SYSIN    DD *'
                + '\n'
                + '\n//SYSTSIN  DD *'
                + '{subpgm1}'
                + '\n/*');
        } else {
            out = out.replace(/{j_pgm}+/g    , '');
        }

        if (this.kwargs['subpgm'] == 'batchDB2') {
            out = out.replace(/{subpgm0}+/g  , '2P,SSID=\'' + this.kwargs['subjcl'][3] + '\'');
            out = out.replace(/{subpgm1}+/g  , ''
                + '\n  DSN SYSTEM(' + this.kwargs['subjcl'][3] + ')'
                + '\n    RUN PROGRAM(' + this.kwargs['name'] + ') PLAN({c3})'
                + '\n  END');
        } else {
            out = out.replace(/{subpgm0}+/g  , '1P,PRG=' + this.kwargs['name']);
            out = out.replace(/{subpgm1}+/g  , '');
        }

        out = out.replace(/{j_join_delete}+/g, j_join_delete);
        out = out.replace(/{j_join_sort}+/g  , j_join_sort);

        return out;
    }
/* Genera el boleta */
    boleta() {
        var out = '';

        out += '//' + this.kwargs['namerand'] + ' JOB (OPC0,001),\'' + this.kwargs['namerand'] + '\',MSGCLASS=J,TIME=1440,'
            + '\n//         MSGLEVEL=(1,1),CLASS=Z,REGION=0M,COND=(4,LT),'
            + '\n//         PERFORM=11'
            + '\n//*PROJCL [' + d + '/' + M + '/' + y + ' - ' + h + ':' + m + ':' + s + ' - A000000]'
            + '\n//*PAQUETE ZMF ' + this.kwargs['uuaa'] + '000000'
            + '\n//*OBPARM S=' + this.kwargs['subjcl'][0]
            + '\n//*'
            + '\n//LIBPROC  JCLLIB ORDER=(\'EBPEXPR.PDSB111Z.PROCLIB\',\'EX.PROCLIB\','
            + '\n//         \'EX.EXPDS111.PROCLIB\')'
            + '\n//*'
            + '\n//*%OPC SCAN'
            + '\n//*%OPC SETFORM OCFRSTC=(CCYYMMDD)'
            + '\n//*%OPC SETFORM CTIME=(HHMM00)'
            + '\n//*%OPC SETVAR TFECHA=(OCFRSTC - 1CD),PHASE=SETUP'
            + '\n//*%OPC SETFORM OCDATE=(CCYYMMDD)'
            + '\n//*'
            + '\n//INCLUDE1 INCLUDE MEMBER=' + this.kwargs['subjcl'][1]
            + '\n//INCLUDE1 INCLUDE MEMBER=' + this.kwargs['subjcl'][2]
            + '\n//*---------------------------------------------------------------------'
            + '\n//**********************************************************************'
            + '\n//*               DESCRIPCION DE LA BOLETA'
            + '\n//*               ------------------------'
            + '\n//*     BOLETA      : ' + this.kwargs['namerand']
            + '\n//*     FECHA       : ' + d + '-' + M + '-' + y
            + '\n//*     AUTOR       : ACCENTURE'
            + '\n//*     LENGUAJE    : ENTERPRISE COBOL'
            + '\n//*     DESCRIPCION : ' + this.kwargs['descjcl']
            + '\n//**********************************************************************'
            + '\n//**********************************************************************'
            + '\n//* BORRAR FICHEROS DEL PROCESO'
            + '\n//**********************************************************************'
            + '\n//BORRAR   EXEC PROC=EXPRP21P'
            + '\n//SYSPRINT DD SYSOUT=*'
            + '\n//SYSIN    DD *'
            + '\n'
            + this.kwargs['add_join'][0]
            + this.kwargs['sort'][0]
            + this.kwargs['file_new'][0]
            + this.kwargs['file_filter'][0]
            + this.kwargs['file_statistics'][0]
            + this.kwargs['ifthen'][0]
            + this.kwargs['header1'][0]
            + this.kwargs['replace'][0]
            + this.kwargs['variable'][0]
            + this.kwargs['unload'][0]
            + this.kwargs['load'][0]
            + '\n'
            + '\n  SET MAXCC = 0'
            + '\n/*'
            + '\n//**********************************************************************'
            + this.kwargs['file_exist'][0]
            + this.kwargs['file_empty'][0]
            + this.kwargs['add_join'][1]
            + this.kwargs['sort'][1]
            + this.kwargs['file_new'][1]
            + this.kwargs['file_filter'][1]
            + this.kwargs['file_statistics'][1]
            + this.kwargs['run_jcls'][0]
            + this.kwargs['ifthen'][1]
            + this.kwargs['header1'][1]
            + this.kwargs['replace'][1]
            + this.kwargs['variable'][1]
            + this.kwargs['unload'][1]
            + this.kwargs['load'][1]
            + '\n//**********************************************************************'
            + '';
        //*

        return out;
    }
/* Metodo para retornar la clase en cadena de caracteres */
    get str() {
        var out = '';

        switch (this.kwargs['type']) {
            case 'programa':
                if (this.kwargs['subpgm'] != 'nobatch') {
                    this.kwargs['name'] = this.kwargs['name'].replaceAt(4, this.control_UUAA(1));

                    out = this.batch();
                } else {
                    if (this.kwargs['subrut'] == 'rut') {
                        this.kwargs['name'] = this.kwargs['name'].replaceAt(4, 'R');
                        out = this.nobatch();
                    } else if (this.kwargs['subrut'] == 'trx') {
                        this.kwargs['name'] = this.kwargs['name'].replaceAt(4, 'G');
                        out = this.nobatch();
                    } else if (this.kwargs['subrut'] == 'cpy') {

                        out = this.copy();
                    } else {

                        out = '';
                    }
                }

                if (((this.kwargs['select'][0] != '') || (this.kwargs['insert'][0] != '') || (this.kwargs['delete'][0] != '') || (this.kwargs['cursor'][0] != '') || (this.kwargs['update'][0] != ''))
                        && (this.kwargs['nameTable'] != 'TUUAA000')) {
                    out = out.replace(/{batchDB2}+/g , ''
                        + '\n******************************************************************'
                        + '\n* ESTE PROCESO SE PERMITIR EL MANTENIMIENTO DE LA ' + this.kwargs['nameTable']
                        + '\n* LAS FUNCIONES QUE LLEVARA A CAVO SON:');

                    out = out.replace(/{nameTable}+/g, ''
                        + '\n   EXEC SQL INCLUDE SQLCA    END-EXEC.'
                        + '\n   EXEC SQL INCLUDE ' + this.kwargs['nameTable'] + ' END-EXEC.');

                    out = out.replace(/{nobatch_evaluate}+/g    , ''
                        + '\n*'
                        + '\n      EVALUATE C000-COD-FUNCION'
                        + '{insert_3}'
                        + '{delete_3}'
                        + '{update_3}'
                        + '{select_3}'
                        + '{cursor_3}'
                        + '\n          WHEN OTHER'
                        + '\n'
                        + '\n              PERFORM 999999-FIN-ERROR'
                        + '\n      END-EVALUATE');

                    out = out.replace(/{select_0}+/g , this.kwargs['select'][0]);
                    out = out.replace(/{select_1}+/g , this.kwargs['select'][1]);
                    out = out.replace(/{select_2}+/g , this.kwargs['select'][2]);
                    out = out.replace(/{select_3}+/g , this.kwargs['select'][3]);
                    out = out.replace(/{select_4}+/g , this.kwargs['select'][4]);

                    out = out.replace(/{insert_0}+/g , this.kwargs['insert'][0]);
                    out = out.replace(/{insert_1}+/g , this.kwargs['insert'][1]);
                    out = out.replace(/{insert_2}+/g , this.kwargs['insert'][2]);
                    out = out.replace(/{insert_3}+/g , this.kwargs['insert'][3]);
                    out = out.replace(/{insert_4}+/g , this.kwargs['insert'][4]);

                    out = out.replace(/{delete_0}+/g , this.kwargs['delete'][0]);
                    out = out.replace(/{delete_1}+/g , this.kwargs['delete'][1]);
                    out = out.replace(/{delete_2}+/g , this.kwargs['delete'][2]);
                    out = out.replace(/{delete_3}+/g , this.kwargs['delete'][3]);
                    out = out.replace(/{delete_4}+/g , this.kwargs['delete'][4]);

                    out = out.replace(/{update_0}+/g , this.kwargs['update'][0]);
                    out = out.replace(/{update_1}+/g , this.kwargs['update'][1]);
                    out = out.replace(/{update_2}+/g , this.kwargs['update'][2]);
                    out = out.replace(/{update_3}+/g , this.kwargs['update'][3]);
                    out = out.replace(/{update_4}+/g , this.kwargs['update'][4]);

                    out = out.replace(/{cursor_0}+/g , this.kwargs['cursor'][0]);
                    out = out.replace(/{cursor_1}+/g , this.kwargs['cursor'][1]);
                    out = out.replace(/{cursor_2}+/g , this.kwargs['cursor'][2]);
                    out = out.replace(/{cursor_3}+/g , this.kwargs['cursor'][3]);
                    out = out.replace(/{cursor_4}+/g , this.kwargs['cursor'][4]);
                    out = out.replace(/{cursor_5}+/g , this.kwargs['cursor'][5]);

                } else {
                    out = out.replace(/{batchDB2}+/g , '');
                    out = out.replace(/{nameTable}+/g, '');

                    out = out.replace(/{select_0}+/g , '');
                    out = out.replace(/{select_1}+/g , '');
                    out = out.replace(/{select_2}+/g , '');
                    out = out.replace(/{select_3}+/g , '');
                    out = out.replace(/{select_4}+/g , '');

                    out = out.replace(/{insert_0}+/g , '');
                    out = out.replace(/{insert_1}+/g , '');
                    out = out.replace(/{insert_2}+/g , '');
                    out = out.replace(/{insert_3}+/g , '');
                    out = out.replace(/{insert_4}+/g , '');

                    out = out.replace(/{delete_0}+/g , '');
                    out = out.replace(/{delete_1}+/g , '');
                    out = out.replace(/{delete_2}+/g , '');
                    out = out.replace(/{delete_3}+/g , '');
                    out = out.replace(/{delete_4}+/g , '');

                    out = out.replace(/{update_0}+/g , '');
                    out = out.replace(/{update_1}+/g , '');
                    out = out.replace(/{update_2}+/g , '');
                    out = out.replace(/{update_3}+/g , '');
                    out = out.replace(/{update_4}+/g , '');

                    out = out.replace(/{cursor_0}+/g , '');
                    out = out.replace(/{cursor_1}+/g , '');
                    out = out.replace(/{cursor_2}+/g , '');
                    out = out.replace(/{cursor_3}+/g , '');
                    out = out.replace(/{cursor_4}+/g , '');
                    out = out.replace(/{cursor_5}+/g , '');

                    out = out.replace(/{nobatch_evaluate}+/g    , '');
                }

                break;
            case 'jcl':
                out = this.jcl();
                break;
            case 'boleta':
                out = this.boleta();
                break;
        }

        out = out.replace(/{c0}+/g     , this.control_UUAA(0));
        out = out.replace(/{c1}+/g     , this.control_UUAA(1));
        out = out.replace(/{c2}+/g     , this.control_UUAA(2));
        out = out.replace(/{c3}+/g     , this.control_UUAA(3));
        out = out.replace(/{c4}+/g     , this.control_UUAA(4));
        out = out.replace(/{c5}+/g     , this.control_UUAA(5));

        if (this.kwargs['fe']['id'] < 100) {
            out = out.replace(/{##e}+/g, this.kwargs['name'].substring(5));
            out = out.replace(/{##n}+/g, '');
        } else {
            out = out.replace(/{##e}+/g, '000');
            out = out.replace(/{##n}+/g, '000');
        }

        if (this.kwargs['fs']['id'] < 100) {
            out = out.replace(/{##s}+/g, this.kwargs['name'].substring(5));
        } else {
            out = out.replace(/{##s}+/g, '000');
        }

        return out;
    }
/* Metodo para retornar el campo que le pidamos */
    get(ix) {
        if (this.kwargs[ix]  != 'undefined') {
            return this.kwargs[ix];
        } else {
            return 'undefined';
        }
    }
}