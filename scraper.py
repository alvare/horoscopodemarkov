from bs4 import BeautifulSoup
from datetime import date, timedelta
import requests
import codecs

results = []
signos = ["aries", "tauro", "geminis", "cancer", "leo", "virgo", "libra" ,"escorpio", "sagitario", "capricornio", "acuario", "piscis"]

for signo in signos:
  print signo
  for strdate in [(date.today() - timedelta(a)).strftime("%d%m%Y") for a in range(20)]:
    try:
      r = requests.get("http://horoscopo.abc.es/signos-zodiaco-" + signo + "/prediccion-" + strdate + ".html", timeout=10)

      print r.status_code
      if(r.status_code == 200):
        soup = BeautifulSoup(r.text)
        results.append(unicode(soup.find("div","texto").get_text()))
    except requests.exceptions.Timeout:
      print "TIMEOUT"
    except:
      pass

  with codecs.open("data/" + signo + ".data", "w", "utf-8") as f:
    f.write(";;;".join(results))
