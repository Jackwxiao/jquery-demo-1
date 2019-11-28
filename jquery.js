window.jQuery = function(selectorOrArrayOrTemplate){//接受一个选择器或数组
    let elements
    if(typeof selectorOrArrayOrTemplate === 'string'){
        if(selectorOrArrayOrTemplate[0] === '<'){
            //创建 div
            elements=[createElement(selectorOrArrayOrTemplate)]
        }else{
            //查找div
            elements = document.querySelectorAll(selectorOrArrayOrTemplate)
        }
    }else if(selectorOrArrayOrTemplate instanceof Array){
        elements = selectorOrArrayOrTemplate
    }
    function createElement(string){
        const container = document.createElement("template")
        container.innerHTML = string.trim()
        return container.content.firstChild
    }

    return {//返回一个对象，可以被链式调用
        addClass(className){   
        for (let i= 0; i < elements.length; i++) {
            elements[i].classList.add(className)
        }
        return this //指代 addClass() 对象
        },
        oldApi: selectorOrArrayOrTemplate.oldApi,
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
        get(index){
            return elements[index]
        },
        appendTo(node){
            node.appendChild(this.get(0))//假设只有一个元素
        },
        end(){
            return this.oldApi //this指 新api
        }
    }
}
window.$ = window.jQuery