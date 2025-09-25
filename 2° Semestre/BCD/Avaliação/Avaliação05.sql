5
CREATE DATABASE locadora;

SELECT * FROM `locacoes` WHERE status = 'pendente';

SELECT * FROM `locacoes` WHERE status <> 'cancelado';

SELECT * FROM `locacoes` WHERE categoria = 'ação' AND status = 'entregue';

SELECT * FROM locacoes WHERE filme LIKE "%Velozes%";



