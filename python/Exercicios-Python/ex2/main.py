
def cria_matriz(n):
    return [[0] * n for _ in range(n)]


def calc_proximo_ponto(direcoes, dir_idx, atual_l,  atual_c):
    direcao = direcoes[dir_idx];
    proximo_l = atual_l + direcao[0];
    proximo_c = atual_c + direcao[1];
    
    return proximo_l, proximo_c;
    
    

def matriz_espiral_walker(n):
    # 1. Inicialização
    # Crie uma matriz NxN preenchida com zeros (use List Comprehension)
    matriz = cria_matriz(n)
    
    # Posição inicial (linha, coluna)
    l, c = 0, 0
    
    # Vetores de direção: [Direita, Baixo, Esquerda, Cima]
    direcoes = [(0, 1), (1, 0), (0, -1), (-1, 0)]
    
    # Índice atual na lista de direções (0 = Direita, 1 = baixo, 2 = esquerda, 3 = cima)
    dir_idx = 0 
    
    # Indice maximo de linhas ou colunas da matriz
    max_idx = n - 1;
    
    # 2. Loop de Preenchimento
    for valor in range(1, n * n + 1):
        
        # Preenche o valor na posilao l e c da matriz
        matriz[l][c] = valor;
        
        # Calcula o proximo ponto da matriz que deve ser preenchido
        proximo_l, proximo_c = calc_proximo_ponto(direcoes, dir_idx, l, c);
        
        # Checa se chegou se a posicção pe valida
        if proximo_l > max_idx or proximo_c > max_idx:
            
            if dir_idx == 3:
                dir_idx = 0;
            else:
                dir_idx += 1;
                
            proximo_l, proximo_c = calc_proximo_ponto(direcoes, dir_idx, l, c);
        
        # Checa se o valor já foi preenchido
        if matriz[proximo_l][proximo_c] != 0:
            
            if dir_idx == 3:
                dir_idx = 0;
            else:
                dir_idx += 1;
                
            proximo_l, proximo_c = calc_proximo_ponto(direcoes, dir_idx, l, c);
        
        # Faz a checagem se o valor é realmente 0 e atualiza o proximo ponto a ser atualizado
        if matriz[proximo_l][proximo_c] == 0:
            l = proximo_l;
            c = proximo_c;
        
    return matriz


matriz = matriz_espiral_walker(3);
for linha in matriz:
    print(linha);