document.addEventListener("DOMContentLoaded", function(){
    const projects = [
        {
            name: 'E-commerce Website',
            image: '/media/vanguard.jpg',
            description:'Online Clothing Store ',
            Stack:'HTML, CSS, JavaScript, NextJS, TailwindCSS, ReactJS'
        },
        {
            name: 'Book Library',
            image: '/media/bookstore2.jpg',
            description: 'First project using ReactJs, Tried to Implement an array of Objects',
            Stack: 'HTML, CSS, JavaScript, NextJS, TailwindCSS, ReactJS',
            link: 'https://frontend-nu-blond-63.vercel.app/'
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

})