import eel

eel.init("web")

@eel.expose
def add(dato1):
    return int(dato1) + 1

eel.start("index.html")