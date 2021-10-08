//Código Carro
let xCarros = [600, 600, 600];
let yCarros = [40, 96, 150];
let velCarros = [2, 2.5, 3.2];

function mostraCarro()
{
  for (let i = 0; i < imagemCarros.length; i++)
  {
    image(imagemCarros[i], xCarros[i], yCarros[i], 50, 40);
  }
}

function movimentaCarro() 
{
  for(let i = 0; i < imagemCarros.length; i++)
    {
       xCarros[i] -= velCarros[i];
    }
}

function voltaPosInicial()
{
  for(let i = 0; i < imagemCarros.length; i++)
  {
    if (passouTodaTela(xCarros[i]))
    {
      xCarros[i] = 600;
    }
  }  
}

function passouTodaTela(xCarros)
{
  return xCarros < -50;
}