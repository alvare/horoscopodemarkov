from bs4 import BeautifulSoup
from datetime import date, timedelta
from json import dumps
import requests
import codecs

results = []
signos = ["aries", "tauro", "geminis", "cancer", "leo", "virgo", "libra" ,"escorpio", "sagitario", "capricornio", "acuario", "piscis"]

for signo in signos:
  print signo
  for strdate in [(date.today() - timedelta(a) - timedelta(10)).strftime("%d%m%Y") for a in range(5)]:
    r = requests.get("http://horoscopo.abc.es/signos-zodiaco-" + signo + "/prediccion-" + strdate + ".html", timeout=10)

    print r.status_code
    if(r.status_code == 200):
      soup = BeautifulSoup(r.text)
      results.append(unicode(soup.find("div","texto").get_text()))

  with codecs.open("data/" + signo + ".json", "w", "utf-8") as f:
    f.write(dumps(results))
