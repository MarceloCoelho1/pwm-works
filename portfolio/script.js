const commandForm = document.querySelector('.command-form');
const inputCommand = document.querySelector('.input-command');
const terminalController = document.querySelector('.terminal-controler')
const inputManager = document.querySelector('.input-manager')

let terminalHistory = [];
let searchTerminalHistory = 0;
let allCommandsAvailable = ['info', 'clear', 'links', 'games', 'help'];
commandForm.addEventListener('submit', insertCommand);
inputCommand.addEventListener('keydown', accessTerminalHistory);

function addNewInputManager() {
    const oldInputManager = document.createElement('div');
    const spanElement = document.createElement('span');
    const inputElement = document.createElement('input');
    oldInputManager.classList.add('old-input-manager');

    spanElement.innerHTML = '➜';
    oldInputManager.appendChild(spanElement);

    inputElement.value = inputCommand.value;
    inputElement.readOnly = true;
    inputElement.classList.add('previous-input-command');
    oldInputManager.appendChild(inputElement);

    terminalController.appendChild(oldInputManager);
}
function insertCommand(e) {
    e.preventDefault();
    
    if(!allCommandsAvailable.includes(inputCommand.value)) {
        console.log('Comando não existe');
        inputCommand.value = '';
        return;
    }
    
    terminalHistory.unshift(inputCommand.value);
    console.log(terminalHistory);
    addNewInputManager();
    

    if(inputCommand.value.toLowerCase() === 'help') {

        const div = document.createElement('div');
        div.classList.add('help');


        const p = document.createElement('p');
        let textNode = document.createTextNode('Available commands:');
        p.appendChild(textNode)
        div.appendChild(p)
        const ul = document.createElement('ul')

        const commands = [
            { icon: 'fa-question-circle', text: 'help', description: 'List down all available commands' },
            { icon: 'fa-circle-info', text: 'info', description: 'Show information about me' },
            { icon: 'fa-wrench', text: 'games', description: 'Display a list of my games' },
            { icon: 'fa-link', text: 'links', description: 'Get all my important links and socials' },
            { icon: 'fa-eraser', text: 'clear', description: 'Clear terminal screen' }
        ];

        // Creating li 
        commands.forEach(command => {
            const li = document.createElement('li');
            li.innerHTML = `<i class="fas ${command.icon}"></i><span>${command.text}</span> ${command.description}`;
            ul.appendChild(li);
        });

        
        div.appendChild(ul);
        terminalController.appendChild(div);


        terminalController.appendChild(inputManager);
        inputCommand.value = '';
        inputCommand.focus();
    }

    if(inputCommand.value.toLowerCase() === 'info') {
        const info = document.createElement('div');
        info.classList.add('info');

        const imageText = document.createElement('div');
        imageText.classList.add('image-text');
        const image = document.createElement('div');
        image.classList.add('image');
        const text = document.createElement('div');
        text.classList.add('text');

        // image class
        const avatar = document.createElement('img');
        avatar.src = 'https://avatars.githubusercontent.com/u/79272572?v=4';
        image.appendChild(avatar);
        imageText.appendChild(image);
        info.appendChild(imageText);


        // text class

        // text-header class
        const textHeader = document.createElement('div');
        textHeader.classList.add('text-header');
        const strong = document.createElement('strong');
        const span = document.createElement('span');
        strong.innerHTML = 'Marcelo';
        span.innerHTML = '@MarceloCoelho1';
        textHeader.appendChild(strong);
        textHeader.appendChild(span);
        text.appendChild(textHeader);
        imageText.appendChild(text);

        // caracters class
        const caracters = document.createElement('div');
        caracters.classList.add('caracters');
        const em = document.createElement('em');
        em.innerHTML = 'make bzImage';
        caracters.appendChild(em)
        text.appendChild(caracters);

        // text-about class
        const textAbout = document.createElement('div');
        textAbout.classList.add('text-about')

        const paragraphs = [
            {p: "Yo! I'm a Computer Science student who codes as a hobby."},
            {p: `I'm passionate about programming and aspire to become a highly skilled professional with intermediate experience in <span class="highlighted">JavaScript</span> and <span class="highlighted">Node.js</span>.`},
            {p: `I've been studying both <span class="highlighted">back-end and front-end</span> development. Currently, I'm currently focusing on enhancing my skills in <span class="highlighted">React/Next.js</span> and <span class="highlighted">Node</span>`},
            {p: `Aside from that, I'm also delving into <span class="highlighted">python</span> for machine learning, <span class="highlighted">C/C++</span> for operating systems and <span class="highlighted">shell scripting.</span>`}
        ]

        paragraphs.forEach(item => {
            const newP = document.createElement('p');
            newP.innerHTML = item.p;
            textAbout.appendChild(newP)
        });
        text.appendChild(textAbout);

        // skills class
        const skills = document.createElement('div');
        skills.classList.add('skills');
        const brands = [
            { icon: 'fa-linux'},
            { icon: 'fa-square-js'},
            { icon: 'fa-react'},
            { icon: 'fa-python'},
            { icon: 'fa-node-js'}
        ];

        
        brands.forEach(brand => {
            const i = document.createElement('i');
            i.classList.add("fa-brands", brand.icon);
            skills.appendChild(i);
        });
        info.appendChild(skills);
        terminalController.appendChild(info);

        terminalController.appendChild(inputManager);
        inputCommand.value = '';
        inputCommand.focus();
    }

    if(inputCommand.value.toLowerCase() === 'games') {
        const games = document.createElement('div');
        games.classList.add('games');
        const ul = document.createElement('ul');

        const liList = [
            {
                i: 'fa-gamepad', 
                strong: `<a href="./game.html">Game 1</a>`, 
                em: `My first game`
            },

        ]

        liList.forEach(liItem => {
            const li = document.createElement('li');
            const i = document.createElement('i');
            const strong = document.createElement('strong');
            const em = document.createElement('em');

            i.classList.add('fa-solid', liItem.i);            
            li.appendChild(i);
            strong.innerHTML = liItem.strong
            li.appendChild(strong);
            em.innerHTML = liItem.em;
            li.appendChild(em);
            
            ul.appendChild(li);
        });
        games.appendChild(ul);
        terminalController.appendChild(games);

        terminalController.appendChild(inputManager);
        inputCommand.value = '';
        inputCommand.focus();
    }

    if(inputCommand.value.toLowerCase() === 'links') {
        const links = document.createElement('div');
        links.classList.add('links');
        const ul = document.createElement('ul');

        const liList = [
            {
                i: 'fa-github', 
                strong: `<a href="https://github.com/MarceloCoelho1">Github</a>`, 
                em: `My profile on GitHub`
            },
            {
                i: `fa-discord`, 
                strong: `<a href="https://discord.com/">Discord</a>`, 
                em: `celin_e | Add me as a friend!`
            }
        ]

        liList.forEach(liItem => {
            const li = document.createElement('li');
            const i = document.createElement('i');
            const strong = document.createElement('strong');
            const em = document.createElement('em');

            i.classList.add('fa-brands', liItem.i);            
            li.appendChild(i);
            strong.innerHTML = liItem.strong
            li.appendChild(strong);
            em.innerHTML = liItem.em;
            li.appendChild(em);
            
            ul.appendChild(li);
        });
        links.appendChild(ul);
        terminalController.appendChild(links);

        terminalController.appendChild(inputManager);
        inputCommand.value = '';
        inputCommand.focus();
    }

    if(inputCommand.value.toLowerCase() === 'clear') {
        while (terminalController.childNodes.length > 1 ) {
            terminalController.removeChild(terminalController.lastChild);
        }
        terminalController.appendChild(inputManager)
        inputCommand.value = ''
        inputCommand.focus()
    }

    
}
function accessTerminalHistory(e) {
    if(e.keyCode === 38) {
        console.log('cima');

        if(!terminalHistory.length > 0) {
            return;
        }
        



    }
}