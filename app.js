document.addEventListener('DOMContentLoaded', () => {
    const records = [
        { year: 1936, athlete: 'Jesse Owens', time: '10.3s', image: 'jesseowens.jpeg', location: 'Berlin, Germany' },
        { year: 1991, athlete: 'Carl Lewis', time: '9.86s', image: 'images.jpeg', location: 'Tokyo, Japan' },
        { year: 1999, athlete: 'Maurice Greene', time: '9.79s', image: 'mauricegreen.jpeg', location: 'Athens, Greece' },
        { year: 2005, athlete: 'Asafa Powell', time: '9.74s', image: 'asafapowell.jpeg', location: 'London, UK' },
        { year: 2008, athlete: 'Usain Bolt', time: '9.69s', image: 'usainbolt.jpeg', location: 'Beijing, China' },
        { year: 2009, athlete: 'Usain Bolt', time: '9.58s', image: 'usainbolt.jpeg', location: 'Berlin, Germany' }
    ];

    const anecdotes = [
        {
            title: 'Le Début de l\'Ére Bolt',
            text: 'En 2008, Usain Bolt a explosé sur la scène internationale en battant le record du monde du 100 mètres lors des Jeux Olympiques de Pékin. Son temps de 9.69 secondes a marqué le début d’une ère où il deviendrait presque invincible.',
            image: 'usainbolt.jpeg'
        },
        {
            title: 'Le Record de Powell',
            text: 'Avant Usain Bolt, Asafa Powell était le détenteur du record du monde du 100 mètres avec un temps de 9.74 secondes. Powell a établi ce record en 2005 à Londres, marquant un jalon important dans l’histoire du sprint.',
            image: 'asafapowell.jpeg'
        },
        {
            title: 'L\'Époque de Greene',
            text: 'Maurice Greene, avec son temps de 9.79 secondes, a dominé les sprints à la fin des années 1990. Sa victoire au championnat du monde de 1999 à Athènes a consolidé sa place parmi les plus grands sprinters de tous les temps.',
            image: 'mauricegreen.jpeg'
        },
        {
            title: 'Un Héros des Jeux Olympiques',
            text: "En 1936, aux Jeux Olympiques de Berlin, Jesse Owens a marqué l'histoire de l'athlétisme et du monde avec une performance qui a transcendé les frontières du sport et de la politique. En pleine montée du régime nazi sous Adolf Hitler, qui cherchait à démontrer la supériorité de la race aryenne, Owens, un athlète afro-américain, a brillé sur la scène internationale en remportant quatre médailles d'or dans les épreuves de sprint et de saut en longueur.",
            image: 'jesseowens.jpeg'
        },
        {
            title: 'Le "Fils du Vent" des Jeux Olympiques',
            text: "Carl Lewis est souvent surnommé le 'Fils du Vent', un titre qui illustre parfaitement sa vitesse et sa domination sur les pistes d'athlétisme. Né le 1er juillet 1961 à Birmingham, en Alabama, Lewis a marqué l'histoire du sport grâce à ses exploits exceptionnels aux Jeux Olympiques et aux Championnats du Monde d'athlétisme, où il a remporté un total de neuf médailles d'or olympiques et huit médailles d'or mondiales.",
            image: 'images.jpeg'
        }
    ];

    const timelineContainer = document.getElementById('timeline');

    // Fonction pour afficher les records filtrés
    const displayRecords = (filteredRecords) => {
        // Efface les anciens records affichés
        timelineContainer.innerHTML = '';

        // Crée et affiche les nouveaux records
        filteredRecords.forEach(record => {
            const recordElement = document.createElement('div');
            recordElement.classList.add('record');
            recordElement.innerHTML = `
                <img src="${record.image}" alt="${record.athlete}">
                <div class="info">
                    <span class="year">${record.year}</span>
                    <span class="athlete">${record.athlete}</span>
                    <span class="time">${record.time}</span>
                    <span class="location">${record.location}</span>
                </div>
            `;
            timelineContainer.appendChild(recordElement);
        });
    };

    // Afficher tous les records au démarrage
    displayRecords(records);

    // Filtrer les records par décennie
    document.getElementById('decadeFilter').addEventListener('change', (event) => {
        const selectedDecade = event.target.value;
        let filteredRecords;

        if (selectedDecade === 'all') {
            // Affiche tous les records si "All" est sélectionné
            filteredRecords = records;
        } else {
            // Filtre les records en fonction de la décennie sélectionnée
            const decadeStart = parseInt(selectedDecade);
            const decadeEnd = decadeStart + 9;
            filteredRecords = records.filter(record => record.year >= decadeStart && record.year <= decadeEnd);
        }

        // Afficher les records filtrés
        displayRecords(filteredRecords);
    });

    document.getElementById('goButton').addEventListener('click', () => {
        const sprinters = document.querySelectorAll('.sprinter');
        sprinters.forEach(sprinter => {
            sprinter.style.transition = 'none'; // Disable transition for reset
            sprinter.style.transform = 'translateX(0)'; // Reset position
        });

        setTimeout(() => {
            sprinters.forEach(sprinter => {
                const time = parseFloat(sprinter.querySelector('.time').textContent);
                const distance = 1000; // Distance in pixels, adjust as needed
                const duration = time * 1000; // Time in milliseconds
                sprinter.style.transition = `transform ${duration}ms linear`;
                sprinter.style.transform = `translateX(${distance}px)`;
            });
        }, 100);
    });

    // Fonction pour afficher les anecdotes
    const displayAnecdotes = () => {
        const anecdotesList = document.getElementById('anecdotes-list');

        anecdotes.forEach(anecdote => {
            const anecdoteElement = document.createElement('div');
            anecdoteElement.classList.add('anecdote');
            anecdoteElement.innerHTML = `
                <img src="${anecdote.image}" alt="${anecdote.title}">
                <h3>${anecdote.title}</h3>
                <p>${anecdote.text}</p>
            `;
            anecdotesList.appendChild(anecdoteElement);
        });
    };

    // Afficher les anecdotes au démarrage
    displayAnecdotes();
});
