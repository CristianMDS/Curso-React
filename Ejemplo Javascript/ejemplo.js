function App(){
    const items = ['React', "Vue", "Angular"];
    const container = document.createElement('div');
    const list = document.createElement('ul');

    items.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        list.appendChild(listItem);
    });

    container.appendChild(list);

    return container
}

const appElement = document.getElementById('app')
appElement.appendChild(App())