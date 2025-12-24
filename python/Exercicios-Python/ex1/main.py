# Função auxiliar que irá criar a matriz e prrencher todos os campos com o valor 0
def criarMatriz(N):
    matriz = []
    for i in range(N):
        linha = []
        for j in range(N):
            linha.append(0)
        matriz.append(linha)
    return matriz;


# Conforme analisado e estudado, vimos que para solucionar esse problema
# podemos pegar o N e a cada iteração reduzir 2 unidades do N pegando sempre os valores das bordas da matriz até redizirmos em N = 1.
def escrever_em_contornos(N, valuToIncrement, d, matriz):
    
    indice_inicial_linha = 0 + d;
    indice_inicial_coluna = 0 + d;
    
    indice_final_linha = N - 1 + d;
    indice_final_coluna = N - 1 + d;
    
    value = valuToIncrement;
    
    
    # escrever na primeira linha
    i = indice_inicial_linha;
    j = indice_inicial_coluna;
    while i <= indice_final_linha:
        if i == indice_inicial_linha:
            while j <= indice_final_coluna:
                matriz[i][j] = value;
                value += 1;
                j += 1;
        i += 1;
        j = indice_inicial_coluna;
    
    
    # escrever na ultima coluna
    i = indice_inicial_linha;
    j = indice_inicial_coluna;
    while i <= indice_final_linha:
        if i != indice_inicial_linha:
            while j <= indice_final_coluna:
                if j == indice_final_coluna:
                    matriz[i][j] = value;
                    value += 1;
                j += 1;
        i += 1;
        j = indice_inicial_coluna;
        
    

    # escrever na ulitma linha
    i = indice_final_linha;
    j = indice_final_coluna;
    while i >= indice_inicial_linha:
        if i == indice_final_linha:
            while j >= indice_inicial_coluna:
                if j != indice_final_coluna:
                    matriz[i][j] = value;
                    value += 1;
                j -= 1;
        i -= 1;
        j = indice_final_coluna;
        

    # escrever na primeira coluna
    i = indice_final_linha;
    j = indice_final_coluna; 
    while i >= indice_inicial_linha:
        if i != indice_final_linha:
            if i != indice_inicial_linha:
                while j >= indice_inicial_coluna:
                    if j == indice_inicial_coluna:
                        matriz[i][j] = value;
                        value += 1;
                    j -= 1;
        i -= 1;
        j = indice_final_coluna;  
    
    return matriz, value


def escrever_no_centro(N, valuToIncrement, matriz):
    if N % 2 != 0:
        indice_linha_e_coluna = int((N / 2) - 0.5)
        matriz[indice_linha_e_coluna][indice_linha_e_coluna] = valuToIncrement
    return matriz


def matriz_expiral(N):

    # 1º Passo: Criar a matriz NxN matriz_deslocada = deslocar_matriz(deslocamento, matriz, N);
    matriz = criarMatriz(N)

    # 2º Passo: Percorrer a matriz em forma de expiral
    value = 1;
    i_matriz = N;
    deslocamento = 0;

    while i_matriz > 0:
        if i_matriz != 1:
            matriz, value = escrever_em_contornos(i_matriz, value, deslocamento, matriz);
            deslocamento = deslocamento + 1;
        else:
            matriz = escrever_no_centro(N, value, matriz)
        i_matriz = i_matriz - 2

    print(matriz)


# matriz_expiral(3);
# matriz_expiral(4);
matriz_expiral(5);

