// Banco de dados - Funcionários de uma Loja de Games
const funcionarios = [
  {
    nome: "Alex Costa",
    idade: 22,
    cidade: "Blumenau",
    genero: "M",
    cargo: "Vendedor",
    salarioBruto: 2200,
    beneficios: 300,
    projetos: ["Campanha Verão", "Lançamentos"],
    dependentes: [
      { nome: "Thor", idade: 3 }
    ]
  },
  {
    nome: "Juliana Rocha",
    idade: 35,
    cidade: "Joinville",
    genero: "F",
    cargo: "Gerente",
    salarioBruto: 4500,
    beneficios: 800,
    projetos: ["Campanha Verão", "Fidelização"],
    dependentes: [
      { nome: "Lara", idade: 8 },
      { nome: "Davi", idade: 6 }
    ]
  },
  {
    nome: "Marcos Santos",
    idade: 19,
    cidade: "Blumenau",
    genero: "M",
    cargo: "Estagiário",
    salarioBruto: 1200,
    beneficios: 150,
    projetos: ["Lançamentos"],
    dependentes: []
  },
  {
    nome: "Fernanda Lima",
    idade: 28,
    cidade: "Itajaí",
    genero: "F",
    cargo: "Vendedor",
    salarioBruto: 2400,
    beneficios: 350,
    projetos: ["Fidelização", "Eventos"],
    dependentes: [
      { nome: "Sophia", idade: 1 }
    ]
  },
  {
    nome: "Ricardo Alves",
    idade: 41,
    cidade: "Joinville",
    genero: "M",
    cargo: "Gerente",
    salarioBruto: 4800,
    beneficios: 900,
    projetos: ["Eventos"],
    dependentes: [
      { nome: "Enzo", idade: 12 },
      { nome: "Valentina", idade: 9 },
      { nome: "Heitor", idade: 5 }
    ]
  },
  {
    nome: "Patrícia Moura",
    idade: 26,
    cidade: "Balneário Camboriú",
    genero: "F",
    cargo: "Vendedor",
    salarioBruto: 2300,
    beneficios: 320,
    projetos: ["Campanha Verão", "Eventos", "Lançamentos"],
    dependentes: []
  },
  {
    nome: "Diego Ramos",
    idade: 33,
    cidade: "Itajaí",
    genero: "M",
    cargo: "Vendedor",
    salarioBruto: 2500,
    beneficios: 400,
    projetos: ["Fidelização"],
    dependentes: [
      { nome: "Alice", idade: 4 }
    ]
  }
];

// 1) Lista de nomes em ordem de sobrenome
function listaPorSobrenome() {
  let nomes = [];

  for (let i = 0; i < funcionarios.length; i++) {
    nomes.push(funcionarios[i].nome);
  }

  nomes.sort(function (a, b) {
    let partesA = a.split(" ");
    let partesB = b.split(" ");
    let sobreA = partesA[partesA.length - 1];
    let sobreB = partesB[partesB.length - 1];
    return sobreA.localeCompare(sobreB);
  });

  console.log("1) Nomes em ordem de sobrenome:", nomes);
}

// 2) Funcionário mais velho e mais novo
function maisVelhoNovo() {
  let maisVelho = funcionarios[0];
  let maisNovo = funcionarios[0];

  for (let i = 1; i < funcionarios.length; i++) {
    let f = funcionarios[i];

    if (f.idade > maisVelho.idade) {
      maisVelho = f;
    }
    if (f.idade < maisNovo.idade) {
      maisNovo = f;
    }
  }

  console.log("2) Mais velho:", maisVelho.nome, "-", maisVelho.idade, "anos");
  console.log("   Mais novo:", maisNovo.nome, "-", maisNovo.idade, "anos");
}

// 3) Agrupar por cidade
function porCidade() {
  let cidades = {};

  for (let i = 0; i < funcionarios.length; i++) {
    let f = funcionarios[i];
    let cidade = f.cidade;

    if (!cidades[cidade]) {
      cidades[cidade] = [];
    }

    cidades[cidade].push(f.nome);
  }

  console.log("3) Funcionários por cidade:", cidades);
}

// 4) Idade média por cargo
function idadeMediaCargo() {
  let cargos = {};

  for (let i = 0; i < funcionarios.length; i++) {
    let f = funcionarios[i];
    let cargo = f.cargo;

    if (!cargos[cargo]) {
      cargos[cargo] = { somaIdade: 0, qtd: 0 };
    }

    cargos[cargo].somaIdade += f.idade;
    cargos[cargo].qtd += 1;
  }

  let medias = {};
  for (let cargo in cargos) {
    medias[cargo] = cargos[cargo].somaIdade / cargos[cargo].qtd;
  }

  console.log("4) Idade média por cargo:", medias);
}

// 5) Proporção de homens por projeto
function generoProjeto() {
  let projetos = {};

  for (let i = 0; i < funcionarios.length; i++) {
    let f = funcionarios[i];

    for (let j = 0; j < f.projetos.length; j++) {
      let projeto = f.projetos[j];

      if (!projetos[projeto]) {
        projetos[projeto] = { homens: 0, total: 0 };
      }

      projetos[projeto].total += 1;

      if (f.genero === "M") {
        projetos[projeto].homens += 1;
      }
    }
  }

  let resultado = {};
  for (let projeto in projetos) {
    resultado[projeto] = projetos[projeto].homens / projetos[projeto].total;
  }

  console.log("5) Proporção de homens por projeto:", resultado);
}

// 6) Dependentes: total, média por funcionário e idade média
function estatisticasDependentes() {
  let totalDeps = 0;
  let somaIdades = 0;
  let qtdComIdade = 0;

  for (let i = 0; i < funcionarios.length; i++) {
    let deps = funcionarios[i].dependentes;
    totalDeps += deps.length;

    for (let j = 0; j < deps.length; j++) {
      somaIdades += deps[j].idade;
      qtdComIdade += 1;
    }
  }

  let mediaPorFunc = totalDeps / funcionarios.length;
  let idadeMedia = 0;

  if (qtdComIdade > 0) {
    idadeMedia = somaIdades / qtdComIdade;
  }

  console.log("6) Total de dependentes:", totalDeps);
  console.log("   Média por funcionário:", mediaPorFunc.toFixed(2));
  console.log("   Idade média dos dependentes:", idadeMedia.toFixed(2));
}

// 7) Custos com salários
function custos() {
  let totalBruto = 0;
  let totalBeneficios = 0;

  for (let i = 0; i < funcionarios.length; i++) {
    totalBruto += funcionarios[i].salarioBruto;
    totalBeneficios += funcionarios[i].beneficios;
  }

  let totalGeral = totalBruto + totalBeneficios;
  let percBruto = (totalBruto / totalGeral) * 100;
  let percBeneficios = (totalBeneficios / totalGeral) * 100;

  console.log("7) Custo total: R$", totalGeral);
  console.log("   % Salário bruto:", percBruto.toFixed(2) + "%");
  console.log("   % Benefícios:", percBeneficios.toFixed(2) + "%");
}

// 8) Equidade salarial por cargo
function equidade() {
  let cargos = {};

  for (let i = 0; i < funcionarios.length; i++) {
    let f = funcionarios[i];
    let cargo = f.cargo;

    if (!cargos[cargo]) {
      cargos[cargo] = { M: [], F: [] };
    }

    let salarioTotal = f.salarioBruto + f.beneficios;
    cargos[cargo][f.genero].push(salarioTotal);
  }

  let razoes = [];

  console.log("8) Equidad;
