import { adicionarProduto, listarProdutos, removerProduto, somarColuna, mediaColuna } from "./controller/controleEstoque";
import { Item } from "./model/interfaceData";

const prompt = require('prompt-sync')({sigint: true});

var entrada = receber( 'Digite a ação desejada: ');
var W = parseInt(entrada, 10); 

function receber(mensagem: string): string {
    const entrada = prompt(mensagem);
    if (entrada === null) {
        throw new Error("Entrada de usuário cancelada.");
    }
    return entrada;
}


const main = async () => {
    try {
        switch (W) { 
        case 1: 
        
            var X = receber( 'Digite o nome do produto: '); 
            var Y = receber( 'Digite o peso do produto: ');
            var Z = receber( 'Digite o valor do produto: ');
            var Q = receber( 'Digite a quantidade do produto: ');

            const dados = { 
                nome: X,
                peso: parseFloat(Y), 
                valor: parseFloat(Z) , 
                quantidade: parseInt(Q, 10) 
            } as Item

            await adicionarProduto(dados); 
            break;


        case 2:

            var produto = receber( 'Digite o nome do produto: ');

            await removerProduto(produto);
            break;

        case 3:

            await listarProdutos();
            break;

        case 4:
            await somarColuna('valor'); 
            break;
        
        case 5:

            await somarColuna('peso');
            break;

        case 6:

            await mediaColuna('valor');
            break;

        case 7:

            await mediaColuna('peso');
            break;
        }
    } catch (error) {
        console.error('Erro:', error);
    }
};

main();
