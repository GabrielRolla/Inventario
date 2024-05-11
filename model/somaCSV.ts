import { Item } from "./interfaceData";
import { readCSV } from "./readCSV";

const filePath = './model/database/estoque.csv'


export const somar = async (coluna: string): Promise<number> => {
    const estoque: Item[] = await readCSV(filePath);

    let valorTotal = 0;
    estoque.forEach((Item) => {
        valorTotal += Item.quantidade * (coluna == 'valor' ? Item.valor : Item.peso);
    });

    return valorTotal;
};
