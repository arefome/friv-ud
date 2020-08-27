import eel

eel.init("web")

@eel.expose
def add(dato1):
    return int(dato1) + 1

@eel.expose
def mas_jugado(lista):
    return indice(maximo(lista),lista)[0]

def indice(max_val, lista):
    return [("juego" + str(i+1)) for i,num in enumerate(lista) if max_val==num ]

def maximo(lista):
    if len(lista)==1:
        return lista[0]
    elif lista[0] > lista[1]:
	return maximo([lista[0]]+lista[2:])
    else:
	return maximo(lista[1:])


eel.start("index.html")
