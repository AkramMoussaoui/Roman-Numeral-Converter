function Romain(chiffre){
  chiffre = chiffre.replace(/[^0-9]/g, '')
  const romain = [
    ["I", "V"],
    ["X", "L"],
    ["C", "D"],
    ["M"]
  ]
  let numero = chiffre.toString().split('').reverse().map(function(item, index) {
    return parseInt(item);
  })
  let final = ""
  for (let i=0; i<numero.length; i++) {
    final = romain[i][0].repeat(numero[i]) + final;
    if (romain[i][1]) {
      final = final
        .replace(romain[i][0].repeat(5), romain[i][1])
        .replace(romain[i][1] + romain[i][0].repeat(4), romain[i][0] + romain[i+1][0])
        .replace(romain[i][0].repeat(4), romain[i][0] + romain[i][1]);
    }
  }
  document.getElementById("resultat").innerHTML = final;
}

let entrer = document.getElementById("entrer")
let chiffre = document.getElementById("chiffre")

entrer.addEventListener("click",() =>{
  Romain(chiffre.value)
  chiffre.value = ""
})
