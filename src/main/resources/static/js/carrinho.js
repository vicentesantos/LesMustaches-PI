var product = [
  {
	'id': 1,
    'img': 'src=@{/images/produtos/01.png}',
    'name': 'Grooming para Cabelo B.URB Midlands 250ml',
    'preco': 'R$ 59.90'
  },
  {
	'id': 2,
    'img': 'src=@{/images/produtos/02.png}',
    'name': 'Shampoo Barba Forte Gasoline 250 ml',
    'preco': 'R$ 31.90'
  },
  {
	'id': 3,
    'img': 'src=@{/images/produtos/03.png}',
    'name': 'Kit de Barbear Go. Clinical',
    'preco': 'R$ 59.90'
  },
  {
	'id': 4,
    'img': 'src=@{/images/produtos/04.png}',
    'name': 'Shampoo Sólido Nutrição da Kae Cosmeticos - 75g',
    'preco': 'R$ 50.00'
  },
  {
	'id': 5,
    'img': 'src=@{/images/produtos/05.png}',
    'name': 'Protetor Solar episol Color Tom 6 Negro 70 FPS 40g',
    'preco': 'R$ 69.90'
  },
  {
	'id': 6,
    'img': 'src=@{/images/produtos/06.png}',
    'name': 'Truss Uso Obrigatório - Tratamento Reconstrutor 260ml',
    'preco': 'R$ 91.99'
  },
  {
	'id': 7,
    'img': 'src=@{/images/produtos/07.png}',
    'name': 'Condicionador Para Cabelo Don Alcides Rolling Stones - 300g',
    'preco': 'R$ 53.90'
  },  
  {
	'id': 8,
    'img': 'src=@{/images/produtos/08.png}',
    'name': 'Pomada em Pó Route 66',
    'preco': 'R$ 34.90'
  },
  
]
const dadosProduct = JSON.stringify(product)//JSON
const products = JSON.parse(dadosProduct)//JS
localStorage.setItem('product',JSON.stringify(product)) 
JSON.parse(localStorage.getItem('product'));

const item = document.querySelector('.addItem');
item.addEventListener('click',addCarrinho);

function addCarrinho(event){
	alert(products[1])
}

