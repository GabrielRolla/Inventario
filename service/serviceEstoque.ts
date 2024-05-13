import { Item } from "../model/interfaceData";
import {writeCSV} from "../model/writeCSV"
import {readCSV} from "../model/readCSV"
import {somar} from "../model/somaCSV"


const filePath = './model/database/estoque.csv'

export default class estoqueService{  
  
  async criar(data: Item)
  {
    
    if(typeof data.nome !== 'string' || isNaN(data.peso) || isNaN(data.valor) || isNaN(data.quantidade))
    {
      throw new Error('Dados inválidos para o produto')
    }
    else
    {
      const existingData = await readCSV(filePath); // Ler os dados existentes do arquivo CSV
      existingData.push(data); // Adicionar o novo item à matriz existente
      await writeCSV(filePath, existingData);
    }
  }  

  async remover(nome: string)
  {
    const estoque: Item[] = await readCSV(filePath);

    const indiceItem = estoque.findIndex((Item) => Item.nome === nome);

    if(indiceItem == -1)
    {
      throw new Error('Produto não encontrado')
    }
    else
    {
      estoque.splice(indiceItem, 1); //remove o item
      await writeCSV(filePath, estoque)
    }
  } 


  async listar() {

    const estoque: Item[] = await readCSV(filePath);

    if(estoque.length === 0 || estoque.every(item => Object.keys(item).length === 0))
      {
        throw new Error('Não existem produtos')
      }
    else
    {
    console.log(estoque);
    }
}

  async soma(coluna: string) {
    const estoque: Item[] = await readCSV(filePath);

    if(estoque.length === 0 || estoque.every(item => Object.keys(item).length === 0))
    {
      throw new Error('Não existem produtos')
    }
    else
    {
      console.log(await somar(coluna))
    }
  }

  async media(coluna: string) {
    const estoque: Item[] = await readCSV(filePath);

    if(estoque.length === 0 || estoque.every(item => Object.keys(item).length === 0))
    {
      throw new Error('Não existem produtos')
    }
    else
    {

      let somaTotal = await somar(coluna);
      let quantidadeTotal = 0;

      estoque.forEach((Item) => {
        quantidadeTotal += +Item.quantidade;
      });

      const media = somaTotal / quantidadeTotal;
      
      console.log(media);
    }
  }

  async contarItens() {
    
    const estoque: Item[] = await readCSV(filePath);

    if(estoque.length === 0 || estoque.every(item => Object.keys(item).length === 0))
    {
      throw new Error('Não existem produtos')
    }
    else
    {
      let quantidadeTotal = 0;

      estoque.forEach((Item) => {
        quantidadeTotal += +Item.quantidade;
    });

    console.log(quantidadeTotal);
    }
  }

  async contarProdutos() {

    const estoque: Item[] = await readCSV(filePath);

    if(estoque.length === 0 || estoque.every(item => Object.keys(item).length === 0))
      {
        throw new Error('Não existem produtos')
      }
      else
      {
        let quantidadeTotal = 0;

        estoque.forEach(() => {
          quantidadeTotal += 1;
        });

        console.log(quantidadeTotal);
      }
  }

}

