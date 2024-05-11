import { Item } from "../model/interfaceData";
import estoqueService from '../service/serviceEstoque'







export async function adicionarProduto(data: Item) {
  try {
    const service = new estoqueService();
    await service.criar(data);
    console.log("Produto adicionado com sucesso;");
  } catch (error) {
    console.log("Erro ao adicionar o produto", error);
  }
}

export async function removerProduto(nome: string) {
  try {
    const service = new estoqueService();
    await service.remover(nome);
    console.log("Produto removido com sucesso;");
  } catch (error) {
    console.log("Erro ao remover o produto", error);
  }
}