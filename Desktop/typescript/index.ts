class Aluno {
        nomeCompleto: String;
        constructor(public nome: String, public sobrenome: String) {
                this.nomeCompleto = nome + ' ' +  sobrenome;
        }
}

class AlunoDaManha extends Aluno {
        horario: String;
        constructor(public time: String, public nome: String, public sobrenome: String){
                super(nome, sobrenome);
                this.horario = time + ', ' + this.nomeCompleto; 
        }
}

interface Pessoa {
        nome: String;
        sobrenome: String; 
}



function saudacao(aluno: any) {
        if(aluno instanceof AlunoDaManha){
                console.log('ola, sao ' + aluno.horario);
                return 0;
        }
        if(aluno instanceof Aluno)
                console.log('olá, ' + aluno.nomeCompleto);
}
let alala = new Aluno('Alalala', 'Ululullulu');

saudacao(new Aluno('Albereto', 'Haseagwa'));
saudacao(alala);
saudacao(new AlunoDaManha('8 da manha', 'Albabsa', 'Ehelehleh'));
