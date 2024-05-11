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
      await writeCSV(filePath, [data])
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
