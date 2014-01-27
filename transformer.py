from os import listdir
from os.path import join, isfile
from json import dumps

path = "data"

with open("resources/public/data.js", "w") as out:
  out.write("DATA = {")
  for js in [f for f in listdir(path) if isfile(join(path, f))]:
    out.write('"' + js[0:-5] + '":')

    with open(join(path, js), "r") as j:
      out.write(dumps(j.read().split(";;;")))

    out.write(',')
  out.write('}')
