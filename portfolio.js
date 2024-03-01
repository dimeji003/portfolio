document.addEventListener("DOMContentLoaded", function(){
    const projects = [
        {
            name: '- E-commerce Website',
            image: '/media/vintagevan.jpg',
            description:'Online Clothing Store ',
            Stack:'HTML, CSS, JavaScript, NextJS, TailwindCSS, ReactJS',
            link: 'https://vintage-vanguard.vercel.app/'
        },
        {
            name: '-Role Playing Game',
            image: '/media/game.jpg',
            description: 'Basic JavaScript Role Playing Game',
            Stack: 'HTML, CSS, JavaScript',
            link: 'https://roleplayinggame.vercel.app/'
        },
        {
            name: '- Construction Company',
            image: '/media/constengltd.jpg',
            description:'Construction Company Website ',
            Stack:'HTML, CSS, JavaScript, NextJS, TailwindCSS, ReactJS',
            link: 'https://constenglimited.vercel.app/'
        },
        {
            name: '- Book Library',
            image: '/media/bookstore2.jpg',
            description: 'First project using ReactJs, Tried to Implement an array of Objects',
            Stack: 'HTML, CSS, JavaScript, NextJS, TailwindCSS, ReactJS',
            link: 'https://wakil-library.vercel.app/'
        },
        {
            name: '- TO-DO App',
            image: '/media/todoapp.jpg',
            description: 'Leearning the basics of javascript',
            Stack: 'HTML, CSS, JavaScript',
            link: 'https://todo-app-delta-one-59.vercel.app/'
        },
        {
            name: '- Country API',
            image: '/media/countryapi.jpg',
            description: 'Used to learn responsive design using Css',
            Stack: 'HTML, CSS, JavaScript, NextJS, TailwindCSS, ReactJS',
            link: 'https://countryapi-hazel.vercel.app/'
        }
    ]
    
    const objectGrid = document.getElementById('project-grid')
    
    projects.forEach(project => {
        const workCard = document.createElement("a")
        workCard.classList.add("work-card")
        workCard.href=project.link

        const gridItem = document.createElement('div')
        gridItem.classList.add('grid-item')

        const imgElement = document.createElement('img')
        imgElement.src = project.image
        imgElement.alt = project.name + 'Image'
        imgElement.classList.add('image-element')

        const nameDiv= document.createElement('div')
        nameDiv.classList.add('name-div')

        const nameElement = document.createElement('h1')
        nameElement.textContent = `${project.name}`
        nameElement.classList.add('name-element')

        const descriptionElement = document.createElement('p')
        descriptionElement.textContent = `${project.description}`
        descriptionElement.classList.add('description-element')

        const stackElement = document.createElement('p')
        stackElement.textContent = `${project.Stack}`
        stackElement.classList.add('stack-element')
        
        nameDiv.appendChild(nameElement)
        nameDiv.appendChild(stackElement)
        gridItem.appendChild(imgElement)
        gridItem.appendChild(nameDiv)
        workCard.appendChild(gridItem)
        objectGrid.appendChild(workCard)
    })

    const mainMenu = document.querySelector('.mainmenu')
    const openMenu = document.querySelector('.openMenu')
    const closeMenu = document.querySelector('.closeMenu')
    const navLinks = document.querySelectorAll('.mainmenu a');
    
    


    openMenu.addEventListener('click', show)
    closeMenu.addEventListener('click', close)

    navLinks.forEach(link => {
        link.addEventListener('click', closeNavbar);
      });
    
    



    function show(){
        mainMenu.style.display ='flex'
        mainMenu.style.top= '0'
    }
    
   
    function close(){
        mainMenu.style.top ='-100%'
    }
    function closeNavbar() {
        mainMenu.style.top = '-100%';
      }
    

    

    document.addEventListener('scroll', function(){
        const slideInElement = document.querySelector('#expertise')
        const slideInPosition = slideInElement.getBoundingClientRect().top

        const windowHeight = window.innerHeight

        if (slideInPosition < windowHeight / 1.5) {
            slideInElement.classList.add('active')
        }
    })
    document.addEventListener('scroll', function(){
        const slideInElement = document.querySelector('#projects')
        const slideInPosition = slideInElement.getBoundingClientRect().top

        const windowHeight = window.innerHeight

        if (slideInPosition < windowHeight / 1.5) {
            slideInElement.classList.add('activeproject')
        }
    })
    document.addEventListener('scroll', function(){
        const slideInElement = document.querySelector('.contact-container')
        const slideInPosition = slideInElement.getBoundingClientRect().top

        const windowHeight = window.innerHeight

        if (slideInPosition < windowHeight / 1.5) {
            slideInElement.classList.add('activecontact')
        }
    })
    

})