# Dá Só Boleia App

![Logo do projeto](link_para_logo_do_projeto)

> Descrição breve do projeto.

Dá Só Boleia é um projeto Mobile desenvolvido como parte das disciplinas de Análise e Design de Sistemas e Tecnologia de Base de Dados do curso de Ciências da Computação. O objetivo principal do projeto é criar uma aplicação móvel que conecta passageiros e motoristas para compartilharem caronas.

## Funcionalidades Principais

- [Se cadastrar]
- [Fazer Login]
- [Ver todas boleias]
- [Ver todas boleias em que me inscrevi]
- [Ver todas boleias que organizei]
- [Organizar Boleias]
- [Ver detalhes sobre as Boleias]
- [Cancelar Boleias]
- [Depositar dinheiro na conta]

## Instalação

1. Clone este repositório:

   ```shell
   git clone https://github.com/seu-usuario/daSoBoleia_App.git
   ```

2. Instale as dependências:

   ```shell
   cd daSoBoleia_App
   npm install
   ```

3. [Outros passos de instalação, se houver]

## Utilização

1. [Passo 1 para utilizar a aplicação]
2. [Passo 2 para utilizar a aplicação]
3. [Passo 3 para utilizar a aplicação]
4. ...

## Contribuição

1. Faça um fork do repositório.
2. Crie um branch para sua contribuição:
   ```shell
   git checkout -b feature/nome-da-sua-contribuicao
   ```
3. Faça as alterações necessárias.
4. Faça o commit das suas alterações:
   ```shell
   git commit -m "Descrição da sua contribuição"
   ```
5. Envie as alterações para o repositório remoto:
   ```shell
   git push origin feature/nome-da-sua-contribuicao
   ```
6. Abra um Pull Request descrevendo as alterações propostas.

## Equipe

- [Nicasio Silva](https://github.com/Nicasiomarques)
- [Fridson Firmino](https://github.com/FridsonFirmino)
- [Benvindo Alves](https://github.com/AlvesBenvindo)
- [Joilson Capemba](https://github.com/JoilsonCapemba)

## Contato

- E-mail: scriptzone.suport@gmail.com
- LinkedIn: [Seu Nome](https://www.linkedin.com/in/seu-nome/)

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

## Gitflow

O Gitflow é uma metodologia de organização de branches e fluxo de trabalho no Git. Segue um passo a passo simplificado para utilizá-lo:

1. Crie um novo branch a partir do branch `develop`:
   ```shell
   git checkout -b feature/nome-da-sua-funcionalidade develop
   ```

2. Faça as alterações necessárias no código.

3. Faça o commit das suas alterações:
   ```shell
   git commit -m "Descrição da funcionalidade ou correção"
   ```

4. Faça o push do branch para o repositório remoto:
   ```shell
   git push origin feature/nome-da-sua-funcionalidade
   ```

5. Abra um Pull Request no GitHub

 para mesclar as alterações no branch `develop`.

6. Após a revisão e aprovação do Pull Request, a funcionalidade será mesclada no branch `develop`.

7. Periodicamente, é possível criar uma versão estável do projeto a partir do branch `develop` para o branch `master`:
   ```shell
   git checkout master
   git merge develop
   git tag -a v1.0.0 -m "Versão 1.0.0"
   git push origin master --tags
   ```

## Convenção de Commits

Para manter um histórico de commits organizado e legível, é recomendado seguir uma convenção de commits. Aqui está um exemplo:

```
Tipo: Descrição do commit

Corpo do commit (opcional)

Rodapé do commit (opcional)
```

Exemplos de tipos de commit:

- **feat**: Nova funcionalidade adicionada
- **fix**: Correção de um bug
- **docs**: Atualização de documentação
- **chore**: Alterações no build, configurações, etc.
- **refactor**: Refatoração de código
- **style**: Alterações na formatação do código
- **test**: Adição ou modificação de testes

Lembre-se de utilizar uma mensagem clara e concisa para cada commit, descrevendo as alterações realizadas.

---

*Observação: Este projeto foi desenvolvido como parte das disciplinas de Análise e Design de Sistemas e Tecnologia de Base de Dados do curso de Ciências da Computação. Ele visa criar uma aplicação móvel que conecta passageiros e motoristas para compartilharem caronas.*
