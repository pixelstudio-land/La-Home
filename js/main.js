// ==========================================
// LÓGICA PRINCIPAL — LA HOME PISOS
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
    inicializarDadosEstruturais();
});

// 1. POPULA OS DADOS VISUAIS (Logo, Nomes, Selects, Bônus)
function inicializarDadosEstruturais() {
    // 1.1 Nome da Marca Dinâmico
    const brandElements = document.querySelectorAll('.dynamic-brand');
    brandElements.forEach(el => {
        el.innerHTML = `${CONFIG.empresa.nome1} <span class="brand-gradient-text">${CONFIG.empresa.nome2}</span>`;
    });

    const h2BrandElements = document.querySelectorAll('.dynamic-feature-brand');
    h2BrandElements.forEach(el => {
        el.innerHTML = `<span class="brand-gradient-text">${CONFIG.empresa.nome1} ${CONFIG.empresa.nome2}</span>`;
    });

    // 1.2 Whatsapp Header Link
    const headerZapBtn = document.getElementById('headerZapBtn');
    if (headerZapBtn) {
        headerZapBtn.href = `https://wa.me/${CONFIG.empresa.whatsapp}`;
    }

    // 1.3 Popular Opções de Piso Atual
    const pisoAtualSelect = document.getElementById('pisoAtual');
    if (pisoAtualSelect) {
        pisoAtualSelect.innerHTML = '';
        CONFIG.opcoesPisoAtual.forEach(op => {
            const tempOption = document.createElement('option');
            tempOption.value = op.valor;
            tempOption.innerText = op.texto;
            tempOption.text = op.texto;
            pisoAtualSelect.appendChild(tempOption);
        });
    }

    // 1.4 Popular Select de Modelos de Piso com Categorias
    const modeloSelect = document.getElementById('modelo');
    if (modeloSelect) {
        modeloSelect.innerHTML = '';

        // Agrupar por categorias
        const categorias = [...new Set(CONFIG.pisos.map(item => item.categoria))];

        categorias.forEach(cat => {
            const optgroup = document.createElement('optgroup');
            optgroup.label = cat;

            const pisosDaCategoria = CONFIG.pisos.filter(p => p.categoria === cat);
            pisosDaCategoria.forEach(piso => {
                const tempOption = document.createElement('option');
                const isSobConsulta = piso.sobConsulta || piso.preco === null;
                tempOption.value = JSON.stringify({
                    preco: piso.preco,
                    descricao: piso.descricao,
                    nome: piso.nome,
                    sobConsulta: isSobConsulta
                });

                const labelText = isSobConsulta
                    ? `${piso.nome} — Sob Consulta (Solicitar Cotação)`
                    : `${piso.nome} — R$ ${piso.preco.toFixed(2).replace('.', ',')}/m² (Tudo Incluso)`;

                tempOption.innerText = labelText;
                tempOption.text = labelText;
                optgroup.appendChild(tempOption);
            });

            modeloSelect.appendChild(optgroup);
        });
    }

    // 1.5 Popular Lista de Bônus no Modal
    const bonusListContainer = document.getElementById('bonusListRenderer');
    if (bonusListContainer) {
        bonusListContainer.innerHTML = '';
        CONFIG.bonus.forEach(bonus => {
            const div = document.createElement('div');
            div.className = 'bonus-item';

            const badgeClass = bonus.gratis ? (bonus.strike ? 'badge-courtesy' : 'badge-included') : 'badge-optional';
            const iconClass = bonus.gratis ? 'fa-check-circle' : 'fa-info-circle';
            let strikeHtml = bonus.strike ? `<span class="strike">${bonus.strike}</span> ` : '';

            div.innerHTML = `
                <div class="bonus-item-title">
                    <i class="fas ${iconClass}"></i>
                    <span>${bonus.titulo}</span>
                </div>
                <div class="bonus-item-status">
                    ${strikeHtml}<span class="bonus-badge ${badgeClass}">${bonus.subtitulo}</span>
                </div>
            `;
            bonusListContainer.appendChild(div);
        });
    }
}

// 2. FUNÇÃO DE CALCULAR E ABRIR MODAL
function calcular() {
    const metragemInput = document.getElementById('metragem').value;
    const metragem = parseFloat(metragemInput.replace(',', '.'));

    const modeloEl = document.getElementById('modelo');
    const modeloData = JSON.parse(modeloEl.value);
    const modeloPreco = modeloData.preco;
    const modeloNome = modeloData.nome;
    const modeloDescricao = modeloData.descricao;

    const pisoAtual = document.getElementById('pisoAtual');
    const pisoAtualNome = (pisoAtual && pisoAtual.options && pisoAtual.selectedIndex >= 0) 
        ? (pisoAtual.options[pisoAtual.selectedIndex].text || pisoAtual.options[pisoAtual.selectedIndex].innerText || '') 
        : '';

    const nivelamentoEl = document.getElementById('nivelamento');
    const nivelamentoNome = (nivelamentoEl && nivelamentoEl.options && nivelamentoEl.selectedIndex >= 0) 
        ? (nivelamentoEl.options[nivelamentoEl.selectedIndex].text || nivelamentoEl.options[nivelamentoEl.selectedIndex].innerText || '') 
        : '';

    if (isNaN(metragem) || metragem < 1) {
        alert("Por favor, digite uma metragem válida.");
        return;
    }

    const isSobConsulta = modeloData.sobConsulta || modeloData.preco === null || modeloData.preco === undefined;
    const totalLabel = document.querySelector('.total-label');
    const valorFinal = document.getElementById('valorFinal');
    const installmentsText = document.getElementById('installmentsText');
    const linkZap = document.getElementById('linkZap');
    const btnSpan = linkZap ? linkZap.querySelector('span') : null;

    let valorFormatado = "";
    let textoZap = "";
    let total = 0;

    if (isSobConsulta) {
        valorFormatado = "SOB CONSULTA";
        if (totalLabel) totalLabel.innerText = "Condição do Pacote (Sem Frete Incluso)";
        if (valorFinal) {
            valorFinal.innerHTML = `<span style="font-size: 1.85rem; font-weight: 800; letter-spacing: 0.5px; color: var(--orange-light);">SOB CONSULTA</span>`;
        }
        if (installmentsText) {
            installmentsText.innerHTML = 'Consulte condições de parcelamento em até <strong>18x no cartão</strong>';
        }
        if (btnSpan) {
            btnSpan.innerText = "SOLICITAR VALOR DESSE PACOTE NO WHATSAPP";
        }

        textoZap = `Olá! Realizei uma simulação de orçamento na La Home Pisos e gostaria de solicitar uma proposta exclusiva para este pacote:\n\n` +
            `📐 *Metragem:* ${metragem}m²\n` +
            `🪵 *Linha Selecionada:* ${modeloNome}\n` +
            `📋 *Escopo:* ${modeloDescricao}\n` +
            `💰 *Investimento:* Sob Consulta (Proposta Personalizada)\n` +
            `🚚 *Frete:* A consultar (Ref. SP Capital até 30km / 50m²: R$ 580)\n\n` +
            `🏠 *Condições do Local:*\n` +
            `- Piso Atual / Remoção: ${pisoAtualNome}\n` +
            `- Nivelamento da Superfície: ${nivelamentoNome}\n\n` +
            `⚡ *Diferenciais La Home:* Obra Expressa em 48h | Horários Flexíveis | 5 Anos de Garantia de Instalação.\n\n` +
            `Gostaria de receber a cotação oficial e agendar a visita técnica de cortesia!`;
    } else {
        total = metragem * modeloPreco;
        valorFormatado = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

        if (totalLabel) totalLabel.innerText = "Investimento Estimado (Tudo Incluso + Rodapé | Sem Frete)";
        if (valorFinal) {
            valorFinal.innerText = valorFormatado;
        }
        if (installmentsText) {
            const parcela18 = (total / 18).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            installmentsText.innerHTML = `Até <strong>18x de ${parcela18}</strong> no cartão ou Pix em 2x`;
        }
        if (btnSpan) {
            btnSpan.innerText = "CONFIRMAR ORÇAMENTO NO WHATSAPP";
        }

        textoZap = `Olá! Realizei uma simulação de orçamento na La Home Pisos:\n\n` +
            `📐 *Metragem:* ${metragem}m²\n` +
            `🪵 *Linha Selecionada:* ${modeloNome}\n` +
            `📋 *Escopo:* ${modeloDescricao}\n` +
            `💰 *Investimento Estimado:* ${valorFormatado} (Materiais + Mão de obra própria + Rodapé inclusos | Sem frete)\n` +
            `🚚 *Frete:* A consultar (Ref. SP Capital até 30km / 50m²: R$ 580)\n\n` +
            `🏠 *Condições do Local:*\n` +
            `- Piso Atual / Remoção: ${pisoAtualNome}\n` +
            `- Nivelamento da Superfície: ${nivelamentoNome}\n\n` +
            `⚡ *Diferenciais La Home:* Obra Expressa em 48h | Horários Flexíveis | 5 Anos de Garantia de Instalação.\n\n` +
            `Gostaria de confirmar essa condição e agendar a visita técnica de cortesia!`;
    }

    const modalSubtitle = document.getElementById('modalSubtitle');
    if (modalSubtitle) {
        modalSubtitle.innerText = modeloDescricao;
    }

    // Configurar Nota Técnica Dinâmica conforme a categoria do piso
    const scopeNoteBox = document.getElementById('scopeNoteBox');
    if (scopeNoteBox) {
        if (modeloNome.includes("Vinílico Colado")) {
            scopeNoteBox.style.display = 'flex';
            scopeNoteBox.innerHTML = `
                <i class="fas fa-shield-halved"></i>
                <div class="scope-note-text">
                    <strong>Aviso de Regularização Técnica:</strong> Nos pisos vinílicos colados, está inclusa regularização com massa de nivelamento básica de até <strong>4 milímetros</strong>. Desníveis acentuados (como degraus de 10 a 20 mm entre cerâmica e cimento ou contrapiso bruto) serão avaliados à parte na visita técnica de cortesia.
                </div>
            `;
        } else if (modeloNome.includes("Laminado")) {
            scopeNoteBox.style.display = 'flex';
            scopeNoteBox.innerHTML = `
                <i class="fas fa-layer-group"></i>
                <div class="scope-note-text">
                    <strong>Manta de Instalação Inclusa:</strong> Incluso manta de polietileno expandido para amortecimento e conforto acústico sob o piso laminado. Contrapisos com umidade ou desníveis severos serão checados na visita técnica de cortesia.
                </div>
            `;
        } else {
            scopeNoteBox.style.display = 'flex';
            scopeNoteBox.innerHTML = `
                <i class="fas fa-check-double"></i>
                <div class="scope-note-text">
                    <strong>Manta Acústica Integrada:</strong> O piso SPC Clicado já conta com base de absorção acústica de alta performance integrada de fábrica.
                </div>
            `;
        }
    }

    const link = `https://wa.me/${CONFIG.empresa.whatsapp}?text=${encodeURIComponent(textoZap)}`;
    if (linkZap) linkZap.href = link;

    // Abre modal
    document.getElementById('modalResult').style.display = 'flex';

    // Dispara Evento pro Pixel
    if (typeof trackLead === 'function') {
        trackLead(total);
    }
}

// 3. FECHAR MODAL
function fecharModal() {
    document.getElementById('modalResult').style.display = 'none';
}

window.onclick = function (event) {
    const modal = document.getElementById('modalResult');
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
