document.addEventListener("DOMContentLoaded", function(){
    const projects = [
        {
            name: 'E-commerce Website',
            image: '/media/vintagevanguard.jpg',
            description:'Online Clothing Store ',
            Stack:'HTML, CSS, JavaScript, NextJS, TailwindCSS, ReactJS'
        },
        {
            name: 'Book Library',
            image: '/media/bookstore.jpg',
            description: 'First project using ReactJs, Tried to Implement an array of Objects',
            Stack: 'HTML, CSS, JavaScript, NextJS, TailwindCSS, ReactJS'
        },
        {
            name: 'Survey Form',
            image: '/media/surveyform.jpg',
            description: 'Used to learn responsive design using Css',
            Stack: 'HTML, CSS'
        }
    ]
    
    const objectGrid = document.getElementById('project-grid')
    
    projects.forEach(project => {
        const gridItem = document.createElement("div")
        gridItem.classList.add("grid-item")

        const imgElement = document.createElement('img')
        imgElement.src = project.image
        imgElement.alt = project.name + 'Image'

        const nameElement = document.createElement('h1')
        nameElement.textContent = `${project.name}`
        nameElement.classList.add('name-element')

        const descriptionElement = document.createElement('p')
        descriptionElement.textContent = `${project.description}`
        descriptionElement.classList.add('description-element')
        
        const stackElement = document.createElement('p')
        stackElement.textContent = `${project.Stack}`
        stackElement.classList.add('stack-element')
        
        gridItem.appendChild(imgElement)
        gridItem.appendChild(nameElement)
        gridItem.appendChild(descriptionElement)
        gridItem.appendChild(stackElement)
        objectGrid.appendChild(gridItem)
    })

})