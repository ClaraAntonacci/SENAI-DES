Aula 07 

use locadora;
SELECT SUM(preco) AS total_arrecadado FROM locacoes;

use locadora;
SELECT 
SUM(preco) AS "Faturamento_entregue" 
FROM locacoes WHERE status = "entregue";

use locadora;
SELECT AVG(preco) AS preco_medio FROM filmes WHERE categoria = "Comedia";

USE locadora;
SELECT AVG(preco) AS preco_medio
FROM locacoes WHERE status = "pendente";

use locadora;
SELECT COUNT(*) AS filmes_cadastrados FROM filmes;

use locadora;
SELECT COUNT(*) AS quantidade_locacoes_2025 FROM locacoes WHERE YEAR(data_locacao) = 2025;

use locadora;
SELECT MAX(preco) AS maior_preco FROM filmes;

use locadora;
SELECT MAX(data_locacao) AS locacao_recente FROM locacoes;

use locadora;
SELECT MIN(preco) AS menor_preco_terror FROM filmes WHERE categoria = "terror";

use locadora;
SELECT MIN(data_locacao) AS menor_data FROM locacoes;

use locadora;
SELECT CONCAT(cliente_id, '+' , filme_id) AS descricao FROM locacoes;

use locadora;
SELECT CONCAT(cliente_id, ' alugou ', filme_id, ' em ', data_locacao) AS descricao FROM locacoes;

use locadora;
SELECT nome, LENGTH(nome) AS tamanho_nome FROM clientes;

use locadora;
SELECT titulo, LENGTH(titulo) AS tamanho_titulo FROM filmes WHERE length(titulo) > 15;

use locadora;
SELECT LOWER(titulo) AS titulo_minusculo FROM filmes;

use locadora;
SELECT LOWER(nome) AS nome_minusculo FROM clientes;

use locadora;
SELECT UPPER(nome) AS nome_maiusculo FROM clientes;

use locadora;
SELECT UPPER(categoria) AS categoria_maiusculo FROM filmes;

use locadora;
SELECT ROUND(preco) AS preco_inteiro FROM filmes;

use locadora;
SELECT ROUND(preco, 1) AS valor_decimal_arredondado FROM filmes;

use locadora;
SELECT preco, POW(preco, 2) AS quantidade_ao_quadrado FROM filmes;

use locadora;
SELECT cliente_id, POW(2, cliente_id) AS dois_elevado_id FROM locacoes;

use locadora;
SELECT id, MOD(id, 2) AS par_ou_impar FROM clientes;

use locadora;
SELECT id, MOD(id, 2) AS par_ou_impar FROM clientes;

use locadora;
SELECT id, MOD(id, 3) AS resto_0 FROM filmes;

use locadora;
SELECT NOW() AS data_hora_atual;

use locadora;
SELECT * FROM locacoes WHERE data_locacao < CURDATE();

use locadora;
SELECT data_locacao, DAY(data_locacao) AS dia FROM locacoes;

use locadora;
SELECT data_locacao, MONTH(data_locacao) AS mes FROM locacoes  WHERE MONTH(data_locacao)=3;