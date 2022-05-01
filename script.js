// Requisito 2 Criando paleta de cores -> 4 elementos div e add a class=color
//Para criação do quadro de pix e outras melhorias no meu código tive ajuda do Robson turma 22 tribo B 
function createPaleta(colors) {
	const escolheCor = document.getElementById('color-palette');
	for (let index1 = 0; index1 < colors; index1 += 1) {
		const blocoPaleta = document.createElement('div');
		//adicionar a classe a elemento novo
		blocoPaleta.className = 'color';
		escolheCor.appendChild(blocoPaleta);
	}
}
createPaleta(4);

function createIdPaleta() {
	const escolheCor = document.getElementById('color-palette');
	//criar id para cada div criada
	escolheCor.childNodes[0].id = 'black';
	escolheCor.childNodes[1].id = 'red';
	escolheCor.childNodes[2].id = 'blue';
	escolheCor.childNodes[3].id = 'green';
}
createIdPaleta();

//Acessando os elementos da paleta de cores
let paletaBlack = document.getElementById('black');
let paletaRed = document.getElementById('red');
let paletaBlue = document.getElementById('blue');
let paletaGreen = document.getElementById('green');

function addColorPaleta() {
	//adicionando cores
	paletaBlack.style.backgroundColor = 'black';
	paletaRed.style.backgroundColor = 'red';
	paletaBlue.style.backgroundColor = 'blue';
	paletaGreen.style.backgroundColor = 'green';
}
addColorPaleta();


function addClassSelected() {
	//adionar a classe selected no primeiro elemento id=black
	paletaBlack.classList.add('selected');
}
addClassSelected();


//criar uma box-container que vai receber os pixels
function createBoard(size) {
	console.log('size: ', size);
	let main = document.querySelector('main');
	let div = document.createElement('div');
	div.id = 'pixel-board';
	div.style.width = `${size}px`;
	main.appendChild(div);
}
createBoard(215);

//criar uma função para remover o meu box-container para o board se tornar dinamico conforme o input
function removeBoard(){
	let board = document.querySelector('#pixel-board');
	//remove o elemento board
	board.remove();
}

//Criar os pixels que vão ser acrescentados na div-container
function createBordPixel(number) {
	//acessar o elemento pai onde serão criados os pixels
	let quadroPixel = document.getElementById('pixel-board');
	//array que vai permitir a igualdade dos lados
	let array = number * number;
	for (let index = 0; index < array; index += 1) {
		let pixel = document.createElement('div');
		pixel.className = 'pixel';
		quadroPixel.appendChild(pixel);
	}
}
createBordPixel(5);


//Requisito 7 -> Classe selectted é adionada e removida ao mesmo tempo das paletas de cores
//Baseado no exemplo feito no Course do exercicio do bloco 5.3 para retirar e implementar classe em um elemento

// //adicionar o mesmo evento para todas as cores da paleta
paletaBlack.addEventListener('click', addChangeSelected);
paletaBlue.addEventListener('click', addChangeSelected);
paletaRed.addEventListener('click', addChangeSelected);
paletaGreen.addEventListener('click', addChangeSelected);

/*função que retira a classe selected quando clicado e adiciona a classe no elemento que acionou o evento
atraves do element.target*/
function addChangeSelected(evento) {
	//acessar o elemento com a classe selected
	let classSelected = document.querySelector('.selected');
	//método toggle retira a classe se ela estiver presente e adiciona se ela n estiver presente
	classSelected.classList.toggle('selected');
	evento.target.classList.toggle('selected');
}

// Requisito 8 -> Clicar em um pixel no quadro e pintar com a cor selecionada anteriomente na paleta
//Ideia é passar o backgroundColor da classe selected para o backgroundColor do pix
//Resolvi o requisito abaixo com ajuda do colega Elias turma 22-B
function addColor() {
	//acessar o elemento que será modificado
	let pix = document.querySelectorAll('.pixel');
	//percorrer todos os elementos da classe pix
	for (let index = 0; index < pix.length; index += 1) {
		//criar o evento
		pix[index].addEventListener('click', () => {
			//função vai passar para o elemento pix o backgroundColor da classe Selected
			let classSelected = document.querySelector('.selected');
			pix[index].style.backgroundColor = classSelected.style.backgroundColor;
		})
	}
}
addColor();

//Requisito 9 -> Botão Limpar
function resetColor() {
	//acessar o botão, o seu acionamento vai limpar todas as cores no quadro de pix
	button = document.getElementById('clear-board');
	//adicionar o evento ao botão
	button.addEventListener('click', () => {
		//acessar o elemento que será modificado
		let pix = document.querySelectorAll('.pixel');
		for (let index = 0; index < pix.length; index += 1) {
			//retornar o backgroundColor Inicial de todos os elementos pix
			pix[index].style.backgroundColor = 'white'; //or white
		}
	})
}
resetColor()

//Requisito 10 
//Adicionar o texto vqv ao botão
function configButtonVQV() {
	let button = document.querySelector('#generate-board');
	button.innerText = 'VQV';
}
configButtonVQV();

//Função vai criar o quadro de pixel conforme o input
function createBoardPixelInput() {
	//acessar o input
	let input = document.querySelector('#board-size');
	if (input.value === '' || input.value < 0) {
		alert("Board inválido!");
	}
	if (input.value < 5) {
		input.value = 5;
	}
	if (input.value > 50) {
		input.value = 50;
	}
	//chamar a função para criar os novos pixels em função do input
	createBordPixel(input.value);
}

//cria um evento para quando o button for acionado ele crie remova e adiciona os pixels no board
function buttonAddPixel() {
	//acessando o button que gera o evento
	let button = document.querySelector('#generate-board');
	//adicionar um evento a esse button
	button.addEventListener('click', sizeBoardPixel);
}
buttonAddPixel();

//função que remove/adiciona/colorir os pixels e passado para o evento do button VQV
function sizeBoardPixel() {
	let input = document.querySelector('#board-size');
	//receber o valor dimensionado do meu novo width do board
	//width board = pixel width 40px * input
	let recebe = input.value * 43;
	removeBoard();
	createBoard(recebe);
	createBoardPixelInput();
	addColor();
}




