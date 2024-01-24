package br.com.orangeportifolio.squad20.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.orangeportifolio.squad20.model.User;

//Usando a JPA para acessar e gerenciar os dados de usuário
public interface UserRepository extends JpaRepository<User, Long> {
    
}
