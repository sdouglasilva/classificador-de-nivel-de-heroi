const heros = [
  {nome:'PabloSemSal',forca:-80, agilidade:-10, inteligência:40, xp:30, vidaSalvas:-33000000000,rank:''},
  {nome:'CapetãoNascimento', forca:70, agilidade:85,xp:1700, vidaSalvas:11000000000, rank:''},
  {nome:'LambeOChão', forca:70, agilidade:50,xp:4800, vidaSalvas:-300000, rank:''},
  {nome:'RobertoCravos', forca:30, agilidade:-10,xp:6400, vidaSalvas:15000000000, rank:''},
  {nome:'ManoBrownie', forca:75, agilidade:-65,xp:7500, vidaSalvas:13000000000, rank:''},
  {nome:'Roubalizinácio', forca:30, agilidade:-10,xp:8100, vidaSalvas:33000000000, rank:''},
  {nome:'MichaelOJason', forca:30, agilidade:-10,xp:9500, vidaSalvas:7000000000000, rank:''},
  {nome:'BuffaloBillGates', forca:30, agilidade:-10,xp:12000, vidaSalvas:7500000000000, rank:''},
]

for(let hero of heros){
  if(hero.xp < 1000){
    hero.rank = 'Ferro'
  }else if (hero.xp === 1000){
    hero.rank = 'Classificação não definida no projeto.'
  }else if (hero.xp > 1001 && hero.xp < 2001 ){
    hero.rank = 'Bronze'
  }else if (hero.xp > 2000 && hero.xp < 5001 ){
    hero.rank = 'Prata'
  }else if (hero.xp > 5000 && hero.xp < 7001 ){
    hero.rank = 'Ouro'
  }else if (hero.xp > 7000 && hero.xp < 8001 ){
    hero.rank = 'Platina'
  }else if (hero.xp > 8000 && hero.xp < 9001 ){
    hero.rank = 'Ascendente'
  }else if (hero.xp > 9000 && hero.xp < 10001 ){
    hero.rank = 'Imortal'
  }else{
    hero.rank = 'Radiante'
  }
  console.log(`O herói de nome: ${hero.nome},está no nível de: ${hero.rank}`)
}