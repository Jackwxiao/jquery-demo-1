window.jQuery = function(selectorOrArray){//接受一个选择器或数组
    let elements
    if(typeof selectorOrArray === 'string'){
        elements = document.querySelectorAll(selectorOrArray)
    }else if(selectorOrArray instanceof Array){
        elements = selectorOrArray
    }
    return {//返回一个对象，可以被链式调用

        addClass(className){   
        for (let i= 0; i < elements.length; i++) {
            elements[i].classList.add(className)
        }
        return this //指代 addClass() 对象
        },
        oldApi: selectorOrArray.oldApi,
        find(selector){
            let array = []
            for ( let i = 0; i < elements.length; i++){
                array = array.concat(Array.from(elements[i].querySelectorAll(selector)))
            }
            array.oldApi = this //this 指旧的api
            return jQuery(array)// jquery 传啥返回啥
        },
        end(){
            return this.oldApi //this指 新api
        }
    }
}