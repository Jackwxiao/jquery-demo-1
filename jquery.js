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
        each(fn){
            for(let i = 0; i < elements.length; i++ ){
                fn.call(null, elements[i], i)
            }
            return this
        },
        parent(){
            const array = []
            this.each((node)=>{
                if(array.indexOf(node.parentNode) === -1){
                    array.push(node.parentNode)
                }
            })
            return jQuery(array)
        },
        children(){
            const array = []
            this.each((node)=>{
                if(array.indexOf(node.children) === -1){
                    array.push(...node.children)//展开操作符
                }
            })
            return jQuery(array)
        },
        print(){
            console.log(elements)
        },
        end(){
            return this.oldApi //this指 新api
        }
    }
}