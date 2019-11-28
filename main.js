const api1 = jQuery('.test')
const api2 = api1.find('.child').addClass('red')
const oldApi = api2.end().addClass('blue') // 想把 blue 加到test上，调用end() 结束