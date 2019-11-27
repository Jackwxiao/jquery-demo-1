window.jQuery = function(selector){//接受一个选择器
    const elements = document.querySelectorAll(selector)
    return {//返回一个对象，可以被链式调用
        addClass(className){   
        for (let i= 0; i < elements.length; i++) {
            elements[i].classList.add(className)
        }
        return this //指代 addClass() 对象
        }
    }
}