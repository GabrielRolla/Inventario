import { Item } from "../model/interfaceData";
import estoqueService from '../service/serviceEstoque'

const service = new estoqueService();

export async function adicionarProduto(data: Item) {
  
  try {
    await service.criar(data);
    console.log("Produto adicionado com sucesso!");
  } catch (error) {
    console.log("Erro ao adicionar o produto", error);
  }
}

export async function removerProduto(nome: string) {
  try {
    await service.remover(nome);
    console.log("Produto removido com sucesso!");
  } catch (error) {
    console.log("Erro ao remover o produto", error);
  }
}

export async function listarProdutos(){
  try{
    await service.listar();
    console.log("Produtos listados com sucesso!");
  }catch (error) {
    console.log("Erro ao listar produtos", error);
  }
}