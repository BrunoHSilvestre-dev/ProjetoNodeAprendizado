function Produto(nome, valor, estoque) {
    this.nome = nome;
    this.valor = valor;
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,
        get: () => estoque,
        set: function(valor) {
            if (typeof valor !== 'number') {
                throw new TypeError('Bad Value. Expected: number. Actual:' +
                    typeof valor + '.')
            }
            this.estoque = valor
        }
    })
    //Passar o valor do param. construtor depois da definição do setter 
    //this.estoque = estoque; 
    
//    this.prototype.calculaTotal = () => this.estoque * this.valor;
}

Produto.prototype.calculaTotal = () => this.estoque * this.valor;

const p1 = new Produto('Pizza', 45, 1);
const p2 = new Produto('Esfirra', 100, 2);
//p1.estoque = 1;
console.log(p1)
console.log(p2)