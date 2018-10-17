var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Aluno = /** @class */ (function () {
    function Aluno(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.nomeCompleto = nome + ' ' + sobrenome;
    }
    return Aluno;
}());
var AlunoDaManha = /** @class */ (function (_super) {
    __extends(AlunoDaManha, _super);
    function AlunoDaManha(time, nome, sobrenome) {
        var _this = _super.call(this, nome, sobrenome) || this;
        _this.time = time;
        _this.nome = nome;
        _this.sobrenome = sobrenome;
        _this.horario = time + ', ' + _this.nomeCompleto;
        return _this;
    }
    return AlunoDaManha;
}(Aluno));
function saudacao(aluno) {
    if (aluno instanceof AlunoDaManha) {
        console.log('ola, sao ' + aluno.horario);
        return 0;
    }
    if (aluno instanceof Aluno)
        console.log('olá, ' + aluno.nomeCompleto);
}
var alala = new Aluno('Alalala', 'Ululullulu');
saudacao(new Aluno('Albereto', 'Haseagwa'));
saudacao(alala);
saudacao(new AlunoDaManha('8 da manha', 'Albabsa', 'Ehelehleh'));
