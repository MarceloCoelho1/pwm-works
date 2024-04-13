const commandForm = document.querySelector('.command-form');
const inputCommand = document.querySelector('.input-command');
const terminalController = document.querySelector('.terminal-controler')
const inputManager = document.querySelector('.input-manager')

commandForm.addEventListener('submit', insertCommand);


function insertCommand(e) {
    e.preventDefault();


    if(inputCommand.value === 'help') {

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
            { icon: 'fa-wrench', text: 'projects', description: 'Display a list of my major projects' },
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
        inputManager.focus();
    }

    if(inputCommand.value === 'clear') {
        while (terminalController.childNodes.length > 1 ) {
            terminalController.removeChild(terminalController.lastChild);
        }
        terminalController.appendChild(inputManager)
        inputCommand.value = ''
        inputCommand.focus()
    }
}