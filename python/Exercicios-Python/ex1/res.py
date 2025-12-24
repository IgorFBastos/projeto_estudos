# Versão da resposta otimizada criada em main.py otimizada


def criar_matriz(n):
    # No python usamos List Comprehension para criar o vetor como queriamos criar em main.py
    # [0] * n: No Python, multiplicar uma lista repete seus elementos. Se n=3, isso cria [0, 0, 0].
    # for _ in range(n): Isso repete a instrução anterior n vezes.
    matriz = [[0] * n for _ in range(n)];
    return matriz;


def matriz_espiral(n):
    matriz = criar_matriz(n);
    
    topo = 0;
    baixo = n - 1;
    
    esquerda = 0;
    direita = n - 1;
    
    
    valor = 1;
    
    while topo <= baixo and esquerda <= direita:

        print("topo: ", topo);
        # 1. Prencher TOPO (esquerda -> Direita)
        # range(inicio, fim + 1)
        for i in range(esquerda, direita + 1):
            matriz[topo][i] = valor;
            valor += 1;
        topo += 1; # A parede do topo desce

        # 2. Preencher DIREITA (Topo -> Baixo)
        for i in range(topo, baixo + 1):
            matriz[i][direita] = valor;
            valor += 1;
        direita -= 1; # A parede da direita recua
        
        #  Verificação extra para evitar re-pintar se for linha única
        if topo <= baixo:
            # 3. Preencher BAIXO (Direita -> Esquerda)
            # O passo -1 no range faz ele ir de trás pra frente
            for i in range(direita, esquerda - 1, -1):
                matriz[baixo][i] = valor;
                valor += 1;
            baixo -= 1; # Parede de baixo sobe
        
        if esquerda <= direita:
            # 4. Preencher ESQUERDA (Baixo -> Topo)
            for i in range(baixo, topo - 1, -1):
                matriz[i][esquerda] = valor;
                valor += 1;
            esquerda += 1;
            

            
    for linha in matriz:
        print(linha)
    
    
            
matriz_espiral(4);