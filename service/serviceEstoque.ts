import fs from 'fs';
import { Item } from "../model/interfaceData";
import {writeCSV} from "../model/writeCSV"
import {readCSV} from "../model/readCSV"



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


}


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
