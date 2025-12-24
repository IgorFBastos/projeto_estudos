def matriz_espiral_walker(n):
    # Inicialização rápida
    matriz = [[0] * n for _ in range(n)]
    
    # Setup do Robô
    l, c = 0, 0
    direcoes = [(0, 1), (1, 0), (0, -1), (-1, 0)] # Dir, Baixo, Esq, Cima
    dir_idx = 0 
    
    for valor in range(1, n * n + 1):
        matriz[l][c] = valor
        
        # 1. Calcular o "Candidato" ao próximo passo
        dl, dc = direcoes[dir_idx]
        prox_l, prox_c = l + dl, c + dc
        
        # 2. Checagem Unificada de Colisão
        # A ordem importa: Primeiro checa se está DENTRO, depois se está VAZIO
        # Se checar matriz[prox_l] com prox_l fora da matriz, dá erro.
        
        colisao_borda = not (0 <= prox_l < n and 0 <= prox_c < n)
        
        # O python só avalia a segunda parte do OR se a primeira for False (Short-circuit)
        if colisao_borda or matriz[prox_l][prox_c] != 0:
            
            # Bateu! Vira 90 graus
            dir_idx = (dir_idx + 1) % 4
            
            # Recalcula com a nova direção
            dl, dc = direcoes[dir_idx]
            prox_l, prox_c = l + dl, c + dc
            
        # 3. Atualiza a posição oficial
        l, c = prox_l, prox_c
        
    return matriz

# Teste
res = matriz_espiral_walker(4)
for linha in res: print(linha)