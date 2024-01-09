/* JavaScript */
// Clases
class EAT {
    /* Constructor donde le pasamos los datos de entrada, para ello le pasamos el nombreparametro = VALUE */
    constructor(kwargs) {
        //*********************************************************************************
        // Variables por defecto
        this.person = 1;

        this.ration = {'arroz'  : 0.15
            , 'espirales'       : 0.15
            , 'lazos'           : 0.15
            , 'macarrones'      : 0.15
            , 'rigatoni'        : 0.15
            , 'caracolas'       : 0.15
            , 'nidos'           : 0.15
            , 'spaghetti'       : 0.15
            , 'tagliatelle'     : 0.15
            , 'fettuccine'      : 0.15
            , 'fideos'          : 0.15
            , 'estrellas'       : 0.15
            , 'sopa de letras'  : 0.15
            , 'pasta de colores': 0.15
            , 'fideos de arroz' : 0.15
            , 'pasta al huevo'  : 0.15
            , 'lasagna'         : 0.15
            , 'raviolis'        : 0.15
            , 'tortellini'      : 0.15
            , 'garbanzos'       : 0.25
            , 'guisantes'       : 0.25
            , 'judías verdes'   : 0.25
            , 'lentejas'        : 0.25
            , 'habichuelas'     : 0.25
            , 'patata'          : 0.25
            , 'batata'          : 0.25
            , 'pollo'           : 0.20
            , 'pavo'            : 0.20
            , 'gallina'         : 0.20
            , 'cerdo'           : 0.20
            , 'ternera'         : 0.20
            , 'cordero'         : 0.20
            , 'pato'            : 0.20
            , 'lenguado'        : 0.35
            , 'merluza'         : 0.35
            , 'pescadilla'      : 0.35
            , 'rape'            : 0.35
            , 'bacalao'         : 0.35
            , 'gallo'           : 0.35
            , 'rodaballo'       : 0.35
            , 'lubina'          : 0.35
            , 'atún'            : 0.35
            , 'pez espada'      : 0.35
            , 'salmón'          : 0.35
            , 'boquerón'        : 0.35
            , 'besugo'          : 0.35
            , 'salmonete'       : 0.35
            , 'caballa'         : 0.35
            , 'trucha'          : 0.35
            , 'cazón'           : 0.35
            , 'sardina'         : 0.35
            , 'gallineta'       : 0.35
            , 'mero'            : 0.35
            , 'dorada'          : 0.35
            , 'huevo'           : 2
            , 'pan'             : 0.25
            , 'aguacate'        : 1
            , 'ajo'             : 1
            , 'alcachofa'       : 1
            , 'berenjena'       : 1
            , 'brócoli'         : 1
            , 'calabaza'        : 1
            , 'calabacín'       : 1
            , 'cebolla'         : 1
            , 'coliflor'        : 1
            , 'espinaca'        : 1
            , 'pimiento'        : 1
            , 'tomate'          : 1
            , 'zanahoria'       : 1
            , 'champiñon'       : 1
        };
/*
        this.CheckLack = {
              'arroces'         : [0,  3, ['arroz']]
            , 'pastas'          : [0,  3, ['espirales', 'lazos', 'macarrones', 'rigatoni', 'caracolas', 'nidos', 'spaghetti', 'tagliatelle', 'fettuccine', 'fideos', 'estrellas', 'sopa de letras', 'pasta de colores', 'fideos de arroz', 'pasta al huevo', 'lasagna', 'raviolis', 'tortellini']]
            , 'legumbres'       : [0,  4, ['garbanzos', 'guisantes', 'judías verdes', 'lentejas', 'habichuelas']]
            , 'tubérculos'      : [0,  2, ['patata', 'batata', 'ñoquis']]
            , 'carnes blancas'  : [0,  4, ['pollo', 'pavo', 'gallina', 'cerdo']]
            , 'carnes rojas'    : [0,  3, ['ternera', 'cordero', 'pato']]
            , 'pescados azules' : [0,  4, ['atún', 'pez espada', 'salmón', 'boquerón', 'besugo', 'salmonete', 'caballa', 'trucha', 'cazón', 'sardina', 'gallineta', 'mero', 'dorada']]
            , 'pescados blancos': [0,  4, ['lenguado', 'merluza', 'pescadilla', 'rape', 'bacalao', 'gallo', 'rodaballo', 'lubina']]
            , 'mariscos'        : [0,  4, ['gambas', 'calamar']]
            , 'huevos'          : [0,  7, ['huevo']]
            , 'panes'           : [0,  7, ['pan', 'tortillas de trigo']]
            , 'verduras'        : [0, 99, ['aguacate', 'ajo', 'alcachofa', 'berenjena', 'brócoli', 'calabaza', 'calabacín', 'cebolla', 'coliflor', 'espinaca', 'pimiento', 'tomate', 'zanahoria']]
        };
*/
        this.CheckLack = {
              'arroces'         : [0,  3, ['arroz']]
            , 'pastas'          : [0,  3, ['lazos', 'macarrones', 'spaghetti', 'fideos', 'lasagna']]
            , 'legumbres'       : [0,  4, ['garbanzos', 'guisantes', 'judías verdes', 'lentejas', 'habichuelas']]
            , 'tubérculos'      : [0,  2, ['patata', 'batata', 'ñoquis']]
            , 'carnes blancas'  : [0,  4, ['pollo', 'pavo', 'cerdo']]
            , 'carnes rojas'    : [0,  3, ['ternera']]
            , 'pescados azules' : [0,  4, ['atún', 'salmón', 'caballa', 'dorada']]
            , 'pescados blancos': [0,  4, ['merluza']]
            , 'mariscos'        : [0,  4, ['gambas', 'calamar']]
            , 'huevos'          : [0,  7, ['huevo']]
            , 'panes'           : [0,  2, ['pan', 'tortillas de trigo']]
            , 'verduras'        : [0, 99, ['aguacate', 'alcachofa', 'brócoli', 'calabaza', 'calabacín', 'coliflor', 'pimiento', 'tomate', 'zanahoria']]
        };

        this.Group = {'base' : (' ,' + this.CheckLack['arroces'][2] 
                + ',' + this.CheckLack['legumbres'][2] 
                + ',' + this.CheckLack['pastas'][2]
                + ',' + this.CheckLack['panes'][2]
                + ',' + this.CheckLack['tubérculos'][2]).split(',')
            , 'proteína'     : (' ,' + this.CheckLack['carnes blancas'][2]
                + ',' + this.CheckLack['carnes rojas'][2]
                + ',' + this.CheckLack['pescados blancos'][2]
                + ',' + this.CheckLack['pescados azules'][2]
                + ',' + this.CheckLack['mariscos'][2]
                + ',' + this.CheckLack['huevos'][2]).split(',')
        };

        this.days = ['monl' , 'mond' , 'tuel' , 'tued' , 'wedl' , 'wedd' , 'thul' , 'thud' , 'fril' , 'frid' , 'satl' , 'satd' , 'sunl' , 'sund'];
        this.ddays = ['*Lunes*    *Comer*' , '*Lunes*    *Cenar*'
                    , '*Martes*   *Comer*' , '*Martes*   *Cenar*'
                    , '*Miércoles**Comer*' , '*Miércoles**Cenar*'
                    , '*Jueves*   *Comer*' , '*Jueves*   *Cenar*'
                    , '*Viernes*  *Comer*' , '*Viernes*  *Cenar*'
                    , '*Sábado*   *Comer*' , '*Sábado*   *Cenar*'
                    , '*Domingo*  *Comer*' , '*Domingo*  *Cenar*'];

        this.menu = {};
        //*********************************************************************************
    }

    /* Metodo para cargar los primeros días */
    sets() {
        // En base a lo que salga generar los ingredientes
        var baseL = (this.CheckLack['arroces'][2] 
                + ',' + this.CheckLack['legumbres'][2] 
                + ',' + this.CheckLack['pastas'][2]
                + ',' + this.CheckLack['panes'][2]
                + ',' + this.CheckLack['tubérculos'][2]).split(',');
                
        var baseD = (this.CheckLack['pastas'][2][3] 
                + ',' + this.CheckLack['pastas'][2][4] 
                + ',' + this.CheckLack['panes'][2]
                + ',' + this.CheckLack['tubérculos'][2]).split(',');
                
        var prot = (this.CheckLack['carnes blancas'][2]
                + ',' + this.CheckLack['carnes rojas'][2]
                + ',' + this.CheckLack['pescados blancos'][2]
                + ',' + this.CheckLack['pescados azules'][2]
                + ',' + this.CheckLack['mariscos'][2]
                + ',' + this.CheckLack['huevos'][2]).split(',')
        
        for (var i0 = 0; i0 < this.days.length; i0++) {
            if ((this.days[i0]).substr((this.days[i0]).length - 1, (this.days[i0]).length) == 'l') {
                var rnd = baseL[Math.floor(Math.random() * baseL.length)];
            } else {
                var rnd = baseD[Math.floor(Math.random() * baseD.length)];
            }

            if (rnd != '') {
                this.set(this.days[i0] + '_base', rnd);
            }
            
            var arrayProt = prot;

            switch (rnd) {  
                case 'arroz':
                case 'lazos':
                case 'macarrones':
                case 'spaghetti':
                case 'fideos':
                case 'patata':
                case 'batata':
                case 'ñoquis':
                    arrayProt = ['pollo', 'pavo', 'cerdo', 'ternera', 'atún', 'salmón', 'caballa', 'dorada', 'merluza', 'gambas', 'calamar', 'huevo'];
                    break;
                case 'lasagna':
                case 'tortillas de trigo':
                    arrayProt = ['pollo', 'pavo', 'cerdo', 'ternera', 'atún', 'salmón', 'merluza'];
                    break;
                case 'garbanzos':
                case 'judías verdes':
                case 'lentejas':
                case 'habichuelas':
                    arrayProt = ['pollo', 'pavo', 'cerdo', 'ternera'];
                    break;
                case 'guisantes':
                    arrayProt = ['pollo', 'pavo', 'cerdo', 'ternera', 'salmón', 'dorada', 'merluza', 'gambas', 'calamar', 'huevo'];
                    break;
                case 'pan':
                    arrayProt = ['pollo', 'pavo', 'cerdo', 'ternera', 'atún', 'salmón', 'merluza', 'gambas', 'calamar', 'huevo'];
                    break;
            }

            var rnd = arrayProt[Math.floor(Math.random() * arrayProt.length)];
            this.set(this.days[i0] + '_proteína', rnd);

            var auxBaseL = '';
            var auxBaseD = '';
            var auxProt = '';
            var auxKeys = Object.keys(this.CheckLack);
            for (var i1 = 0; i1 < auxKeys.length; i1++) {
                if (('arroces|legumbres|pastas|panes|tubérculos|').indexOf(auxKeys[i1]) >= 0) {
                    if (this.CheckLack[auxKeys[i1]][0] < this.CheckLack[auxKeys[i1]][1]) {
                        auxBaseL += this.CheckLack[auxKeys[i1]][2] + ',';
                    }   
                }

                if (('pastas|').indexOf(auxKeys[i1]) >= 0) {
                    if (this.CheckLack[auxKeys[i1]][0] < this.CheckLack[auxKeys[i1]][1]) {
                        auxBaseD += this.CheckLack[auxKeys[i1]][2][3] + ',' + this.CheckLack[auxKeys[i1]][2][4] + ',';
                    }   
                }

                if (('panes|tubérculos|').indexOf(auxKeys[i1]) >= 0) {
                    if (this.CheckLack[auxKeys[i1]][0] < this.CheckLack[auxKeys[i1]][1]) {
                        auxBaseD += this.CheckLack[auxKeys[i1]][2] + ',';
                    }   
                }

                if (('carnes blancas|carnes rojas|pescados blancos|pescados azules|mariscos|huevos|').indexOf(auxKeys[i1]) >= 0) {
                    if (this.CheckLack[auxKeys[i1]][0] < this.CheckLack[auxKeys[i1]][1]) {
                        auxProt += this.CheckLack[auxKeys[i1]][2] + ',';
                    }   
                }
            }

            baseL = (auxBaseL.substr(0, auxBaseL.length - 1)).split(',');
            baseD = (auxBaseD.substr(0, auxBaseD.length - 1)).split(',');
            prot = (auxProt.substr(0, auxProt.length - 1)).split(',');
        }
    }

    /* Metodo para cargar el día indicado */
    set(ix, value) {
        if (typeof this.menu[ix.split('_')[0]] != 'undefined ') {
            try {
                this.menu[ix.split('_')[0]][ix.split('_')[1]] = value;
            } catch(err) {
                var aux = {};
                aux[ix.split('_')[1]] = value;
                this.menu[ix.split('_')[0]] = aux;
            } finally {
                this.menu[ix.split('_')[0]]['v0'] = 'ajo';
                this.menu[ix.split('_')[0]]['v1'] = 'cebolla';
                this.menu[ix.split('_')[0]]['v2'] = this.CheckLack['verduras'][2][Math.floor(Math.random() * this.CheckLack['verduras'][2].length)];
                this.menu[ix.split('_')[0]]['v3'] = '';
                this.menu[ix.split('_')[0]]['v4'] = '';
                this.menu[ix.split('_')[0]]['v5'] = '';
                this.menu[ix.split('_')[0]]['v6'] = '';
                this.menu[ix.split('_')[0]]['v7'] = '';
                this.menu[ix.split('_')[0]]['v8'] = '';
                this.menu[ix.split('_')[0]]['v9'] = '';
                
                switch (this.menu[ix.split('_')[0]]['base']) {  
                    case 'arroz':
                    case 'lazos':
                    case 'macarrones':
                    case 'spaghetti':
                    case 'fideos':
                    case 'ñoquis':
                    case 'lasagna':
                    case 'tortillas de trigo':
                    case 'guisantes':
                        this.menu[ix.split('_')[0]]['v2'] = this.CheckLack['verduras'][2][Math.floor(Math.random() * this.CheckLack['verduras'][2].length)];
                        break;
                    case 'patata':
                    case 'batata':
                        this.menu[ix.split('_')[0]]['v2'] = this.CheckLack['verduras'][2][Math.floor(Math.random() * this.CheckLack['verduras'][2].length)];
                        this.menu[ix.split('_')[0]]['v3'] = 'huevo';
                        break;
                    case 'garbanzos':
                    case 'lentejas':
                    case 'habichuelas':
                        this.menu[ix.split('_')[0]]['v2'] = 'calabaza';
                        this.menu[ix.split('_')[0]]['v3'] = this.CheckLack['tubérculos'][2][Math.floor(Math.random() * (this.CheckLack['tubérculos'][2].length - 1))];
                        this.menu[ix.split('_')[0]]['v4'] = 'pimineto';
                        this.menu[ix.split('_')[0]]['v5'] = 'zanahoria';
                        break;
                    case 'judías verdes':
                        this.menu[ix.split('_')[0]]['v2'] = this.CheckLack['tubérculos'][2][Math.floor(Math.random() * this.CheckLack['tubérculos'][2].length)];
                        this.menu[ix.split('_')[0]]['v3'] = 'zanahoria';
                        break;
                    case 'pan':
                        this.menu[ix.split('_')[0]]['v0'] = '';
                        this.menu[ix.split('_')[0]]['v2'] = 'tomate';
                        break;
                }

                var auxKeys = Object.keys(this.CheckLack);

                for (var i0 = 0; i0 < auxKeys.length; i0++) {
                    this.CheckLack[auxKeys[i0]][0] = 0;
                }

                for (var i0 = 0; i0 < this.days.length; i0++) {
                    if (typeof this.menu[this.days[i0]] != 'undefined') {
                        var aux0Keys = Object.keys(this.menu[this.days[i0]]);

                        for (var i1 = 0; i1 < aux0Keys.length; i1++) {
                            var i4 = this.menu[this.days[i0]][aux0Keys[i1]];

                            for (var i2 = 0; i2 < auxKeys.length - 1; i2++) {
                                for (var i3 = 0; i3 < this.CheckLack[auxKeys[i2]][2].length; i3++) {
                                    if (this.CheckLack[auxKeys[i2]][2][i3] == i4) {
                                        this.CheckLack[auxKeys[i2]][0] = this.CheckLack[auxKeys[i2]][0] + 1;
                                        break;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    /* Metodo para lista de la compra */
    list() {
        var out = {};
        
        for (var i0 = 0; i0 < this.days.length; i0++) {
            if (typeof this.menu[this.days[i0]] != 'undefined') {
                var aux0Keys = Object.keys(this.menu[this.days[i0]]);

                for (var i1 = 0; i1 < aux0Keys.length; i1++) {
                    var i4 = this.menu[this.days[i0]][aux0Keys[i1]];
                    if (typeof out[i4] == 'undefined') {
                        out[i4] = 0;
                    }
                    out[i4] += 1;
                }
            }
        }

        return out;
    }
    
    /* Metodo para devoler los platos */
    menuWeek() {
        var out = '::::::::::::::::::::::::::::::::::::::::::::::::::::::::::';
        var auxKeys = Object.keys(this.menu);
        
        for (var i0 = 0; i0 < auxKeys.length; i0++) {
            out += '\n ' +  this.ddays[i0].replaceAll('*', ' ') + ': ';            
            
            var aux0Keys = Object.keys(this.menu[this.days[i0]]);
            var aux = '';
            
            for (var i1 = 0; i1 < aux0Keys.length; i1++) {
                var i4 = this.menu[this.days[i0]][aux0Keys[i1]];
                
                if (i4 != '') {
                    aux += (i4).capitalize() + ', ';
                }
            }
            
            aux = (aux).substr(0, aux.length - 2) + '.'
            out += aux;
        }

        out += '\n::::::::::::::::::::::::::::::::::::::::::::::::::::::::::';

        return out;
    }

    /* Metodo para devolver los excesos o carencias */
    get lack() {
        var out = '::::::::::::::::::::::::::::::::::::::::::::::::::::::::::';
        var auxKeys = Object.keys(this.CheckLack);

        for (var i0 = 0; i0 < auxKeys.length - 1; i0++) {
            if (this.CheckLack[auxKeys[i0]][0] < this.CheckLack[auxKeys[i0]][1]) {
                out += '\n ' + this.CheckLack[auxKeys[i0]][0] + '/' + this.CheckLack[auxKeys[i0]][1] + ' raciones de ' + auxKeys[i0].capitalize() + '.';
            }
        }

        out += '\n::::::::::::::::::::::::::::::::::::::::::::::::::::::::::';

        return out;
    }

    /* Metodo para retornar la clase en cadena de caracteres */
    get str() {
        var out = '';

        out += '\n' + this.menuWeek();

        var aux0 = this.list();
        var auxKeys = Object.keys(aux0);

        for (var i0 = 0; i0 < auxKeys.length; i0++) {
			if (auxKeys[i0] != '') {
				var aux1 = aux0[auxKeys[i0]] * this.person
				if (typeof this.ration[auxKeys[i0]] != 'undefined') {
					aux1 *= this.ration[auxKeys[i0]];
				}

				out += '\n: -> ' +  ('      ' + aux1.toFixed(3)).slice(-7) + ' ud. de ' + auxKeys[i0].capitalize();
			}
        }

        out += '\n' + this.lack;

        return out;
    }
    /* Metodo para retornar el campo que le pidamos */
    get(ix) {
        if (this.kwargs[ix] != 'undefined') {
            return this.kwargs[ix];
        } else {
            return 'undefined';
        }
    }
}