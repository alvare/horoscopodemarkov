from bs4 import BeautifulSoup
from datetime import date, timedelta
from json import dumps
import requests
import codecs

results = []
for strdate in [(date.today() - timedelta(a) - timedelta(10)).strftime("%d%m%Y") for a in range(20)]:
  r = requests.get("http://horoscopo.abc.es/signos-zodiaco-geminis/prediccion-" + strdate + ".html")

  print r.status_code
  if(r.status_code == 200):
    soup = BeautifulSoup(r.text)
    results.append(unicode(soup.find("div","texto").get_text()))

with codecs.open("data.js", "w", "utf-8") as f:
  f.write(dumps(results))
