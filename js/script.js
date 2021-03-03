let depth, diff, speed, axis, horizontalSum, verticalSum


document.onscroll = () => {

    depth = window.scrollY


    // Menu collapse effect

    if (depth > 300) {
        document.querySelector('.navigation').classList.add('thin')
    } else {
        document.querySelector('.navigation').classList.remove('thin')
    }



    // Parallax elements

    document.querySelectorAll('.parallax').forEach(eachElement => {

        diff = eachElement.getBoundingClientRect().top
        speed = eachElement.dataset.speed
        axis = eachElement.dataset.axis

        horizontalSum = diff * speed
        verticalSum = diff * speed

        if (axis === 'horizontal') verticalSum = 0
        if (axis === 'vertical') horizontalSum = 0

        eachElement.style.transform = `translate(${horizontalSum}px, ${verticalSum}px)`
    })

}



document.querySelector('.contact').onmousemove = e => {

    let posX = e.x
    let posY = e.y

    document.querySelectorAll('.mobile-inertia').forEach(eachElement => {

        let speed = eachElement.dataset.speed
        eachElement.style.transform = `translate(${posX * speed}px, ${posY * speed}px)`
    })
}