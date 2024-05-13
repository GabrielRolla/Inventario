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

export async function somarColuna(coluna: string){
  try{
    await service.soma(coluna);
    console.log(`${coluna} total mostrado com sucesso!`);

  }catch (error) {
    console.log(`Erro ao calcular ${coluna} total`, error);
  }
}

export async function mediaColuna(coluna: string){
  try{
    await service.media(coluna);
    console.log(`${coluna} médio mostrado com sucesso!`);

  }catch (error) {
    console.log(`Erro ao calcular ${coluna} médio`, error);
  }
}

export async function quantidadeItens(){
  try{
    await service.contarItens();
    console.log(`Quantidade de itens mostrada com sucesso!`);

  }catch (error) {
    console.log(`Erro ao calcular quantidade de itens`, error);
  }
}

export async function quantidadeProdutos(){
  try{
    await service.contarProdutos();
    console.log(`Quantidade de produtos mostrada com sucesso!`);

  }catch (error) {
    console.log(`Erro ao calcular quantidade de produtos`, error);
  }
}