"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const controleEstoque_1 = require("./controller/controleEstoque");
const prompt = require('prompt-sync')({ sigint: true });
var entrada = receber('Digite a ação desejada: ');
var W = parseInt(entrada, 10);
function receber(mensagem) {
    const entrada = prompt(mensagem);
    if (entrada === null) {
        throw new Error("Entrada de usuário cancelada.");
    }
    return entrada;
}
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        switch (W) {
            case 1:
                var X = receber('Digite o nome do produto: ');
                var Y = receber('Digite o peso do produto: ');
                var Z = receber('Digite o valor do produto: ');
                var Q = receber('Digite a quantidade do produto: ');
                const dados = {
                    nome: X,
                    peso: parseFloat(Y),
                    valor: parseFloat(Z),
                    quantidade: parseInt(Q, 10)
                };
                yield (0, controleEstoque_1.adicionarProduto)(dados);
                break;
        }
    }
    catch (error) {
        console.error('Erro:', error);
    }
});
main();
/*

const main = async () => {
try {
const data = await readCSV('./src/model/database/estoque.csv');
console.log('Dados lidos:', data);

await writeCSV('./src/model/database/estoque.csv', data);
console.log('Dados escritos em output.csv');
} catch (error) {
console.error('Erro:', error);
}
};

main();

*/ 
//# sourceMappingURL=index.js.map