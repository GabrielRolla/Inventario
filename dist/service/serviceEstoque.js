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
const writeCSV_1 = require("../model/writeCSV");
const filePath = './model/database/estoque.csv';
class estoqueService {
    criar(data) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof data.nome !== 'string' || isNaN(data.peso) || isNaN(data.valor) || isNaN(data.quantidade)) {
                throw new Error('Dados inválidos para o produto');
            }
            else {
                yield (0, writeCSV_1.writeCSV)(filePath, [data]);
            }
        });
    }
}
exports.default = estoqueService;
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
//# sourceMappingURL=serviceEstoque.js.map