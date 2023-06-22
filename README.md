# Data Hoje - v1.0

Esse projeto é apenas para estudo de *Load Balancer* e *Rate Limiter*. Disponibilizando a data e hora atual de busca.

### Arquitetura
Antes de implementarmos um *Load Balancer* é necessario ver essa necessidade, imaginando uma alta demanda para se ver a data e o horario atual, com uma alta disponibilidade então seria uma feature necessaria para um bom funcionamento da API. Foi colocado um *Rate Limiter* para evitar ataques DDOS e manter essa disponibilidade caso ocorra um ataque a um de nossos servidores.

![image](https://github.com/graxz/actual-date/assets/60474834/e325438e-a2b7-40e9-bc3e-10d55f129a85)

### ROTAS

#### Retorna data e hora atual

```http
  GET /data
```

### Resultados da implementação
A principio o projeto tem como base o rate limiter para evitar ataque DDOS então já teriamos atraso de requests imaginando uma taxa (+/-) alta de respostas. (Propositalmente para testarmos o load balancer!)

Foi feito um teste de stress de mil requisições a rota, a resposta abaixo foi sem o load balancer:

![image](https://github.com/graxz/actual-date/assets/60474834/1fa96fc6-e87f-481b-897f-8d49efa0ce39)

Logo na primeira iteração já temos uma alta taxa de resposta.

Chegando até ao ponto de cair por alguns segundos nossa aplicação:

![image](https://github.com/graxz/actual-date/assets/60474834/2edd8c14-c0d8-41d2-a8ad-209709af3445)

Quando usamos o load balancer com os 5 cpus temos outro resultado:

![image](https://github.com/graxz/actual-date/assets/60474834/578a965b-11c1-4bf0-84e6-328be56c3cdc)

Com certeza não é uma resposta rapida porem temos um corte de metade do tempo praticamente, quando aumentamos as cpus para 10:

![image](https://github.com/graxz/actual-date/assets/60474834/1f79d88d-a221-4c52-962c-d946c8c9e018)

Temos mais uma queda para menos da metade! Com isso entendemos que o load balancer está fazendo seu devido trabalho com excelencia.

*Foi utilizado para o teste de carga a ferramenta postman.*

## Autores

- [@graxz](https://github.com/graxz)