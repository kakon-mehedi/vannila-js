container = document.querySelector(".container")
leftSection = document.querySelector(".left-section")
rightSection = document.querySelector(".right-section")


leftSection.addEventListener('mouseenter', () => container.classList.add('hover-left'))
leftSection.addEventListener('mouseleave', () => container.classList.remove('hover-left'))

rightSection.addEventListener('mouseenter', () => container.classList.add('hover-right'))
rightSection.addEventListener('mouseleave', () => container.classList.remove('hover-right'))