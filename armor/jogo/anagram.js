const fs = require('fs')



//========(PALAVRAS-DO-ANAGRAMA)=========\\

let palavrasANA = [
{
original: 'PARADOXO',
embaralhada: 'XOPARODA',
dica: 'CANAL'
},
{
original: 'ESCADA',
embaralhada: 'CAESDA',
dica: 'OBJETO'
},
{
original: 'AKAME',
embaralhada: 'MEAKA',
dica: 'PERSONAGEM'
},
{
original: 'NAGATORO',
embaralhada: 'GATONARO',
dica: 'PERSONAGEM'
},
{
original: 'SASUKE',
embaralhada: 'KESUSA',
dica: 'PERSONAGEM'
},
{
original: 'GAY',
embaralhada: 'YAG',
dica: 'VOCÊ'
},
{
original: 'CIMENTO',
embaralhada: 'OMCNITE',
dica: 'CONSTRUÇÕES'
},
{
original: 'BANANA',
embaralhada: 'NABANA',
dica: 'COMIDA'
},
{
original: 'NETFLIX',
embaralhada: 'TFLIXNE',
dica: 'APLICATIVO'
},
{
original: 'YOUTUBE',
embaralhada: 'TUBEYOU',
dica: 'APLICATIVO'
},
{
original: 'PORTUGAL',
embaralhada: 'TUGALPOR',
dica: 'PAÍS'
},
{
original: 'PISTOLA',
embaralhada: 'TOPISLA',
dica: 'OBJETO'
},
		
{
original: 'CAMARÃO',
embaralhada: 'MARÃOCA',
dica: 'COMIDA'
},
{
original: 'HIDRANTE',
embaralhada: 'TEHDIRAN',
dica: 'OBJETO'
},
{
original: 'FOGUETE',
embaralhada: 'TEFOGUE',
dica: 'OBJETO'
},
{
original: 'SKATE',
embaralhada: 'TEASK',
dica: 'OBJETO'
},
{
original: 'MACACO',
embaralhada: 'CACOMA',
dica: 'ANIMAL'
},
{
original: 'LASANHA',
embaralhada: 'NHASALA',
dica: 'COMIDA'
},
{
original: 'PASTEL',
embaralhada: 'PATELS',
dica: 'COMIDA'
},
{
original: 'COXINHA',
embaralhada: 'XICONHA',
dica: 'COMIDA'
},
{
original: 'BICICLETA',
embaralhada: 'CIBITACLE',
dica: 'OBJETO'
},
{
original: 'SASUKE',
embaralhada: 'ESASUK',
dica: 'PERSONAGEM'
},
{
original: 'CAVALO',
embaralhada: 'LACAVO',
dica: 'ANIMAL'
},
{
original: 'LEVI',
embaralhada: 'EVIL',
dica: 'PERSONAGEM'
},
{
original: 'KAMAITACHI',
embaralhada: 'TAICAMAKHI',
dica: 'CANTOR'
},
{
original: 'LUBA',
embaralhada: 'UBAL',
dica: 'YOUTUBER'
},
{
original: 'GRÊMIO',
embaralhada: 'OMÊGRI',
dica: 'TIME'
},
{
original: 'SATURNO',
embaralhada: 'UTARSON',
dica: 'PLANETA'
},
{
original: 'MIKASA',
embaralhada: 'KAMISA',
dica: 'PERSONAGEM'
},
{
original: 'LEÃO',
embaralhada: 'OLEÃ',
dica: 'ANIMAL'
},
{
original: 'SAKURA',
embaralhada: 'SUKARA',
dica: 'PERSONAGEM'
},
{
original: 'HADES',
embaralhada: 'SEDAH',
dica: 'MITOLOGIA'
},
{
original: 'CORRIDA',
embaralhada: 'ARROCID',
dica: 'ESPORTE'
},
{
original: 'ODIN',
embaralhada: 'NODI',
dica: 'MITOLOGIA'
},
{
original: 'BICICLETA',
embaralhada: 'CIBITACLE',
dica: 'OBJETO'
},
{
original: 'BICICLETA',
embaralhada: 'CIBITACLE',
dica: 'OBJETO'
},
{
original: 'GUATEMALA',
embaralhada: 'LATEMAGUA',
dica: 'PAÍS'
},
{
original: 'CEREJA',
embaralhada: 'ECREJA',
dica: 'FRUTA'
},
{
original: 'VENEZUELA',
embaralhada: 'ZUNEEVELA',
dica: 'PAÍS'
},
{
original: 'HISTÓRIA',
embaralhada: 'TÓRISIAH',
dica: 'MATÉRIA'
},
{
original: 'INSTAGRAM',
embaralhada: 'TAGRAMINS',
dica: 'APLICATIVO'
},
{
original: 'WHATSAPP',
embaralhada: 'TSWHAAPP',
dica: 'APLICATIVO'
},
{
original: 'HIDRANTE',
embaralhada: 'TEHDIRAN',
dica: 'OBJETO'
},
{
original: 'CELULAR',
embaralhada: 'CELARLU',
dica: 'OBJETO'
},
{
original: 'NOTEBOOK',
embaralhada: 'TENOBOOK',
dica: 'OBJETO'
},
{
original: 'COMPUTADOR',
embaralhada: 'PUCOMDORTA',
dica: 'OBJETO'
},
{
original: 'LANTERNA',
embaralhada: 'TERLANNA',
dica: 'OBJETO'
},
{
original: 'CACHORRO',
embaralhada: 'HRROAOCC',
dica: 'ANIMAL'
},
{
    original: 'GARFO',
    embaralhada: 'AIAGU',
    dica: 'OBJETO'
    },
    {
    original: 'PICA-PAU',
    embaralhada: 'PCUIA-PA',
    dica: 'ANIMAL'
    },
    {
    original: 'TIRINGA',
    embaralhada: 'IRIATNG',
    dica: 'YOUTUBER'
    },
    {
    original: 'MANOKILLZERO',
    embaralhada: 'MZINLKLRAOOE',
    dica: 'YOUTUBER'
    },
    {
    original: 'RIFLE',
    embaralhada: 'LIEFR',
    dica: 'ARMA'
    },
    {
    original: 'PARAFAL',
    embaralhada: 'ARFPALA',
    dica: 'ARMA'
    },
    {
    original: 'MACHADO',
    embaralhada: 'MDAACOH',
    dica: 'ARMA BRANCA'
    },
    {
    original: 'TUCANO',
    embaralhada: 'OUNATC',
    dica: 'ANIMAL'
    },
    {
    original: 'VENOM',
    embaralhada: 'OUNATC',
    dica: 'FILME'
    },
    {
    original: 'CHUCKY',
    embaralhada: 'YHUKCC',
    dica: 'PERSONAGEM'
    },
    {
    original: 'ANNABELLE',
    embaralhada: 'ENLNABLAE',
    dica: 'PERSONAGEM'
    },
    {
    original: 'ELORAYNA',
    embaralhada: 'ALORYEAN',
    dica: 'NOME'
    },
    {
    original: 'ALICE',
    embaralhada: 'ICEAL',
    dica: 'NOME'
    },
    {
    original: 'HELENA',
    embaralhada: 'AHNLEE',
    dica: 'NOME'
    },
    {
    original: 'MIGUEL',
    embaralhada: 'UIMLEG',
    dica: 'NOME'
    },
    {
    original: 'ARANHA',
    embaralhada: 'RAAHAN',
    dica: 'ANIMAL'
    },
    {
    original: 'AVESTRUZ',
    embaralhada: 'STEZRVUA',
    dica: 'ANIMAL'
    },
    {
    original: 'BARATA',
    embaralhada: 'TARAAB',
    dica: 'ANIMAL'
    },
    {
    original: 'CORUJA',
    embaralhada: 'AURJCO',
    dica: 'ANIMAL'
    },
    {
    original: 'DINOSSAURO',
    embaralhada: 'SSROUONDIA',
    dica: 'ANIMAL'
    },
    {
    original: 'VINGADORES',
    embaralhada: 'VENOSDGARI',
    dica: 'FILME'
    },
    {
    original: 'TRANSFORMERS',
    embaralhada: 'NMRFSSOARRET',
    dica: 'FILME'
    },
    {
    original: 'STAR-WARS',
    embaralhada: 'TSARWRAS',
    dica: 'FILME'
    },
    {
    original: 'HARRY-POTTER',
    embaralhada: 'ROYPRARTTHE-',
    dica: 'FILME'
    },    
{
original: 'DESENTUPIDOR',
embaralhada: 'SENDETUDORPI',
dica: 'OBJETO'
},
{
original: 'TOMATE',
embaralhada: 'ATEMOT',
dica: 'ALIMENTO'
},
{
original: 'SAXOFONE',
embaralhada: 'ASXOEOFN',
dica: 'INSTRUMENTO MUSICAL'
},
{
original: 'CAZAQUISTÃO',
embaralhada: 'ZAACQIUSÃOT',
dica: 'PAÍS'
},
{
original: 'CROÁCIA',
embaralhada: 'CRCÁOAI',
dica: 'PAÍS'
},
{
original: 'HUNGRIA',
embaralhada: 'UHGINRA',
dica: 'PAÍS'
},
{
original: 'MEGAFONE',
embaralhada: 'MOEFGNEA',
dica: 'OBJETO'
},
{
original: 'CINTURA',
embaralhada: 'RCIANUT',
dica: 'CORPO HUMANO'
},
{
original: 'ABDÔMEN',
embaralhada: 'MBÔDENA',
dica: 'CORPO HUMANO'
},
{
original: 'VAGNER',
embaralhada: 'GNEVAR',
dica: 'NOME'
},
{
original: 'ALEATORY',
embaralhada: 'YRTALOEA',
dica: 'NOME'
},
{  
original: 'CAFIN',
embaralhada: 'NFCIA',
dica: 'TIPO DE GAY'
},
{    
original: 'KONEKO',
embaralhada: 'NOEKKO',
dica: 'NOME'
},
{
original: 'RAPOSA',
embaralhada: 'APRSAO',
dica: 'ANIMAL'
},
{
original: 'INFERNO',
embaralhada: 'RNOFNIE',
dica: 'LUGAR'
},
{   
original: 'RINOCERONTE',
embaralhada: 'NTERRECNIOO',
dica: 'ANIMAL'
},
{ 
original: 'PASTOR',
embaralhada: 'STRPAO',
dica: 'BATIZADO'
},
{
original: 'BONITO',
embaralhada: 'NTBIOO',
dica: 'COMENTÁRIO'
},
{       
original: 'TANGERINA',
embaralhada: 'RITAANGNE',
dica: 'ALIMENTO'
},
{
original: 'CADEADO',
embaralhada: 'CEADADO',
dica: 'OBJETO'
},
{
original: 'GORILA',
embaralhada: 'AGILOR',
dica: 'ANIMAL'
},
{
original: 'MELANCIA',
embaralhada: 'CAEINALM',
dica: 'COMIDA'
},
{
original: 'TATU',
embaralhada: 'UTTA',
dica: 'ANIMAL'
},
{

original: 'BRASIL',

embaralhada: 'BSLIAR',
dica: 'PAÍS'
},
{

original: 'WOLVESVILLE',

embaralhada: 'LVLELIEWOSV',
dica: 'JOGO'
},
{

original: 'CHOCOLATE',

embaralhada: 'AOCCHEOTL',
dica: 'COMIDA'
},
{

original: 'TITANIC',

embaralhada: 'CIINTTA',
dica: 'FILME'
},
{

original: 'AGUIA',

embaralhada: 'AIAGU',
dica: 'ANIMAL'
},
{
original: 'CANNABIS',

embaralhada: 'SNCBIANA',
dica: 'FLOR'
},
{
original: 'ARROZ',
embaralhada: 'ZRROA',
dica: 'COMIDA'
}
]		

module.exports = {
palavrasANA 
}