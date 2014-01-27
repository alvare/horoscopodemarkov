from os import listdir
from os.path import join, isfile

path = "data"

with open("resources/public/data.js", "w") as out:
  out.write("DATA = {")
  for js in [f for f in listdir(path) if isfile(join(path, f))]:
    out.write('"' + js[0:-5] + '":')

    with open(join(path, js), "r") as j:
      out.write(j.read())

    out.write(',')
  out.write('}')
