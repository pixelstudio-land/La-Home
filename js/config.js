// ==========================================
// CONFIGURAÇÃO LA HOME PISOS — SÃO PAULO/SP
// ==========================================

const CONFIG = {
    // 1. DADOS DA EMPRESA E ATENDIMENTO
    empresa: {
        nome1: "LA HOME",
        nome2: "PISOS",
        cidade: "São Paulo Capital, Jardins, Morumbi, Litoral e Interior até 150km",
        whatsapp: "5511951556434", // WhatsApp oficial fornecido (+55 11 95155-6434)
        telefoneExibicao: "(11) 95155-6434",
        freteReferencia: "Frete São Paulo Capital (raio de até 30 km e até 50 m²): R$ 580,00 (valores sem frete incluso)"
    },

    // 2. OPÇÕES DE PISOS E PREÇOS (CONFORME BRIEFING E ÁUDIOS DO CLIENTE)
    // ⚠️ Valores com materiais de instalação, massa/manta, mão de obra própria e rodapé inclusos (sem frete)
    pisos: [
        {
            categoria: "Pisos Laminados de Alta Durabilidade",
            nome: "Piso Laminado Linha New Way (Durafloor) 7mm",
            preco: 125.00,
            sobConsulta: false,
            // R$ 125/m² instalado, com rodapé RD 5cm branco incluso
            descricao: "Pacote Completo: Piso Laminado Durafloor Linha New Way + Manta de Instalação + Rodapé RD 5cm MDF Branco + Mão de Obra Própria Especializada. Obra expressa a partir de 48h."
        },
        {
            categoria: "Pisos Laminados de Alta Durabilidade",
            nome: "Piso Laminado Linhas Nobres (Studio & Unique — Durafloor / Quick-Step)",
            preco: null,
            sobConsulta: true,
            descricao: "Pacote de Alto Padrão: Réguas largas com textura sincronizada de madeira nobre e alta resistência ao tráfego. Incluso rodapé e instalação especializada. Consulte padrões."
        },
        {
            categoria: "Pisos Vinílicos Colados LVT 2mm (100% Resistente à Água)",
            nome: "Piso Vinílico Colado 2mm Linha Entrada (Ospefloor)",
            preco: 180.00,
            sobConsulta: false,
            // R$ 180/m² com massa básica até 4mm, cola, mão de obra e rodapé RD 5cm branco
            descricao: "Pacote Completo: Piso Vinílico 2mm Linha Entrada (Ospefloor) + Massa de Nivelamento Básica (inclusa até 4 mm) + Cola Especial + Rodapé RD 5cm MDF Branco + Mão de Obra Própria Especializada. Conforto térmico, acústico e fácil limpeza."
        },
        {
            categoria: "Pisos Vinílicos Colados LVT 2mm (100% Resistente à Água)",
            nome: "Piso Vinílico Colado 2mm Linhas Superiores (Tarkett / Belgotex / Durafloor)",
            preco: 215.00,
            sobConsulta: false,
            // Faixa de R$ 210 a R$ 220 conforme especificado pelo cliente no áudio
            descricao: "Pacote Premium: Piso Vinílico 2mm das marcas consagradas Tarkett / Belgotex / Durafloor + Massa de Nivelamento Básica (inclusa até 4 mm) + Cola Especial + Rodapé RD 5cm MDF Branco + Mão de Obra Própria. (Pequena diferença de valor para upgrade de marca)."
        },
        {
            categoria: "Pisos Vinílicos Clicados SPC Rígido (Sem Cola)",
            nome: "Piso Vinílico Clicado SPC Rígido (Durafloor / Quick-Step / Tarkett)",
            preco: null,
            sobConsulta: true,
            descricao: "Pacote Master: Piso vinílico de alta densidade com encaixe click sem necessidade de cola, manta acústica integrada e instalação ultrarrápida expressa em 48h. Consulte padrões exclusivos."
        }
    ],

    // 3. OPÇÕES DE PISO ATUAL NO LOCAL E NECESSIDADE DE REMOÇÃO
    opcoesPisoAtual: [
        { valor: "Contrapiso", texto: "Contrapiso de Cimento Regular (Sem remoção)" },
        { valor: "CeramicaSobrepor", texto: "Cerâmica ou Porcelanato Existente (Sobreposição)" },
        { valor: "RemoverCarpeteMadeira", texto: "Carpete de Madeira Antigo (Necessita Remoção)" },
        { valor: "RemoverCarpeteTecido", texto: "Carpete de Tecido / Têxtil (Necessita Remoção)" },
        { valor: "RemoverVinilicoLaminado", texto: "Piso Vinílico ou Laminado Antigo (Necessita Remoção)" },
        { valor: "RemoverCeramica", texto: "Remoção de Cerâmica / Porcelanato (A combinar — pedreiro parceiro)" },
        { valor: "RemoverTaco", texto: "Taco / Assoalho de Madeira Antigo (A combinar)" },
        { valor: "Outro", texto: "Outro / Avaliar na visita técnica gratuita" }
    ],

    // 4. BÔNUS E INCLUSÕES NO ORÇAMENTO (MODAL DE PROPOSTA EXECUTIVA)
    bonus: [
        { titulo: "Rodapé RD 5cm MDF Branco", subtitulo: "INCLUSO", strike: "", gratis: true },
        { titulo: "Massa de Nivelamento Básica (até 4 mm nos vinílicos colados)", subtitulo: "INCLUSO", strike: "", gratis: true },
        { titulo: "Mão de Obra 100% Própria (+15 anos de experiência)", subtitulo: "INCLUSO", strike: "", gratis: true },
        { titulo: "Garantia de 5 Anos de Instalação (Mão de Obra)", subtitulo: "INCLUSO", strike: "", gratis: true },
        { titulo: "Garantia de Fábrica de 12 a 25 Anos no Produto", subtitulo: "INCLUSO", strike: "", gratis: true },
        { titulo: "Opção de Obra Expressa em 48 Horas", subtitulo: "DISPONÍVEL", strike: "", gratis: true },
        { titulo: "Horários Flexíveis: Diurno, Noturno e Fins de Semana", subtitulo: "DISPONÍVEL", strike: "", gratis: true },
        { titulo: "Serviço de Remoção de Carpete de Madeira / Tecido", subtitulo: "DISPONÍVEL", strike: "", gratis: false },
        { titulo: "Remoção de Cerâmica / Porcelanato (Serviço de Pedreiro)", subtitulo: "A COMBINAR", strike: "", gratis: false },
        { titulo: "Frete São Paulo Capital (até 30 km / até 50 m²)", subtitulo: "R$ 580,00 ref.", strike: "", gratis: false },
        { titulo: "Visita Técnica e Medição Presencial (São Paulo e Região)", subtitulo: "CORTESIA*", strike: "R$ 150", gratis: true },
        { titulo: "Facilidades: Parcelamento em até 18x ou Pix em 2x", subtitulo: "DISPONÍVEL", strike: "", gratis: true },
        { titulo: "Persianas e Cortinas Sob Medida", subtitulo: "Sob Medida", strike: "", gratis: false }
    ]
};
