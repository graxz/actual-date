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

## Autores

- [@graxz](https://github.com/graxz)