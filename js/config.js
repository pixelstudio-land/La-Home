// ==========================================
// CONFIGURAÇÃO LA HOME PISOS — SÃO PAULO/SP
// ==========================================

const CONFIG = {
    // 1. DADOS DA EMPRESA E ATENDIMENTO
    empresa: {
        nome1: "LA HOME",
        nome2: "PISOS",
        cidade: "São Paulo, Jardins, Morumbi, Litoral e Interior até 150km",
        whatsapp: "5511951556434", // WhatsApp oficial fornecido (+55 11 95155-6434)
        telefoneExibicao: "(11) 95155-6434"
    },

    // 2. OPÇÕES DE PISOS E PREÇOS (CONFORME BRIEFING OFICIAL)
    // ⚠️ Valores com materiais de instalação, massa/manta, mão de obra própria e rodapé inclusos
    pisos: [
        {
            categoria: "Pisos Laminados de Alta Durabilidade",
            nome: "Piso Laminado Linha New Way (Durafloor)",
            preco: 125.00,
            sobConsulta: false,
            // Conforme briefing: R$ 125/m² instalado, com rodapé RD5 cm branco incluso
            descricao: "Pacote Completo: Piso Laminado Linha New Way + Manta de Instalação + Rodapé RD 5cm MDF Branco + Mão de Obra Própria Especializada. Obra expressa disponível."
        },
        {
            categoria: "Pisos Laminados de Alta Durabilidade",
            nome: "Piso Laminado Nobre (Linhas Studio & Unique - Durafloor / Quick-Step)",
            preco: null,
            sobConsulta: true,
            descricao: "Pacote de Alto Padrão: Réguas largas, textura sincronizada de madeira nobre e alta resistência. Incluso rodapé e instalação especializada. Consulte padrões."
        },
        {
            categoria: "Pisos Vinílicos de Alto Padrão (100% Resistente à Água)",
            nome: "Piso Vinílico Colado 2mm (Tarkett / Belgotex / Ospefloor)",
            preco: 180.00,
            sobConsulta: false,
            // Conforme briefing: R$ 180/m² com massa, mão de obra e rodapé RD5 cm de MDF branco incluso
            descricao: "Pacote Completo: Piso Vinílico 2mm + Massa de Nivelamento + Cola Especial + Rodapé RD 5cm MDF Branco + Mão de Obra Própria Especializada. Conforto térmico e acústico."
        },
        {
            categoria: "Pisos Vinílicos de Alto Padrão (100% Resistente à Água)",
            nome: "Piso Vinílico Clicado SPC Rígido (Durafloor / Quick-Step)",
            preco: null,
            sobConsulta: true,
            descricao: "Pacote Premium: Piso vinílico com encaixe click sem necessidade de cola, manta acústica integrada e instalação ultrarrápida expressa em 48h. Consulte padrões."
        }
    ],

    // 3. OPÇÕES DE PISO ATUAL NO LOCAL
    opcoesPisoAtual: [
        { valor: "Contrapiso", texto: "Contrapiso de Cimento" },
        { valor: "Ceramica", texto: "Cerâmica ou Porcelanato Existente" },
        { valor: "Madeira", texto: "Madeira / Taco / Assoalho Antigo" },
        { valor: "Vinilico", texto: "Vinílico ou Laminado Existente" },
        { valor: "Outro", texto: "Outro / Não sei informar com exatidão" }
    ],

    // 4. BÔNUS E INCLUSÕES NO ORÇAMENTO (MODAL DE PROPOSTA EXECUTIVA)
    bonus: [
        { titulo: "Rodapé RD 5cm MDF Branco", subtitulo: "INCLUSO", strike: "", gratis: true },
        { titulo: "Mão de Obra 100% Própria (+15 anos de experiência)", subtitulo: "INCLUSO", strike: "", gratis: true },
        { titulo: "Garantia de 5 Anos de Instalação (Mão de Obra)", subtitulo: "INCLUSO", strike: "", gratis: true },
        { titulo: "Garantia de Fábrica de 12 a 25 Anos no Produto", subtitulo: "INCLUSO", strike: "", gratis: true },
        { titulo: "Opção de Obra Expressa em 48 Horas", subtitulo: "DISPONÍVEL", strike: "", gratis: true },
        { titulo: "Horários Flexíveis: Diurno, Noturno e Fins de Semana", subtitulo: "DISPONÍVEL", strike: "", gratis: true },
        { titulo: "Visita Técnica e Medição Presencial (São Paulo e Região)", subtitulo: "CORTESIA*", strike: "R$ 150", gratis: true },
        { titulo: "Facilidades: Parcelamento em até 18x ou Pix em 2x", subtitulo: "DISPONÍVEL", strike: "", gratis: true },
        { titulo: "Persianas e Cortinas Sob Medida", subtitulo: "Sob Medida", strike: "", gratis: false }
    ]
};
