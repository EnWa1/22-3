const container = document.getElementById('container');

const ppl = new XMLHttpRequest();
ppl.open('GET', 'peoples.json', true);
ppl.responseType = 'json';
ppl.send();

ppl.onload = function() {
    if (ppl.status === 200) {
        const data = ppl.response;
        data.forEach(person => {
            const card = document.createElement('div');
            card.classList.add('card');

            const avatar = document.createElement('img');
            avatar.src = person.avatar;
            avatar.classList.add('avatar');
            card.appendChild(avatar);

            const name = document.createElement('h2');
            name.textContent = person.name;
            card.appendChild(name);

            const age = document.createElement('p');
            age.textContent = `Age: ${person.age}`;
            card.appendChild(age);

            container.appendChild(card);
        });
    } else {
        console.error('Error loading data');
    }
};


