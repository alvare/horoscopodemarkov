from bs4 import BeautifulSoup
from datetime import date, timedelta
import requests
import codecs
import json
import HTMLParser

r = requests.get('http://wscomunidad.lanacion.com.ar/WCFComentario/Comentario.svc/ObtenerComentariosPaginadoRenderizadoSortPorID?codigoSitio=LN&entradaId=809162&pagina=1&comentariosXpagina=200&parametros=<parametros><entrada_id>809162</entrada_id><cantidad>0</cantidad><pagina>1</pagina><Sortby>nuevo</Sortby><preferencia_id>0</preferencia_id><objeto_id>0</objeto_id><sitio_id>1</sitio_id><logueado>0</logueado><primeraCarga>false</primeraCarga><notaCerrada>1</notaCerrada></parametros>&SortBy=nuevo&preferencia_id=0&objeto_id=0&sitio_id=1&comentario_id=38737027&logueado=0&primeraCarga=false')

h = HTMLParser.HTMLParser()

soup = BeautifulSoup(h.unescape(r.text))

results = [unicode(x.get_text()) for x in soup.find_all("p", "texto")]

with codecs.open("la-nation.json", "w", "utf-8") as f:
  f.write(json.dumps(results))
